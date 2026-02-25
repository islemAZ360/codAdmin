import { useState, useEffect } from 'react'
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
import { LogOut, CheckCircle, XCircle, Users, Search, Activity, Clock, Globe, Key, Download, Plus } from 'lucide-react'

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

    // Update 'now' every minute to refresh online status display
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
                    // This alert explains why keys don't show after generation
                    alert('SECURITY_ERROR: Failed to retrieve license keys. Ensure you have applied the Firestore Rules I provided.')
                }
            }
        )

        return () => unsubscribe()
    }, [user, activeTab])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err: any) {
            setError(err.message)
        }
    }

    const handleLogout = () => {
        signOut(auth)
    }

    const handleStatusUpdate = async (userId: string, status: string) => {
        try {
            await updateDoc(doc(db, 'users', userId), { status })
        } catch (err: any) {
            alert('Error updating status: ' + err.message)
        }
    }

    const getOnlineStatus = (lastSeen: string | undefined) => {
        if (!lastSeen) return false
        const lastSeenDate = new Date(lastSeen).getTime()
        const diffInMinutes = (now - lastSeenDate) / 1000 / 60
        return diffInMinutes < 5 // Consider online if seen within last 5 minutes
    }

    const formatRelativeTime = (dateString: string | undefined) => {
        if (!dateString) return 'Never'
        const date = new Date(dateString)
        const diffInMinutes = Math.floor((now - date.getTime()) / 1000 / 60)

        if (diffInMinutes < 1) return 'Just now'
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
        return date.toLocaleDateString()
    }

    const filteredUsers = users.filter(u =>
        (u.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (u.name?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    )

    const handleGenerateKeys = async () => {
        if (!window.confirm('Generate 500 new license keys?')) return
        setGenerating(true)
        try {
            const batchSize = 500
            const batch = writeBatch(db)
            const keysCollection = collection(db, 'license_keys')

            for (let i = 0; i < batchSize; i++) {
                const key = Math.random().toString(36).substring(2, 10).toUpperCase() + '-' +
                    Math.random().toString(36).substring(2, 10).toUpperCase()

                const newDocRef = doc(keysCollection)
                batch.set(newDocRef, {
                    key,
                    isUsed: false,
                    usedByUid: null,
                    deviceId: null,
                    createdAt: new Date().toISOString()
                })
            }

            await batch.commit()
            alert('500 keys generated successfully!')
        } catch (err: any) {
            console.error('Batch Generation Error:', err)
            alert('Error generating keys: ' + err.message)
        } finally {
            setGenerating(false)
        }
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
                                <div className="relative bg-emerald-500/10 p-5 rounded-[2rem] border border-emerald-500/20 shadow-inner">
                                    <CheckCircle size={56} className="text-emerald-400" />
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl font-black text-center mb-2 tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">Admin Hub</h1>
                        <p className="text-emerald-400/40 text-center text-[10px] mb-12 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-emerald-500/20"></span> Authorized Node <span className="h-px w-8 bg-emerald-500/20"></span>
                        </p>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-emerald-500/50 uppercase tracking-widest ml-4">Terminal Identifier</label>
                                <div className="relative group/input">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                                        placeholder="admin@islamguide.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[10px] font-black text-emerald-500/50 uppercase tracking-widest ml-4">Access Protocol</label>
                                <div className="relative group/input">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="p-4 bg-red-500/5 border border-red-500/20 text-red-400 text-xs rounded-2xl text-center font-bold animate-shake">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full relative group/btn overflow-hidden rounded-2xl py-4 font-black text-[#021008] transition-all"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all group-hover/btn:scale-105"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    Initialize Session <Activity size={16} />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
                <p className="mt-12 text-emerald-900/40 text-[9px] font-black uppercase tracking-[0.4em]">interview coder v5.2.0 • secure gateway</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#020804] bg-[radial-gradient(circle_at_0%_0%,_#082e1b_0%,_#020804_100%)] text-white p-6 lg:p-12 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative cursor-default">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-20">
                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-500/10 border border-white/5 rounded-full text-emerald-400 text-[9px] font-black uppercase tracking-[0.2em] mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Grid Command Center
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter flex items-center gap-6 leading-none">
                            <Users size={64} className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
                            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">User Ecosystem</span>
                        </h1>
                        <p className="text-emerald-400/30 mt-6 text-lg font-medium max-w-xl">Orchestrate permissions, monitor telemetry, and manage activation protocols across the global interview-coder infrastructure.</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-10 py-4 rounded-[1.5rem] hover:bg-red-500 hover:text-white hover:border-red-500 transition-all group shadow-2xl backdrop-blur-lg"
                    >
                        <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-black text-xs uppercase tracking-widest">Logout Node</span>
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-16 p-2 bg-white/[0.02] border border-white/5 rounded-[2rem] self-start inline-flex">
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`flex items-center gap-3 px-10 py-5 rounded-[1.5rem] font-bold transition-all text-xs uppercase tracking-widest ${activeTab === 'users' ? 'bg-emerald-500 text-[#021008] shadow-[0_15px_30px_rgba(16,185,129,0.25)]' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}
                    >
                        <Users size={16} /> Identities
                    </button>
                    <button
                        onClick={() => setActiveTab('licenses')}
                        className={`flex items-center gap-3 px-10 py-5 rounded-[1.5rem] font-bold transition-all text-xs uppercase tracking-widest ${activeTab === 'licenses' ? 'bg-emerald-500 text-[#021008] shadow-[0_15px_30px_rgba(16,185,129,0.25)]' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}
                    >
                        <Key size={16} /> Protocols
                    </button>
                </div>

                {/* Dashboard Stats & Search */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white/[0.03] border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-emerald-500/30 text-[9px] font-black uppercase tracking-[0.2em]">{activeTab === 'users' ? 'Registered Units' : 'Total Protocols'}</p>
                            <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/10">
                                <Users size={16} className="text-emerald-500" />
                            </div>
                        </div>
                        <p className="text-6xl font-black tracking-tighter">{activeTab === 'users' ? users.length : licenses.length}</p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-orange-500/10 transition-colors"></div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-orange-500/30 text-[9px] font-black uppercase tracking-[0.2em]">{activeTab === 'users' ? 'Pending Decryption' : 'Available Keys'}</p>
                            <div className="bg-orange-500/10 p-2 rounded-xl border border-orange-500/10">
                                <Clock size={16} className="text-orange-500" />
                            </div>
                        </div>
                        <p className="text-6xl font-black tracking-tighter text-orange-400">
                            {activeTab === 'users' ? users.filter(u => u.status === 'pending').length : licenses.filter(l => !l.isUsed).length}
                        </p>
                    </div>

                    <div className="bg-white/[0.03] border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-blue-500/30 text-[9px] font-black uppercase tracking-[0.2em]">{activeTab === 'users' ? 'Live Telemetry' : 'Active Sessions'}</p>
                            <div className="bg-blue-500/10 p-2 rounded-xl border border-blue-500/10">
                                <Globe size={16} className="text-blue-500" />
                            </div>
                        </div>
                        <p className="text-6xl font-black tracking-tighter text-blue-400">
                            {activeTab === 'users' ? users.filter(u => getOnlineStatus(u.lastSeen)).length : licenses.filter(l => l.isUsed).length}
                        </p>
                    </div>

                    <div className="relative group col-span-1">
                        <div className="absolute -inset-1 bg-white/5 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition"></div>
                        <div className="relative h-full flex items-center">
                            <Search className="absolute left-8 text-white/20" size={24} />
                            <input
                                type="text"
                                placeholder="Search the grid..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full h-full bg-white/[0.04] border border-white/10 rounded-[2.5rem] py-8 pl-20 pr-10 text-white focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.06] transition-all placeholder:text-white/10 text-lg font-bold"
                            />
                        </div>
                    </div>
                </div>

                {activeTab === 'users' ? (
                    <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl shadow-2xl relative">
                        <div className="absolute inset-0 bg-emerald-500/[0.01] pointer-events-none"></div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5 bg-white/[0.02]">
                                        <th className="px-10 py-8 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/50">Subject Identity</th>
                                        <th className="px-10 py-8 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/50 text-center">Protocol Status</th>
                                        <th className="px-10 py-8 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/50">Activity Pulse</th>
                                        <th className="px-10 py-8 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/50 text-right">Direct Control</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {filteredUsers.map((user) => (
                                        <tr key={user.id} className="hover:bg-white/[0.03] transition-all group/row relative">
                                            <td className="px-10 py-10">
                                                <div className="flex items-center gap-6">
                                                    <div className="relative">
                                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl border transition-all duration-500 shadow-lg ${getOnlineStatus(user.lastSeen) ? 'bg-emerald-500 text-[#021008] border-emerald-400 scale-105' : 'bg-white/[0.03] text-emerald-500/20 border-white/5'}`}>
                                                            {user.name?.[0].toUpperCase() || '?'}
                                                        </div>
                                                        {getOnlineStatus(user.lastSeen) && (
                                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#020804] animate-pulse"></div>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <div className="font-black text-xl tracking-tight group-hover/row:text-emerald-400 transition-colors">{user.name || 'Anonymous Unit'}</div>
                                                        <div className="text-[10px] text-white/30 font-bold mt-1.5 uppercase tracking-widest">{user.email}</div>
                                                        <div className="text-[10px] text-emerald-500/20 mt-2 font-mono select-all flex items-center gap-2">
                                                            <Key size={10} className="text-emerald-500/10" /> PWD: {user.password || '••••••••'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-10 text-center">
                                                <span className={`inline-flex items-center px-5 py-2 rounded-xl text-[9px] font-black tracking-[0.2em] leading-none border transition-all ${user.status === 'approved'
                                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                                                    : 'bg-orange-500/10 text-orange-400 border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)]'
                                                    }`}>
                                                    {user.status.toUpperCase()}
                                                </span>
                                                <div className="mt-3 text-[9px] text-white/20 font-bold uppercase tracking-widest">Linked {new Date(user.createdAt).toLocaleDateString()}</div>
                                            </td>
                                            <td className="px-10 py-10">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2.5 h-2.5 rounded-full ${getOnlineStatus(user.lastSeen) ? 'bg-emerald-400 shadow-[0_0_15px_#10b981] animate-pulse' : 'bg-white/5'}`}></div>
                                                    <span className={`text-[10px] font-black tracking-widest ${getOnlineStatus(user.lastSeen) ? 'text-emerald-400' : 'text-white/10'}`}>
                                                        {getOnlineStatus(user.lastSeen) ? 'ACTIVE NODE' : 'DISCONNECTED'}
                                                    </span>
                                                </div>
                                                <div className="text-[9px] text-white/30 font-bold mt-3 flex items-center gap-2 uppercase tracking-widest">
                                                    <Clock size={12} className="text-emerald-500/20" /> Last Echo: {formatRelativeTime(user.lastSeen)}
                                                </div>
                                            </td>
                                            <td className="px-10 py-10 text-right">
                                                <div className="flex justify-end items-center gap-4">
                                                    {user.status === 'pending' ? (
                                                        <button
                                                            onClick={() => handleStatusUpdate(user.id, 'approved')}
                                                            className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-[#021008] text-[10px] font-black px-8 py-4 rounded-2xl transition-all shadow-[0_15px_35px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 uppercase tracking-widest"
                                                        >
                                                            <CheckCircle size={18} /> Grant Protocol
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleStatusUpdate(user.id, 'pending')}
                                                            className="flex items-center gap-3 bg-white/[0.03] border border-white/10 text-red-400/60 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 text-[10px] font-black px-8 py-4 rounded-2xl transition-all uppercase tracking-widest"
                                                        >
                                                            <XCircle size={18} /> Sever Link
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {filteredUsers.length === 0 && (
                                <div className="p-32 text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#0b3a24_0%,_transparent_70%)] opacity-10"></div>
                                    <Users size={80} className="mx-auto text-emerald-500/10 mb-8 animate-pulse" />
                                    <div className="text-white/20 font-black text-2xl tracking-tighter italic uppercase mb-12">
                                        No digital signatures detected in this sector.
                                    </div>

                                    <div className="relative group max-w-lg mx-auto">
                                        <div className="absolute -inset-1 bg-white/5 rounded-[2rem] blur opacity-30"></div>
                                        <div className="relative p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] backdrop-blur-xl">
                                            <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-3">
                                                <Activity size={12} /> Debug Synchronizer <Activity size={12} />
                                            </p>
                                            <ul className="text-[10px] text-white/30 space-y-3 text-left font-bold uppercase tracking-wider">
                                                <li className="flex gap-4">
                                                    <span className="text-emerald-500">01</span>
                                                    <span>Inject <span className="text-white">Firestore Rules</span> into the Firebase Cloud Terminal.</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="text-emerald-500">02</span>
                                                    <span>Verify the <span className="text-white">Users Collection</span> is populated with active nodes.</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="text-emerald-500">03</span>
                                                    <span>Scan Browser Console (F12) for <span className="text-red-500">Permission_Denied</span> telemetry.</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="text-emerald-500">04</span>
                                                    <span>Initialize a new node registration and wait for <span className="text-white">Real-Time Sync</span>.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-10 animate-fade-in">
                        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 pb-8 border-b border-white/5">
                            <div>
                                <h2 className="text-4xl font-black tracking-tighter bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">Key Provisioning Gateway</h2>
                                <p className="text-white/20 mt-4 text-lg font-medium max-w-xl">Generate, export, and monitor encrypted activation tokens for unauthorized node suppression.</p>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={exportKeys}
                                    disabled={licenses.length === 0}
                                    className="flex items-center gap-3 bg-white/[0.03] border border-white/10 px-8 py-5 rounded-2xl hover:bg-white/10 text-white font-black text-[10px] uppercase tracking-widest transition-all disabled:opacity-20 active:scale-95"
                                >
                                    <Download size={20} /> Export Local Buffer
                                </button>
                                <button
                                    onClick={handleGenerateKeys}
                                    disabled={generating}
                                    className="relative group/gen overflow-hidden flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-[#021008] px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-[0_20px_40px_rgba(16,185,129,0.3)] disabled:opacity-50 active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover/gen:translate-x-full transition-transform duration-1000"></div>
                                    <Plus size={20} /> {generating ? 'Processing Cycle...' : 'Generate 500 Protocols'}
                                </button>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/5 bg-white/[0.02]">
                                            <th className="px-10 py-8 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/50">Activation Sequence</th>
                                            <th className="px-10 py-8 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/50 text-center">Lifecycle</th>
                                            <th className="px-10 py-8 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/50">Provisioned Target</th>
                                            <th className="px-10 py-8 text-[9px] font-black uppercase tracking-[0.3em] text-emerald-500/50 text-right">Machine signature</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {licenses.map((license) => (
                                            <tr key={license.id} className="hover:bg-white/[0.03] transition-all group/row">
                                                <td className="px-10 py-10">
                                                    <div className="font-mono text-emerald-400 text-lg font-black tracking-[0.1em] select-all group-hover/row:scale-[1.02] transition-transform origin-left">{license.key}</div>
                                                    <div className="text-[9px] text-white/20 mt-2 font-bold uppercase tracking-widest italic">Initialized {new Date(license.createdAt).toLocaleDateString()}</div>
                                                </td>
                                                <td className="px-10 py-10 text-center">
                                                    <span className={`inline-flex items-center px-5 py-2 rounded-xl text-[9px] font-black tracking-[0.2em] leading-none border transition-all ${license.isUsed
                                                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                                                        : 'bg-white/[0.03] text-white/20 border-white/5'
                                                        }`}>
                                                        {license.isUsed ? 'DEPLOYED' : 'STANDBY'}
                                                    </span>
                                                </td>
                                                <td className="px-10 py-10">
                                                    {license.usedByUid ? (
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center font-black text-emerald-500/40 uppercase">
                                                                {(license.usedByName || 'U')[0]}
                                                            </div>
                                                            <div>
                                                                <div className="text-white/80 font-black text-sm tracking-tight">
                                                                    {license.usedByName ||
                                                                        users.find(u => u.id === license.usedByUid)?.name ||
                                                                        'Linked Unit'}
                                                                </div>
                                                                <div className="text-[10px] text-white/20 mt-1 font-bold uppercase tracking-widest">
                                                                    {license.usedByEmail ||
                                                                        users.find(u => u.id === license.usedByUid)?.email ||
                                                                        license.usedByUid}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="text-white/5 font-black text-[10px] uppercase tracking-[0.3em]">Awaiting Provisioning</div>
                                                    )}
                                                </td>
                                                <td className="px-10 py-10 text-right font-mono text-[9px] text-white/10 group-hover/row:text-white/30 transition-colors">
                                                    {license.deviceId || '--- — ---'}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {licenses.length === 0 && (
                                    <div className="p-32 text-center">
                                        <Key size={80} className="mx-auto text-emerald-500/10 mb-8 animate-pulse" />
                                        <div className="text-white/20 font-black text-2xl tracking-tighter italic uppercase">
                                            Vault is empty. No protocols detected.
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer Info */}
                <div className="mt-12 flex flex-col items-center justify-center text-emerald-900/40 text-[10px] font-bold uppercase tracking-widest gap-2">
                    <p>&copy; 2026 Interview Coder Ecosystem Foundation</p>
                    <p className="flex items-center gap-2">Protocol 5.2.0-Alpha <span className="w-1 h-1 bg-emerald-900/20 rounded-full"></span> Secure Node Active</p>
                </div>
            </div>
        </div>
    )
}

export default App
