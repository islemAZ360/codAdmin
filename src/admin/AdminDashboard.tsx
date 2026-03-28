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
import { ChevronDown, ChevronRight, KeyRound, ShieldAlert, ShieldCheck, Cpu, Zap, Infinity, AlertTriangle, Trash2, Users as UsersIcon, Database, Copy, Check, Mail, User, Radio } from 'lucide-react';
import { useAdminDialog } from './AdminDialogs';

type AdminTab = 'users' | 'inventory' | 'chats' | 'news' | 'support' | 'reports' | 'payments';

export const AdminDashboard: React.FC = () => {
    const logout = () => signOut(auth);
    const [users, setUsers] = useState<any[]>([]);
    const [licenseKeys, setLicenseKeys] = useState<any[]>([]);
    const [reports, setReports] = useState<any[]>([]);
    const [paymentRequests, setPaymentRequests] = useState<any[]>([]);
    const [expandedUserId, setExpandedUserId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<AdminTab>('users');
    const [now, setNow] = useState(new Date());
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [isGhostMode, setIsGhostMode] = useState(false);
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [activities, setActivities] = useState<any[]>([]);
    const { showConfirm, showToast, showAlert } = useAdminDialog();

    const copyToClipboard = (text: string, id: string, label: string = "Data") => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        showToast(`${label.toUpperCase()} INTEL COPIED`, "success");
        setTimeout(() => setCopiedId(null), 2000);
    };

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            clearInterval(timer);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
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
            if (users.length > 0 && usersList.length > users.length) {
                const newUser = usersList.find(u => !users.some(ext => ext.id === u.id));
                if (newUser) addActivity('user', `New entry detected: ${newUser.name || newUser.email}`);
            }
            setUsers(usersList);
        });

        const unsubKeys = onSnapshot(collection(db, 'license_keys'), (snapshot) => {
            const keysList: any[] = [];
            snapshot.forEach(doc => keysList.push({ id: doc.id, ...doc.data() }));
            if (licenseKeys.length > 0 && keysList.length > licenseKeys.length) {
                addActivity('key', `New access sequence provisioned`);
            }
            setLicenseKeys(keysList);
        });

        const unsubConfig = onSnapshot(doc(db, 'system', 'config'), (snapshot) => {
            if (snapshot.exists()) {
                // Config can be used for other global settings if needed
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
        setExpandedUserId(expandedUserId === userId ? null : userId);
    };

    const formatDate = (date: any) => {
        if (!date) return 'N/A';
        try {
            if (date.toDate) return date.toDate().toLocaleString();
            const d = new Date(date);
            if (isNaN(d.getTime())) return 'N/A';
            return d.toLocaleString();
        } catch (e) {
            return 'N/A';
        }
    };

    const getUserRank = (user: any, license: any) => {
        if (user.isAdmin) return { label: 'COMMANDER', icon: ShieldAlert, color: 'text-red-500', bg: 'bg-red-500/10' };
        if (!license) return { label: 'RECRUIT', icon: UsersIcon, color: 'text-white/40', bg: 'bg-white/5' };
        if (license.keyType === 'eternal') return { label: 'ELITE', icon: Infinity, color: 'text-amber-500', bg: 'bg-amber-500/10' };
        if (license.keyType === 'monthly') return { label: 'OPERATIVE', icon: Zap, color: 'text-indigo-400', bg: 'bg-indigo-500/10' };
        return { label: 'AGENT', icon: User, color: 'text-emerald-400', bg: 'bg-emerald-500/10' };
    };

    const handleApprove = async (userId: string) => {
        await updateDoc(doc(db, 'users', userId), { status: 'approved' });
    };

    const handleRevoke = async (userId: string) => {
        await updateDoc(doc(db, 'users', userId), { status: 'pending' });
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

    const addActivity = (type: string, message: string) => {
        setActivities(prev => [{ id: Math.random(), type, message, timestamp: new Date() }, ...prev].slice(0, 5));
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
                        <p className="text-xs text-white/40 font-black uppercase tracking-[0.4em] mt-1">Intelligence Access Management</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden md:block">
                            <p className="text-xs font-black text-white/20 uppercase tracking-[0.2em]">Active Session</p>
                                <p className="text-xs font-bold text-emerald-500/80">{auth.currentUser?.email}</p>
                        </div>
                        <div className="flex items-center gap-3 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5">
                            <button
                                onClick={() => setIsGhostMode(!isGhostMode)}
                                className={`p-2 rounded-xl transition-all ${isGhostMode ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-white/20 hover:text-white/60'}`}
                                title={isGhostMode ? "Deactivate Ghost Mode" : "Activate Ghost Mode (Privacy Blur)"}
                            >
                                <ShieldAlert size={18} />
                            </button>
                            <div className="w-px h-4 bg-white/10"></div>
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${isOnline ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>
                                <Radio size={12} className={isOnline ? 'animate-pulse' : ''} />
                                <span className="text-[10px] font-black uppercase tracking-widest">{isOnline ? 'Link Stable' : 'Link Offline'}</span>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="bg-red-900/20 hover:bg-red-600 text-red-500 hover:text-white transition-all duration-300 border border-red-500/30 rounded-xl px-6 py-2.5 font-black uppercase tracking-widest text-xs shadow-[0_4px_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                        >
                            Deactivate Session
                        </button>
                    </div>
                </div>

                {/* Tactical Overview Stats & Activity Feed */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                                    <div className="text-xs font-black uppercase tracking-widest text-white/20 mb-1">{stat.label}</div>
                                    <div className="text-xl font-black text-white leading-none">{stat.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active Intel Feed (Real-time Activity) */}
                    <div className="holographic-island p-5 rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-4 flex items-center gap-2">
                            <Radio size={10} className="animate-pulse text-emerald-500" /> Active Intel Stream
                        </div>
                        <div className="space-y-3">
                            {activities.length === 0 ? (
                                <div className="text-[9px] text-white/10 italic text-center py-4">Waiting for mission data...</div>
                            ) : (
                                activities.map(act => (
                                    <div key={act.id} className="flex items-center gap-3 animate-in slide-in-from-right-2 duration-500">
                                        <div className={`w-1.5 h-1.5 rounded-full ${act.type === 'user' ? 'bg-emerald-500' : 'bg-indigo-500'} shadow-[0_0_5px_currentColor]`}></div>
                                        <div className="flex-1 overflow-hidden">
                                            <div className="text-[10px] text-white/60 truncate font-medium">{act.message}</div>
                                            <div className="text-[8px] text-white/20 uppercase font-mono">{formatDate(act.timestamp)}</div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <style>{`
                    .ghost-blur {
                        filter: ${isGhostMode ? 'blur(5px)' : 'none'};
                        pointer-events: ${isGhostMode ? 'none' : 'auto'};
                        transition: filter 0.3s ease;
                    }
                `}</style>



                {/* Tab Navigation */}
                <div className="flex p-1.5 bg-white/[0.02] border border-white/5 rounded-2xl mb-8 inline-flex backdrop-blur-xl max-w-full overflow-x-auto custom-scrollbar">
                    {(['users', 'inventory', 'payments', 'chats', 'news', 'support', 'reports'] as AdminTab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === tab
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
                                <div className="grid grid-cols-4 gap-6 p-6 font-black text-xs uppercase tracking-[0.3em] border-b border-white/5 text-white/40 bg-white/[0.02]">
                                    <div>Tactical Identity</div>
                                    <div>Deployment Date</div>
                                    <div>Authorization</div>
                                    <div className="text-right">Command</div>
                                </div>

                                <div className="p-4 space-y-3 perspective-container">
                            {users.length === 0 ? (
                                <div className="p-16 text-center text-white/20 font-black uppercase tracking-widest text-sm animate-pulse">
                                    <UsersIcon size={48} className="opacity-20 animate-pulse text-emerald-500 mx-auto mb-4" />
                                    No entities registered in the database.
                                </div>
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
                                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm border transition-all duration-500 relative group/avatar ${user.status === 'approved' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'}`}>
                                                        {(user.name || user.email || '?')[0].toUpperCase()}
                                                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-lg border border-black flex items-center justify-center shadow-lg ${getUserRank(user, userLicense).bg} ${getUserRank(user, userLicense).color}`}>
                                                            {React.createElement(getUserRank(user, userLicense).icon, { size: 10 })}
                                                        </div>
                                                    </div>
                                                    <div className="overflow-hidden">
                                                        <div className="flex items-center gap-2">
                                                            <div className="font-black text-sm text-white/90 truncate">{user.name || 'Anonymous User'}</div>
                                                            <span className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-[0.2em] border ${getUserRank(user, userLicense).bg} ${getUserRank(user, userLicense).color} border-current/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                                                                {getUserRank(user, userLicense).label}
                                                            </span>
                                                        </div>
                                                        <div className="text-xs text-white/30 font-medium truncate tracking-tight flex items-center gap-2 mt-0.5 ghost-blur cursor-pointer hover:text-white transition-colors"
                                                             onClick={(e) => { e.stopPropagation(); copyToClipboard(user.email, user.id + '-email', 'Email'); }}
                                                        >
                                                            <Mail size={10} /> {user.email}
                                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                                {copiedId === user.id + '-email' ? <Check size={10} className="text-emerald-400" /> : <Copy size={10} />}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-white/40 font-mono text-xs">
                                                    {formatDate(user.createdAt)}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest border transition-all duration-500 ${user.status === 'approved'
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
                                                            className="bg-emerald-500 text-black hover:bg-emerald-400 text-xs font-black uppercase tracking-widest px-5 py-2 h-9 transition-all duration-300 rounded-xl border-0 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-105"
                                                        >
                                                            Authorize
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleRevoke(user.id)}
                                                            className="bg-transparent hover:bg-red-500/10 text-white/40 hover:text-red-500 text-xs font-black uppercase tracking-widest px-5 py-2 h-9 transition-all duration-300 rounded-xl border border-white/10 hover:border-red-500/50"
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

                                            {/* Expandable Intel Section - Tactical Overwatch Panel */}
                                            {isExpanded && (
                                                <div className="p-8 bg-black/60 grid grid-cols-1 lg:grid-cols-2 gap-10 text-sm border-t border-white/5 animate-in slide-in-from-top-4 duration-500 relative">
                                                    {/* Decorative Scan Lines & Dots */}
                                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
                                                    <div className="absolute top-2 left-2 flex gap-1"><div className="w-1 h-1 bg-emerald-500/40 rounded-full"></div><div className="w-1 h-1 bg-emerald-500/20 rounded-full"></div></div>

                                                    {/* LEFT COLUMN: PRIMARY AUTHORIZATION INTEL */}
                                                    <div className="space-y-6 relative">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <h3 className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em] flex items-center gap-2">
                                                                <div className="w-1.5 h-3 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                                                [ AUTHORIZATION_PARAMETERS ]
                                                            </h3>
                                                        </div>

                                                        {/* Assigned Key Terminal */}
                                                        <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4 group/keycard relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 p-2 opacity-5 group-hover/keycard:opacity-20 transition-opacity">
                                                                <KeyRound size={40} />
                                                            </div>
                                                            <div className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-black mb-2 italic">Access Sequence</div>
                                                            <div 
                                                                className="font-mono text-emerald-400 text-lg font-black tracking-widest bg-black/60 p-3 rounded-xl border border-emerald-500/20 flex items-center justify-between group/key ghost-blur cursor-copy hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all"
                                                                onClick={() => copyToClipboard(user.licenseKey || userLicense?.key || '', user.id + '-key-internal', 'Sequence')}
                                                            >
                                                                <span>{user.licenseKey || userLicense?.key || 'VOID'}</span>
                                                                <div className="p-1 px-3 bg-emerald-500/20 rounded-lg text-emerald-400 uppercase text-[9px] font-black flex items-center gap-2 translate-x-4 opacity-0 group-hover/key:translate-x-0 group-hover/key:opacity-100 transition-all">
                                                                    {copiedId === user.id + '-key-internal' ? <Check size={10} /> : <div className="flex items-center gap-1"><Copy size={10} /> SYNC</div>}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Hardware Footprint (Device ID) */}
                                                        <div className="space-y-3">
                                                            <div className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-black flex items-center gap-2 ml-1">
                                                                <Cpu size={10} className="text-white/40" /> Node Hardware Fingerprint
                                                            </div>
                                                            <div className="font-mono text-white/60 text-[11px] leading-relaxed break-all bg-black/80 p-4 rounded-xl border border-white/5 relative group/device cursor-pointer hover:border-white/10 transition-all"
                                                                 onClick={() => copyToClipboard(user.deviceId || userLicense?.deviceId || '', user.id + '-device', 'Hardware ID')}
                                                            >
                                                                {user.deviceId || userLicense?.deviceId || 'UNREGISTERED_NODE_ID'}
                                                                <div className="absolute top-2 right-2 opacity-0 group-hover/device:opacity-100 transition-opacity text-emerald-500"><Copy size={12} /></div>
                                                                <div className="mt-2 flex gap-1">
                                                                    {Array.from({length: 8}).map((_, i) => (
                                                                        <div key={i} className={`h-0.5 w-3 rounded-full ${user.deviceId ? 'bg-emerald-500/40' : 'bg-white/10 animate-pulse delay-' + (i*100)}`}></div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Visual Expiry Progress Radar */}
                                                        {userLicense?.expiresAt && (
                                                            <div className="pt-2">
                                                                <div className="flex justify-between items-end mb-2">
                                                                    <div className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-black">Mission Duration Status</div>
                                                                    <div className={`text-xs font-black uppercase font-mono ${new Date(userLicense.expiresAt).getTime() < Date.now() ? 'text-red-500' : 'text-emerald-500/80'}`}>
                                                                        {(() => {
                                                                            const diff = new Date(userLicense.expiresAt).getTime() - now.getTime();
                                                                            if (diff <= 0) return 'DEPLETED';
                                                                            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                                                                            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                                            return `${d}D ${h}H REMAINING`;
                                                                        })()}
                                                                    </div>
                                                                </div>
                                                                {/* Progress Bar Container */}
                                                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                                                    {(() => {
                                                                        const start = userLicense.createdAt ? new Date(userLicense.createdAt).getTime() : Date.now();
                                                                        const end = new Date(userLicense.expiresAt).getTime();
                                                                        const current = Date.now();
                                                                        const total = end - start;
                                                                        const elapsed = current - start;
                                                                        const percent = Math.max(0, Math.min(100, (elapsed / total) * 100));
                                                                        const remaining = 100 - percent;
                                                                        
                                                                        return (
                                                                            <div 
                                                                                className={`h-full transition-all duration-1000 ${remaining < 10 ? 'bg-red-500 animate-pulse' : remaining < 30 ? 'bg-amber-500' : 'bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]'}`}
                                                                                style={{ width: `${remaining}%` }}
                                                                            ></div>
                                                                        );
                                                                    })()}
                                                                </div>
                                                                <div className="flex justify-between mt-2 font-mono text-[8px] uppercase tracking-tighter text-white/10">
                                                                    <span>Initialization Date: {formatDate(userLicense.createdAt)}</span>
                                                                    <span>Termination Date: {formatDate(userLicense.expiresAt)}</span>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* RIGHT COLUMN: TELEMETRY STREAM & SECURITY LOGS */}
                                                    <div className="space-y-6">
                                                        <h3 className="text-[10px] font-black text-orange-500/40 uppercase tracking-[0.4em] flex items-center gap-2 mb-2">
                                                            <div className="w-1.5 h-3 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
                                                            [ TELEMETRY_STREAM ]
                                                        </h3>

                                                        <div className="holographic-island bg-black/40 border border-white/5 rounded-2xl overflow-hidden shadow-inner relative max-h-[350px] custom-scrollbar overflow-y-auto">
                                                            <div className="absolute inset-0 bg-white/[0.01] pointer-events-none"></div>
                                                            
                                                            {/* Render Combined Telemetry History */}
                                                            {(!userLicense?.transferHistory?.length && !userLicense?.violationAttempts?.length) ? (
                                                                <div className="p-10 text-center flex flex-col items-center gap-3">
                                                                    <div className="w-16 h-16 bg-emerald-500/5 rounded-full flex items-center justify-center border border-emerald-500/10 italic text-emerald-500/20">
                                                                        <ShieldCheck size={32} />
                                                                    </div>
                                                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/10 underline-offset-8 underline decoration-emerald-500/20">Mission Clear: Scan Result Negative</div>
                                                                </div>
                                                            ) : (
                                                                <div className="divide-y divide-white/5">
                                                                    {/* Transfers Section */}
                                                                    {userLicense?.transferHistory?.map((transfer: any, idx: number) => (
                                                                        <div key={`transfer-${idx}`} className="p-4 bg-white/[0.01] hover:bg-emerald-500/[0.03] transition-colors flex items-start gap-4 group/item">
                                                                            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20 shadow-lg">
                                                                                <Radio size={14} className="animate-pulse" />
                                                                            </div>
                                                                            <div className="flex-1 space-y-2">
                                                                                <div className="flex justify-between items-center">
                                                                                    <div className="text-[11px] font-black text-white/80 uppercase tracking-widest">Hardware Migration Logged</div>
                                                                                    <div className="text-[8px] font-mono text-white/20 uppercase">{new Date(transfer.date).toLocaleString()}</div>
                                                                                </div>
                                                                                <div className="bg-black/40 rounded-lg p-2.5 border border-white/5 text-[9px] font-mono leading-relaxed">
                                                                                    <div className="flex gap-2"><span className="text-white/20">SOURCE:</span> <span className="text-white/60 truncate">{transfer.from}</span></div>
                                                                                    <div className="flex gap-2 mt-1"><span className="text-emerald-500/40">TARGET:</span> <span className="text-white/60 truncate">{transfer.to}</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}

                                                                    {/* Violations Section */}
                                                                    {userLicense?.violationAttempts?.map((violation: any, idx: number) => (
                                                                        <div key={`violation-${idx}`} className="p-4 bg-red-950/20 hover:bg-red-900/30 transition-colors flex items-start gap-4 border-l-2 border-red-500 animate-pulse-slow">
                                                                            <div className="w-8 h-8 rounded-xl bg-red-500/20 text-red-500 flex items-center justify-center shrink-0 border border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                                                                <AlertTriangle size={14} />
                                                                            </div>
                                                                            <div className="flex-1 space-y-2">
                                                                                 <div className="flex justify-between items-center">
                                                                                    <div className="text-[11px] font-black text-red-400 uppercase tracking-widest italic">Unauthorized Node Intercepted</div>
                                                                                    <div className="text-[8px] font-mono text-white/20 uppercase">{new Date(violation.timestamp).toLocaleString()}</div>
                                                                                </div>
                                                                                <div className="bg-black/60 rounded-lg p-2.5 border border-red-500/10 text-[9px] font-mono leading-relaxed text-red-400/80">
                                                                                    ATTEMPTED_FINGERPRINT: {violation.deviceId.slice(0, 32)}...
                                                                                </div>
                                                                                <div className="text-[8px] font-black uppercase text-red-500/60 tracking-[0.2em] flex items-center gap-2">
                                                                                    <ShieldAlert size={10} /> PROTOCOL_REJECTION: {violation.reason || 'UNTRUSTED_NODE'}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/5 rounded-xl text-[9px] font-gray-500 uppercase tracking-[0.2em]">
                                                            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                                                            Telemetry Monitoring Active [ {new Date().toLocaleTimeString()} ]
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
