import React from 'react'
import { motion } from 'framer-motion'
import { Home, Edit3, Save, Layout as LayoutIcon, Download, PieChart, DollarSign, MessageSquare, Menu, Moon, Sun } from 'lucide-react'
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
    const { currentPage, setCurrentPage, theme, setTheme } = useStore()

    React.useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const navItems = [
        { id: 'accueil', icon: Home, label: 'Accueil' },
        { id: 'dashboard', icon: PieChart, label: 'Dashboard' },
        { id: 'creation', icon: Edit3, label: 'CV' },
        { id: 'lettre', icon: MessageSquare, label: 'Lettre' },
        { id: 'templates', icon: LayoutIcon, label: 'Design' },
        { id: 'business', icon: DollarSign, label: 'Business' },
        { id: 'download', icon: Download, label: 'Export' },
    ]

    return (
        <div className="min-h-screen bg-background text-text-main font-sans pb-24 selection:bg-gold/20 transition-colors duration-500">
            <header className="fixed top-0 left-0 right-0 z-50 bg-card-bg/80 backdrop-blur-md border-b border-card-border px-6 py-4 flex items-center justify-between transition-all duration-500">
                <div
                    className="text-2xl font-black tracking-tighter cursor-pointer font-couture"
                    onClick={() => setCurrentPage('accueil')}
                >
                    DeOS <span className="text-couture-gold">Studio</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-all duration-300"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5 text-couture-gold" /> : <Moon className="w-5 h-5 text-slate-600" />}
                    </button>
                    <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <Menu className="w-5 h-5 text-text-muted" />
                    </button>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-6 pt-24">
                {children}
            </main>

            <WhatsAppButton />

            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card-bg/95 backdrop-blur-xl border border-card-border px-4 py-2 flex items-center gap-1 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        className={cn(
                            "flex flex-col items-center gap-1.5 px-4 py-2 transition-all group",
                            currentPage === item.id ? "text-couture-gold" : "text-text-muted hover:text-text-main dark:hover:text-white"
                        )}
                    >
                        <item.icon className={cn(
                            "w-5 h-5 transition-transform group-hover:scale-110",
                            currentPage === item.id ? "stroke-[3px]" : "stroke-[2px]"
                        )} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default Layout
