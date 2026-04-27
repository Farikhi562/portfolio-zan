'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType>({ toast: () => {} });

const ICONS: Record<ToastType, string> = {
  success: '✅',
  error:   '❌',
  info:    'ℹ️',
  warning: '⚠️',
};

const COLORS: Record<ToastType, string> = {
  success: 'border-green-200 bg-green-50 text-green-800',
  error:   'border-red-200 bg-red-50 text-red-800',
  info:    'border-blue-200 bg-blue-50 text-blue-800',
  warning: 'border-amber-200 bg-amber-50 text-amber-800',
};

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), (toast.duration ?? 3000) - 300);
    const t2 = setTimeout(onDismiss, toast.duration ?? 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [toast.duration, onDismiss]);

  return (
    <div
      className={`${leaving ? 'toast-leave' : 'toast-enter'} flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-lg text-sm font-medium max-w-[320px] ${COLORS[toast.type]}`}
      onClick={() => { setLeaving(true); setTimeout(onDismiss, 250); }}
    >
      <span>{ICONS[toast.type]}</span>
      <span className="flex-1">{toast.message}</span>
      <button className="opacity-50 hover:opacity-100 transition-opacity text-lg leading-none">×</button>
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: ToastType = 'info', duration = 3500) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(p => [...p, { id, message, type, duration }]);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts(p => p.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-[300] flex flex-col gap-2 items-end">
        {toasts.map(t => (
          <ToastItem key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);