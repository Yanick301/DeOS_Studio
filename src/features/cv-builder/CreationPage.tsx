import React from 'react'
import { motion } from 'framer-motion'
import { User, Briefcase, BookOpen, Settings, Languages, Award, Globe, Plus, Trash2, Camera, Mail, Phone, MapPin, Sparkles, Star, Brain } from 'lucide-react'
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
                <h2 className="text-3xl font-black text-gray-900 font-couture">Créez votre Chef-d'œuvre</h2>
                <p className="text-gray-500 mt-2">Remplissez les sections et prévisualisez en direct.</p>
            </header>

            {/* Section Information Personnelles */}
            <Card className="p-8 editorial-card">
                <div className="flex items-center gap-3 mb-8 text-couture-slate">
                    <div className="p-2 bg-slate-900 text-white rounded-lg">
                        <User className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-black font-couture uppercase tracking-tight">Identité Visuelle</h3>
                </div>

                <div className="space-y-8">
                    <div className="flex items-center gap-8 mb-8">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-none bg-slate-50 flex items-center justify-center border-2 border-dashed border-slate-200 overflow-hidden shadow-inner group-hover:border-couture-gold transition-all duration-500">
                                {cvData.photo ? (
                                    <img src={cvData.photo} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <Camera className="w-10 h-10 text-slate-300" />
                                )}
                            </div>
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
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
                        <div className="flex-1 space-y-3">
                            <div>
                                <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Portrait Professionnel</p>
                                <p className="text-[10px] text-slate-400 font-medium">Téléchargez une photo ou laissez l'IA créer votre avatar parfait.</p>
                            </div>
                            <div className="flex gap-3">
                                <ImageGenerator onGenerated={(url) => updateCVData({ photo: url })} />
                                <Button
                                    variant="secondary"
                                    className="text-[10px] h-9 px-4 rounded-none border-slate-200 hover:bg-slate-50"
                                    onClick={() => updateCVData({ photo: '' })}
                                >
                                    Supprimer
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nom & Prénoms</Label>
                            <Input
                                className="rounded-none border-slate-100 bg-slate-50/50 focus:bg-white transition-all py-6 font-bold"
                                value={cvData.nom}
                                onChange={(e) => updateCVData({ nom: e.target.value })}
                                placeholder="Ex: Jean-Baptiste de Luca"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Titre de l'expertise</Label>
                            <Input
                                className="rounded-none border-slate-100 bg-slate-50/50 focus:bg-white transition-all py-6 font-bold"
                                value={cvData.titre}
                                onChange={(e) => updateCVData({ titre: e.target.value })}
                                placeholder="Ex: Senior Creative Director"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Résumé du Profil (Pitch)</Label>
                        <TextArea
                            className="rounded-none border-slate-100 bg-slate-50/50 focus:bg-white transition-all min-h-[120px] leading-relaxed italic"
                            value={cvData.profilSummary}
                            onChange={(e) => updateCVData({ profilSummary: e.target.value })}
                            placeholder="Écrivez une introduction qui marque les esprits..."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Direct</Label>
                            <Input
                                type="email"
                                className="rounded-none border-slate-100 bg-slate-50/50 py-6"
                                value={cvData.email}
                                onChange={(e) => updateCVData({ email: e.target.value })}
                                placeholder="contact@email.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ligne Téléphonique</Label>
                            <Input
                                type="tel"
                                className="rounded-none border-slate-100 bg-slate-50/50 py-6"
                                value={cvData.phone}
                                onChange={(e) => updateCVData({ phone: e.target.value })}
                                placeholder="+XX XXX XXX XXX"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Siège / Résidence</Label>
                            <Input
                                className="rounded-none border-slate-100 bg-slate-50/50 py-6"
                                value={cvData.location}
                                onChange={(e) => updateCVData({ location: e.target.value })}
                                placeholder="Ville, Pays"
                            />
                        </div>
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
            <Card className="p-8 editorial-card">
                <div className="flex items-center gap-3 mb-6 text-couture-slate">
                    <div className="p-2 bg-slate-900 text-white rounded-lg">
                        <Settings className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black font-couture uppercase tracking-tight">Arsenal de Compétences</h3>
                </div>
                <TextArea
                    className="rounded-none border-slate-100 bg-slate-50/50 focus:bg-white transition-all min-h-[100px] font-mono text-xs uppercase tracking-widest"
                    value={cvData.skills}
                    onChange={(e) => updateCVData({ skills: e.target.value })}
                    placeholder="LISTEZ VOS COMPÉTENCES, SÉPARÉES PAR DES VIRGULES..."
                />
            </Card>
        </motion.div>
    )
}

const ImageGenerator = ({ onGenerated }: { onGenerated: (url: string) => void }) => {
    const [isGenerating, setIsGenerating] = React.useState(false)
    const [prompt, setPrompt] = React.useState('')

    const generateImage = () => {
        setIsGenerating(true)
        setTimeout(() => {
            const randomSeed = Math.floor(Math.random() * 1000)
            const mockUrl = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop&seed=${randomSeed}`
            onGenerated(mockUrl)
            setIsGenerating(false)
            setPrompt('')
        }, 3000)
    }

    return (
        <div className="flex gap-2">
            <Input
                placeholder="Style: Business Minimaliste..."
                className="h-9 text-[10px] w-40 bg-slate-50 border-slate-100 rounded-none focus:ring-0 focus:border-couture-gold transition-colors"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <Button
                onClick={generateImage}
                disabled={isGenerating || !prompt}
                className="text-[10px] h-9 px-4 bg-slate-900 text-white rounded-none border-none relative overflow-hidden group"
            >
                {isGenerating ? (
                    <Sparkles className="w-3 h-3 animate-spin" />
                ) : (
                    <div className="flex items-center gap-1">
                        <Brain className="w-3 h-3 group-hover:scale-110 transition-transform" />
                        <span className="uppercase tracking-widest font-black">Générer</span>
                    </div>
                )}
            </Button>
        </div>
    )
}

export default CreationPage
