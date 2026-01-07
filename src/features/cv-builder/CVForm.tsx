import React from 'react'
import { motion, Reorder } from 'framer-motion'
import { User, Briefcase, BookOpen, Settings, Languages, Award, Globe, Plus, Trash2, Camera, Mail, Phone, MapPin, Sparkles, Star, Brain, Zap, Lightbulb, GripVertical } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { Card, Button, Input, TextArea, Label } from '@/components/ui'
import { ExperienceList, FormationList, LanguageList, InterestList, QualityList, CertificateList, ProjectList } from './DynamicLists'
import { FIELD_SUGGESTIONS } from '@/data/suggestions'
import { AvatarGallery } from './AvatarGallery'

const SuggestionTrigger = ({ field, onSelect }: { field: keyof typeof FIELD_SUGGESTIONS, onSelect: (val: string) => void }) => (
    <div className="mt-2 flex flex-wrap gap-2">
        {FIELD_SUGGESTIONS[field].slice(0, 3).map((s, i) => (
            <button
                key={i}
                type="button"
                onClick={() => onSelect(s)}
                className="text-[9px] font-black uppercase tracking-widest text-slate-400 border border-card-border px-3 py-1 hover:border-couture-gold hover:text-couture-gold transition-all"
            >
                + {s.length > 30 ? s.substring(0, 30) + '...' : s}
            </button>
        ))}
    </div>
)

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
                className="h-9 text-[10px] w-40 bg-slate-50 border-slate-100 rounded-none focus:ring-0 focus:border-couture-gold transition-colors dark:bg-slate-800"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <Button
                onClick={generateImage}
                disabled={isGenerating || !prompt}
                className="text-[10px] h-9 px-4 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-none border-none relative overflow-hidden group"
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

export const CVForm = () => {
    const { cvData, updateCVData, sectionOrder, setSectionOrder } = useStore()
    const [showGallery, setShowGallery] = React.useState(false)

    const renderSection = (sectionId: string) => {
        switch (sectionId) {
            case 'identity':
                return (
                    <Card key="identity" className="p-8 editorial-card">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3 text-text-main">
                                <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                                    <User className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl font-black font-couture uppercase tracking-tight">Identité Visuelle</h3>
                            </div>
                            <div className="cursor-grab active:cursor-grabbing text-text-muted opacity-20 hover:opacity-100 transition-opacity">
                                <GripVertical className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-none bg-slate-50 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 overflow-hidden shadow-inner group-hover:border-couture-gold transition-all duration-500">
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
                                        <p className="text-sm font-black text-text-main uppercase tracking-widest">Portrait Professionnel</p>
                                        <p className="text-[10px] text-text-muted font-medium">Téléchargez une photo ou laissez l'IA créer votre avatar parfait.</p>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <ImageGenerator onGenerated={(url: string) => updateCVData({ photo: url })} />
                                        <Button
                                            variant="secondary"
                                            className="text-[10px] h-9 px-4 rounded-none border-card-border hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                            onClick={() => setShowGallery(true)}
                                        >
                                            Galerie
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="text-[10px] h-9 px-4 rounded-none text-red-400 hover:text-red-600"
                                            onClick={() => updateCVData({ photo: '' })}
                                        >
                                            Effacer
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Nom & Prénoms</Label>
                                    <Input
                                        className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 transition-all py-6 font-bold"
                                        value={cvData.nom}
                                        onChange={(e) => updateCVData({ nom: e.target.value })}
                                        placeholder="Ex: Jean-Baptiste de Luca"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Titre de l'expertise</Label>
                                        <Lightbulb className="w-3 h-3 text-couture-gold opacity-50" />
                                    </div>
                                    <Input
                                        className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 transition-all py-6 font-bold"
                                        value={cvData.titre}
                                        onChange={(e) => updateCVData({ titre: e.target.value })}
                                        placeholder="Ex: Senior Creative Director"
                                    />
                                    <SuggestionTrigger field="titre" onSelect={(v: string) => updateCVData({ titre: v })} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Résumé du Profil (Pitch)</Label>
                                    <Lightbulb className="w-3 h-3 text-couture-gold opacity-50" />
                                </div>
                                <TextArea
                                    className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 transition-all min-h-[120px] leading-relaxed italic"
                                    value={cvData.profilSummary}
                                    onChange={(e) => updateCVData({ profilSummary: e.target.value })}
                                    placeholder="Écrivez une introduction qui marque les esprits..."
                                />
                                <SuggestionTrigger field="profilSummary" onSelect={(v: string) => updateCVData({ profilSummary: v })} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Email Direct</Label>
                                    <Input
                                        type="email"
                                        className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 py-6"
                                        value={cvData.email}
                                        onChange={(e) => updateCVData({ email: e.target.value })}
                                        placeholder="contact@email.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Ligne Téléphonique</Label>
                                    <Input
                                        type="tel"
                                        className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 py-6"
                                        value={cvData.phone}
                                        onChange={(e) => updateCVData({ phone: e.target.value })}
                                        placeholder="+XX XXX XXX XXX"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Siège / Résidence</Label>
                                    <Input
                                        className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 py-6"
                                        value={cvData.location}
                                        onChange={(e) => updateCVData({ location: e.target.value })}
                                        placeholder="Ville, Pays"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                )
            case 'experience':
                return <ExperienceList key="experience" />
            case 'formation':
                return <FormationList key="formation" />
            case 'languages':
                return <LanguageList key="languages" />
            case 'qualities':
                return <QualityList key="qualities" />
            case 'interests':
                return <InterestList key="interests" />
            case 'certificates':
                return <CertificateList key="certificates" />
            case 'projects':
                return <ProjectList key="projects" />
            case 'skills':
                return (
                    <Card key="skills" className="p-8 editorial-card">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3 text-text-main">
                                <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                                    <Settings className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-black font-couture uppercase tracking-tight">Arsenal de Compétences</h3>
                            </div>
                            <div className="cursor-grab active:cursor-grabbing text-text-muted opacity-20 hover:opacity-100 transition-opacity">
                                <GripVertical className="w-5 h-5" />
                            </div>
                        </div>
                        <TextArea
                            className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 transition-all min-h-[100px] font-mono text-xs uppercase tracking-widest"
                            value={cvData.skills}
                            onChange={(e) => updateCVData({ skills: e.target.value })}
                            placeholder="LISTEZ VOS COMPÉTENCES, SÉPARÉES PAR DES VIRGULES..."
                        />
                        <SuggestionTrigger field="skills" onSelect={(v: string) => updateCVData({ skills: v })} />
                    </Card>
                )
            default:
                return null
        }
    }

    return (
        <Reorder.Group axis="y" values={sectionOrder} onReorder={setSectionOrder} className="space-y-8">
            {sectionOrder.map((sectionId) => (
                <Reorder.Item key={sectionId} value={sectionId}>
                    {renderSection(sectionId)}
                </Reorder.Item>
            ))}

            {showGallery && (
                <AvatarGallery
                    current={cvData.photo}
                    onSelect={(url: string) => updateCVData({ photo: url })}
                    onClose={() => setShowGallery(false)}
                />
            )}
        </Reorder.Group>
    )
}
