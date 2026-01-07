import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
    <div className={cn("bg-white rounded-none p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-2xl transition-all duration-700", className)} {...props}>
        {children}
    </div>
)

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' }> = ({ children, className, variant = 'primary', ...props }) => {
    const variants = {
        primary: "bg-slate-900 text-white shadow-xl hover:bg-black active:scale-[0.98] uppercase tracking-[0.2em] font-black",
        secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 active:scale-[0.98] font-bold",
        outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-50 active:scale-[0.98] font-black uppercase tracking-widest",
        ghost: "text-slate-500 hover:text-slate-900 hover:bg-slate-50",
        danger: "bg-red-50 text-red-600 hover:bg-red-100 active:scale-[0.98]",
    }

    return (
        <button
            className={cn("px-8 py-4 rounded-none transition-all duration-500 flex items-center justify-center gap-2 text-xs", variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    )
}

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
    <input
        className={cn("w-full px-5 py-4 rounded-none border border-slate-100 bg-slate-50/50 focus:outline-none focus:bg-white focus:border-couture-gold transition-all duration-500 text-sm font-medium placeholder:text-slate-300", className)}
        {...props}
    />
)

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => (
    <textarea
        className={cn("w-full px-5 py-4 rounded-none border border-slate-100 bg-slate-50/50 focus:outline-none focus:bg-white focus:border-couture-gold transition-all duration-500 min-h-[120px] text-sm font-medium placeholder:text-slate-300 leading-relaxed", className)}
        {...props}
    />
)

export const Label: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <label className={cn("block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 ml-1", className)}>
        {children}
    </label>
)
