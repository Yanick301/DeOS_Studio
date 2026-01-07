import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { templates } from '@/features/templates/TemplateRegistry'
import { useStore } from '@/store/useStore'
import { Card, Button } from '@/components/ui'

const TemplateSelector = () => {
    const { currentTemplateId, setTemplate, setCurrentPage } = useStore()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 pb-10"
        >
            <header className="text-center">
                <h2 className="text-3xl font-black text-gray-900">Choisissez votre Style</h2>
                <p className="text-gray-500 mt-2">Plus de 40 designs premium pour faire la différence.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template) => (
                    <Card
                        key={template.id}
                        className={`cursor-pointer transition-all duration-300 border-2 p-4 ${currentTemplateId === template.id ? 'border-indigo-600 ring-4 ring-indigo-500/10 bg-indigo-50/10' : 'hover:border-indigo-300 hover:shadow-lg'}`}
                        onClick={() => {
                            setTemplate(template.id)
                            setCurrentPage('download')
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className="w-20 h-28 rounded-lg bg-white shrink-0 shadow-md flex items-center justify-center text-[8px] overflow-hidden border border-gray-100"
                            >
                                <div className="transform scale-[0.12] origin-center opacity-70">
                                    <template.component
                                        data={{ nom: 'Aperçu', titre: 'Modèle', experiences: [], formations: [], skills: '', profilSummary: '', email: '', phone: '', location: '', photo: '', languages: [], interests: [], qualities: [], certificates: [], projects: [] }}
                                        accentColor={template.accent}
                                        bgColor={template.bgColor}
                                        fontFamily={template.font}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-sm font-black text-gray-900 truncate">{template.name}</h3>
                                    {currentTemplateId === template.id && (
                                        <div className="bg-indigo-600 text-white rounded-full p-0.5">
                                            <Check className="w-3 h-3" />
                                        </div>
                                    )}
                                </div>
                                <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed">{template.description}</p>
                                <div className="flex gap-1.5 mt-3">
                                    <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: template.accent }} />
                                    <div className="w-3 h-3 rounded-full border shadow-sm" style={{ backgroundColor: template.bgColor }} />
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </motion.div>
    )
}

export default TemplateSelector
