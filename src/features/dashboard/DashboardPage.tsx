import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/store/useStore'
import { Card, Button, TextArea } from '@/components/ui'
import { PieChart, Zap, CheckCircle2, AlertCircle, Sparkles, Brain, Briefcase, Plus, Trash2, ExternalLink } from 'lucide-react'

const DashboardPage = () => {
    const { cvData, jobDescription, setJobDescription, dashboardScore, setDashboardScore, applications, addApplication, updateApplication, removeApplication } = useStore()
    const [isAnalyzing, setIsAnalyzing] = useState(false)

    // Simuler une analyse algorithmique
    const analyzeCompatibility = () => {
        setIsAnalyzing(true)
        setTimeout(() => {
            const resumeWords = (cvData.skills + ' ' + cvData.titre + ' ' + cvData.profilSummary).toLowerCase()
            const jdWords = jobDescription.toLowerCase()

            if (!jobDescription) {
                setDashboardScore(45) // Score de base basé sur la complétude du CV seul
            } else {
                const keywords = jdWords.split(/\s+/).filter(w => w.length > 4)
                let matches = 0
                keywords.forEach(kw => {
                    if (resumeWords.includes(kw)) matches++
                })
                const score = Math.min(Math.round((matches / (keywords.length * 0.3)) * 100), 100)
                setDashboardScore(score)
            }
            setIsAnalyzing(false)
        }, 1500)
    }

    const completeness = [
        { label: 'Infos Perso', status: cvData.nom && cvData.email ? 'done' : 'missing' },
        { label: 'Expériences', status: cvData.experiences.length > 0 ? 'done' : 'missing' },
        { label: 'Formations', status: cvData.formations.length > 0 ? 'done' : 'missing' },
        { label: 'Compétences', status: cvData.skills.length > 0 ? 'done' : 'missing' },
    ]

    const handleAddJob = () => {
        const newJob = {
            id: Math.random().toString(36).substr(2, 9),
            company: 'Nouvelle Entreprise',
            position: 'Poste visé',
            status: 'applied' as const,
            date: new Date().toLocaleDateString(),
            note: '',
            cvVersionId: '',
        }
        addApplication(newJob)
    }

    return (
        <div className="space-y-12 pb-20">
            <header className="flex items-center justify-between border-b border-card-border pb-8">
                <div>
                    <h1 className="text-3xl font-black font-couture tracking-tight text-text-main">Tableau de Bord</h1>
                    <p className="text-text-muted font-medium font-serif italic">"Pilotez votre ascension professionnelle."</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-couture-gold flex items-center justify-center text-white dark:text-slate-900 shadow-2xl transition-colors duration-500">
                    <PieChart className="w-8 h-8" />
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-8 border-none bg-slate-900 text-white relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-1000">
                        <Zap className="w-32 h-32" />
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 font-Inter">Score de Match IA</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-6xl font-black transition-all duration-700">{dashboardScore}%</span>
                        <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Précision_Alpha</span>
                    </div>
                    <div className="mt-8 h-1 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${dashboardScore}%` }}
                            className="h-full bg-couture-gold"
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>
                </Card>

                <Card className="p-8 editorial-card">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted mb-6">État de l'Atelier</h3>
                    <div className="space-y-5">
                        {completeness.map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <span className="text-sm font-bold text-text-main">{item.label}</span>
                                {item.status === 'done' ? (
                                    <CheckCircle2 className="w-5 h-5 text-couture-gold" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 text-red-400 opacity-50" />
                                )}
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <section className="p-10 editorial-card">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-xl">
                        <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black font-couture tracking-tight">Analyseur de Poste</h3>
                </div>
                <p className="text-text-muted text-sm mb-6 leading-relaxed italic font-serif">
                    "Identifiez les manques entre votre profil et les attentes du marché."
                </p>
                <TextArea
                    placeholder="Collez ici l'offre d'emploi..."
                    className="min-h-[150px] mb-6 border-card-border bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 transition-all font-Inter text-sm leading-relaxed italic"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                />
                <Button
                    onClick={analyzeCompatibility}
                    disabled={isAnalyzing}
                    className="w-full py-6 text-sm font-black uppercase tracking-widest bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 hover:scale-[1.01] transition-all shadow-2xl"
                >
                    {isAnalyzing ? (
                        <span className="flex items-center gap-2">
                            <Brain className="w-5 h-5 animate-pulse" /> IA en cours d'analyse...
                        </span>
                    ) : 'Générer le rapport de compatibilité'}
                </Button>
            </section>

            {/* JOB TRACKER SECTION */}
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                            <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-black font-couture tracking-tight">Suivi de Candidatures</h3>
                    </div>
                    <Button onClick={handleAddJob} variant="secondary" className="text-[10px] font-black uppercase tracking-widest gap-2 bg-white dark:bg-slate-800 border-card-border shadow-xl">
                        <Plus className="w-3 h-3" /> Ajouter un Job
                    </Button>
                </div>

                {applications.length === 0 ? (
                    <div className="py-20 border-2 border-dashed border-card-border text-center">
                        <p className="text-text-muted text-sm italic font-serif">Aucune candidature enregistrée pour le moment.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {['applied', 'interview', 'offer'].map((status) => (
                            <div key={status} className="space-y-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted border-b border-card-border pb-2 flex items-center justify-between">
                                    {status === 'applied' ? 'Postulé' : status === 'interview' ? 'Entretien' : 'Offre'}
                                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-[8px]">{applications.filter(a => a.status === status).length}</span>
                                </h4>
                                <div className="space-y-3">
                                    {applications.filter(a => a.status === status).map((app) => (
                                        <Card key={app.id} className="p-5 editorial-card group relative">
                                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => removeApplication(app.id)} className="text-red-400 hover:text-red-600">
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <div className="space-y-1">
                                                <h5 className="font-black text-sm text-text-main group-hover:text-couture-gold transition-colors">{app.company}</h5>
                                                <p className="text-[10px] text-text-muted uppercase tracking-widest font-black">{app.position}</p>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between border-t border-card-border pt-4">
                                                <span className="text-[8px] font-black text-slate-400 uppercase">{app.date}</span>
                                                <div className="flex gap-2">
                                                    {status !== 'offer' && (
                                                        <button
                                                            onClick={() => updateApplication(app.id, { status: status === 'applied' ? 'interview' : 'offer' })}
                                                            className="text-[8px] font-black uppercase tracking-widest text-couture-gold hover:underline"
                                                        >
                                                            Suivant
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}

export default DashboardPage
