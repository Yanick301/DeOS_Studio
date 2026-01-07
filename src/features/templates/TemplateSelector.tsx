import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Sparkles, Layout } from 'lucide-react'
import { templates } from '@/features/templates/TemplateRegistry'
import { useStore } from '@/store/useStore'
import { Card } from '@/components/ui'

const TemplateSelector = () => {
    const { currentTemplateId, setTemplate, setCurrentPage } = useStore()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12 pb-20"
        >
            <header className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-card-border pb-10">
                <div className="text-left">
                    <h2 className="text-4xl font-black text-text-main font-couture tracking-tight uppercase">Bibliothèque_Styles</h2>
                    <p className="text-text-muted mt-2 font-serif italic">"Sélectionnez l'écrin qui sublimera votre parcours."</p>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-couture-gold/5 border border-couture-gold/10">
                    <Star className="w-4 h-4 text-couture-gold fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-couture-gold">Collection_Privée</span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => {
                    const isSelected = currentTemplateId === template.id
                    const isPremium = template.id.includes('couture') || template.id.includes('elite')

                    return (
                        <motion.div key={template.id} variants={itemVariants}>
                            <Card
                                className={`group relative cursor-pointer overflow-hidden border-none transition-all duration-500 shadow-2xl ${isSelected ? 'ring-2 ring-couture-gold scale-[1.02]' : 'hover:scale-[1.01]'}`}
                                onClick={() => {
                                    setTemplate(template.id)
                                    setCurrentPage('download')
                                }}
                            >
                                <div className="aspect-[3/4] bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center p-6 transition-colors group-hover:bg-slate-100 dark:group-hover:bg-slate-900">
                                    <div className="relative w-full h-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-shadow duration-500 bg-white">
                                        <div className="absolute inset-0 transform scale-[0.18] lg:scale-[0.2] origin-top-left overflow-hidden pointer-events-none">
                                            <template.component
                                                data={{
                                                    nom: 'JEAN DE LUCA',
                                                    titre: 'Senior Creative Executive',
                                                    experiences: [],
                                                    formations: [],
                                                    skills: 'Leadership, Strategie, Creation',
                                                    profilSummary: 'Une vision audacieuse pour des resultats hors du commun.',
                                                    email: 'contact@deos.studio',
                                                    phone: '+33 1 23 45 67 89',
                                                    location: 'Paris, France',
                                                    photo: '',
                                                    languages: [],
                                                    interests: [],
                                                    qualities: [],
                                                    certificates: [],
                                                    projects: []
                                                }}
                                                accentColor={template.accent}
                                                bgColor={template.bgColor}
                                                fontFamily={template.font}
                                            />
                                        </div>
                                    </div>

                                    {isSelected && (
                                        <div className="absolute inset-0 bg-couture-gold/10 flex items-center justify-center backdrop-blur-[2px]">
                                            <div className="bg-couture-gold text-slate-900 p-2 rounded-full">
                                                <Check className="w-6 h-6 stroke-[3px]" />
                                            </div>
                                        </div>
                                    )}

                                    {isPremium && (
                                        <div className="absolute top-4 right-4 py-1 px-3 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 text-[8px] font-black uppercase tracking-widest shadow-xl">
                                            Premium
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 bg-white dark:bg-slate-900 border-t border-card-border">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xs font-black text-text-main uppercase tracking-widest mb-1">{template.name}</h3>
                                            <p className="text-[10px] text-text-muted font-serif italic line-clamp-1">{template.description}</p>
                                        </div>
                                        <div className="flex -space-x-1">
                                            <div className="w-4 h-4 rounded-full border-2 border-white dark:border-slate-900" style={{ backgroundColor: template.accent }} />
                                            <div className="w-4 h-4 rounded-full border-2 border-white dark:border-slate-900" style={{ backgroundColor: template.bgColor }} />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default TemplateSelector
