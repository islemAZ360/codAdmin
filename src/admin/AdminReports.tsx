import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { format } from 'date-fns';
import { AlertTriangle, Trash2, ShieldAlert, CheckCircle, MessageSquare, Hash, RefreshCw } from 'lucide-react';

export const AdminReports: React.FC = () => {
    const [reports, setReports] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'reports'), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            const list: any[] = [];
            snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
            setReports(list);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    const handleResolve = async (reportId: string) => {
        try {
            await updateDoc(doc(db, 'reports', reportId), { status: 'resolved' });
        } catch (err) {
            console.error("Error resolving report:", err);
        }
    };

    const handleDeleteReport = async (reportId: string) => {
        if (!window.confirm("DELETE THIS REPORT ENTRY?")) return;
        try {
            await deleteDoc(doc(db, 'reports', reportId));
        } catch (err) {
            console.error("Error deleting report:", err);
        }
    };

    const handlePurgeTarget = async (report: any) => {
        if (!window.confirm(`TERMINATE REPORTED ${report.type.toUpperCase()}?`)) return;
        try {
            if (report.type === 'message') {
                await deleteDoc(doc(db, 'rooms', report.roomId, 'messages', report.targetId));
            } else if (report.type === 'room') {
                const msgsSnap = await getDocs(collection(db, 'rooms', report.targetId, 'messages'));
                for (const m of msgsSnap.docs) {
                    await deleteDoc(doc(db, 'rooms', report.targetId, 'messages', m.id));
                }
                await deleteDoc(doc(db, 'rooms', report.targetId));
            }
            await handleResolve(report.id);
            alert("Target data slice successfully purged.");
        } catch (err) {
            console.error("Purge error:", err);
            alert("Purge failed. Target may already be deleted.");
        }
    };

    const handleBanUser = async (uid: string, reportId: string) => {
        if (!uid || !window.confirm("PERMANENTLY BAN THE OFFENDING AGENT?")) return;
        try {
            await updateDoc(doc(db, 'users', uid), { isBanned: true });
            await handleResolve(reportId);
            alert("Agent has been quarantined.");
        } catch (err) {
            console.error("Ban error:", err);
        }
    };

    if (loading) return (
        <div className="flex flex-col items-center justify-center p-20 gap-4">
            <RefreshCw className="animate-spin text-red-500" size={32} />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Scanning Data Streams...</p>
        </div>
    );

    return (
        <div className="holographic-island rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
                <h2 className="text-xl font-black tracking-widest text-white flex items-center gap-3">
                    <AlertTriangle className="text-red-500" />
                    USER REPORTS & VIOLATIONS
                </h2>
                <div className="text-[10px] uppercase font-black tracking-widest text-red-500/50">
                    {reports.filter(r => r.status === 'pending').length} Critical Alerts
                </div>
            </div>

            <div className="overflow-x-auto w-full custom-scrollbar">
                <div className="min-w-[800px]">
                    <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {reports.length === 0 ? (
                    <div className="p-20 text-center text-white/10 font-black uppercase tracking-widest text-sm">
                        Zero violations detected. Mesh is clean.
                    </div>
                ) : (
                    reports.map(report => (
                        <div
                            key={report.id}
                            className={`relative group bg-black/40 border rounded-3xl p-6 transition-all duration-500 ${report.status === 'resolved'
                                ? 'border-white/5 opacity-50'
                                : 'border-red-500/20 hover:border-red-500/50 shadow-[0_10px_30px_rgba(239,68,68,0.05)]'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-2xl ${report.type === 'message' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-amber-500/10 text-amber-400'} border border-white/5`}>
                                        {report.type === 'message' ? <MessageSquare size={20} /> : <Hash size={20} />}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h4 className="font-black text-white uppercase tracking-tight text-sm">
                                                {report.type === 'message' ? `Message via ${report.targetNickname}` : `Room: ${report.targetName}`}
                                            </h4>
                                            {report.status === 'resolved' && (
                                                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[8px] font-black uppercase tracking-widest flex items-center gap-1">
                                                    <CheckCircle size={10} /> Resolved
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">
                                            Reported by {report.reporterNickname} • {report.createdAt ? (report.createdAt.toDate ? format(report.createdAt.toDate(), 'HH:mm:ss MMM d') : format(new Date(report.createdAt), 'HH:mm:ss MMM d')) : 'Pending'}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    {report.status === 'pending' && (
                                        <button
                                            onClick={() => handleResolve(report.id)}
                                            className="p-2.5 text-white/20 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all"
                                            title="Mark as Resolved"
                                        >
                                            <CheckCircle size={18} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleDeleteReport(report.id)}
                                        className="p-2.5 text-white/20 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                        title="Delete Report Entry"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 mb-6 italic text-white/60 text-xs leading-relaxed">
                                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block mb-2 not-italic">Reason Given:</span>
                                "{report.reason}"
                                {report.messageText && (
                                    <div className="mt-4 pt-4 border-t border-white/5 not-italic text-indigo-300 font-medium">
                                        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block mb-2">Message Content:</span>
                                        {report.messageText}
                                    </div>
                                )}
                            </div>

                            {report.status === 'pending' && (
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => handlePurgeTarget(report)}
                                        className="flex-1 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-black border border-red-500/30 font-black text-[10px] uppercase tracking-widest py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        <Trash2 size={14} /> Purge Component
                                    </button>
                                    {report.targetUid && (
                                        <button
                                            onClick={() => handleBanUser(report.targetUid, report.id)}
                                            className="flex-1 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-black border border-amber-500/30 font-black text-[10px] uppercase tracking-widest py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                                        >
                                            <ShieldAlert size={14} /> Ban Offender
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))
                )}
                    </div>
                </div>
            </div>
        </div>
    );
};
