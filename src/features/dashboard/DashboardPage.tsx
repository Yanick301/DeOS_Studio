import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/store/useStore'
import { Card, Button, TextArea } from '@/components/ui'
import { PieChart, Zap, CheckCircle2, AlertCircle, Sparkles, Brain } from 'lucide-react'

const DashboardPage = () => {
    const { cvData, jobDescription, setJobDescription, dashboardScore, setDashboardScore } = useStore()
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

    return (
        <div className="space-y-8 pb-10">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black">Dashboard</h1>
                    <p className="text-slate-500 font-medium">Analyse et Score de Carrière</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                    <PieChart className="w-8 h-8" />
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-8 border-none bg-slate-900 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-1000">
                        <Zap className="w-32 h-32" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Score de Compatibilité</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-6xl font-black transition-all duration-700">{dashboardScore}%</span>
                        <span className="text-slate-500 font-bold">MATCH</span>
                    </div>
                    <div className="mt-8 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${dashboardScore}%` }}
                            className="h-full bg-couture-gold"
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>
                </Card>

                <Card className="p-8 border-none bg-white shadow-xl">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Complétude du CV</h3>
                    <div className="space-y-4">
                        {completeness.map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-700">{item.label}</span>
                                {item.status === 'done' ? (
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 text-amber-500" />
                                )}
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <section className="bg-white p-8 rounded-none border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-50 rounded-xl">
                        <Sparkles className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-black">Optimisez votre Match</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    Collez la description du poste ci-dessous. Notre IA analysera votre CV par rapport aux exigences et vous donnera un score précis.
                </p>
                <TextArea
                    placeholder="Collez ici l'offre d'emploi..."
                    className="min-h-[150px] mb-6 bg-slate-50 border-none focus:ring-2 ring-indigo-500 transition-all"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                />
                <Button
                    onClick={analyzeCompatibility}
                    disabled={isAnalyzing}
                    className="w-full py-6 text-lg font-black bg-slate-900 hover:bg-black transition-all"
                >
                    {isAnalyzing ? (
                        <span className="flex items-center gap-2">
                            <Brain className="w-5 h-5 animate-pulse" /> Analyse en cours...
                        </span>
                    ) : 'Calculer le Match Professionnel'}
                </Button>
            </section>
        </div>
    )
}

export default DashboardPage
