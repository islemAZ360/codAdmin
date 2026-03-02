import { useState, useEffect, useMemo } from 'react'
import { auth, db } from './firebase'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    User
} from 'firebase/auth'
import {
    collection,
    onSnapshot,
    doc,
    updateDoc,
    writeBatch,
    query,
    orderBy
} from 'firebase/firestore'
import { LogOut, CheckCircle, XCircle, Users, Search, Activity, Key, Download, Plus, AlertTriangle, RefreshCw, ChevronDown, ChevronUp, Unlock, Lock, PlusCircle, Clock, Globe } from 'lucide-react'

function App() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState<any[]>([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [now, setNow] = useState(Date.now())
    const [activeTab, setActiveTab] = useState<'users' | 'licenses'>('users')
    const [licenses, setLicenses] = useState<any[]>([])
    const [generating, setGenerating] = useState(false)
    const [expandedLicense, setExpandedLicense] = useState<string | null>(null)
    const [showGenModal, setShowGenModal] = useState(false)
    const [genKeyType, setGenKeyType] = useState<'monthly' | 'custom' | 'eternal'>('monthly')
    const [genCustomMonths, setGenCustomMonths] = useState(6)

    useEffect(() => {
        const interval = setInterval(() => setNow(Date.now()), 60000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser.email === 'admin@islamguide.com') {
                setUser(currentUser)
            } else {
                setUser(null)
                if (currentUser) {
                    signOut(auth)
                    setError('Unauthorized: Only the designated admin can access this dashboard.')
                }
            }
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        if (!user) return
        const q = query(collection(db, 'users'))
        const unsubscribe = onSnapshot(q,
            (snapshot) => {
                const usersList: any[] = []
                snapshot.forEach((doc) => {
                    usersList.push({ id: doc.id, ...doc.data() })
                })
                setUsers(usersList)
            },
            (err) => {
                console.error('Users Snapshot Error:', err)
                if (err.code === 'permission-denied') {
                    alert('FIREBASE_PERMISSION_DENIED: Your Firestore rules are blocking access to the users collection.')
                }
            }
        )
        return () => unsubscribe()
    }, [user])

    useEffect(() => {
        if (!user || activeTab !== 'licenses') return
        const q = query(collection(db, 'license_keys'), orderBy('createdAt', 'desc'))
        const unsubscribe = onSnapshot(q,
            (snapshot) => {
                const keysList: any[] = []
                snapshot.forEach((doc) => {
                    keysList.push({ id: doc.id, ...doc.data() })
                })
                setLicenses(keysList)
            },
            (err) => {
                console.error('Licenses Snapshot Error:', err)
                if (err.code === 'permission-denied') {
                    alert('SECURITY_ERROR: Failed to retrieve license keys. Ensure you have applied the Firestore Rules.')
                }
            }
        )
        return () => unsubscribe()
    }, [user, activeTab])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        try { await signInWithEmailAndPassword(auth, email, password) }
        catch (err: any) { setError(err.message) }
    }

    const handleLogout = () => signOut(auth)

    const handleStatusUpdate = async (userId: string, status: string) => {
        try { await updateDoc(doc(db, 'users', userId), { status }) }
        catch (err: any) { alert('Error: ' + err.message) }
    }

    const getOnlineStatus = (lastSeen: string | undefined) => {
        if (!lastSeen) return false
        return (now - new Date(lastSeen).getTime()) / 1000 / 60 < 5
    }

    const formatRelativeTime = (dateString: string | undefined) => {
        if (!dateString) return 'Never'
        const diffMin = Math.floor((now - new Date(dateString).getTime()) / 1000 / 60)
        if (diffMin < 1) return 'Just now'
        if (diffMin < 60) return `${diffMin}m ago`
        if (diffMin < 1440) return `${Math.floor(diffMin / 60)}h ago`
        return new Date(dateString).toLocaleDateString()
    }

    const filteredUsers = useMemo(() => {
        return users.filter(u =>
            (u.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (u.name?.toLowerCase() || '').includes(searchTerm.toLowerCase())
        ).slice(0, 100)
    }, [users, searchTerm])

    const filteredLicenses = useMemo(() => {
        return licenses.filter(l =>
            (l.key?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (l.usedByEmail?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
            (l.usedByName?.toLowerCase() || '').includes(searchTerm.toLowerCase())
        ).slice(0, 100)
    }, [licenses, searchTerm])

    const handleGenerateKeys = async () => {
        setGenerating(true)
        try {
            const batch = writeBatch(db)
            const keysCollection = collection(db, 'license_keys')

            let expiresAt: string | null = null
            let keyTypeLabel = 'eternal'
            if (genKeyType === 'monthly') {
                const d = new Date()
                d.setMonth(d.getMonth() + 1)
                expiresAt = d.toISOString()
                keyTypeLabel = 'monthly'
            } else if (genKeyType === 'custom') {
                const d = new Date()
                d.setMonth(d.getMonth() + genCustomMonths)
                expiresAt = d.toISOString()
                keyTypeLabel = `${genCustomMonths}mo`
            }

            for (let i = 0; i < 500; i++) {
                const key = Math.random().toString(36).substring(2, 10).toUpperCase() + '-' +
                    Math.random().toString(36).substring(2, 10).toUpperCase()
                const newDocRef = doc(keysCollection)
                batch.set(newDocRef, {
                    key, isUsed: false, usedByUid: null, deviceId: null,
                    createdAt: new Date().toISOString(),
                    keyType: keyTypeLabel,
                    expiresAt: expiresAt,
                    transfersUsed: 0, maxTransfers: 3, lastTransferDate: null,
                    previousDevices: [], transferHistory: [], violationAttempts: []
                })
            }
            await batch.commit()
            alert(`500 ${keyTypeLabel} keys generated!`)
            setShowGenModal(false)
        } catch (err: any) {
            alert('Error: ' + err.message)
        } finally { setGenerating(false) }
    }

    const exportKeys = () => {
        const unusedKeys = licenses.filter(l => !l.isUsed).map(l => l.key).join('\n')
        const blob = new Blob([unusedKeys], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `license_keys_${new Date().toISOString().split('T')[0]}.txt`
        a.click()
        URL.revokeObjectURL(url)
    }

    const handleExtendTransfers = async (licenseId: string, currentMax: number) => {
        const newMax = prompt(`Current max transfers: ${currentMax}\nEnter new max:`, String(currentMax + 3))
        if (!newMax) return
        try {
            await updateDoc(doc(db, 'license_keys', licenseId), { maxTransfers: parseInt(newMax) })
        } catch (err: any) { alert('Error: ' + err.message) }
    }

    const handleAllowViolation = async (licenseId: string, violatingDeviceId: string) => {
        if (!window.confirm(`Allow this device to use the key? This will transfer the key to the violating device.`)) return
        try {
            const license = licenses.find(l => l.id === licenseId)
            if (!license) return
            const updatedViolations = (license.violationAttempts || []).map((v: any) =>
                v.deviceId === violatingDeviceId ? { ...v, resolved: true, resolvedAction: 'allowed' } : v
            )
            await updateDoc(doc(db, 'license_keys', licenseId), {
                deviceId: violatingDeviceId,
                violationAttempts: updatedViolations
            })
        } catch (err: any) { alert('Error: ' + err.message) }
    }

    const handleDenyViolation = async (licenseId: string, violatingDeviceId: string) => {
        try {
            const license = licenses.find(l => l.id === licenseId)
            if (!license) return
            const updatedViolations = (license.violationAttempts || []).map((v: any) =>
                v.deviceId === violatingDeviceId ? { ...v, resolved: true, resolvedAction: 'denied' } : v
            )
            await updateDoc(doc(db, 'license_keys', licenseId), { violationAttempts: updatedViolations })
        } catch (err: any) { alert('Error: ' + err.message) }
    }

    const handleRevokeLicense = async (licenseId: string) => {
        if (!window.confirm('REVOKE this license? The user will lose access immediately.')) return
        try {
            await updateDoc(doc(db, 'license_keys', licenseId), {
                isUsed: false, usedByUid: null, usedByEmail: null, usedByName: null,
                deviceId: null, transfersUsed: 0, previousDevices: [],
                transferHistory: [], violationAttempts: []
            })
        } catch (err: any) { alert('Error: ' + err.message) }
    }

    const unresolvedViolations = useMemo(() => {
        return licenses.reduce((count, l) => {
            return count + (l.violationAttempts || []).filter((v: any) => !v.resolved).length
        }, 0)
    }, [licenses])

    if (loading) {
        return (
            <div className="min-h-screen bg-[#021008] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
            </div>
        )
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#020804] bg-[radial-gradient(circle_at_50%_0%,_#0b3a24_0%,_#020804_100%)] flex flex-col items-center justify-center p-6 text-white font-sans overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-md w-full relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-800/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-[#05150d]/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="relative bg-emerald-500/10 p-1 rounded-[2.5rem] border border-emerald-500/20 shadow-inner overflow-hidden">
                                    <img src="/admin.png" alt="Admin Core" className="w-24 h-24 object-cover rounded-[2rem]" />
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl font-black text-center mb-2 tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent italic uppercase">Command Center</h1>
                        <p className="text-emerald-400/40 text-center text-[9px] mb-12 font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-emerald-500/20"></span> Neural Gateway Locked <span className="h-px w-8 bg-emerald-500/20"></span>
                        </p>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-emerald-500/50 uppercase tracking-widest ml-4">Terminal Identifier</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                                    placeholder="admin@islamguide.com" required />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-emerald-500/50 uppercase tracking-widest ml-4">Access Protocol</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                                    placeholder="••••••••" required />
                            </div>
                            {error && (
                                <div className="p-4 bg-red-500/5 border border-red-500/20 text-red-400 text-xs rounded-2xl text-center font-bold">{error}</div>
                            )}
                            <button type="submit" className="w-full relative group/btn overflow-hidden rounded-2xl py-4 font-black text-[#021008] transition-all">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all group-hover/btn:scale-105"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                <span className="relative flex items-center justify-center gap-2">Initialize Session <Activity size={16} /></span>
                            </button>
                        </form>
                    </div>
                </div>
                <p className="mt-12 text-emerald-900/40 text-[9px] font-black uppercase tracking-[0.4em]">interview coder v5.2.0 • secure gateway</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#050505] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(5,5,5,1))] text-white p-6 lg:p-8 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
            <div className="max-w-[1400px] mx-auto relative cursor-default">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src="/admin.png" alt="Admin" className="relative w-16 h-16 rounded-2xl border border-white/10 shadow-2xl object-cover" />
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] border border-white/5 rounded-full text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em] mb-3 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                System Authorization Alpha <span className="text-white/20">|</span> Online
                                {unresolvedViolations > 0 && (
                                    <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-[8px] font-black animate-pulse ml-2 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                                        {unresolvedViolations} ALERT{unresolvedViolations > 1 ? 'S' : ''}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl font-black tracking-tighter flex items-center gap-4 leading-none uppercase italic">
                                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Interview</span>
                                <span className="text-emerald-500 font-light drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">Core</span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block text-right mr-4">
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Active Session</p>
                            <p className="text-xs font-bold text-zinc-400">{user?.email}</p>
                        </div>
                        <button onClick={handleLogout}
                            className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-5 py-3 rounded-2xl hover:bg-red-500/10 hover:border-red-500/20 transition-all group active:scale-95">
                            <LogOut size={18} className="text-white/40 group-hover:text-red-400 transition-colors" />
                            <span className="font-black text-[10px] uppercase tracking-widest text-white/60 group-hover:text-red-400 transition-colors">Terminate</span>
                        </button>
                    </div>
                </div>

                {/* Tabs & Search Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                    <div className="flex p-1.5 bg-white/[0.02] border border-white/5 rounded-2xl inline-flex backdrop-blur-xl">
                        <button onClick={() => setActiveTab('users')}
                            className={`flex items-center gap-3 px-6 py-2.5 rounded-xl font-bold transition-all text-xs ${activeTab === 'users' ? 'bg-white/10 text-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] border border-white/[0.05]' : 'text-white/40 hover:text-white/80'}`}>
                            <Users size={16} /> Users
                        </button>
                        <button onClick={() => setActiveTab('licenses')}
                            className={`relative flex items-center gap-3 px-6 py-2.5 rounded-xl font-bold transition-all text-xs ${activeTab === 'licenses' ? 'bg-white/10 text-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] border border-white/[0.05]' : 'text-white/40 hover:text-white/80'}`}>
                            <Key size={16} /> Licenses
                            {unresolvedViolations > 0 && (
                                <span className="absolute max-w-fit px-1.5 min-w-[20px] -top-2 -right-2 bg-red-500 text-white h-5 rounded-full text-[10px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                                    {unresolvedViolations}
                                </span>
                            )}
                        </button>
                    </div>

                    <div className="relative group w-full lg:w-96 drop-shadow-2xl">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-500 transition-colors" size={18} />
                        <input type="text" placeholder="Search accounts, licenses, dates..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/[0.02] border border-white/5 rounded-xl py-2 pl-10 pr-4 text-white text-xs focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.04] transition-all placeholder:text-white/20 shadow-inner" />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: activeTab === 'users' ? 'Total Users' : 'Total Keys', value: activeTab === 'users' ? users.length : licenses.length, color: 'text-white' },
                        { label: activeTab === 'users' ? 'Pending Approval' : 'Available Keys', value: activeTab === 'users' ? users.filter(u => u.status === 'pending').length : licenses.filter(l => !l.isUsed).length, color: 'text-orange-400' },
                        { label: activeTab === 'users' ? 'Online Now' : (unresolvedViolations > 0 ? 'Active Violations' : 'Online Units'), value: activeTab === 'users' ? users.filter(u => getOnlineStatus(u.lastSeen)).length : unresolvedViolations, color: (activeTab === 'licenses' && unresolvedViolations > 0) ? 'text-red-400' : 'text-emerald-400' }
                    ].map((stat, i) => (
                        <div key={i} className="group relative bg-[#0e0e0e] border border-white/[0.05] p-5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">{stat.label}</p>
                            <p className={`text-3xl font-black tracking-tight ${stat.color}`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                {activeTab === 'users' ? (
                    <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5 bg-white/[0.01]">
                                        <th className="px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Identity</th>
                                        <th className="px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 text-center">Status</th>
                                        <th className="px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Activity</th>
                                        <th className="px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {filteredUsers.map((u) => (
                                        <tr key={u.id} className="hover:bg-white/[0.02] transition-colors group/row">
                                            <td className="px-5 py-3">
                                                <div className="flex items-center gap-5">
                                                    <div className="relative">
                                                        <div className={`w-10 h-10 border rounded-full flex items-center justify-center font-bold text-base ${getOnlineStatus(u.lastSeen) ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-white/5 text-white/40 border-white/5'}`}>
                                                            {u.name?.[0]?.toUpperCase() || '?'}
                                                        </div>
                                                        {getOnlineStatus(u.lastSeen) && <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-[2.5px] border-[#0a0a0a]"></div>}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-sm tracking-tight text-white mb-0.5">{u.name || 'Anonymous'}</div>
                                                        <div className="text-[10px] text-white/40 font-medium tracking-wide">{u.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3 text-center">
                                                <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[9px] font-bold tracking-[0.15em] uppercase border ${u.status === 'approved'
                                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/10'
                                                    : 'bg-orange-500/10 text-orange-400 border-orange-500/10'}`}>
                                                    {(u.status || 'pending')}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3">
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-[11px] font-bold ${getOnlineStatus(u.lastSeen) ? 'text-emerald-400' : 'text-white/30'}`}>
                                                        {getOnlineStatus(u.lastSeen) ? 'Online Now' : formatRelativeTime(u.lastSeen)}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3 text-right">
                                                {u.status === 'pending' ? (
                                                    <button onClick={() => handleStatusUpdate(u.id, 'approved')}
                                                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black text-[9px] font-bold px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                                        <CheckCircle size={14} /> Approve
                                                    </button>
                                                ) : (
                                                    <button onClick={() => handleStatusUpdate(u.id, 'pending')}
                                                        className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/5 text-white/50 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 text-[9px] font-bold px-4 py-2 rounded-lg transition-all">
                                                        <XCircle size={14} /> Revoke
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {filteredUsers.length === 0 && (
                                <div className="p-24 text-center">
                                    <Users size={48} className="mx-auto text-white/10 mb-6" />
                                    <div className="text-white/40 font-bold text-lg tracking-tight">No users found</div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <h2 className="text-2xl font-black tracking-tight flex items-center gap-3 italic uppercase">
                                <Key className="text-emerald-500" size={24} /> License Gateway
                            </h2>
                            <div className="flex gap-4">
                                <button onClick={exportKeys} disabled={licenses.length === 0}
                                    className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-xl hover:bg-white/[0.05] transition-all text-xs font-bold disabled:opacity-20">
                                    <Download size={18} /> Export Buffer
                                </button>
                                <button onClick={() => setShowGenModal(true)}
                                    className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-3 rounded-xl font-bold text-xs transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)]">
                                    <PlusCircle size={18} /> Initialize Keys
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#0e0e0e] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/5 bg-white/[0.01]">
                                            <th className="px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Sequence</th>
                                            <th className="px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 text-center">State</th>
                                            <th className="px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Assigned To</th>
                                            <th className="px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Alerts</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {filteredLicenses.map((l) => (
                                            <tr key={l.id} className="hover:bg-white/[0.02] transition-colors group/row">
                                                <td className="px-5 py-4">
                                                    <div className="font-mono text-emerald-400 text-sm font-bold tracking-wider mb-1 select-all">{l.key}</div>
                                                    <div className="text-[9px] text-white/20 font-medium uppercase tracking-widest">{l.keyType} • Created {new Date(l.createdAt).toLocaleDateString()}</div>
                                                </td>
                                                <td className="px-5 py-4 text-center">
                                                    <span className={`inline-flex px-3 py-1.5 rounded-lg text-[9px] font-bold tracking-widest uppercase border ${l.isUsed ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/10' : 'bg-white/5 text-white/20 border-white/5'}`}>
                                                        {l.isUsed ? 'Active' : 'Standby'}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-4">
                                                    {l.usedByEmail ? (
                                                        <div>
                                                            <div className="text-xs font-bold text-white mb-0.5">{l.usedByName || 'Linked User'}</div>
                                                            <div className="text-[10px] text-white/30 font-medium">{l.usedByEmail}</div>
                                                        </div>
                                                    ) : <span className="text-[10px] text-white/10 font-bold uppercase tracking-widest">Unassigned</span>}
                                                </td>
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        {(l.violationAttempts || []).filter((v: any) => !v.resolved).length > 0 && (
                                                            <div className="flex items-center gap-1.5 bg-red-500/10 text-red-500 px-2 py-1 rounded-md border border-red-500/10 animate-pulse">
                                                                <AlertTriangle size={12} />
                                                                <span className="text-[10px] font-black italic">!</span>
                                                            </div>
                                                        )}
                                                        <button onClick={() => setExpandedLicense(expandedLicense === l.id ? null : l.id)}
                                                            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/30 hover:text-white">
                                                            {expandedLicense === l.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* MODAL: Generate Keys */}
                {showGenModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-md bg-black/40 animate-in fade-in duration-300">
                        <div className="bg-[#0e0e0e] border border-white/10 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">
                            <div className="p-8 border-b border-white/5 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-black tracking-tight italic uppercase">Provision protocol</h3>
                                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">Select key configuration</p>
                                </div>
                                <button onClick={() => setShowGenModal(false)} className="text-white/20 hover:text-white transition-colors">
                                    <XCircle size={24} />
                                </button>
                            </div>
                            <div className="p-8 space-y-8">
                                <div className="grid grid-cols-3 gap-3">
                                    {['monthly', 'custom', 'eternal'].map((type) => (
                                        <button key={type} onClick={() => setGenKeyType(type as any)}
                                            className={`py-3 px-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${genKeyType === type ? 'bg-emerald-500 text-black border-emerald-400' : 'bg-white/5 text-white/40 border-white/5 hover:border-white/10'}`}>
                                            {type}
                                        </button>
                                    ))}
                                </div>

                                {genKeyType === 'custom' && (
                                    <div className="space-y-4 animate-in slide-in-from-top-2">
                                        <label className="block text-[10px] font-black text-emerald-500/50 uppercase tracking-[0.3em]">Duration (Months)</label>
                                        <input type="range" min="1" max="12" value={genCustomMonths} onChange={(e) => setGenCustomMonths(parseInt(e.target.value))}
                                            className="w-full accent-emerald-500 bg-white/5 h-1.5 rounded-full appearance-none" />
                                        <div className="text-center font-black text-3xl text-emerald-400">{genCustomMonths} <span className="text-xs uppercase text-white/20">Months</span></div>
                                    </div>
                                )}

                                <button onClick={handleGenerateKeys} disabled={generating}
                                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] disabled:opacity-50">
                                    {generating ? <RefreshCw className="animate-spin mx-auto" size={18} /> : 'Execute Generation'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.4em]">NEURAL CORE v6.0.4 • © 2026 Admin Hub</p>
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2 text-[9px] font-black text-emerald-500/30 uppercase tracking-widest">
                            <Activity size={10} /> Latency: 24ms
                        </span>
                        <span className="flex items-center gap-2 text-[9px] font-black text-emerald-500/30 uppercase tracking-widest">
                            <Globe size={10} /> Region: Global
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
