import React from 'react'
import { motion } from 'framer-motion'
import { Home, Edit3, Save, Layout as LayoutIcon, Download } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { currentPage, setCurrentPage } = useStore()

    const navItems = [
        { id: 'accueil', icon: Home, label: 'Accueil' },
        { id: 'creation', icon: Edit3, label: 'Créer' },
        { id: 'sauvegarde', icon: Save, label: 'Sauv.' },
        { id: 'templates', icon: LayoutIcon, label: 'Templates' },
        { id: 'download', icon: Download, label: 'Export' },
    ]

    return (
        <div className="min-h-screen bg-[#f5f7f9] text-[#1c1c1e] font-sans pb-20">
            <main className="max-w-xl mx-auto px-4 pt-10">
                {children}
            </main>

            <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-black/5 p-2 shadow-2xl">
                <div className="flex justify-around max-w-xl mx-auto">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentPage(item.id)}
                            className={cn(
                                "flex flex-col items-center p-2 transition-colors duration-300",
                                currentPage === item.id ? "text-indigo-600" : "text-gray-500 hover:text-indigo-400"
                            )}
                        >
                            <item.icon className="w-6 h-6" />
                            <span className="text-xs font-medium mt-1">{item.label}</span>
                        </button>
                    ))}
                </div>
            </footer>
        </div>
    )
}

export default Layout
