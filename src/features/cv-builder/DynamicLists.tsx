import React from 'react'
import { Plus, Trash2, Briefcase, GraduationCap, Languages, Star, Award, Globe, Heart, GripVertical } from 'lucide-react'
import { Card, Button, Input, TextArea, Label } from '@/components/ui'
import { useStore, Experience, Formation } from '@/store/useStore'
import { motion, AnimatePresence } from 'framer-motion'

export const ExperienceList = () => {
    const { cvData, addExperience, removeExperience, updateCVData } = useStore()

    const handleAdd = () => {
        addExperience({
            id: Date.now(),
            titre: '',
            entreprise: '',
            duree: '',
            description: ''
        })
    }

    const handleChange = (id: number, field: keyof Experience, value: string) => {
        const updated = cvData.experiences.map(exp =>
            exp.id === id ? { ...exp, [field]: value } : exp
        )
        updateCVData({ experiences: updated })
    }

    return (
        <Card className="p-8 editorial-card">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-text-main">
                    <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                        <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black font-couture uppercase tracking-tight">Expériences Stratégiques</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="p-2 h-auto hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleAdd}>
                        <Plus className="w-5 h-5" />
                    </Button>
                    <div className="cursor-grab active:cursor-grabbing text-text-muted opacity-20 hover:opacity-100 transition-opacity">
                        <GripVertical className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <AnimatePresence>
                    {cvData.experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative p-6 border border-card-border bg-slate-50/30 dark:bg-slate-800/20"
                        >
                            <button
                                onClick={() => removeExperience(exp.id)}
                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Poste / Titre</Label>
                                    <Input
                                        className="rounded-none border-card-border bg-white dark:bg-slate-800 font-bold"
                                        value={exp.titre}
                                        onChange={(e) => handleChange(exp.id, 'titre', e.target.value)}
                                        placeholder="Ex: Senior Creative Director"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Entreprise</Label>
                                    <Input
                                        className="rounded-none border-card-border bg-white dark:bg-slate-800 font-bold"
                                        value={exp.entreprise}
                                        onChange={(e) => handleChange(exp.id, 'entreprise', e.target.value)}
                                        placeholder="Ex: Maison de Luxe"
                                    />
                                </div>
                            </div>
                            <div className="mb-6 space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Temporalité</Label>
                                <Input
                                    className="rounded-none border-card-border bg-white dark:bg-slate-800"
                                    value={exp.duree}
                                    onChange={(e) => handleChange(exp.id, 'duree', e.target.value)}
                                    placeholder="2020 - Présent"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Réalisations & Impact</Label>
                                <TextArea
                                    className="rounded-none border-card-border bg-white dark:bg-slate-800 min-h-[100px] leading-relaxed italic"
                                    value={exp.description}
                                    onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                                    placeholder="Décrivez vos accomplissements les plus marquants..."
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {cvData.experiences.length === 0 && (
                    <p className="text-center text-text-muted py-10 italic font-serif">Aucune expérience enregistrée dans l'atelier.</p>
                )}
            </div>
        </Card>
    )
}

export const FormationList = () => {
    const { cvData, addFormation, removeFormation, updateCVData } = useStore()

    const handleAdd = () => {
        addFormation({
            id: Date.now(),
            titre: '',
            etablissement: '',
            annee: ''
        })
    }

    const handleChange = (id: number, field: keyof Formation, value: string) => {
        const updated = cvData.formations.map(f =>
            f.id === id ? { ...f, [field]: value } : f
        )
        updateCVData({ formations: updated })
    }

    return (
        <Card className="p-8 editorial-card">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-text-main">
                    <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                        <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black font-couture uppercase tracking-tight">Formation Académique</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="p-2 h-auto hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleAdd}>
                        <Plus className="w-5 h-5" />
                    </Button>
                    <div className="cursor-grab active:cursor-grabbing text-text-muted opacity-20 hover:opacity-100 transition-opacity">
                        <GripVertical className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <AnimatePresence>
                    {cvData.formations.map((f) => (
                        <motion.div
                            key={f.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative p-6 border border-card-border bg-slate-50/30 dark:bg-slate-800/20"
                        >
                            <button
                                onClick={() => removeFormation(f.id)}
                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Diplôme / Titre Obtenu</Label>
                                    <Input
                                        className="rounded-none border-card-border bg-white dark:bg-slate-800 font-bold"
                                        value={f.titre}
                                        onChange={(e) => handleChange(f.id, 'titre', e.target.value)}
                                        placeholder="Ex: Master en Design de Mode"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Institution</Label>
                                        <Input
                                            className="rounded-none border-card-border bg-white dark:bg-slate-800"
                                            value={f.etablissement}
                                            onChange={(e) => handleChange(f.id, 'etablissement', e.target.value)}
                                            placeholder="Ex: Institut des Arts"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Année d'obtention</Label>
                                        <Input
                                            className="rounded-none border-card-border bg-white dark:bg-slate-800"
                                            value={f.annee}
                                            onChange={(e) => handleChange(f.id, 'annee', e.target.value)}
                                            placeholder="Ex: 2022"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {cvData.formations.length === 0 && (
                    <p className="text-center text-text-muted py-10 italic font-serif">Aucun diplôme répertorié pour le moment.</p>
                )}
            </div>
        </Card>
    )
}

export const LanguageList = () => {
    const { cvData, updateCVData } = useStore()

    const handleAdd = () => {
        updateCVData({
            languages: [...cvData.languages, { name: '', level: 'B2' }]
        })
    }

    const handleRemove = (index: number) => {
        updateCVData({
            languages: cvData.languages.filter((_, i) => i !== index)
        })
    }

    const handleChange = (index: number, field: 'name' | 'level', value: string) => {
        const updated = cvData.languages.map((l, i) =>
            i === index ? { ...l, [field]: value } : l
        )
        updateCVData({ languages: updated })
    }

    return (
        <Card className="p-8 editorial-card">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-text-main">
                    <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                        <Languages className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black font-couture uppercase tracking-tight">Maîtrise Linguistique</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="p-2 h-auto hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleAdd}>
                        <Plus className="w-5 h-5" />
                    </Button>
                    <div className="cursor-grab active:cursor-grabbing text-text-muted opacity-20 hover:opacity-100 transition-opacity">
                        <GripVertical className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {cvData.languages.map((lang, i) => (
                    <div key={i} className="flex gap-4 items-end bg-slate-50/50 dark:bg-slate-800/10 p-4 border border-card-border">
                        <div className="flex-1 space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Langue</Label>
                            <Input
                                className="rounded-none border-card-border bg-white dark:bg-slate-800"
                                value={lang.name}
                                onChange={(e) => handleChange(i, 'name', e.target.value)}
                                placeholder="Français, Anglais..."
                            />
                        </div>
                        <div className="w-32 space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Niveau</Label>
                            <Input
                                className="rounded-none border-card-border bg-white dark:bg-slate-800 font-mono text-xs"
                                value={lang.level}
                                onChange={(e) => handleChange(i, 'level', e.target.value)}
                                placeholder="C2, B2..."
                            />
                        </div>
                        <Button variant="ghost" className="p-3 h-[46px] text-red-400 hover:text-red-600" onClick={() => handleRemove(i)}>
                            <Trash2 className="w-5 h-5" />
                        </Button>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export const InterestList = () => {
    const { cvData, updateCVData } = useStore()

    const handleAdd = () => {
        updateCVData({ interests: [...cvData.interests, ''] })
    }

    const handleRemove = (index: number) => {
        updateCVData({ interests: cvData.interests.filter((_, i) => i !== index) })
    }

    const handleChange = (index: number, value: string) => {
        const updated = cvData.interests.map((v, i) => i === index ? value : v)
        updateCVData({ interests: updated })
    }

    return (
        <Card className="p-8 editorial-card">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-text-main">
                    <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                        <Heart className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black font-couture uppercase tracking-tight">Centres d'Intérêt</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="p-2 h-auto hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleAdd}>
                        <Plus className="w-5 h-5" />
                    </Button>
                    <div className="cursor-grab active:cursor-grabbing text-text-muted opacity-20 hover:opacity-100 transition-opacity">
                        <GripVertical className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cvData.interests.map((interest, i) => (
                    <div key={i} className="flex gap-2 items-center bg-slate-50/50 dark:bg-slate-800/10 p-2 border border-card-border">
                        <Input
                            className="rounded-none border-none bg-transparent"
                            value={interest}
                            onChange={(e) => handleChange(i, e.target.value)}
                            placeholder="Ex: Photographie éditioriale"
                        />
                        <button onClick={() => handleRemove(i)} className="p-2 text-red-300 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export const QualityList = () => {
    const { cvData, updateCVData } = useStore()

    const handleAdd = () => {
        updateCVData({ qualities: [...cvData.qualities, ''] })
    }

    const handleRemove = (index: number) => {
        updateCVData({ qualities: cvData.qualities.filter((_, i) => i !== index) })
    }

    const handleChange = (index: number, value: string) => {
        const updated = cvData.qualities.map((v, i) => i === index ? value : v)
        updateCVData({ qualities: updated })
    }

    return (
        <Card className="p-8 editorial-card">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-text-main">
                    <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                        <Star className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black font-couture uppercase tracking-tight">Signes Distinctifs</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="p-2 h-auto hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleAdd}>
                        <Plus className="w-5 h-5" />
                    </Button>
                    <div className="cursor-grab active:cursor-grabbing text-text-muted opacity-20 hover:opacity-100 transition-opacity">
                        <GripVertical className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cvData.qualities.map((quality, i) => (
                    <div key={i} className="flex gap-2 items-center bg-slate-50/50 dark:bg-slate-800/10 p-2 border border-card-border">
                        <Input
                            className="rounded-none border-none bg-transparent font-bold"
                            value={quality}
                            onChange={(e) => handleChange(i, e.target.value)}
                            placeholder="Ex: Leadership stratégique"
                        />
                        <button onClick={() => handleRemove(i)} className="p-2 text-red-300 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export const CertificateList = () => {
    const { cvData, updateCVData } = useStore()

    const handleAdd = () => {
        updateCVData({
            certificates: [...cvData.certificates, { title: '', year: '' }]
        })
    }

    const handleRemove = (index: number) => {
        updateCVData({
            certificates: cvData.certificates.filter((_, i) => i !== index)
        })
    }

    const handleChange = (index: number, field: 'title' | 'year', value: string) => {
        const updated = cvData.certificates.map((c, i) =>
            i === index ? { ...c, [field]: value } : c
        )
        updateCVData({ certificates: updated })
    }

    return (
        <Card className="p-8 editorial-card">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-text-main">
                    <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                        <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black font-couture uppercase tracking-tight">Certifications & Titres</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="p-2 h-auto hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleAdd}>
                        <Plus className="w-5 h-5" />
                    </Button>
                    <div className="cursor-grab active:cursor-grabbing text-text-muted opacity-20 hover:opacity-100 transition-opacity">
                        <GripVertical className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                {cvData.certificates.map((cert, i) => (
                    <div key={i} className="flex gap-4 items-end bg-slate-50/50 dark:bg-slate-800/10 p-4 border border-card-border">
                        <div className="flex-1 space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Titre du Certificat</Label>
                            <Input
                                className="rounded-none border-card-border bg-white dark:bg-slate-800"
                                value={cert.title}
                                onChange={(e) => handleChange(i, 'title', e.target.value)}
                                placeholder="AWS, PMP, GMAT..."
                            />
                        </div>
                        <div className="w-32 space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Année</Label>
                            <Input
                                className="rounded-none border-card-border bg-white dark:bg-slate-800"
                                value={cert.year}
                                onChange={(e) => handleChange(i, 'year', e.target.value)}
                                placeholder="2023"
                            />
                        </div>
                        <Button variant="ghost" className="p-3 h-[46px] text-red-400 hover:text-red-600" onClick={() => handleRemove(i)}>
                            <Trash2 className="w-5 h-5" />
                        </Button>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export const ProjectList = () => {
    const { cvData, updateCVData } = useStore()

    const handleAdd = () => {
        updateCVData({
            projects: [...cvData.projects, { title: '', link: '' }]
        })
    }

    const handleRemove = (index: number) => {
        updateCVData({
            projects: cvData.projects.filter((_, i) => i !== index)
        })
    }

    const handleChange = (index: number, field: 'title' | 'link', value: string) => {
        const updated = cvData.projects.map((p, i) =>
            i === index ? { ...p, [field]: value } : p
        )
        updateCVData({ projects: updated })
    }

    return (
        <Card className="p-8 editorial-card">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3 text-text-main">
                    <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                        <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black font-couture uppercase tracking-tight">Grands Projets</h3>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="p-2 h-auto hover:bg-slate-50 dark:hover:bg-slate-800" onClick={handleAdd}>
                        <Plus className="w-5 h-5" />
                    </Button>
                    <div className="cursor-grab active:cursor-grabbing text-text-muted opacity-20 hover:opacity-100 transition-opacity">
                        <GripVertical className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                {cvData.projects.map((project, i) => (
                    <div key={i} className="relative p-6 border border-card-border bg-slate-50/30 dark:bg-slate-800/20">
                        <button
                            onClick={() => handleRemove(i)}
                            className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Titre de l'Œuvre / Projet</Label>
                                <Input
                                    className="rounded-none border-card-border bg-white dark:bg-slate-800 font-bold"
                                    value={project.title}
                                    onChange={(e) => handleChange(i, 'title', e.target.value)}
                                    placeholder="Ex: DeOS Signature Suite"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Lien d'Accès ou Rapport</Label>
                                <Input
                                    className="rounded-none border-card-border bg-white dark:bg-slate-800 font-mono text-xs"
                                    value={project.link}
                                    onChange={(e) => handleChange(i, 'link', e.target.value)}
                                    placeholder="https://deos.studio/p/..."
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
