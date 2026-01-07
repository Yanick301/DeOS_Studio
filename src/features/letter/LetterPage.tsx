import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/store/useStore'
import { Card, Button, Input, TextArea, Label } from '@/components/ui'
import { FileText, Send, Download, Sparkles, User, Briefcase, MapPin, Calendar, Layout, ShieldCheck } from 'lucide-react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { letterTemplates, getLetterTemplate } from './LetterTemplates'
import { AtelierConcierge } from '../cv-builder/AtelierConcierge'

const LetterPage = () => {
    const { letterData, updateLetterData, cvData, currentLetterTemplateId, setLetterTemplate, language, setLanguage } = useStore()
    const letterRef = useRef<HTMLDivElement>(null)
    const activeTemplate = getLetterTemplate(currentLetterTemplateId)

    const exportPDF = async () => {
        if (!letterRef.current) return
        const canvas = await html2canvas(letterRef.current, {
            scale: 5,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            windowWidth: 794,
            windowHeight: 1123,
            onclone: (clonedDoc) => {
                const el = clonedDoc.querySelector('[data-letter-container]') as HTMLElement
                if (el) el.style.transform = 'none'
            }
        })
        const imgData = canvas.toDataURL('image/jpeg', 1.0)
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297)
        pdf.save(`Lettre_Motivation_${cvData.nom?.replace(/\s+/g, '_') || 'DeOS'}.pdf`)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16 pb-20"
        >
            <header className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-card-border pb-10">
                <div className="text-left">
                    <h2 className="text-4xl font-black text-text-main font-couture tracking-tight uppercase">Studio d'Éloquence</h2>
                    <p className="text-text-muted mt-2 font-serif italic">"L'art de convaincre par la plume et le design."</p>
                </div>

                <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full ring-4 ring-slate-50 dark:ring-slate-900">
                    <button
                        onClick={() => setLanguage('fr')}
                        className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${language === 'fr' ? 'bg-white dark:bg-slate-700 shadow-lg text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        FR
                    </button>
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${language === 'en' ? 'bg-white dark:bg-slate-700 shadow-lg text-slate-900 dark:text-white' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        EN
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-12">
                    {/* Template Selection */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                                <Layout className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black font-couture uppercase tracking-tight text-text-main">Architecte de Style</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {letterTemplates.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setLetterTemplate(t.id)}
                                    className={`p-6 border-2 transition-all text-left relative overflow-hidden group ${currentLetterTemplateId === t.id
                                        ? 'border-couture-gold bg-slate-900 text-white dark:bg-slate-800'
                                        : 'border-card-border bg-white dark:bg-slate-900/50 hover:border-couture-gold/50'
                                        }`}
                                >
                                    <div className="relative z-10">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-50 group-hover:opacity-100">Modèle</p>
                                        <p className="font-black text-sm uppercase tracking-tight">{t.name}</p>
                                    </div>
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <FileText className="w-12 h-12" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-1 bg-couture-gold transition-all duration-500" style={{ width: currentLetterTemplateId === t.id ? '100%' : '0%' }} />
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Recipient Form */}
                    <section className="space-y-8 editorial-card p-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                                <User className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black font-couture uppercase tracking-tight text-text-main">Cible Stratégique</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Nom du Contact</Label>
                                <Input
                                    className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 py-6"
                                    value={letterData.recipientName}
                                    onChange={(e) => updateLetterData({ recipientName: e.target.value })}
                                    placeholder="Ex: Sarah Connor"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Titre / Fonction</Label>
                                <Input
                                    className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 py-6"
                                    value={letterData.recipientTitle}
                                    onChange={(e) => updateLetterData({ recipientTitle: e.target.value })}
                                    placeholder="Ex: Responsable RH"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Entreprise</Label>
                                <Input
                                    className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 py-6"
                                    value={letterData.companyName}
                                    onChange={(e) => updateLetterData({ companyName: e.target.value })}
                                    placeholder="Ex: Cyberdyne Systems"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Localisation</Label>
                                <Input
                                    className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 py-6"
                                    value={letterData.companyAddress}
                                    onChange={(e) => updateLetterData({ companyAddress: e.target.value })}
                                    placeholder="Ex: Los Angeles, CA"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Content Form */}
                    <section className="space-y-8 editorial-card p-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 rounded-lg">
                                <Send className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black font-couture uppercase tracking-tight text-text-main">Rédaction du Manifeste</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Date Officielle</Label>
                                <Input
                                    className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 py-6"
                                    value={letterData.date}
                                    onChange={(e) => updateLetterData({ date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Objet de la Lettre</Label>
                                <Input
                                    className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 py-6 font-bold"
                                    value={letterData.subject}
                                    onChange={(e) => updateLetterData({ subject: e.target.value })}
                                    placeholder="Candidature pour..."
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Corps de la Lettre</Label>
                            <TextArea
                                className="rounded-none border-card-border bg-slate-50/50 dark:bg-slate-800/50 min-h-[400px] leading-relaxed italic"
                                value={letterData.content}
                                onChange={(e) => updateLetterData({ content: e.target.value })}
                                placeholder="Rédigez ici votre message avec distinction..."
                            />
                        </div>

                        <Button
                            onClick={exportPDF}
                            className="w-full py-8 text-sm font-black uppercase tracking-[0.4em] bg-slate-900 text-white dark:bg-couture-gold dark:text-slate-900 hover:scale-[1.01] transition-all shadow-2xl flex gap-3"
                        >
                            <Download className="w-5 h-5" /> Télécharger mon archive
                        </Button>
                    </section>
                </div>

                {/* Real-time Preview */}
                <div className="relative group sticky top-8 h-fit">
                    <div className="absolute -inset-4 bg-gradient-to-br from-couture-gold/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex justify-center bg-slate-50 dark:bg-slate-900/50 p-12 lg:p-16 border border-card-border shadow-inner overflow-hidden">
                        <div
                            ref={letterRef}
                            data-letter-container
                            className="transform scale-[0.45] lg:scale-[0.55] xl:scale-[0.6] origin-top mb-[-400px] shadow-[0_60px_120px_rgba(0,0,0,0.3)] shrink-0 bg-white"
                        >
                            <activeTemplate.component
                                data={letterData}
                                cvData={cvData}
                                accentColor={activeTemplate.accent}
                            />
                        </div>

                        <div className="absolute top-8 left-8 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-couture-gold" />
                            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-couture-gold">Écho_Visuel_Certifié</span>
                        </div>
                    </div>
                </div>
            </div>
            <AtelierConcierge />
        </motion.div>
    )
}

export default LetterPage
