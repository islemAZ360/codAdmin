import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { Newspaper, Image as ImageIcon, Send, Loader2, Trash2, Star, Megaphone } from 'lucide-react';
import imageCompression from 'browser-image-compression';
import { format } from 'date-fns';

export const AdminNews: React.FC = () => {
    const [news, setNews] = useState<any[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [editingNewsId, setEditingNewsId] = useState<string | null>(null);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'news'), (snapshot) => {
            const list: any[] = [];
            snapshot.forEach(d => list.push({ id: d.id, ...d.data() }));
            list.sort((a, b) => {
                const getTime = (d: any) => {
                    if (!d) return 0;
                    if (d.toMillis) return d.toMillis();
                    return new Date(d).getTime();
                };
                return getTime(b.createdAt) - getTime(a.createdAt);
            });
            setNews(list);
        });
        return () => unsub();
    }, []);

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handlePostNews = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        setLoading(true);
        try {
            let imageUrl = '';

            // Handle Image Compression to Base64 String
            if (imageFile) {
                const options = {
                    maxSizeMB: 0.1, // Keep under 100KB to fit in Firestore 1MB doc limit easily
                    maxWidthOrHeight: 800,
                    useWebWorker: true,
                };

                try {
                    const compressedFile = await imageCompression(imageFile, options);

                    // Convert compressed file to Base64 Data URL
                    const reader = new FileReader();
                    reader.readAsDataURL(compressedFile);
                    imageUrl = await new Promise((resolve, reject) => {
                        reader.onloadend = () => resolve(reader.result as string);
                        reader.onerror = reject;
                    });
                } catch (imgErr) {
                    console.error("Compression format error:", imgErr);
                    alert("Failed to process image. Posting without image.");
                }
            }

            if (editingNewsId) {
                // Update existing doc
                const newsRef = doc(db, 'news', editingNewsId);
                const updateData: any = {
                    title: title.trim(),
                    content: content.trim(),
                    isFeatured
                };
                if (imageUrl) updateData.imageUrl = imageUrl;

                await updateDoc(newsRef, updateData);
            } else {
                // Add new doc
                await addDoc(collection(db, 'news'), {
                    title: title.trim(),
                    content: content.trim(),
                    imageUrl,
                    isFeatured,
                    createdAt: serverTimestamp()
                });
            }

            // Reset form
            setTitle('');
            setContent('');
            setIsFeatured(false);
            setImageFile(null);
            setImagePreview(null);
            setEditingNewsId(null);

        } catch (err: any) {
            console.error("Error posting news:", err);
            alert("Failed to post news.");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteNews = async (newsId: string) => {
        if (!window.confirm("Delete this news post completely?")) return;

        try {
            await deleteDoc(doc(db, 'news', newsId));
            // Base64 image data is stored directly in the document, so deleting the doc deletes the image automatically.
        } catch (err) {
            console.error("Error deleting news:", err);
        }
    };

    const handleEditClick = (item: any) => {
        setEditingNewsId(item.id);
        setTitle(item.title);
        setContent(item.content);
        setIsFeatured(item.isFeatured || false);
        setImagePreview(item.imageUrl || null);
        setImageFile(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cancelEdit = () => {
        setEditingNewsId(null);
        setTitle('');
        setContent('');
        setIsFeatured(false);
        setImageFile(null);
        setImagePreview(null);
    };

    return (
        <div className="space-y-6">
            <div className="holographic-island rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(16,185,129,0.02)] backdrop-blur-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
                        <Newspaper size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-black tracking-widest text-white uppercase">
                            {editingNewsId ? 'Edit Intel Report' : 'Post New Update'}
                        </h2>
                        <p className="text-xs text-white/40 tracking-wider">
                            {editingNewsId ? `Modifying ID: ${editingNewsId}` : 'Broadcast to community feed'}
                        </p>
                    </div>
                </div>

                <form onSubmit={handlePostNews} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Update Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 focus:border-emerald-500/50 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all"
                        required
                    />

                    <textarea
                        placeholder="Content message..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full h-32 resize-none bg-black/40 border border-white/10 focus:border-emerald-500/50 rounded-xl px-4 py-3 text-white placeholder:text-white/30 outline-none transition-all"
                        required
                    />

                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-sm font-medium transition-all text-white/70">
                            <ImageIcon size={18} />
                            {imagePreview ? 'Change Image' : 'Attach Image'}
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </label>

                        <button
                            type="button"
                            onClick={() => setIsFeatured(!isFeatured)}
                            className={`flex items-center gap-2 border px-4 py-2 rounded-xl text-sm font-medium transition-all ${isFeatured ? 'bg-amber-500/20 border-amber-500/40 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]' : 'bg-white/5 border-white/10 text-white/30 hover:bg-white/10'}`}
                        >
                            <Star size={18} fill={isFeatured ? "currentColor" : "none"} />
                            {isFeatured ? 'Featured Intel' : 'Normal Intel'}
                        </button>

                        {imagePreview && (
                            <div className="relative group">
                                <img src={imagePreview} alt="Preview" className="h-16 w-16 object-cover rounded-lg border border-white/10" />
                                <button
                                    type="button"
                                    onClick={() => { setImageFile(null); setImagePreview(null); }}
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Trash2 size={12} />
                                </button>
                            </div>
                        )}

                        <div className="flex-1 flex justify-end gap-3">
                            {editingNewsId && (
                                <button
                                    type="button"
                                    onClick={cancelEdit}
                                    className="bg-white/5 text-white/40 hover:text-white px-6 py-2.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all"
                                >
                                    Cancel
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={loading || !title.trim() || !content.trim()}
                                className="bg-emerald-500 text-black hover:bg-emerald-400 disabled:opacity-50 px-8 py-2.5 h-auto rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                            >
                                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                                {editingNewsId ? 'Save Changes' : 'Broadcast'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* List of current news */}
            <div className="grid grid-cols-2 gap-4">
                {news.map(item => (
                    <div key={item.id} className={`glass-panel p-5 rounded-2xl border bg-black/40 relative group transition-all duration-500 ${item.isFeatured ? 'border-amber-500/30' : 'border-white/5'}`}>
                        {item.isFeatured && (
                            <div className="absolute top-4 left-4 z-10 bg-amber-500 text-black px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest flex items-center gap-1 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                                <Star size={10} fill="currentColor" /> Featured Intel
                            </div>
                        )}
                        <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                            <button
                                onClick={() => handleEditClick(item)}
                                className="p-2 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-xl transition-all shadow-lg"
                                title="Edit Report"
                            >
                                <ImageIcon size={16} />
                            </button>
                            <button
                                onClick={() => handleDeleteNews(item.id)}
                                className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all shadow-lg"
                                title="Purge Intel"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>

                        {item.imageUrl && (
                            <div className="h-40 mb-4 rounded-xl overflow-hidden border border-white/10 relative">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        )}
                        <h3 className="font-black text-white text-lg mb-1 uppercase tracking-tight group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                        <p className="text-[10px] font-black text-white/20 mb-3 uppercase tracking-widest flex items-center gap-2">
                            <Megaphone size={10} /> {item.createdAt ? (item.createdAt.toDate ? format(item.createdAt.toDate(), 'MMMM d, yyyy') : format(new Date(item.createdAt), 'MMMM d, yyyy')) : 'Loading...'}
                        </p>
                        <p className="text-sm text-white/60 leading-relaxed italic line-clamp-3">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
