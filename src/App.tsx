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
import { Button } from './components/ui'
import { ChevronRight, Award, FileText, Layers, Settings, Sparkles, Star } from 'lucide-react'

const Accueil = () => {
    const { setCurrentPage } = useStore()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-8"
        >
            <div className="bg-white rounded-2xl p-8 border-t-8 border-indigo-600 shadow-2xl bg-gradient-to-br from-white via-white to-indigo-50/30">
                <Award className="w-10 h-10 text-yellow-500 mb-4" />
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                    <span className="text-indigo-600">Mon CV</span> en un Clic.
                </h1>
                <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                    Votre studio mobile professionnel. Design, structure et impact garantis pour votre carrière.
                </p>
                <Button onClick={() => setCurrentPage('creation')} className="mt-8 w-full py-4 text-xl">
                    Créer Maintenant <ChevronRight className="w-6 h-6 ml-1" />
                </Button>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-gray-400" /> Avantages Clés
                </h3>
                {[
                    { icon: FileText, color: 'text-green-500', bg: 'border-green-500', title: 'Export PDF A4 Pro', desc: 'Haute résolution, prêt pour l\'envoi digital.' },
                    { icon: Layers, color: 'text-purple-500', bg: 'border-purple-500', title: '20 Templates Élégants', desc: 'Designs modernes adaptés à tous les secteurs.' }
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`bg-white rounded-2xl p-4 flex gap-4 items-start shadow-md border-l-4 ${feature.bg}`}
                    >
                        <feature.icon className={`w-8 h-8 shrink-0 ${feature.color}`} />
                        <div>
                            <h4 className="font-bold text-gray-900">{feature.title}</h4>
                            <p className="text-sm text-gray-500">{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
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
