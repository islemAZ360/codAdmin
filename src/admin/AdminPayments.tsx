import React, { useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Check, X, Clock, CreditCard, User, Hash, Calendar, Trash2, ExternalLink } from 'lucide-react';

interface PaymentRequest {
    id: string;
    userId: string;
    userName: string;
    userEmail: string;
    planId: string;
    transactionId: string;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: any;
}

interface AdminPaymentsProps {
    requests: PaymentRequest[];
    users: any[];
}

export const AdminPayments: React.FC<AdminPaymentsProps> = ({ requests, users }) => {
    const [isActioning, setIsActioning] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleApprove = async (request: PaymentRequest) => {
        if (!window.confirm(`Approve payment for ${request.userEmail}? This will also authorize the user.`)) return;
        
        setIsActioning(request.id);
        try {
            // 1. Update Payment Request
            await updateDoc(doc(db, 'payment_requests', request.id), {
                status: 'approved',
                approvedAt: new Date().toISOString()
            });

            // 2. Authorize User (if they exist)
            if (request.userId) {
                await updateDoc(doc(db, 'users', request.userId), {
                    status: 'approved'
                });
                alert("Payment approved and user authorized.");
            } else {
                alert("Payment approved. User is not registered yet and will be authorized upon registration.");
            }
        } catch (error) {
            console.error("Approval error:", error);
            alert("Failed to approve payment.");
        } finally {
            setIsActioning(null);
        }
    };

    const handleReject = async (request: PaymentRequest) => {
        if (!window.confirm(`Reject payment request from ${request.userEmail}?`)) return;
        
        setIsActioning(request.id);
        try {
            await updateDoc(doc(db, 'payment_requests', request.id), {
                status: 'rejected',
                rejectedAt: new Date().toISOString()
            });
        } catch (error) {
            console.error("Rejection error:", error);
        } finally {
            setIsActioning(null);
        }
    };

    const handleDelete = async (request: PaymentRequest) => {
        if (!window.confirm("Delete this record permanently?")) return;
        try {
            await deleteDoc(doc(db, 'payment_requests', request.id));
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    const filteredRequests = requests.filter(r => 
        r.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) || 
        r.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (r.userName && r.userName.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-4">
            {/* Search Bar */}
            <div className="holographic-island p-4 rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="relative">
                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Email or Transaction ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-black/40 border border-white/5 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:border-emerald-500/30 outline-none transition-all placeholder:text-white/10"
                    />
                </div>
            </div>

            <div className="holographic-island rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-3xl animate-slide-in-bottom">
            <div className="grid grid-cols-5 gap-6 p-6 font-black text-[10px] uppercase tracking-[0.3em] border-b border-white/5 text-white/40 bg-white/[0.02]">
                <div className="col-span-2">User Intelligence</div>
                <div>Plan & Transaction</div>
                <div>Status</div>
                <div className="text-right">Actions</div>
            </div>

            <div className="p-4 space-y-3">
                {filteredRequests.length === 0 ? (
                    <div className="p-16 text-center text-white/20 font-black uppercase tracking-widest text-sm italic">
                        {searchTerm ? "No matching transmissions found." : "No financial transmissions detected."}
                    </div>
                ) : (
                    filteredRequests.map((request) => {
                        const isRegistered = !!request.userId && users.some(u => u.id === request.userId);
                        
                        return (
                        <div key={request.id} className="bg-black/40 border border-white/5 rounded-2xl p-5 hover:bg-emerald-900/5 transition-all group">
                            <div className="grid grid-cols-5 gap-6 items-center">
                                {/* User Info */}
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="font-black text-sm text-white">{request.userName || 'Unknown Agent'}</div>
                                            {!isRegistered && (
                                                <span className="px-1.5 py-0.5 rounded bg-red-500/10 text-red-500 text-[8px] font-black uppercase tracking-widest border border-red-500/20">
                                                    Not Registered
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-[10px] text-white/30 font-medium">{request.userEmail}</div>
                                        <div className="flex items-center gap-2 mt-1 text-[8px] text-white/20 uppercase tracking-widest font-mono">
                                            <Calendar size={10} /> {request.createdAt?.toDate ? request.createdAt.toDate().toLocaleString() : 'N/A'}
                                        </div>
                                    </div>
                                </div>

                                {/* Plan & Transaction */}
                                <div>
                                    <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-wider mb-1">
                                        <CreditCard size={12} /> {request.planId}
                                    </div>
                                    <div className="font-mono text-[10px] text-white/60 bg-white/5 px-2 py-1 rounded inline-flex items-center gap-2">
                                        <Hash size={10} /> {request.transactionId}
                                    </div>
                                </div>

                                {/* Status */}
                                <div>
                                    <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border flex items-center gap-2 w-fit ${
                                        request.status === 'approved' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                                        request.status === 'rejected' ? 'bg-red-500/10 border-red-500/30 text-red-500' :
                                        'bg-amber-500/10 border-amber-500/30 text-amber-400'
                                    }`}>
                                        {request.status === 'pending' && <Clock size={10} className="animate-pulse" />}
                                        {request.status === 'approved' && <Check size={10} />}
                                        {request.status === 'rejected' && <X size={10} />}
                                        {request.status}
                                    </span>
                                </div>

                                {/* Actions */}
                                <div className="text-right flex justify-end gap-3">
                                    {request.status === 'pending' && (
                                        <>
                                            <button
                                                onClick={() => handleApprove(request)}
                                                disabled={isActioning === request.id}
                                                className="bg-emerald-500 text-black p-2.5 rounded-xl hover:bg-emerald-400 transition-all hover:scale-110 shadow-[0_0_15px_rgba(16,185,129,0.3)] disabled:opacity-50"
                                                title="Authorize Payment"
                                            >
                                                <Check size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleReject(request)}
                                                disabled={isActioning === request.id}
                                                className="bg-red-500/20 text-red-500 p-2.5 rounded-xl hover:bg-red-600 hover:text-white transition-all hover:scale-110 border border-red-500/30 disabled:opacity-50"
                                                title="Reject Payment"
                                            >
                                                <X size={18} />
                                            </button>
                                        </>
                                    )}
                                    <button
                                        onClick={() => handleDelete(request)}
                                        className="p-2.5 bg-white/5 hover:bg-red-500/20 text-white/10 hover:text-red-500 rounded-xl border border-white/5 hover:border-red-500/30 transition-all"
                                        title="Purge Record"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        );
                    })
                )}
            </div>
        </div>
    </div>
    );
};
