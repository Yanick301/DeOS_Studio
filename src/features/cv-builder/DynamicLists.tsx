import React from 'react'
import { Plus, Trash2, Briefcase, GraduationCap, Languages, Star, Award, Globe, Heart } from 'lucide-react'
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
        <Card>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-indigo-600">
                    <Briefcase className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Expérience Professionnelle</h3>
                </div>
                <Button variant="ghost" className="p-2 h-auto" onClick={handleAdd}>
                    <Plus className="w-5 h-5" />
                </Button>
            </div>

            <div className="space-y-6">
                <AnimatePresence>
                    {cvData.experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="relative p-4 border border-gray-100 rounded-xl bg-gray-50/30"
                        >
                            <button
                                onClick={() => removeExperience(exp.id)}
                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
                                title="Supprimer"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <Label>Poste / Titre</Label>
                                    <Input
                                        value={exp.titre}
                                        onChange={(e) => handleChange(exp.id, 'titre', e.target.value)}
                                        placeholder="Ex: Senior Developer"
                                    />
                                </div>
                                <div>
                                    <Label>Entreprise</Label>
                                    <Input
                                        value={exp.entreprise}
                                        onChange={(e) => handleChange(exp.id, 'entreprise', e.target.value)}
                                        placeholder="Ex: Google"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <Label>Durée (Ex: Jan 2020 - Présent)</Label>
                                <Input
                                    value={exp.duree}
                                    onChange={(e) => handleChange(exp.id, 'duree', e.target.value)}
                                    placeholder="2020 - 2023"
                                />
                            </div>
                            <div>
                                <Label>Description des missions</Label>
                                <TextArea
                                    value={exp.description}
                                    onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                                    placeholder="Listez vos accomplissements..."
                                    className="min-h-[80px]"
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {cvData.experiences.length === 0 && (
                    <p className="text-center text-gray-400 py-4 italic">Aucune expérience ajoutée.</p>
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
        <Card>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-indigo-600">
                    <GraduationCap className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Formation Académique</h3>
                </div>
                <Button variant="ghost" className="p-2 h-auto" onClick={handleAdd}>
                    <Plus className="w-5 h-5" />
                </Button>
            </div>

            <div className="space-y-6">
                <AnimatePresence>
                    {cvData.formations.map((f) => (
                        <motion.div
                            key={f.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="relative p-4 border border-gray-100 rounded-xl bg-gray-50/30"
                        >
                            <button
                                onClick={() => removeFormation(f.id)}
                                className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
                                title="Supprimer"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>

                            <div className="space-y-4">
                                <div>
                                    <Label>Diplôme / Titre</Label>
                                    <Input
                                        value={f.titre}
                                        onChange={(e) => handleChange(f.id, 'titre', e.target.value)}
                                        placeholder="Ex: Master Informatique"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label>Établissement</Label>
                                        <Input
                                            value={f.etablissement}
                                            onChange={(e) => handleChange(f.id, 'etablissement', e.target.value)}
                                            placeholder="Ex: Sorbonne"
                                        />
                                    </div>
                                    <div>
                                        <Label>Année</Label>
                                        <Input
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
                    <p className="text-center text-gray-400 py-4 italic">Aucune formation ajoutée.</p>
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
        <Card>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-indigo-600">
                    <Languages className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Langues</h3>
                </div>
                <Button variant="ghost" className="p-2 h-auto" onClick={handleAdd}>
                    <Plus className="w-5 h-5" />
                </Button>
            </div>
            <div className="space-y-3">
                {cvData.languages.map((lang, i) => (
                    <div key={i} className="flex gap-2 items-end">
                        <div className="flex-1">
                            <Label>Langue</Label>
                            <Input
                                value={lang.name}
                                onChange={(e) => handleChange(i, 'name', e.target.value)}
                                placeholder="Ex: Anglais"
                            />
                        </div>
                        <div className="w-32">
                            <Label>Niveau</Label>
                            <Input
                                value={lang.level}
                                onChange={(e) => handleChange(i, 'level', e.target.value)}
                                placeholder="Ex: C1"
                            />
                        </div>
                        <Button variant="ghost" className="p-3 h-[46px]" onClick={() => handleRemove(i)}>
                            <Trash2 className="w-5 h-5 text-red-400" />
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
        <Card>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-indigo-600">
                    <Heart className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Centres d'intérêt</h3>
                </div>
                <Button variant="ghost" className="p-2 h-auto" onClick={handleAdd}>
                    <Plus className="w-5 h-5" />
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cvData.interests.map((interest, i) => (
                    <div key={i} className="flex gap-2 items-center">
                        <Input
                            value={interest}
                            onChange={(e) => handleChange(i, e.target.value)}
                            placeholder="Ex: Photographie"
                        />
                        <Button variant="ghost" className="p-2" onClick={() => handleRemove(i)}>
                            <Trash2 className="w-5 h-5 text-red-400" />
                        </Button>
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
        <Card>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-indigo-600">
                    <Star className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Qualités / Soft Skills</h3>
                </div>
                <Button variant="ghost" className="p-2 h-auto" onClick={handleAdd}>
                    <Plus className="w-5 h-5" />
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cvData.qualities.map((quality, i) => (
                    <div key={i} className="flex gap-2 items-center">
                        <Input
                            value={quality}
                            onChange={(e) => handleChange(i, e.target.value)}
                            placeholder="Ex: Leadership"
                        />
                        <Button variant="ghost" className="p-2" onClick={() => handleRemove(i)}>
                            <Trash2 className="w-5 h-5 text-red-400" />
                        </Button>
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
        <Card>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-indigo-600">
                    <Award className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Certificats</h3>
                </div>
                <Button variant="ghost" className="p-2 h-auto" onClick={handleAdd}>
                    <Plus className="w-5 h-5" />
                </Button>
            </div>
            <div className="space-y-3">
                {cvData.certificates.map((cert, i) => (
                    <div key={i} className="flex gap-2 items-end">
                        <div className="flex-1">
                            <Label>Titre du certificat</Label>
                            <Input
                                value={cert.title}
                                onChange={(e) => handleChange(i, 'title', e.target.value)}
                                placeholder="Ex: AWS Certified Solutions Architect"
                            />
                        </div>
                        <div className="w-32">
                            <Label>Année</Label>
                            <Input
                                value={cert.year}
                                onChange={(e) => handleChange(i, 'year', e.target.value)}
                                placeholder="2023"
                            />
                        </div>
                        <Button variant="ghost" className="p-3 h-[46px]" onClick={() => handleRemove(i)}>
                            <Trash2 className="w-5 h-5 text-red-400" />
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
        <Card>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-indigo-600">
                    <Globe className="w-6 h-6" />
                    <h3 className="text-xl font-bold">Projets</h3>
                </div>
                <Button variant="ghost" className="p-2 h-auto" onClick={handleAdd}>
                    <Plus className="w-5 h-5" />
                </Button>
            </div>
            <div className="space-y-4">
                {cvData.projects.map((project, i) => (
                    <div key={i} className="relative p-4 border border-gray-100 rounded-xl bg-gray-50/30">
                        <button
                            onClick={() => handleRemove(i)}
                            className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                        <div className="space-y-4">
                            <div>
                                <Label>Titre du Projet</Label>
                                <Input
                                    value={project.title}
                                    onChange={(e) => handleChange(i, 'title', e.target.value)}
                                    placeholder="Ex: DeOS Studio App"
                                />
                            </div>
                            <div>
                                <Label>Lien / Description courte</Label>
                                <Input
                                    value={project.link}
                                    onChange={(e) => handleChange(i, 'link', e.target.value)}
                                    placeholder="https://github.com/..."
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
