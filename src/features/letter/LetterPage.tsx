import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/store/useStore'
import { Card, Button, Input, TextArea, Label } from '@/components/ui'
import { FileText, Send, Download, Sparkles, User, Briefcase, MapPin, Calendar, Layout } from 'lucide-react'
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
        <div className="space-y-12 pb-20">
            <header className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-10">
                <div className="text-left">
                    <h2 className="text-3xl font-black text-gray-900 font-couture">Studio de Rédaction</h2>
                    <p className="text-gray-500 mt-2 font-serif italic">"L'art de l'éloquence professionnelle."</p>
                </div>

                <div className="flex bg-slate-100 p-1.5 rounded-full ring-4 ring-slate-50">
                    <button
                        onClick={() => setLanguage('fr')}
                        className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${language === 'fr' ? 'bg-white shadow-lg text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Français
                    </button>
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${language === 'en' ? 'bg-white shadow-lg text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        English
                    </button>
                </div>
            </header>

            {/* Template Selector */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-900 text-white rounded-lg">
                        <Layout className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black tracking-tight">Design de la Lettre</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {letterTemplates.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setLetterTemplate(t.id)}
                            className={`p-4 border-2 transition-all text-left group ${currentLetterTemplateId === t.id
                                ? 'border-slate-900 bg-slate-900 text-white'
                                : 'border-slate-100 bg-white hover:border-slate-300'
                                }`}
                        >
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1 group-hover:opacity-100">Style</p>
                            <p className="font-black text-sm">{t.name}</p>
                        </button>
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 gap-8">
                <section className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-couture-gold/10 rounded-lg">
                            <User className="w-5 h-5 text-couture-gold" />
                        </div>
                        <h3 className="text-xl font-black tracking-tight">Destinataire</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label>Nom du Recruteur / Contact</Label>
                            <Input
                                value={letterData.recipientName}
                                onChange={(e) => updateLetterData({ recipientName: e.target.value })}
                                placeholder="Ex: Mme. Sarah Connor"
                            />
                        </div>
                        <div>
                            <Label>Titre / Fonction</Label>
                            <Input
                                value={letterData.recipientTitle}
                                onChange={(e) => updateLetterData({ recipientTitle: e.target.value })}
                                placeholder="Ex: Responsable RH"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label>Entreprise</Label>
                            <Input
                                value={letterData.companyName}
                                onChange={(e) => updateLetterData({ companyName: e.target.value })}
                                placeholder="Ex: Cyberdyne Systems"
                            />
                        </div>
                        <div>
                            <Label>Adresse de l'Entreprise</Label>
                            <Input
                                value={letterData.companyAddress}
                                onChange={(e) => updateLetterData({ companyAddress: e.target.value })}
                                placeholder="Ex: Los Angeles, USA"
                            />
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-couture-gold/10 rounded-lg">
                            <Briefcase className="w-5 h-5 text-couture-gold" />
                        </div>
                        <h3 className="text-xl font-black tracking-tight">Le Message</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label>Date</Label>
                            <Input
                                value={letterData.date}
                                onChange={(e) => updateLetterData({ date: e.target.value })}
                                placeholder="Ex: 07 Janvier 2026"
                            />
                        </div>
                        <div>
                            <Label>Objet de la Lettre</Label>
                            <Input
                                value={letterData.subject}
                                onChange={(e) => updateLetterData({ subject: e.target.value })}
                                placeholder="Ex: Candidature au poste de..."
                            />
                        </div>
                    </div>

                    <div>
                        <Label>Contenu de la Lettre</Label>
                        <TextArea
                            className="min-h-[400px]"
                            value={letterData.content}
                            onChange={(e) => updateLetterData({ content: e.target.value })}
                            placeholder="Rédigez ici votre lettre..."
                        />
                    </div>

                    <Button onClick={exportPDF} className="w-full py-8 text-xl font-black bg-slate-900 shadow-xl rounded-none flex gap-3">
                        <Download className="w-6 h-6" /> EXPORTER EN PDF HD
                    </Button>
                </section>

                <div className="flex justify-center bg-slate-50 py-10 rounded-3xl border border-dashed border-slate-200 overflow-hidden">
                    <div
                        ref={letterRef}
                        data-letter-container
                        className="w-[794px] h-[1123px] bg-white shadow-2xl flex flex-col transform scale-[0.45] origin-top mb-[-600px] shrink-0"
                    >
                        <activeTemplate.component
                            data={letterData}
                            cvData={cvData}
                            accentColor={activeTemplate.accent}
                        />
                    </div>
                </div>
            </div>
            <AtelierConcierge />
        </div>
    )
}

export default LetterPage
