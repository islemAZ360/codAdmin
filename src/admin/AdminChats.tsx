import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, deleteDoc, query, orderBy, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../firebase';

import { format } from 'date-fns';
import { Hash, Trash2, Link as LinkIcon, Lock, Globe, MessageSquare, Eye, X, Activity, ShieldCheck, User, RefreshCw, UserX, Users, ShieldAlert, ShieldOff, Zap } from 'lucide-react';
import { updateDoc, arrayRemove, getDocs, setDoc } from 'firebase/firestore';

export const AdminChats: React.FC = () => {
    const [rooms, setRooms] = useState<any[]>([]);
    const [selectedRoom, setSelectedRoom] = useState<any | null>(null);
    const [messages, setMessages] = useState<any[]>([]);
    const [loadingMessages, setLoadingMessages] = useState(false);
    const [roomMembers, setRoomMembers] = useState<any[]>([]);
    const [viewMode, setViewMode] = useState<'feed' | 'manifest'>('feed');
    const [actionLoading, setActionLoading] = useState<string | null>(null);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'rooms'), (snapshot: QuerySnapshot<DocumentData>) => {
            const list: any[] = [];
            snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
            list.sort((a, b) => {
                const getTime = (d: any) => {
                    if (!d || (!d.toMillis && isNaN(new Date(d).getTime()))) return 0;
                    if (d.toMillis) return d.toMillis();
                    return new Date(d).getTime();
                };
                return getTime(b.createdAt) - getTime(a.createdAt);
            });
            setRooms(list);
        });

        const unsubConfig = onSnapshot(doc(db, 'system', 'config'), (snapshot) => {
            if (snapshot.exists()) {
                setIsLocked(snapshot.data().isLocked || false);
            }
        });

        return () => {
            unsub();
            unsubConfig();
        };
    }, []);

    useEffect(() => {
        if (!selectedRoom) {
            setMessages([]);
            setRoomMembers([]);
            setViewMode('feed');
            return;
        }

        setLoadingMessages(true);
        // Messages listener
        const q = query(collection(db, 'rooms', selectedRoom.id, 'messages'), orderBy('createdAt', 'desc'));
        const unsubMsgs = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
            const msgList: any[] = [];
            snapshot.forEach(doc => msgList.push({ id: doc.id, ...doc.data() }));
            setMessages(msgList);
            setLoadingMessages(false);
        });

        // Fetch member details
        const fetchMembers = async () => {
            try {
                const uids = [...(selectedRoom.participants || []), ...(selectedRoom.admins || [])];
                if (uids.length === 0) return;

                // Group UIDs to avoid large 'in' queries
                const membersList: any[] = [];
                const usersSnap = await getDocs(query(collection(db, 'users')));
                usersSnap.forEach(uDoc => {
                    if (uids.includes(uDoc.id)) {
                        membersList.push({
                            uid: uDoc.id,
                            ...uDoc.data(),
                            isAdmin: selectedRoom.admins?.includes(uDoc.id)
                        });
                    }
                });
                membersList.sort((a, b) => (a.isAdmin === b.isAdmin) ? 0 : a.isAdmin ? -1 : 1);
                setRoomMembers(membersList);
            } catch (err) {
                console.error("Error fetching members:", err);
            }
        };

        fetchMembers();

        return () => unsubMsgs();
    }, [selectedRoom]);

    const handleKickMember = async (memberUid: string) => {
        if (!selectedRoom || !window.confirm("TERMINATE THIS NODE'S ACCESS?")) return;
        setActionLoading(memberUid);
        try {
            const roomRef = doc(db, 'rooms', selectedRoom.id);
            await updateDoc(roomRef, {
                participants: arrayRemove(memberUid),
                admins: arrayRemove(memberUid)
            });
            setRoomMembers(prev => prev.filter(m => m.uid !== memberUid));
        } catch (err) {
            console.error("Error kicking member:", err);
            alert("Failed to terminate access.");
        } finally {
            setActionLoading(null);
        }
    };

    const handleBanMember = async (memberUid: string) => {
        if (!window.confirm("PERMANENTLY BAN THIS AGENT? This will restrict all Community Hub access.")) return;
        setActionLoading(`ban_${memberUid}`);
        try {
            await updateDoc(doc(db, 'users', memberUid), {
                isBanned: true
            });
            // Also kick them from the current room
            if (selectedRoom) {
                await updateDoc(doc(db, 'rooms', selectedRoom.id), {
                    participants: arrayRemove(memberUid),
                    admins: arrayRemove(memberUid)
                });
            }
            setRoomMembers(prev => prev.filter(m => m.uid !== memberUid));
            alert("Agent has been banned from the mesh.");
        } catch (err) {
            console.error("Error banning member:", err);
            alert("Ban sequence failed.");
        } finally {
            setActionLoading(null);
        }
    };

    const handleDeleteMessage = async (msgId: string) => {
        if (!selectedRoom || !window.confirm("PURGE THIS DATA SLICE?")) return;
        try {
            await deleteDoc(doc(db, 'rooms', selectedRoom.id, 'messages', msgId));
        } catch (err) {
            console.error("Error purging message:", err);
        }
    };

    const handleDeleteRoom = async (roomId: string) => {
        if (!window.confirm("Are you SURE you want to delete this entire room? This action is irreversible.")) return;
        try {
            await deleteDoc(doc(db, 'rooms', roomId));
            if (selectedRoom?.id === roomId) setSelectedRoom(null);
        } catch (err) {
            console.error("Error deleting room:", err);
            alert("Failed to delete room.");
        }
    };

    const handleToggleLockdown = async () => {
        const newState = !isLocked;
        if (!window.confirm(`${newState ? 'ACTIVATE' : 'DEACTIVATE'} MESH LOCKDOWN? ${newState ? 'This will prevent all users from creating new rooms.' : ''}`)) return;

        try {
            await setDoc(doc(db, 'system', 'config'), { isLocked: newState }, { merge: true });
        } catch (err) {
            console.error("Lockdown error:", err);
        }
    };

    const handlePurgeAll = async () => {
        if (!window.confirm("CRITICAL: PURGE ALL DATA FROM ALL CHANNELS? THIS CANNOT BE UNDONE.")) return;
        const confirmPhrase = "TERMINATE MESH";
        const input = window.prompt(`Type '${confirmPhrase}' to execute scorched earth protocol:`);
        if (input !== confirmPhrase) return;

        try {
            const snap = await getDocs(collection(db, 'rooms'));
            for (const d of snap.docs) {
                // Wipe messages first
                const msgsSnap = await getDocs(collection(db, 'rooms', d.id, 'messages'));
                for (const m of msgsSnap.docs) {
                    await deleteDoc(doc(db, 'rooms', d.id, 'messages', m.id));
                }
                // Wipe room
                await deleteDoc(doc(db, 'rooms', d.id));
            }
            alert("Mesh successfully wiped. All nodes and transmissions purged.");
        } catch (err) {
            console.error("Purge error:", err);
            alert("Purge sequence interrupted.");
        }
    };

    return (
        <div className="holographic-island rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(16,185,129,0.02)] backdrop-blur-3xl">
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
                <h2 className="text-xl font-black tracking-widest text-white flex items-center gap-3">
                    <Hash className="text-emerald-400" />
                    COMMUNITY CHATS
                </h2>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleToggleLockdown}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${isLocked
                            ? 'bg-red-500 text-white border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                            : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10'
                            }`}
                    >
                        {isLocked ? <ShieldOff size={14} /> : <ShieldCheck size={14} />}
                        {isLocked ? 'Mesh Locked' : 'Normal Operations'}
                    </button>
                    <button
                        onClick={handlePurgeAll}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all"
                    >
                        <Zap size={14} /> Purge Mesh
                    </button>
                    <div className="text-[10px] uppercase font-black tracking-widest text-emerald-400/50">
                        {rooms.length} Active Channels
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-6 p-6 font-black text-[10px] uppercase tracking-[0.3em] border-b border-white/5 text-white/40 bg-white/[0.02]">
                <div className="col-span-2">Room Identification</div>
                <div>Access Type</div>
                <div className="text-center">Nodes</div>
                <div className="text-right">Command</div>
            </div>

            <div className="p-4 space-y-3 perspective-container max-h-[60vh] overflow-y-auto pr-2">
                {rooms.length === 0 ? (
                    <div className="p-16 text-center text-white/20 font-black uppercase tracking-widest text-sm animate-pulse">No active chat channels.</div>
                ) : (
                    rooms.map(room => (
                        <div key={room.id} className="hover-3d-card grid grid-cols-5 gap-6 p-5 items-center bg-black/40 hover:bg-emerald-900/10 border border-white/5 hover:border-emerald-500/30 rounded-2xl transition-all duration-500 group/row shadow-lg">
                            <div className="col-span-2 flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black border transition-all duration-500 ${room.isPrivate ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                                    {room.isPrivate ? <Lock size={16} /> : <Globe size={16} />}
                                </div>
                                <div className="overflow-hidden">
                                    <div className="font-black text-sm text-white/90 group-hover/row:text-white transition-colors truncate flex items-center gap-2">
                                        {room.name}
                                    </div>
                                    <div className="text-[10px] text-white/30 font-medium truncate tracking-tight mt-1 flex items-center gap-2">
                                        Created by {room.creatorNickname} • {room.createdAt ? (room.createdAt.toDate ? format(room.createdAt.toDate(), 'MMM d, yyyy') : format(new Date(room.createdAt), 'MMM d, yyyy')) : 'Unknown Date'}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all duration-500 ${room.isPrivate
                                    ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
                                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                                    }`}>
                                    {room.isPrivate ? 'Restricted' : 'Public Access'}
                                </span>
                            </div>

                            <div className="text-center font-black text-white/60 text-[11px] tabular-nums">
                                {(room.participants?.length || 0) + (room.admins?.length || 0)}
                            </div>

                            <div className="text-right flex items-center justify-end gap-2">
                                <button
                                    onClick={() => setSelectedRoom(room)}
                                    className="p-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black transition-all duration-300 rounded-xl border border-emerald-500/20 hover:border-emerald-500 flex items-center justify-center"
                                    title="Spectate Internal Feed"
                                >
                                    <Eye size={16} />
                                </button>
                                <a
                                    href={`http://localhost:5173/room/${room.id}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 bg-transparent hover:bg-indigo-500/10 text-white/40 hover:text-indigo-400 transition-all duration-300 rounded-xl border border-white/10 hover:border-indigo-500/50 flex items-center justify-center"
                                    title="Open Room in Community Site"
                                >
                                    <LinkIcon size={16} />
                                </a>
                                <button
                                    onClick={() => handleDeleteRoom(room.id)}
                                    className="p-2 bg-transparent hover:bg-red-500/10 text-white/40 hover:text-red-500 transition-all duration-300 rounded-xl border border-white/10 hover:border-red-500/50 flex items-center justify-center min-w-0 w-auto h-auto"
                                    title="Delete Room"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* MODAL: Spectate Room */}
            {selectedRoom && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 backdrop-blur-md bg-black/60 animate-in fade-in duration-300">
                    <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-4xl h-[80vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
                        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                                    <MessageSquare size={28} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-black tracking-tight text-white uppercase italic">{selectedRoom.name}</h3>
                                        <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[8px] font-black uppercase tracking-widest border border-emerald-500/20">Live Feed</div>
                                    </div>
                                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
                                        <Activity size={10} className="text-emerald-500 animate-pulse" /> Decrypting internal data stream...
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setSelectedRoom(null)} className="bg-white/5 hover:bg-white/10 p-3 rounded-2xl text-white/20 hover:text-white transition-all">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex bg-black/40 border-b border-white/5 p-2 gap-2">
                            <button
                                onClick={() => setViewMode('feed')}
                                className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 ${viewMode === 'feed' ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
                            >
                                <MessageSquare size={14} /> Internal Feed
                            </button>
                            <button
                                onClick={() => setViewMode('manifest')}
                                className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 ${viewMode === 'manifest' ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
                            >
                                <Users size={14} /> Node Manifest
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 space-y-4 bg-[radial-gradient(circle_at_50%_0%,_#0e1a14_0%,_#0a0a0a_100%)]">
                            {viewMode === 'feed' ? (
                                loadingMessages ? (
                                    <div className="h-full flex flex-col items-center justify-center space-y-4">
                                        <RefreshCw className="animate-spin text-emerald-500" size={32} />
                                        <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Synchronizing sequence...</p>
                                    </div>
                                ) : messages.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center space-y-4 text-white/10 uppercase font-black text-sm tracking-widest">
                                        Empty data buffer. No transmissions detected.
                                    </div>
                                ) : (
                                    messages.map((msg) => (
                                        <div key={msg.id} className="group relative bg-white/[0.02] border border-white/[0.03] p-5 rounded-3xl hover:bg-white/[0.04] transition-all">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-black text-[10px] border border-emerald-500/20">
                                                        {msg.senderNickname?.[0]?.toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <div className="text-[11px] font-black text-white/90 uppercase tracking-tight">{msg.senderNickname}</div>
                                                        <div className="text-[9px] text-white/20 font-medium">#{msg.senderId}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[9px] font-bold text-white/10 uppercase tracking-widest">
                                                        {msg.createdAt ? (msg.createdAt.toDate ? format(msg.createdAt.toDate(), 'HH:mm:ss • MMM d') : format(new Date(msg.createdAt), 'HH:mm:ss • MMM d')) : 'PENDING'}
                                                    </span>
                                                    <button
                                                        onClick={() => handleDeleteMessage(msg.id)}
                                                        className="p-2 text-white/10 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={`text-sm leading-relaxed ${msg.type === 'admin_announcement' ? 'text-amber-400 font-bold italic' : 'text-white/70'}`}>
                                                {msg.text}
                                            </div>
                                        </div>
                                    ))
                                )
                            ) : (
                                <div className="space-y-3">
                                    {roomMembers.length === 0 ? (
                                        <div className="h-full flex items-center justify-center text-white/20 uppercase font-black tracking-widest py-10">No registered nodes detected.</div>
                                    ) : (
                                        roomMembers.map(member => (
                                            <div key={member.uid} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] group hover:bg-white/[0.04] transition-all duration-300">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 border border-white/5 text-xs font-black text-white">
                                                        {member.nickname?.[0]?.toUpperCase() || '?'}
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="font-bold text-white uppercase tracking-tight text-xs">{member.nickname || 'Unknown Agent'}</span>
                                                            {member.isAdmin && (
                                                                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/10 text-[8px] font-black uppercase tracking-widest">Root Access</span>
                                                            )}
                                                        </div>
                                                        <div className="text-[9px] text-zinc-600 font-mono mt-0.5">{member.uid}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                                                    <button
                                                        onClick={() => handleKickMember(member.uid)}
                                                        disabled={actionLoading?.includes(member.uid)}
                                                        className="p-2.5 text-white/10 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all border border-transparent hover:border-red-500/20"
                                                        title="Terminate Access"
                                                    >
                                                        {actionLoading === member.uid ? <RefreshCw className="animate-spin" size={14} /> : <UserX size={16} />}
                                                    </button>
                                                    {!member.isAdmin && (
                                                        <button
                                                            onClick={() => handleBanMember(member.uid)}
                                                            disabled={actionLoading?.includes(member.uid)}
                                                            className="p-2.5 text-white/10 hover:text-amber-500 hover:bg-amber-500/10 rounded-xl transition-all border border-transparent hover:border-amber-500/20"
                                                            title="Permanent Ban"
                                                        >
                                                            {actionLoading === `ban_${member.uid}` ? <RefreshCw className="animate-spin" size={14} /> : <ShieldAlert size={16} />}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="p-8 border-t border-white/5 bg-black/40 flex items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-3">
                                    <User size={14} className="text-white/20" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{selectedRoom.participants?.length || 0} Participants</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShieldCheck size={14} className="text-emerald-500/50" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{selectedRoom.admins?.length || 0} Admins</span>
                                </div>
                            </div>
                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/10 italic">Passive surveillance active</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
