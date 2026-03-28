import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { LifeBuoy, CheckCircle2, Search, Send, Trash2 } from 'lucide-react';
import { format } from 'date-fns';


export const AdminSupport: React.FC = () => {
    const [tickets, setTickets] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyText, setReplyText] = useState('');

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'support_tickets'), (snapshot) => {
            const list: any[] = [];
            snapshot.forEach(d => list.push({ id: d.id, ...d.data() }));
            list.sort((a, b) => {
                if (a.status === 'open' && b.status !== 'open') return -1;
                if (a.status !== 'open' && b.status === 'open') return 1;
                const getTime = (d: any) => {
                    if (!d) return 0;
                    if (d.toMillis) return d.toMillis();
                    return new Date(d).getTime();
                };
                return getTime(b.createdAt) - getTime(a.createdAt);
            });
            setTickets(list);
        });
        return () => unsub();
    }, []);

    const handleResolve = async (ticketId: string) => {
        try {
            await updateDoc(doc(db, 'support_tickets', ticketId), { status: 'resolved' });
        } catch (err) {
            console.error("Error resolving ticket:", err);
            alert("Failed to resolve ticket.");
        }
    };

    const handleDelete = async (ticketId: string) => {
        if (!window.confirm("Are you SURE you want to delete this ticket permanently?")) return;
        try {
            await deleteDoc(doc(db, 'support_tickets', ticketId));
        } catch (err) {
            console.error("Error deleting ticket:", err);
            alert("Failed to delete ticket.");
        }
    };

    const handleReply = async (ticketId: string) => {
        if (!replyText.trim()) return;
        try {
            await updateDoc(doc(db, 'support_tickets', ticketId), {
                adminResponse: replyText.trim(),
                respondedAt: new Date().toISOString(),
                status: 'resolved'
            });
            setReplyingTo(null);
            setReplyText('');
        } catch (err) {
            console.error("Error sending reply:", err);
            alert("Failed to send reply.");
        }
    };

    const filteredTickets = tickets.filter(t =>
        (t.userNickname || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.subject || '').toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                    <input
                        type="text"
                        placeholder="Search tickets by user or subject..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 hover:border-emerald-500/30 focus:border-emerald-500/50 rounded-2xl py-4 pl-12 pr-4 text-white text-sm font-medium outline-none transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    />
                </div>
                <div className="px-6 py-4 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,1)] animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest text-white/50">
                        {tickets.filter(t => t.status === 'open').length} Open Tickets
                    </span>
                </div>
            </div>

            <div className="holographic-island rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(16,185,129,0.02)] backdrop-blur-3xl">
                <div className="flex items-center gap-4 p-6 border-b border-white/5 bg-white/[0.02]">
                    <div className="h-12 w-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                        <LifeBuoy size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-black tracking-widest text-white uppercase">User Support Tickets</h2>
                        <p className="text-xs text-white/40 tracking-wider">Manage incoming issues</p>
                    </div>
                </div>

                <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {filteredTickets.length === 0 ? (
                        <div className="p-16 text-center text-white/20 font-black uppercase tracking-widest text-sm animate-pulse">No support tickets found.</div>
                    ) : (
                        filteredTickets.map(ticket => (
                            <div key={ticket.id} className="group glass-panel rounded-2xl border border-white/5 bg-black/40 p-6 relative hover:bg-emerald-900/10 hover:border-emerald-500/30 transition-all duration-300">
                                <div className="absolute top-6 right-6 flex items-center gap-2">
                                    <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all duration-500 ${ticket.status === 'resolved'
                                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 opacity-60'
                                        : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                                        }`}
                                    >
                                        {ticket.status === 'resolved' ? 'Resolved' : 'Needs Action'}
                                    </span>
                                </div>

                                <div className="mb-4 pr-32">
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{ticket.subject}</h3>
                                    <div className="flex items-center gap-2 text-xs text-white/40 font-medium">
                                        <span className="text-indigo-400">{ticket.userNickname}</span> •
                                        {ticket.createdAt ? (ticket.createdAt.toDate ? format(ticket.createdAt.toDate(), 'MMM d, yyyy - h:mm a') : format(new Date(ticket.createdAt), 'MMM d, yyyy - h:mm a')) : 'Unknown Date'}
                                    </div>
                                </div>

                                <div className="p-4 bg-black/20 rounded-xl border border-white/5 text-sm text-white/70 leading-relaxed mb-4">
                                    {ticket.message}
                                </div>

                                {ticket.adminResponse && (
                                    <div className="mb-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl relative overflow-hidden">
                                        <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400/50 mb-2">Internal Response</div>
                                        <div className="text-sm text-emerald-100 italic">"{ticket.adminResponse}"</div>
                                        {ticket.respondedAt && (
                                            <div className="text-[8px] text-emerald-500/30 mt-2 font-mono">
                                                TRANSMITTED: {new Date(ticket.respondedAt).toLocaleString()}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {replyingTo === ticket.id ? (
                                    <div className="mb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <textarea
                                            value={replyText}
                                            onChange={(e) => setReplyText(e.target.value)}
                                            placeholder="Enter transmission payload..."
                                            className="w-full bg-black/60 border border-emerald-500/30 rounded-xl p-4 text-sm text-white placeholder:text-white/20 focus:border-emerald-500 focus:outline-none transition-all h-32 resize-none"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleReply(ticket.id)}
                                                className="flex-1 bg-emerald-500 text-black text-xs font-black uppercase tracking-widest py-3 rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                            >
                                                Initialize Response
                                            </button>
                                            <button
                                                onClick={() => setReplyingTo(null)}
                                                className="px-6 bg-white/5 hover:bg-white/10 text-white/40 text-xs font-black uppercase tracking-widest py-3 rounded-xl transition-all"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        {ticket.status === 'open' && (
                                            <button
                                                onClick={() => handleResolve(ticket.id)}
                                                className="bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 text-emerald-400 hover:text-black hover:border-emerald-500 text-xs font-black uppercase tracking-widest px-6 py-2 h-auto transition-all duration-300 rounded-xl"
                                            >
                                                <CheckCircle2 size={16} className="mr-2" /> Mark Resolved
                                            </button>
                                        )}
                                        <button
                                            onClick={() => {
                                                setReplyingTo(ticket.id);
                                                setReplyText(ticket.adminResponse || '');
                                            }}
                                            className="bg-transparent hover:bg-indigo-500/10 border border-white/10 hover:border-indigo-500/50 text-white/40 hover:text-indigo-400 text-xs font-black uppercase tracking-widest px-6 py-2 h-auto transition-all duration-300 rounded-xl"
                                        >
                                            <Send size={16} className="mr-2" /> {ticket.adminResponse ? 'Edit Reply' : 'Transmit Reply'}
                                        </button>
                                        <div className="flex-1" />
                                        <button
                                            onClick={() => handleDelete(ticket.id)}
                                            className="bg-transparent hover:bg-red-500/10 border border-transparent text-white/20 hover:text-red-500 text-xs font-black uppercase tracking-widest px-4 py-2 h-auto transition-all duration-300 rounded-xl opacity-0 group-hover:opacity-100"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
