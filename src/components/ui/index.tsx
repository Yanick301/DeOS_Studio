import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
    <div className={cn("bg-white rounded-2xl p-6 shadow-md border border-gray-100", className)} {...props}>
        {children}
    </div>
)

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' }> = ({ children, className, variant = 'primary', ...props }) => {
    const variants = {
        primary: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 active:scale-95",
        secondary: "bg-gray-900 text-white hover:bg-gray-800 active:scale-95",
        outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 active:scale-95",
        ghost: "text-gray-600 hover:bg-gray-100",
        danger: "bg-red-600 text-white hover:bg-red-700 active:scale-95",
    }

    return (
        <button
            className={cn("px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2", variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    )
}

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
    <input
        className={cn("w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all", className)}
        {...props}
    />
)

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => (
    <textarea
        className={cn("w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all min-h-[100px]", className)}
        {...props}
    />
)

export const Label: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <label className={cn("block text-sm font-semibold text-gray-700 mb-1.5 ml-1", className)}>
        {children}
    </label>
)
