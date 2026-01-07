import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'
import SplashScreen from './components/SplashScreen'
import { useStore } from './store/useStore'
import CreationPage from './features/cv-builder/CreationPage'
import PreviewPage from './features/cv-builder/PreviewPage'
import TemplateSelector from './features/templates/TemplateSelector'
import DashboardPage from './features/dashboard/DashboardPage'
import LetterPage from './features/letter/LetterPage'
import BusinessPage from './features/business/BusinessPage'
import { Button } from './components/ui'
import { ChevronRight, Award, FileText, Layers, Settings, Sparkles, Star, Brain, MessageSquare } from 'lucide-react'

const Accueil = () => {
    const { setCurrentPage } = useStore()

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="space-y-20 pb-20"
        >
            {/* HEROS SECTION */}
            <section className="relative text-center pt-10 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-couture-gold/5 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-slate-900 shadow-2xl rounded-full mb-10"
                >
                    <Star className="w-4 h-4 text-couture-gold fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Edition_Limitée_V3</span>
                </motion.div>

                <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-8 font-couture">
                    L'Excellence <br />
                    <span className="text-couture-gold italic">à portée de clics.</span>
                </h1>

                <p className="text-xl text-slate-500 max-w-lg mx-auto leading-relaxed font-serif italic mb-12">
                    "Votre carrière mérite plus qu'un simple document. Offrez-lui un destin d'exception."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto px-4">
                    <motion.button
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setCurrentPage('creation')}
                        className="group relative p-8 bg-slate-900 text-left overflow-hidden shadow-2xl"
                    >
                        <div className="relative z-10">
                            <Layers className="w-8 h-8 text-couture-gold mb-6" />
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Studio CV</h3>
                            <p className="text-sm text-slate-400 font-medium">Créez un CV d'impact avec l'IA stratégique.</p>
                            <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-couture-gold">
                                Entrer dans l'atelier <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Layers className="w-32 h-32" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-couture-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.button>

                    <motion.button
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setCurrentPage('lettre')}
                        className="group relative p-8 bg-white text-left overflow-hidden shadow-2xl border border-slate-100"
                    >
                        <div className="relative z-10">
                            <MessageSquare className="w-8 h-8 text-slate-900 mb-6" />
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">Studio Lettre</h3>
                            <p className="text-sm text-slate-500 font-medium">Maîtrisez l'art de l'éloquence professionnelle.</p>
                            <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900">
                                Rédiger ma lettre <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <MessageSquare className="w-32 h-32" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.button>
                </div>
                <div className="mt-12">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Accès_Instantané / Sans_Inscription</p>
                </div>
            </section>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                    {
                        icon: Sparkles,
                        title: 'Design Couture',
                        desc: 'Des templates gravés par des experts du design éditorial.',
                        color: 'bg-indigo-50 text-indigo-600'
                    },
                    {
                        icon: Brain,
                        title: 'IA Stratégique',
                        desc: 'Score de match en direct pour dominer le marché caché du travail.',
                        color: 'bg-couture-gold/10 text-couture-gold'
                    },
                    {
                        icon: FileText,
                        title: 'Lettres de Motivation',
                        desc: 'Un écosystème complet pour une candidature harmonieuse.',
                        color: 'bg-slate-50 text-slate-900'
                    },
                    {
                        icon: Award,
                        title: 'Export Haute-Voltige',
                        desc: 'PDF vectoriels HD sans aucun défaut de rendu.',
                        color: 'bg-green-50 text-green-600'
                    }
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 editorial-card group"
                    >
                        <div className={`w-12 h-12 ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-black mb-2 uppercase tracking-tight">{feature.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* SOCIAL PROOF / STATS */}
            <div className="pt-10 border-t border-slate-100 flex flex-wrap justify-between gap-10 grayscale opacity-40">
                <div><span className="text-3xl font-black">44+</span> <br /><span className="text-[10px] uppercase font-serif tracking-widest">Templates_Pro</span></div>
                <div><span className="text-3xl font-black">IA</span> <br /><span className="text-[10px] uppercase font-serif tracking-widest">Intégrée</span></div>
                <div><span className="text-3xl font-black">HD</span> <br /><span className="text-[10px] uppercase font-serif tracking-widest">Export_Vector</span></div>
            </div>
        </motion.div>
    )
}

const App = () => {
    const [showSplash, setShowSplash] = useState(true)
    const { currentPage } = useStore()

    return (
        <>
            <AnimatePresence>
                {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            </AnimatePresence>

            {!showSplash && (
                <Layout>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {currentPage === 'accueil' && <Accueil />}
                            {currentPage === 'dashboard' && <DashboardPage />}
                            {currentPage === 'creation' && <CreationPage />}
                            {currentPage === 'lettre' && <LetterPage />}
                            {currentPage === 'templates' && <TemplateSelector />}
                            {currentPage === 'business' && <BusinessPage />}
                            {currentPage === 'download' && <PreviewPage />}
                            {currentPage === 'sauvegarde' && (
                                <div className="text-center py-20 grayscale opacity-50">
                                    <Save className="w-20 h-20 mx-auto mb-4 text-gray-400" />
                                    <p className="text-xl font-bold">Sauvegarde locale active</p>
                                    <p className="text-sm">Vos données sont automatiquement sauvées sur cet appareil.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </Layout>
            )}
        </>
    )
}

const Save = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
        <polyline points="17 21 17 13 7 13 7 21" />
        <polyline points="7 3 7 8 15 8" />
    </svg>
)

export default App
