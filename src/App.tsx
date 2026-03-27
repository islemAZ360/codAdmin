import { useState, useEffect } from 'react'
import { auth, db } from './firebase'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    User
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { Activity } from 'lucide-react'
import adminLogo from './public/admin.png'
import { AdminDashboard } from './admin/AdminDashboard'

function App() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    const userDocRef = doc(db, 'users', currentUser.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists() && userDoc.data().role === 'admin') {
                        setUser(currentUser);
                    } else {
                        setUser(null);
                        await signOut(auth);
                        setError('Unauthorized: Only the designated admin can access this dashboard.');
                    }
                } catch (err: any) {
                    setUser(null);
                    await signOut(auth);
                    setError('Verification failed: ' + err.message);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        try { await signInWithEmailAndPassword(auth, email, password) }
        catch (err: any) { setError(err.message) }
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
                                <div className="relative bg-emerald-500/10 p-1 rounded-[2.5rem] border border-emerald-500/20 shadow-inner overflow-hidden">
                                    <img src={adminLogo} alt="Admin Core" className="w-24 h-24 object-cover rounded-[2rem]" />
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
                                    placeholder="admin@system-util.net" required />
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
                <p className="mt-12 text-emerald-900/40 text-[9px] font-black uppercase tracking-[0.4em]">our-fix v5.2.0 • secure gateway</p>
            </div>
        )
    }

    return <AdminDashboard />
}

export default App
