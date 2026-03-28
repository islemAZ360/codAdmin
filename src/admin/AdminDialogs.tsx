import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AlertTriangle, CheckCircle, Info, X, ChevronRight } from 'lucide-react';

type DialogType = 'alert' | 'confirm' | 'prompt';

interface DialogOptions {
    title: string;
    message: string;
    type: DialogType;
    defaultValue?: string; // For prompt
    onConfirm?: (value?: string) => void;
    onCancel?: () => void;
}

interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
}

interface AdminDialogContextType {
    showAlert: (title: string, message: string) => Promise<void>;
    showConfirm: (title: string, message: string) => Promise<boolean>;
    showPrompt: (title: string, message: string, defaultValue?: string) => Promise<string | null>;
    showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const AdminDialogContext = createContext<AdminDialogContextType | undefined>(undefined);

export const useAdminDialog = () => {
    const context = useContext(AdminDialogContext);
    if (!context) throw new Error("useAdminDialog must be used within an AdminDialogProvider");
    return context;
};

export const AdminDialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [dialog, setDialog] = useState<DialogOptions | null>(null);
    const [promptValue, setPromptValue] = useState('');
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 4000); // T Toast disappears after 4 seconds
    };

    const showAlert = (title: string, message: string): Promise<void> => {
        return new Promise((resolve) => {
            setDialog({
                title,
                message,
                type: 'alert',
                onConfirm: () => {
                    setDialog(null);
                    resolve();
                }
            });
        });
    };

    const showConfirm = (title: string, message: string): Promise<boolean> => {
        return new Promise((resolve) => {
            setDialog({
                title,
                message,
                type: 'confirm',
                onConfirm: () => {
                    setDialog(null);
                    resolve(true);
                },
                onCancel: () => {
                    setDialog(null);
                    resolve(false);
                }
            });
        });
    };

    const showPrompt = (title: string, message: string, defaultValue = ''): Promise<string | null> => {
        return new Promise((resolve) => {
            setPromptValue(defaultValue);
            setDialog({
                title,
                message,
                type: 'prompt',
                defaultValue,
                onConfirm: (val) => {
                    setDialog(null);
                    resolve(val || '');
                },
                onCancel: () => {
                    setDialog(null);
                    resolve(null);
                }
            });
        });
    };

    return (
        <AdminDialogContext.Provider value={{ showAlert, showConfirm, showPrompt, showToast }}>
            {children}

            {/* TOAST SYSTEM (Top Right) */}
            <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
                {toasts.map(toast => (
                    <div 
                        key={toast.id} 
                        className={`pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl animate-slide-in-right ${
                            toast.type === 'success' ? 'bg-emerald-900/40 border-emerald-500/30 text-emerald-100' :
                            toast.type === 'error' ? 'bg-red-900/40 border-red-500/30 text-red-100' :
                            'bg-blue-900/40 border-blue-500/30 text-blue-100'
                        }`}
                    >
                        {toast.type === 'success' ? <CheckCircle size={18} className="text-emerald-400" /> :
                         toast.type === 'error' ? <AlertTriangle size={18} className="text-red-400" /> :
                         <Info size={18} className="text-blue-400" />}
                        <span className="text-xs font-bold uppercase tracking-widest">{toast.message}</span>
                    </div>
                ))}
            </div>

            {/* MODAL DIALOG SYSTEM (Center Screen) */}
            {dialog && (
                <div className="fixed inset-0 z-[9000] flex items-center justify-center p-6 backdrop-blur-md bg-black/60 animate-in fade-in duration-300">
                    <div className="bg-[#050a08] border border-white/10 w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl relative">
                        {/* Glow effect based on type */}
                        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] ${
                            dialog.type === 'confirm' ? 'bg-red-500/20' : 
                            dialog.type === 'prompt' ? 'bg-blue-500/20' : 'bg-emerald-500/20'
                        }`}></div>

                        <div className="p-8 relative z-10">
                            <h3 className="text-xl font-black tracking-tighter text-white uppercase mb-2 flex items-center gap-3">
                                {dialog.type === 'confirm' && <AlertTriangle className="text-red-500" size={24} />}
                                {dialog.type === 'prompt' && <Info className="text-blue-500" size={24} />}
                                {dialog.type === 'alert' && <CheckCircle className="text-emerald-500" size={24} />}
                                {dialog.title}
                            </h3>
                            <p className="text-sm text-white/50 mb-6 leading-relaxed">
                                {dialog.message}
                            </p>

                            {dialog.type === 'prompt' && (
                                <div className="mb-6">
                                    <input
                                        autoFocus
                                        type="text"
                                        value={promptValue}
                                        onChange={(e) => setPromptValue(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 font-bold text-sm"
                                        placeholder="Enter details..."
                                    />
                                </div>
                            )}

                            <div className="flex justify-end gap-3 mt-8">
                                {(dialog.type === 'confirm' || dialog.type === 'prompt') && (
                                    <button
                                        onClick={dialog.onCancel}
                                        className="bg-white/5 hover:bg-white/10 text-white/40 hover:text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                                    >
                                        Abort
                                    </button>
                                )}
                                <button
                                    onClick={() => dialog.onConfirm && dialog.onConfirm(promptValue)}
                                    className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg transition-all flex items-center gap-2 ${
                                        dialog.type === 'confirm' ? 'bg-red-500 text-black hover:bg-red-400 shadow-red-500/20 hover:shadow-red-500/40' :
                                        dialog.type === 'prompt' ? 'bg-blue-500 text-black hover:bg-blue-400 shadow-blue-500/20 hover:shadow-blue-500/40' :
                                        'bg-emerald-500 text-black hover:bg-emerald-400 shadow-emerald-500/20 hover:shadow-emerald-500/40'
                                    }`}
                                >
                                    {dialog.type === 'confirm' ? 'Execute Purge' : dialog.type === 'prompt' ? 'Submit Data' : 'Acknowledge'}
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminDialogContext.Provider>
    );
};
