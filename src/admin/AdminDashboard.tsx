import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { AdminChats } from './AdminChats';
import { AdminReports } from './AdminReports';
import { AdminNews } from './AdminNews';
import { AdminSupport } from './AdminSupport';
import { AdminKeys } from './AdminKeys';
import { AdminPayments } from './AdminPayments';
import { ChevronDown, ChevronRight, KeyRound, ShieldAlert, Cpu, Zap, Infinity, Clock, AlertTriangle, Calendar, Megaphone, Radio, Trash2, Users as UsersIcon, Database, Copy, Check } from 'lucide-react';
import { setDoc } from 'firebase/firestore';
import { useAdminDialog } from './AdminDialogs';

type AdminTab = 'users' | 'inventory' | 'chats' | 'news' | 'support' | 'reports' | 'payments';

export const AdminDashboard: React.FC = () => {
    const logout = () => signOut(auth);
    const [users, setUsers] = useState<any[]>([]);
    const [licenseKeys, setLicenseKeys] = useState<any[]>([]);
    const [reports, setReports] = useState<any[]>([]);
    const [paymentRequests, setPaymentRequests] = useState<any[]>([]);
    const [systemConfig, setSystemConfig] = useState<any>(null);
    const [alertText, setAlertText] = useState('');
    const [expandedUserId, setExpandedUserId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<AdminTab>('users');
    const [now, setNow] = useState(new Date());
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const { showConfirm, showToast, showAlert } = useAdminDialog();

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const unsubUsers = onSnapshot(collection(db, 'users'), (snapshot) => {
            const usersList: any[] = [];
            snapshot.forEach(doc => usersList.push({ id: doc.id, ...doc.data() }));
            // Sort: pending first, then by date
            usersList.sort((a, b) => {
                if (a.status === 'pending' && b.status !== 'pending') return -1;
                if (a.status !== 'pending' && b.status === 'pending') return 1;
                const dateA = a.createdAt?.seconds ? a.createdAt.seconds * 1000 : (a.createdAt ? new Date(a.createdAt).getTime() : 0);
                const dateB = b.createdAt?.seconds ? b.createdAt.seconds * 1000 : (b.createdAt ? new Date(b.createdAt).getTime() : 0);
                return dateB - dateA;
            });
            setUsers(usersList);
        });

        const unsubKeys = onSnapshot(collection(db, 'license_keys'), (snapshot) => {
            const keysList: any[] = [];
            snapshot.forEach(doc => keysList.push({ id: doc.id, ...doc.data() }));
            setLicenseKeys(keysList);
        });

        const unsubConfig = onSnapshot(doc(db, 'system', 'config'), (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data();
                setSystemConfig(data);
                setAlertText(data.globalAlert || '');
            }
        });

        const unsubReports = onSnapshot(collection(db, 'reports'), (snapshot) => {
            const list: any[] = [];
            snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
            setReports(list);
        });

        const unsubPayments = onSnapshot(collection(db, 'payment_requests'), (snapshot) => {
            const list: any[] = [];
            snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
            // Sort: pending first
            list.sort((a, b) => {
                if (a.status === 'pending' && b.status !== 'pending') return -1;
                if (a.status !== 'pending' && b.status === 'pending') return 1;
                return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0);
            });
            setPaymentRequests(list);
        });

        return () => {
            unsubUsers();
            unsubKeys();
            unsubConfig();
            unsubReports();
            unsubPayments();
        };
    }, []);

    const toggleExpand = (userId: string) => {
        setExpandedUserId(prev => prev === userId ? null : userId);
    };

    const handleApprove = async (userId: string) => {
        await updateDoc(doc(db, 'users', userId), { status: 'approved' });
    };

    const handleRevoke = async (userId: string) => {
        await updateDoc(doc(db, 'users', userId), { status: 'pending' });
    };

    const handleUpdateAlert = async () => {
        try {
            await setDoc(doc(db, 'system', 'config'), {
                globalAlert: alertText.trim(),
                updatedAt: new Date().toISOString()
            }, { merge: true });
            showToast("Global broadcast updated successfully.", "success");
        } catch (err) {
            console.error("Scale error:", err);
            showToast("Failed to update broadcast.", "error");
        }
    };

    const handleDeleteUser = async (user: any) => {
        const confirmed = await showConfirm(
            "ERASE PROTOCOL",
            `Are you sure you want to permanently purge entity ${user.name || user.email}? This action will wipe all node records.`
        );
        if (!confirmed) return;

        try {
            // 1. Find if user has a used license key
            const userLicense = licenseKeys.find(k => k.usedByUid === user.id || k.key === user.licenseKey);

            if (userLicense) {
                // Unbind the key so it can be used again (fully reset)
                await updateDoc(doc(db, 'license_keys', userLicense.id), {
                    usedByUid: null,
                    usedByEmail: null,
                    usedByName: null,
                    deviceId: null,
                    isUsed: false,
                    transfersUsed: 0,
                    transferHistory: [],
                    activatedAt: null,
                    expiresAt: null
                });
            }

            // 2. Delete user doc
            await deleteDoc(doc(db, 'users', user.id));
            showToast("Entity successfully purged from the matrix.", "success");
        } catch (err: any) {
            console.error("Purge failure:", err);
            showAlert("Registry Error", `Protocol could not be finalized: ${err.message}`);
        }
    };

    return (
        <div className="bg-[#020503] min-h-screen text-white p-8 lg:p-12 font-sans relative overflow-hidden animate-reveal">

            {/* Background elements */}
            <div className="absolute inset-0 bg-black/95 z-0"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex justify-between items-center mb-12 relative group">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                    <div>
                        <h1 className="text-4xl font-black tracking-tighter text-white drop-shadow-md">Admin <span className="text-emerald-400">Control Hub</span></h1>
                        <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em] mt-1">Intelligence Access Management</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden md:block">
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Active Session</p>
                            <p className="text-xs font-bold text-emerald-500/80">{auth.currentUser?.email}</p>
                        </div>
                        <button
                            onClick={logout}
                            className="bg-red-900/20 hover:bg-red-600 text-red-500 hover:text-white transition-all duration-300 border border-red-500/30 rounded-xl px-6 py-2.5 font-black uppercase tracking-widest text-xs shadow-[0_4px_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                        >
                            Deactivate Session
                        </button>
                    </div>
                </div>

                {/* Tactical Overview Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Active Agents', value: users.filter(u => u.status === 'approved' && !u.isBanned).length, icon: UsersIcon, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                        { label: 'Signal Violations', value: reports.filter(r => r.status === 'pending').length, icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-500/10' },
                        { label: 'Deployed Keys', value: licenseKeys.length, icon: KeyRound, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
                        { label: 'Mesh Stability', value: '98.4%', icon: Database, color: 'text-amber-400', bg: 'bg-amber-500/10' },
                    ].map((stat, i) => (
                        <div key={i} className="holographic-island p-5 rounded-3xl border border-white/5 bg-white/[0.02] flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center border border-white/5`}>
                                <stat.icon size={22} />
                            </div>
                            <div>
                                <div className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-1">{stat.label}</div>
                                <div className="text-xl font-black text-white leading-none">{stat.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Alert Control */}
                <div className="mb-8 p-6 holographic-island rounded-3xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-3xl flex items-center gap-8 group">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                        <Megaphone size={24} className="group-hover:rotate-12 transition-transform" />
                    </div>
                    <div className="flex-1">
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/60 mb-2 flex items-center gap-2">
                            <Radio size={10} className="animate-pulse" /> Global System Broadcast
                        </div>
                        <input
                            type="text"
                            value={alertText}
                            onChange={(e) => setAlertText(e.target.value)}
                            placeholder="Enter system-wide announcement message..."
                            className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-3 px-5 text-sm font-medium text-white placeholder:text-white/10 focus:outline-none focus:border-amber-500/30 transition-all"
                        />
                    </div>
                    <button
                        onClick={handleUpdateAlert}
                        className="bg-amber-500 text-black px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-amber-400 transition-all hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] active:scale-95"
                    >
                        Transmit
                    </button>
                    {systemConfig?.globalAlert && (
                        <button
                            onClick={async () => {
                                setAlertText('');
                                await setDoc(doc(db, 'system', 'config'), { globalAlert: '' }, { merge: true });
                            }}
                            className="p-3 text-white/20 hover:text-red-500 transition-all"
                            title="Kill Broadcast"
                        >
                            <Trash2 size={20} />
                        </button>
                    )}
                </div>

                {/* Tab Navigation */}
                <div className="flex p-1.5 bg-white/[0.02] border border-white/5 rounded-2xl mb-8 inline-flex backdrop-blur-xl max-w-full overflow-x-auto custom-scrollbar">
                    {(['users', 'inventory', 'payments', 'chats', 'news', 'support', 'reports'] as AdminTab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeTab === tab
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                                : 'text-white/40 hover:text-white/80'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === 'users' && (
                    <div className="holographic-island rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(16,185,129,0.03)] backdrop-blur-3xl animate-slide-in-bottom">
                        <div className="overflow-x-auto w-full custom-scrollbar">
                            <div className="min-w-[800px]">
                                <div className="grid grid-cols-4 gap-6 p-6 font-black text-[10px] uppercase tracking-[0.3em] border-b border-white/5 text-white/40 bg-white/[0.02]">
                                    <div>Tactical Identity</div>
                                    <div>Deployment Date</div>
                                    <div>Authorization</div>
                                    <div className="text-right">Command</div>
                                </div>

                                <div className="p-4 space-y-3 perspective-container">
                            {users.length === 0 ? (
                                <div className="p-16 text-center text-white/20 font-black uppercase tracking-widest text-sm animate-pulse">No entities registered in the database.</div>
                            ) : (
                                users.map(user => {
                                    const userLicense = licenseKeys.find(k => k.usedByUid === user.id || k.key === user.licenseKey);
                                    const maxTransfers = userLicense?.maxTransfers || 3;
                                    const transfersUsed = userLicense?.transfersUsed || 0;
                                    const isExpanded = expandedUserId === user.id;

                                    return (
                                        <div key={user.id} className="flex flex-col border border-white/5 rounded-2xl bg-black/40 overflow-hidden shadow-lg transition-all duration-500">
                                            {/* Primary Row */}
                                            <div className={`grid grid-cols-4 gap-6 p-5 items-center cursor-pointer hover:bg-emerald-900/10 transition-colors ${isExpanded ? 'bg-white/[0.03] border-b border-white/5' : ''}`} onClick={() => toggleExpand(user.id)}>
                                                <div className="flex items-center gap-4">
                                                    <div className="text-white/30 mr-2 flex-shrink-0">
                                                        {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                                    </div>
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm border transition-all duration-500 ${user.status === 'approved' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'}`}>
                                                        {(user.name || user.email || '?')[0].toUpperCase()}
                                                    </div>
                                                    <div className="overflow-hidden">
                                                        <div className="flex items-center gap-2">
                                                            <div className="font-black text-sm text-white/90 truncate">{user.name || 'Anonymous User'}</div>
                                                            {userLicense && (
                                                                <span className={`px-2 py-0.5 rounded bg-black/40 text-[8px] font-black uppercase tracking-widest border border-white/10 ${userLicense.keyType === 'eternal' ? 'text-amber-500' : 'text-indigo-400'}`}>
                                                                    {userLicense.keyType}
                                                                </span>
                                                            )}
                                                        </div>
                                                            <div className="text-[10px] text-white/30 font-medium truncate tracking-tight flex items-center gap-2">
                                                                {user.email}
                                                                <button 
                                                                    onClick={(e) => { e.stopPropagation(); copyToClipboard(user.email, user.id + '-email'); }}
                                                                    className="hover:text-emerald-400 transition-colors"
                                                                >
                                                                    {copiedId === user.id + '-email' ? <Check size={10} /> : <Copy size={10} />}
                                                                </button>
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="text-xs text-white/50 font-mono">
                                                    {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all duration-500 ${user.status === 'approved'
                                                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                                                            : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400 shadow-[0_0_10px_rgba(245,158,11,0.1)]'
                                                            }`}>
                                                            {user.status === 'approved' ? 'Active Intel' : 'Pending Verification'}
                                                        </span>
                                                        {user.isBanned && (
                                                            <span className="px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest bg-red-500/20 border border-red-500/30 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                                                                Permanently Banned
                                                            </span>
                                                        )}
                                                        {userLicense && (
                                                            <span className={`px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest border ${userLicense.keyType === 'eternal' ? 'bg-amber-500/20 border-amber-500/30 text-amber-400' :
                                                                userLicense.keyType === 'monthly' ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400' :
                                                                    'bg-white/10 border-white/20 text-white/40'
                                                                }`}>
                                                                {userLicense.keyType}
                                                            </span>
                                                        )}
                                                    </div>
                                                    {userLicense && user.status === 'approved' && (
                                                        <div className="flex flex-col gap-1">
                                                            <div className="text-[9px] font-black text-white/30 tracking-widest uppercase flex items-center gap-2">
                                                                <Cpu size={10} /> {transfersUsed} / {maxTransfers} Nodes Linked
                                                            </div>
                                                            {userLicense.expiresAt && (
                                                                <div className="text-[9px] font-black text-amber-500/80 tracking-widest uppercase bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10 inline-block">
                                                                    {(() => {
                                                                        const diff = new Date(userLicense.expiresAt).getTime() - now.getTime();
                                                                        if (diff <= 0) return 'TERMINATED';
                                                                        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                                                                        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                                        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                                                                        const s = Math.floor((diff % (1000 * 60)) / 1000);
                                                                        return `${d}d ${h}h ${m}m ${s}s`;
                                                                    })()}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="text-right flex justify-end gap-3" onClick={e => e.stopPropagation()}>
                                                    {user.isBanned ? (
                                                        <button
                                                            onClick={async () => await updateDoc(doc(db, 'users', user.id), { isBanned: false })}
                                                            className="bg-indigo-500 text-white hover:bg-indigo-400 text-[10px] font-black uppercase tracking-widest px-5 py-2 h-9 transition-all duration-300 rounded-xl border-0 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                                                        >
                                                            Restore Access
                                                        </button>
                                                    ) : user.status === 'pending' ? (
                                                        <button
                                                            onClick={() => handleApprove(user.id)}
                                                            className="bg-emerald-500 text-black hover:bg-emerald-400 text-[10px] font-black uppercase tracking-widest px-5 py-2 h-9 transition-all duration-300 rounded-xl border-0 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-105"
                                                        >
                                                            Authorize
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleRevoke(user.id)}
                                                            className="bg-transparent hover:bg-red-500/10 text-white/40 hover:text-red-500 text-[10px] font-black uppercase tracking-widest px-5 py-2 h-9 transition-all duration-300 rounded-xl border border-white/10 hover:border-red-500/50"
                                                        >
                                                            Revoke
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => handleDeleteUser(user)}
                                                        className="p-2.5 bg-red-500/5 hover:bg-red-500/20 text-white/10 hover:text-red-500 rounded-xl border border-white/5 hover:border-red-500/30 transition-all active:scale-95"
                                                        title="Purge Entity"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Expandable Intel Section */}
                                            {isExpanded && (
                                                <div className="p-6 bg-white/[0.01] grid grid-cols-2 gap-8 text-sm">

                                                    {/* License Details */}
                                                    <div className="space-y-4">
                                                        <h3 className="text-[10px] font-black text-emerald-500/50 uppercase tracking-[0.2em] flex items-center gap-2">
                                                            <KeyRound size={12} /> Key Information
                                                        </h3>
                                                        <div className="bg-black/50 border border-white/5 rounded-xl p-4 space-y-3">
                                                            <div className="flex items-center justify-between">
                                                                <div>
                                                                    <div className="text-[9px] text-white/30 uppercase tracking-widest mb-1">Assigned Key</div>
                                                                    <div className="font-mono text-emerald-400 text-xs bg-emerald-900/10 p-2 rounded-lg border border-emerald-500/20 flex items-center justify-between group/key">
                                                                        <span>{user.licenseKey || userLicense?.key || 'None Assigned'}</span>
                                                                        <button 
                                                                            onClick={() => copyToClipboard(user.licenseKey || userLicense?.key || '', user.id + '-key-internal')}
                                                                            className="opacity-0 group-hover/key:opacity-100 transition-opacity p-1 hover:text-white"
                                                                        >
                                                                            {copiedId === user.id + '-key-internal' ? <Check size={10} /> : <Copy size={10} />}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                {userLicense && (
                                                                    <div className={`p-2 rounded-xl border ${userLicense.keyType === 'eternal' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
                                                                        userLicense.keyType === 'monthly' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' :
                                                                            'bg-white/5 border-white/10 text-white/20'
                                                                        }`}>
                                                                        {userLicense.keyType === 'eternal' ? <Infinity size={20} /> :
                                                                            userLicense.keyType === 'monthly' ? <Clock size={20} /> :
                                                                                <Zap size={20} />}
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div>
                                                                <div className="text-[9px] text-white/30 uppercase tracking-widest mb-1">Current Node (Device ID)</div>
                                                                <div className="font-mono text-white/60 text-xs break-all bg-black/30 p-2 rounded-lg border border-white/5">
                                                                    {user.deviceId || userLicense?.deviceId || 'No device linked'}
                                                                </div>
                                                            </div>
                                                            {userLicense?.expiresAt && (
                                                                <div>
                                                                    <div className="text-[9px] text-white/30 uppercase tracking-widest mb-1 flex items-center gap-2">
                                                                        <Calendar size={10} /> Sequence Expiration
                                                                    </div>
                                                                    <div className={`text-xs font-black uppercase tracking-tight ${new Date(userLicense.expiresAt).getTime() < Date.now() ? 'text-red-500' : 'text-white/60'}`}>
                                                                        {new Date(userLicense.expiresAt).toLocaleString()}
                                                                        {new Date(userLicense.expiresAt).getTime() < Date.now() && ' (TERMINATED)'}
                                                                    </div>
                                                                </div>
                                                            )}

                                                        </div>
                                                    </div>

                                                    {/* Transfer & Violation History */}
                                                    <div className="space-y-4">
                                                        <h3 className="text-[10px] font-black text-orange-500/50 uppercase tracking-[0.2em] flex items-center gap-2">
                                                            <Cpu size={12} /> Hardware Transfers & Alerts
                                                        </h3>
                                                        <div className="bg-black/50 border border-white/5 rounded-xl p-0 overflow-hidden divide-y divide-white/5">

                                                            {/* Render Transfer History */}
                                                            {userLicense?.transferHistory && userLicense.transferHistory.length > 0 ? (
                                                                userLicense.transferHistory.map((transfer: any, idx: number) => (
                                                                    <div key={`transfer-${idx}`} className="p-3 bg-white/[0.02] flex items-start gap-3">
                                                                        <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-500 shrink-0 mt-0.5"><Cpu size={12} /></div>
                                                                        <div>
                                                                            <div className="text-xs font-medium text-white/80">Device Transferred</div>
                                                                            <div className="text-[10px] text-white/40 font-mono mt-1 break-all">
                                                                                From: {transfer.from}<br />
                                                                                To: {transfer.to}
                                                                            </div>
                                                                            <div className="text-[9px] text-white/30 uppercase tracking-widest mt-2">
                                                                                {new Date(transfer.date).toLocaleString()}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <div className="p-4 text-xs text-white/30 italic text-center">No transfers recorded</div>
                                                            )}

                                                            {/* Render Violation Logs */}
                                                            {userLicense?.violationAttempts && userLicense.violationAttempts.length > 0 && (
                                                                userLicense.violationAttempts.map((violation: any, idx: number) => (
                                                                    <div key={`violation-${idx}`} className="p-3 bg-red-950/20 flex items-start gap-3 border-l-2 border-red-500/50">
                                                                        <div className="p-1.5 bg-red-500/10 rounded-lg text-red-500 shrink-0 mt-0.5"><ShieldAlert size={12} /></div>
                                                                        <div>
                                                                            <div className="text-xs font-black text-red-400">Security Violation Blocked</div>
                                                                            <div className="text-[10px] text-white/60 mt-1">
                                                                                Attempted access from unauthorized hardware footprint.
                                                                            </div>
                                                                            <div className="text-[10px] text-red-400/50 font-mono mt-1 break-all">
                                                                                ID: {violation.deviceId}
                                                                            </div>
                                                                            <div className="text-[9px] text-red-500/40 uppercase tracking-widest mt-2 flex justify-between items-center">
                                                                                <span>{new Date(violation.timestamp).toLocaleString()}</span>
                                                                                <span className="flex items-center gap-1 text-red-500/60"><AlertTriangle size={10} /> {violation.reason || 'Blocked'}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )}
                                                        </div>
                                                    </div>

                                                </div>
                                            )}
                                        </div>
                                    );
                                })
                            )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'inventory' && <AdminKeys users={users} />}
                {activeTab === 'chats' && <AdminChats />}
                {activeTab === 'news' && <AdminNews />}
                {activeTab === 'support' && <AdminSupport />}
                {activeTab === 'reports' && <AdminReports />}
                {activeTab === 'payments' && <AdminPayments requests={paymentRequests} users={users} />}
            </div>
        </div>
    );
};
