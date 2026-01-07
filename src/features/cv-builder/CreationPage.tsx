import React from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { AtelierConcierge } from './AtelierConcierge'
import { CVForm } from './CVForm'
import { getTemplate } from '@/features/templates/TemplateRegistry'

const CreationPage = () => {
    const { language, setLanguage } = useStore()
    const [viewMode, setViewMode] = React.useState<'classic' | 'split'>('classic')

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
    }

    if (viewMode === 'split') {
        return <SplitScreenEditor onExit={() => setViewMode('classic')} />
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 pb-10"
        >
            <header className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-card-border pb-10">
                <div className="text-left">
                    <h2 className="text-3xl font-black text-text-main font-couture">Atelier de Création</h2>
                    <p className="text-text-muted mt-2 font-serif italic">"Gravez votre identité dans l'excellence."</p>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setViewMode('split')}
                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                    >
                        <Zap className="w-3 h-3" /> Live Edit
                    </button>

                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full ring-4 ring-slate-50 dark:ring-slate-900">
                        <button
                            onClick={() => setLanguage('fr')}
                            className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${language === 'fr' ? 'bg-white dark:bg-slate-700 shadow-lg text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            FR
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${language === 'en' ? 'bg-white dark:bg-slate-700 shadow-lg text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </header>

            <CVForm />

            <AtelierConcierge />
        </motion.div>
    )
}

const SplitScreenEditor = ({ onExit }: { onExit: () => void }) => {
    const { cvData, currentTemplateId } = useStore()
    const template = getTemplate(currentTemplateId)
    const TemplateComponent = template.component

    return (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col md:flex-row overflow-hidden transition-colors duration-500">
            {/* Left: Form */}
            <div className="w-full md:w-1/2 h-full overflow-y-auto border-r border-card-border">
                <div className="p-8 max-w-2xl mx-auto space-y-8">
                    <div className="flex items-center justify-between mb-12">
                        <div className="text-2xl font-black font-couture tracking-tight">Atelier <span className="text-couture-gold italic">Live</span></div>
                        <button
                            onClick={onExit}
                            className="text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-text-main transition-colors border-b border-card-border"
                        >
                            Quitter l'Atelier
                        </button>
                    </div>
                    <CVForm />
                </div>
            </div>

            {/* Right: Real-time Preview */}
            <div className="hidden md:flex w-1/2 h-full bg-slate-50 dark:bg-slate-900/50 items-center justify-center p-12 overflow-hidden relative">
                <div className="absolute top-10 left-10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-couture-gold animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-couture-gold">Mise_à_jour_instantanée</span>
                </div>

                <div className="transform scale-[0.55] origin-center shadow-[0_50px_100px_rgba(0,0,0,0.2)] bg-white rounded-none">
                    <TemplateComponent
                        data={cvData}
                        accentColor={template.accent}
                        bgColor={template.bgColor}
                        fontFamily={template.font}
                    />
                </div>
            </div>
        </div>
    )
}

export default CreationPage
