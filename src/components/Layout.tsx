import React from 'react'
import { motion } from 'framer-motion'
import { Home, Edit3, Save, Layout as LayoutIcon, Download, PieChart, MessageSquare, Menu } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import WhatsAppButton from './WhatsAppButton'

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
        { id: 'dashboard', icon: PieChart, label: 'Dashboard' },
        { id: 'creation', icon: Edit3, label: 'CV' },
        { id: 'lettre', icon: MessageSquare, label: 'Lettre' },
        { id: 'templates', icon: LayoutIcon, label: 'Design' },
        { id: 'download', icon: Download, label: 'Export' },
    ]

    return (
        <div className="min-h-screen bg-[#fafafa] text-[#0f172a] font-sans pb-24 selection:bg-gold/20">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                <div
                    className="text-2xl font-black tracking-tighter cursor-pointer"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    onClick={() => setCurrentPage('accueil')}
                >
                    DeOS <span className="text-couture-gold">Studio</span>
                </div>
                <button className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                    <Menu className="w-5 h-5 text-slate-600" />
                </button>
            </header>

            <main className="max-w-2xl mx-auto px-6 pt-24">
                {children}
            </main>

            <WhatsAppButton />

            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-2 py-2 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-[90%] max-w-lg">
                <div className="flex justify-between items-center px-4">
                    {navItems.map((item) => {
                        const active = currentPage === item.id
                        return (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={cn(
                                    "flex flex-col items-center p-2.5 transition-all duration-500 rounded-full",
                                    active ? "bg-white text-slate-900 scale-110 shadow-lg" : "text-slate-400 hover:text-white"
                                )}
                            >
                                <item.icon className={cn("w-5 h-5", active && "scale-110")} />
                                {active && (
                                    <motion.span
                                        layoutId="nav-label"
                                        className="text-[10px] font-black mt-1 uppercase tracking-widest"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </button>
                        )
                    })}
                </div>
            </nav>
        </div>
    )
}

export default Layout
