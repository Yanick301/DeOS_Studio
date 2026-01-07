import React from 'react'
import { motion } from 'framer-motion'
import { User, Briefcase, BookOpen, Settings, Languages, Award, Globe, Plus, Trash2, Camera, Mail, Phone, MapPin } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { Card, Button, Input, TextArea, Label } from '@/components/ui'
import { ExperienceList, FormationList, LanguageList, InterestList, QualityList, CertificateList, ProjectList } from './DynamicLists'

const CreationPage = () => {
    const { cvData, updateCVData } = useStore()

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 pb-10"
        >
            <header className="text-center">
                <h2 className="text-3xl font-black text-gray-900">Créez votre Chef-d'œuvre</h2>
                <p className="text-gray-500 mt-2">Remplissez les sections et prévisualisez en direct.</p>
            </header>

            {/* Section Information Personnelles */}
            <Card>
                <div className="flex items-center gap-3 mb-6 text-indigo-600">
                    <User className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Informations Personnelles</h3>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="relative group">
                            <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden">
                                {cvData.photo ? (
                                    <img src={cvData.photo} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <Camera className="w-8 h-8 text-gray-400" />
                                )}
                            </div>
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                        const reader = new FileReader()
                                        reader.onload = (rev) => updateCVData({ photo: rev.target?.result as string })
                                        reader.readAsDataURL(file)
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Photo de profil</p>
                            <p className="text-xs text-gray-400">Recommandé : Format carré, max 1Mo</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label>Nom Complet</Label>
                            <Input
                                value={cvData.nom}
                                onChange={(e) => updateCVData({ nom: e.target.value })}
                                placeholder="Ex: Jean Dupont"
                            />
                        </div>
                        <div>
                            <Label>Titre Professionnel</Label>
                            <Input
                                value={cvData.titre}
                                onChange={(e) => updateCVData({ titre: e.target.value })}
                                placeholder="Ex: Designer UX/UI"
                            />
                        </div>
                    </div>

                    <div>
                        <Label>Résumé du Profil</Label>
                        <TextArea
                            value={cvData.profilSummary}
                            onChange={(e) => updateCVData({ profilSummary: e.target.value })}
                            placeholder="Décrivez votre parcours en quelques lignes percutantes..."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={cvData.email}
                                onChange={(e) => updateCVData({ email: e.target.value })}
                                placeholder="jean.dupont@email.com"
                            />
                        </div>
                        <div>
                            <Label>Téléphone</Label>
                            <Input
                                type="tel"
                                value={cvData.phone}
                                onChange={(e) => updateCVData({ phone: e.target.value })}
                                placeholder="+33 6 12 34 56 78"
                            />
                        </div>
                    </div>
                    <div>
                        <Label>Localisation</Label>
                        <Input
                            value={cvData.location}
                            onChange={(e) => updateCVData({ location: e.target.value })}
                            placeholder="Ex: Paris, France"
                        />
                    </div>
                </div>
            </Card>

            <ExperienceList />
            <FormationList />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <LanguageList />
                <QualityList />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InterestList />
                <CertificateList />
            </div>

            <ProjectList />

            {/* Section Compétences */}
            <Card>
                <div className="flex items-center gap-3 mb-6 text-indigo-600">
                    <Settings className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Compétences & Outils</h3>
                </div>
                <TextArea
                    value={cvData.skills}
                    onChange={(e) => updateCVData({ skills: e.target.value })}
                    placeholder="Listez vos compétences, séparées par des virgules (Ex: PHP, React, UI Design...)"
                />
            </Card>
        </motion.div>
    )
}

export default CreationPage
