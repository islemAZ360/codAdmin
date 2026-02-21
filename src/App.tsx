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
    query,
    orderBy
} from 'firebase/firestore'
import { LogOut, CheckCircle, XCircle, Users, Search, ShieldCheck, Activity, Clock, Globe } from 'lucide-react'

function App() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState<any[]>([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [now, setNow] = useState(Date.now())

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

        const q = query(collection(db, 'users'), orderBy('createdAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const usersList: any[] = []
            snapshot.forEach((doc) => {
                usersList.push({ id: doc.id, ...doc.data() })
            })
            setUsers(usersList)
        })

        return () => unsubscribe()
    }, [user])

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
        u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (loading) {
        return (
            <div className="min-h-screen bg-[#021008] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
            </div>
        )
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#021008] bg-[radial-gradient(circle_at_50%_50%,_#052c1a_0%,_#021008_100%)] flex flex-col items-center justify-center p-6 text-white font-sans">
                <div className="max-w-md w-full bg-emerald-950/20 backdrop-blur-xl border border-emerald-500/10 rounded-3xl p-10 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                    <div className="flex justify-center mb-8">
                        <div className="bg-emerald-500/10 p-5 rounded-3xl border border-emerald-500/20">
                            <ShieldCheck size={56} className="text-emerald-400" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-center mb-2 tracking-tight">Admin Portal</h1>
                    <p className="text-emerald-400/50 text-center text-sm mb-10 font-medium uppercase tracking-widest">Authorized Access Only</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-bold text-emerald-500/50 mb-2 uppercase tracking-widest ml-1">Admin Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-emerald-950/20 border border-emerald-500/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-emerald-900/50"
                                placeholder="name@islamguide.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold text-emerald-500/50 mb-2 uppercase tracking-widest ml-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-emerald-950/20 border border-emerald-500/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-emerald-900/50"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-2xl text-center font-medium">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#021008] font-bold py-4 rounded-2xl transition-all shadow-[0_10px_30px_rgba(16,185,129,0.2)] active:scale-[0.98]"
                        >
                            Enter Dashboard
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#021008] bg-[radial-gradient(circle_at_0%_0%,_#052c1a_0%,_#021008_100%)] text-white p-6 lg:p-12 font-sans selection:bg-emerald-500/30">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                            <Activity size={10} className="animate-pulse" /> Live Administration
                        </div>
                        <h1 className="text-5xl font-black tracking-tighter flex items-center gap-4">
                            <Users size={48} className="text-emerald-500" /> User Ecosystem
                        </h1>
                        <p className="text-emerald-900/80 mt-3 text-lg font-medium">Manage permissions and monitor realtime user activity across the Interview Coder stack.</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 bg-emerald-950/20 border border-emerald-500/10 px-8 py-3.5 rounded-2xl hover:bg-emerald-500 hover:text-[#021008] hover:font-bold transition-all self-start lg:self-center group"
                    >
                        <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> Sign Out
                    </button>
                </div>

                {/* Dashboard Stats & Search */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-emerald-950/10 border border-emerald-500/10 p-8 rounded-[2rem] backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-emerald-500/50 text-[10px] font-black uppercase tracking-widest">Total Residents</p>
                            <Users size={16} className="text-emerald-500/30" />
                        </div>
                        <p className="text-5xl font-black tracking-tighter">{users.length}</p>
                    </div>
                    <div className="bg-emerald-950/10 border border-emerald-500/10 p-8 rounded-[2rem] backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-yellow-500/10 transition-colors"></div>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-yellow-500/50 text-[10px] font-black uppercase tracking-widest">On Waitlist</p>
                            <Clock size={16} className="text-yellow-500/30" />
                        </div>
                        <p className="text-5xl font-black tracking-tighter text-yellow-500">{users.filter(u => u.status === 'pending').length}</p>
                    </div>
                    <div className="bg-emerald-950/10 border border-emerald-500/10 p-8 rounded-[2rem] backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-emerald-400/10 transition-colors"></div>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-emerald-400/50 text-[10px] font-black uppercase tracking-widest">Currently Online</p>
                            <Globe size={16} className="text-emerald-400/30" />
                        </div>
                        <p className="text-5xl font-black tracking-tighter text-emerald-400">{users.filter(u => getOnlineStatus(u.lastSeen)).length}</p>
                    </div>
                    <div className="relative flex items-center col-span-1 lg:col-span-1">
                        <Search className="absolute left-6 text-emerald-500/30" size={24} />
                        <input
                            type="text"
                            placeholder="Filter by identities..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-full bg-emerald-950/10 border border-emerald-500/10 rounded-[2rem] py-6 pl-16 pr-8 text-white focus:outline-none focus:border-emerald-500/50 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] placeholder:text-emerald-900/50 font-medium"
                        />
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-emerald-950/5 border border-emerald-500/10 rounded-[2.5rem] overflow-hidden backdrop-blur-2xl shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-emerald-500/10 bg-emerald-500/[0.02]">
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500/50">Identity Details</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500/50">Access Status</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500/50">Activity Pulse</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500/50 text-right">Master Control</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-emerald-500/5">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-emerald-500/[0.03] transition-all group">
                                        <td className="px-8 py-8">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl border border-emerald-500/10 ${getOnlineStatus(user.lastSeen) ? 'bg-emerald-500 text-[#021008]' : 'bg-emerald-950/30 text-emerald-500/30'}`}>
                                                    {user.name?.[0].toUpperCase() || '?'}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg tracking-tight group-hover:text-emerald-400 transition-colors">{user.name || 'Anonymous User'}</div>
                                                    <div className="text-xs text-emerald-900 font-medium mt-1">{user.email}</div>
                                                    <div className="text-[10px] text-emerald-900/40 mt-1 font-mono select-all">PWD: {user.password || '••••••••'}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-8">
                                            <span className={`inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest leading-none ${user.status === 'approved'
                                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]'
                                                    : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.05)]'
                                                }`}>
                                                {user.status.toUpperCase()}
                                            </span>
                                            <div className="mt-2 text-[10px] text-emerald-900 font-medium ml-1">Joined {new Date(user.createdAt).toLocaleDateString()}</div>
                                        </td>
                                        <td className="px-8 py-8">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${getOnlineStatus(user.lastSeen) ? 'bg-emerald-400 shadow-[0_0_10px_#10b981] animate-pulse' : 'bg-zinc-800'}`}></div>
                                                <span className={`text-xs font-bold ${getOnlineStatus(user.lastSeen) ? 'text-emerald-400' : 'text-zinc-600'}`}>
                                                    {getOnlineStatus(user.lastSeen) ? 'ACTIVE NOW' : 'OFFLINE'}
                                                </span>
                                            </div>
                                            <div className="text-[10px] text-emerald-900 font-medium mt-2 flex items-center gap-1.5">
                                                <Clock size={10} /> Seen {formatRelativeTime(user.lastSeen)}
                                            </div>
                                        </td>
                                        <td className="px-8 py-8 text-right">
                                            {user.status === 'pending' ? (
                                                <button
                                                    onClick={() => handleStatusUpdate(user.id, 'approved')}
                                                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#021008] text-xs font-black px-6 py-3 rounded-2xl transition-all shadow-[0_10px_25px_rgba(16,185,129,0.2)]"
                                                >
                                                    <CheckCircle size={16} /> GRANT ACCESS
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => handleStatusUpdate(user.id, 'pending')}
                                                    className="inline-flex items-center gap-2 bg-red-500/5 hover:bg-red-500/20 text-red-500 text-xs font-black px-6 py-3 rounded-2xl border border-red-500/20 transition-all"
                                                >
                                                    <XCircle size={16} /> REVOKE ACCESS
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredUsers.length === 0 && (
                            <div className="p-32 text-center">
                                <Users size={64} className="mx-auto text-emerald-950 mb-4" />
                                <div className="text-emerald-950 font-black text-xl tracking-tighter italic">
                                    No identities detected in the ecosystem.
                                </div>
                            </div>
                        )}
                    </div>
                </div>

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
