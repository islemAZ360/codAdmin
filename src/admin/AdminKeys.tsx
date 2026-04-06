import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, setDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Zap, Clock, Infinity, ShieldCheck, ShieldAlert, Search, Plus, X, ChevronRight, KeyRound, Cpu, Trash2, Copy } from 'lucide-react';
import { format } from 'date-fns';

interface AdminKeysProps {
    users: any[];
}

export const AdminKeys: React.FC<AdminKeysProps> = ({ users }) => {
    const [keys, setKeys] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState<string>('all');
    const [filterStatus, setFilterStatus] = useState<'all' | 'dormant' | 'linked'>('all');
    const [loading, setLoading] = useState(true);
    const [showGenModal, setShowGenModal] = useState(false);
    const [genType, setGenType] = useState<'trial' | 'monthly' | 'custom' | 'eternal'>('monthly');
    const [genCount, setGenCount] = useState(1);
    const [genDays, setGenDays] = useState(1);
    const [generating, setGenerating] = useState(false);
    const [editingKey, setEditingKey] = useState<any>(null);
    const [editData, setEditData] = useState<any>({});
    const [now, setNow] = useState(new Date());
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [isBulkDeleting, setIsBulkDeleting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const generateKeys = async () => {
        setGenerating(true);
        try {
            for (let i = 0; i < genCount; i++) {
                const key = Math.random().toString(36).substring(2, 12).toUpperCase();
                await setDoc(doc(db, 'license_keys', key), {
                    key,
                    keyType: genType,
                    durationDays: genType === 'eternal' ? null : (genType === 'trial' ? (2 / 24) : (genType === 'monthly' ? 30 : genDays)),
                    expiresAt: null,
                    createdAt: new Date().toISOString(),
                    usedByUid: null,
                    transfersUsed: 0,
                    maxTransfers: 3,
                    transferHistory: [],
                    isUsed: false
                });
            }
            setShowGenModal(false);
            alert(`Successfully initialized ${genCount} sequences.`);
        } catch (err) {
            console.error(err);
            alert("Protocol failure during generation.");
        } finally {
            setGenerating(false);
        }
    };

    const handleEditKey = (k: any) => {
        setEditingKey(k);
        setEditData({
            maxTransfers: k.maxTransfers || 3,
            expiresAt: k.expiresAt ? format(new Date(k.expiresAt), "yyyy-MM-dd'T'HH:mm") : '',
            keyType: k.keyType
        });
    };

    const saveKeyEdits = async () => {
        if (!editingKey) return;
        try {
            await setDoc(doc(db, 'license_keys', editingKey.id), {
                ...editData,
                expiresAt: editData.expiresAt ? new Date(editData.expiresAt).toISOString() : null
            }, { merge: true });
            setEditingKey(null);
            alert("Sequence parameters updated.");
        } catch (err) {
            console.error(err);
            alert("Failed to synchronize parameters.");
        }
    };

    const handleDeleteKey = async (keyData: any) => {
        if (!window.confirm(`ERASE PROTOCOL: Are you sure you want to permanently delete sequence ${keyData.key}? This will deauthorize any linked node.`)) return;

        try {
            if (keyData.usedByUid) {
                try {
                    await updateDoc(doc(db, 'users', keyData.usedByUid), {
                        status: 'pending',
                        licenseKey: null,
                        deviceId: null
                    });
                } catch (e) {}
            }
            await deleteDoc(doc(db, 'license_keys', keyData.id));
            alert("Sequence successfully purged from the registry.");
        } catch (err) {
            console.error("Purge failure:", err);
        }
    };

    const handleBulkDelete = async () => {
        if (!window.confirm(`MASS PURGE PROTOCOL: Are you sure you want to permanently delete ${selectedKeys.length} sequences?`)) return;
        setIsBulkDeleting(true);
        try {
            for (const keyId of selectedKeys) {
                const keyData = keys.find(k => k.id === keyId);
                if (keyData) {
                    if (keyData.usedByUid) {
                        try {
                            await updateDoc(doc(db, 'users', keyData.usedByUid), {
                                status: 'pending',
                                licenseKey: null,
                                deviceId: null
                            });
                        } catch (e) {}
                    }
                    await deleteDoc(doc(db, 'license_keys', keyId));
                }
            }
            setSelectedKeys([]);
            alert("Mass purge complete.");
        } catch (err) {
            console.error(err);
        } finally {
            setIsBulkDeleting(false);
        }
    };

    const exportToCSV = () => {
        const headers = ["Key", "Type", "Status", "User", "Expires At", "Created At"];
        const rows = filteredKeys.map(k => [
            k.key,
            k.keyType,
            k.usedByUid ? 'Used' : 'Dormant',
            k.usedByEmail || 'N/A',
            k.expiresAt ? new Date(k.expiresAt).toLocaleString() : 'N/A',
            new Date(k.createdAt).toLocaleString()
        ]);
        
        const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        const statusTag = filterStatus !== 'all' ? `_${filterStatus}` : '';
        const typeTag = filterType !== 'all' ? `_${filterType}` : '';
        link.setAttribute("download", `keys${typeTag}${statusTag}_${format(new Date(), 'yyyy-MM-dd')}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const exportForGGSel = () => {
        const dormantKeys = filteredKeys.filter(k => !k.isUsed && !k.usedByUid);
        if (dormantKeys.length === 0) {
            alert('No dormant keys available to export for GGSel.');
            return;
        }
        const content = dormantKeys.map(k => k.key).join('\n');
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        const typeTag = filterType !== 'all' ? `_${filterType}` : '';
        link.setAttribute('download', `ggsel_keys${typeTag}_${format(new Date(), 'yyyy-MM-dd')}.txt`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert(`Exported ${dormantKeys.length} dormant keys for GGSel.`);
    };

    const getCountdown = (expiresAt: string) => {
        const end = new Date(expiresAt).getTime();
        const diff = end - now.getTime();
        if (diff <= 0) return 'TERMINATED';
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        return `${days}d ${hours}h ${mins}m ${secs}s`;
    };

    useEffect(() => {
        const q = query(collection(db, 'license_keys'), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            const list: any[] = [];
            snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
            setKeys(list);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    const filteredKeys = keys.filter(k => {
        const matchesSearch = k.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (k.usedByEmail?.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesType = filterType === 'all' || k.keyType === filterType;
        const matchesStatus = filterStatus === 'all' ? true :
            filterStatus === 'dormant' ? (!k.isUsed && !k.usedByUid) :
            (!!k.isUsed || !!k.usedByUid);
        return matchesSearch && matchesType && matchesStatus;
    });

    if (loading) return <div className="p-20 text-center animate-pulse text-white/20 uppercase tracking-[0.5em]">Syncing Vault...</div>;

    return (
        <div className="space-y-6">
            {/* Control Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6 holographic-island rounded-3xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-4 flex-1 w-full">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                        <input
                            type="text"
                            placeholder="Search Key or User..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:border-emerald-500/30 outline-none transition-all placeholder:text-white/10"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/5 mx-4">
                    {['all', 'trial', 'monthly', 'custom', 'eternal'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filterType === type
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                : 'text-white/30 hover:text-white/60'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-1 bg-black/40 p-1.5 rounded-2xl border border-white/5">
                    {(['all', 'dormant', 'linked'] as const).map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filterStatus === status
                                ? status === 'dormant' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                                : status === 'linked' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : 'bg-white/10 text-white/60 border border-white/20'
                                : 'text-white/30 hover:text-white/60'
                                }`}
                        >
                            {status === 'all' ? '●' : status === 'dormant' ? '○ Free' : '◉ Linked'}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    {selectedKeys.length > 0 && (
                        <button
                            onClick={handleBulkDelete}
                            disabled={isBulkDeleting}
                            className="bg-red-500/10 text-red-500 border border-red-500/30 px-4 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                        >
                            {isBulkDeleting ? 'Purging...' : `Purge (${selectedKeys.length})`}
                        </button>
                    )}
                    <button
                        onClick={exportForGGSel}
                        className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-500/20 hover:text-indigo-300 transition-all shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                        title="Export only dormant (unused) keys as plain text for GGSel upload"
                    >
                        GGSel Export
                    </button>
                    <button
                        onClick={exportToCSV}
                        className="bg-white/5 text-white/40 border border-white/10 px-4 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all"
                    >
                        Export CSV ({filteredKeys.length})
                    </button>
                    <button
                        onClick={() => setShowGenModal(true)}
                        className="bg-emerald-500 text-black px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2"
                    >
                        <Plus size={18} /> Initialize Keys
                    </button>
                </div>
            </div>

            {/* Keys Grid */}
            <div className="holographic-island rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
                <div className="overflow-x-auto w-full custom-scrollbar">
                    <div className="min-w-[800px]">
                        <div className="grid grid-cols-6 gap-6 p-6 font-black text-xs uppercase tracking-[0.3em] border-b border-white/5 text-white/40 bg-white/[0.02]">
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    checked={selectedKeys.length === filteredKeys.length && filteredKeys.length > 0}
                                    onChange={(e) => {
                                        if (e.target.checked) setSelectedKeys(filteredKeys.map(k => k.id));
                                        else setSelectedKeys([]);
                                    }}
                                    className="w-4 h-4 rounded-md border-white/10 bg-white/5 accent-emerald-500"
                                />
                            </div>
                            <div className="col-span-2">License Sequence</div>
                            <div>Configuration</div>
                            <div>Deployment Status</div>
                            <div className="text-right">Generation Date</div>
                        </div>

                <div className="divide-y divide-white/5">
                    {filteredKeys.length === 0 ? (
                        <div className="p-20 text-center text-white/10 flex flex-col items-center justify-center gap-4">
                            <KeyRound size={48} className="opacity-20 animate-pulse text-emerald-500" />
                            <div className="font-black uppercase tracking-widest text-sm italic">
                                No sequences found in this sector.
                            </div>
                        </div>
                    ) : (
                        filteredKeys.map(k => {
                            const isExpiringSoon = k.expiresAt && (new Date(k.expiresAt).getTime() - now.getTime()) < 24 * 60 * 60 * 1000;
                            
                            return (
                            <div key={k.id} className={`grid grid-cols-6 gap-6 p-6 items-center hover:bg-white/[0.02] transition-colors group ${isExpiringSoon ? 'bg-red-500/[0.02] border-l-2 border-red-500/30' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedKeys.includes(k.id)}
                                        onChange={(e) => {
                                            if (e.target.checked) setSelectedKeys([...selectedKeys, k.id]);
                                            else setSelectedKeys(selectedKeys.filter(id => id !== k.id));
                                        }}
                                        className="w-4 h-4 rounded-md border-white/10 bg-white/5 accent-emerald-500"
                                    />
                                </div>
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className={`p-3 rounded-2xl border ${k.keyType === 'eternal' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' :
                                        k.keyType === 'monthly' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-500' :
                                            'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
                                        }`}>
                                        {k.keyType === 'eternal' ? <Infinity size={18} /> :
                                            k.keyType === 'monthly' ? <Clock size={18} /> :
                                                <Zap size={18} />}
                                    </div>
                                    <div>
                                        <div className="font-mono text-sm text-white/90 group-hover:text-emerald-400 transition-colors uppercase tracking-wider">{k.key}</div>
                                        <div className="text-[10px] text-white/20 font-black uppercase tracking-widest mt-1">UUID: {k.id.slice(0, 8)}...</div>
                                    </div>
                                </div>

                                <div className="flex justify-center md:justify-start">
                                    <span className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider whitespace-nowrap border ${k.keyType === 'eternal' ? 'bg-amber-500/20 border-amber-500/30 text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.2)]' :
                                        k.keyType === 'monthly' ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)]' :
                                            'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                                        }`}>
                                        {k.keyType} Protocol
                                    </span>
                                </div>

                                <div>
                                    {k.usedByUid ? (
                                        (() => {
                                            const linkedUser = users.find(u => u.id === k.usedByUid);
                                            return (
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                                                        <ShieldCheck size={12} /> Linked to {linkedUser?.name || 'Authorized User'}
                                                    </div>
                                                    {k.expiresAt && (
                                                        <div className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/40 border ${getCountdown(k.expiresAt) === 'TERMINATED' ? 'text-red-500 border-red-500/20' : 'text-amber-500 border-amber-500/20'}`}>
                                                            {getCountdown(k.expiresAt)}
                                                        </div>
                                                    )}
                                                    <div className="text-[9px] text-white/40 truncate max-w-[150px] flex items-center gap-1 group/email">
                                                        {k.usedByEmail || linkedUser?.email || 'Linked Node'}
                                                        <button 
                                                            onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(k.usedByEmail || linkedUser?.email || ''); }}
                                                            className="opacity-0 group-hover/email:opacity-100 transition-opacity p-0.5 hover:text-emerald-400"
                                                            title="Copy User Signal"
                                                        >
                                                            <Copy size={8} />
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })()
                                    ) : (
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-white/20 text-[10px] font-black uppercase tracking-widest">
                                                <ShieldAlert size={12} /> Dormant
                                            </div>
                                            {k.durationDays && <div className="text-[8px] text-white/20 font-black uppercase">Start on first use ({k.durationDays}d)</div>}
                                        </div>
                                    )}
                                </div>

                                <div className="text-right flex items-center justify-end gap-2">
                                    <div className="text-xs text-white/50 font-mono mr-2">
                                        {k.createdAt ? (k.createdAt.toDate ? format(k.createdAt.toDate(), 'yyyy-MM-dd') : format(new Date(k.createdAt), 'yyyy-MM-dd')) : '---'}
                                    </div>
                                    <button
                                        onClick={() => { navigator.clipboard.writeText(k.key); }}
                                        className="p-2 bg-white/5 hover:bg-white/10 text-white/20 hover:text-white rounded-lg border border-white/5 transition-all opacity-0 group-hover:opacity-100"
                                        title="Copy Signal"
                                    >
                                        <Copy size={14} />
                                    </button>
                                    <button
                                        onClick={() => handleEditKey(k)}
                                        className="p-2 bg-white/5 hover:bg-emerald-500/20 text-white/20 hover:text-emerald-400 rounded-lg border border-white/5 hover:border-emerald-500/30 transition-all opacity-0 group-hover:opacity-100"
                                        title="Modify Parameters"
                                    >
                                        <Cpu size={14} />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteKey(k)}
                                        className="p-2 bg-red-500/5 hover:bg-red-500/20 text-white/10 hover:text-red-500 rounded-lg border border-white/5 hover:border-red-500/30 transition-all opacity-0 group-hover:opacity-100"
                                        title="Purge Sequence"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                            );
                        })
                    )}
                        </div>
                    </div>
                </div>
            </div>

            {/* PROVISION PROTOCOL MODAL */}
            {showGenModal && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-md bg-black/60 animate-in fade-in duration-300">
                    <div className="bg-[#050a08] border border-white/10 w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

                        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                                    <KeyRound size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black tracking-tight text-white uppercase italic">Provision Protocol</h3>
                                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] mt-1">Initialize New Access Sequences</p>
                                </div>
                            </div>
                            <button onClick={() => setShowGenModal(false)} className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl text-white/20 hover:text-white transition-all">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8 space-y-8">
                            {/* Tier Selection */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-emerald-500/50 ml-2">Tier Selection</label>
                                <div className="grid grid-cols-4 gap-3">
                                    {[
                                        { id: 'trial', label: 'Trial', icon: Zap },
                                        { id: 'monthly', label: 'Monthly', icon: Clock },
                                        { id: 'custom', label: 'Custom', icon: Zap },
                                        { id: 'eternal', label: 'Eternal', icon: Infinity },
                                    ].map((tier) => (
                                        <button
                                            key={tier.id}
                                            onClick={() => setGenType(tier.id as any)}
                                            className={`p-4 rounded-2xl border flex flex-col items-center gap-3 transition-all ${genType === tier.id ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'bg-white/5 border-white/5 text-white/20 hover:bg-white/10'}`}
                                        >
                                            <tier.icon size={20} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">{tier.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-emerald-500/50 ml-2">Sequence Count</label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="50"
                                        value={genCount}
                                        onChange={(e) => setGenCount(parseInt(e.target.value))}
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/30 font-bold"
                                    />
                                </div>
                                {genType === 'custom' && (
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-emerald-500/50 ml-2">Duration (Days)</label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={genDays}
                                            onChange={(e) => setGenDays(parseInt(e.target.value))}
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-emerald-500/30 font-bold"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                                <div className="flex items-center gap-3 text-emerald-400/60 mb-2">
                                    <Cpu size={14} />
                                    <span className="text-[9px] font-black uppercase tracking-widest italic">Simulation Report</span>
                                </div>
                                <p className="text-xs text-white/40 leading-relaxed italic border-l-2 border-emerald-500/20 pl-4">
                                    Initializing {genCount} {genType} access {genCount > 1 ? 'sequences' : 'sequence'}.
                                    {genType === 'eternal' ? ' Lifetime access granted per unit.' : ` Validity per unit: ${genType === 'trial' ? '2 Hours' : (genType === 'monthly' ? '30 Days' : `${genDays} Days`)}.`}
                                </p>
                            </div>

                            <button
                                onClick={generateKeys}
                                disabled={generating}
                                className="w-full relative group/btn overflow-hidden rounded-2xl py-5 font-black text-black transition-all disabled:opacity-50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all group-hover/btn:scale-105"></div>
                                <span className="relative flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs">
                                    {generating ? 'Transmitting Data...' : (
                                        <>Execute Protocol <ChevronRight size={16} /></>
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* EDIT PROTOCOL MODAL */}
            {editingKey && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-md bg-black/60">
                    <div className="bg-[#050a08] border border-white/10 w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                                    <Cpu size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black tracking-tight text-white uppercase italic">Edit Protocol</h3>
                                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] mt-1">Modify Sequence Parameters</p>
                                </div>
                            </div>
                            <button onClick={() => setEditingKey(null)} className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl text-white/20 hover:text-white transition-all">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8 space-y-6">
                            <div className="p-4 bg-black/20 border border-white/5 rounded-2xl">
                                <div className="text-[9px] text-white/20 uppercase tracking-widest mb-1 font-black">Target Sequence</div>
                                <div className="font-mono text-emerald-400 text-sm font-bold truncate">{editingKey.key}</div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Override Expiration</label>
                                    <input
                                        type="datetime-local"
                                        value={editData.expiresAt}
                                        onChange={(e) => setEditData({ ...editData, expiresAt: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-indigo-500/30 font-bold text-xs"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Max Transfers</label>
                                    <input
                                        type="number"
                                        value={editData.maxTransfers}
                                        onChange={(e) => setEditData({ ...editData, maxTransfers: parseInt(e.target.value) })}
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-indigo-500/30 font-bold text-xs"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Tier Classification</label>
                                    <select
                                        value={editData.keyType}
                                        onChange={(e) => setEditData({ ...editData, keyType: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-indigo-500/30 font-bold text-xs appearance-none cursor-pointer"
                                    >
                                        <option value="trial">Trial Protocol</option>
                                        <option value="monthly">Monthly Protocol</option>
                                        <option value="custom">Custom Protocol</option>
                                        <option value="eternal">Eternal Protocol</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={saveKeyEdits}
                                className="w-full relative group/btn overflow-hidden rounded-2xl py-5 font-black text-white transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 group-hover/btn:scale-105 transition-all"></div>
                                <span className="relative flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs">
                                    Save Modification <ShieldCheck size={16} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
