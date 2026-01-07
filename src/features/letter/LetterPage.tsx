import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/store/useStore'
import { Card, Button, Input, TextArea, Label } from '@/components/ui'
import { FileText, Send, Download, Sparkles, User, Briefcase, MapPin, Calendar } from 'lucide-react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const LetterPage = () => {
    const { letterData, updateLetterData, cvData } = useStore()
    const letterRef = useRef<HTMLDivElement>(null)

    const exportPDF = async () => {
        if (!letterRef.current) return
        const canvas = await html2canvas(letterRef.current, {
            scale: 5,
            useCORS: true,
            backgroundColor: '#ffffff',
            windowWidth: 794,
            windowHeight: 1123
        })
        const imgData = canvas.toDataURL('image/jpeg', 1.0)
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297)
        pdf.save(`Lettre_Motivation_${cvData.nom?.replace(/\s+/g, '_') || 'DeOS'}.pdf`)
    }

    return (
        <div className="space-y-12 pb-20">
            <header>
                <h1 className="text-3xl font-black">Lettre de Motivation</h1>
                <p className="text-slate-500 font-medium italic">"L'art de l'éloquence professionnelle."</p>
            </header>

            <div className="grid grid-cols-1 gap-8">
                <section className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-couture-gold/10 rounded-lg">
                            <Briefcase className="w-5 h-5 text-couture-gold" />
                        </div>
                        <h3 className="text-xl font-black tracking-tight">Destinataire</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Nom du contact</Label>
                            <Input
                                placeholder="ex: Jean Dupont"
                                value={letterData.recipientName}
                                onChange={(e) => updateLetterData({ recipientName: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Titre / Poste</Label>
                            <Input
                                placeholder="ex: Responsable RH"
                                value={letterData.recipientTitle}
                                onChange={(e) => updateLetterData({ recipientTitle: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Entreprise</Label>
                            <Input
                                placeholder="ex: DeOS Corp"
                                value={letterData.companyName}
                                onChange={(e) => updateLetterData({ companyName: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Adresse</Label>
                            <Input
                                placeholder="ex: Paris, France"
                                value={letterData.companyAddress}
                                onChange={(e) => updateLetterData({ companyAddress: e.target.value })}
                            />
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-slate-100 rounded-lg">
                            <FileText className="w-5 h-5 text-slate-600" />
                        </div>
                        <h3 className="text-xl font-black tracking-tight">Contenu du Message</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label>Objet</Label>
                            <Input
                                className="font-bold"
                                value={letterData.subject}
                                onChange={(e) => updateLetterData({ subject: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Corps de la lettre</Label>
                            <TextArea
                                placeholder="Rédigez ici votre lettre..."
                                className="min-h-[400px] leading-relaxed text-slate-700"
                                value={letterData.content}
                                onChange={(e) => updateLetterData({ content: e.target.value })}
                            />
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-black tracking-tight">Aperçu Editorial</h3>
                        <Button onClick={exportPDF} variant="primary" className="bg-slate-900 hover:bg-black rounded-none">
                            <Download className="w-5 h-5 mr-2" /> Exporter PDF
                        </Button>
                    </div>

                    <div className="flex justify-center bg-slate-50 py-10 rounded-3xl border border-dashed border-slate-200">
                        <div
                            ref={letterRef}
                            className="w-[794px] h-[1123px] bg-white shadow-2xl p-16 flex flex-col transform scale-[0.45] origin-top mb-[-600px]"
                            style={{ fontFamily: "'Lora', serif" }}
                        >
                            <div className="flex justify-between items-start mb-20">
                                <div className="space-y-1">
                                    <h4 className="text-xl font-black uppercase tracking-widest leading-none mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{cvData.nom || 'VOTRE NOM'}</h4>
                                    <p className="flex items-center gap-2 text-sm text-slate-500"><User className="w-3 h-3" /> {cvData.titre}</p>
                                    <p className="flex items-center gap-2 text-sm text-slate-500"><Send className="w-3 h-3" /> {cvData.email}</p>
                                    <p className="flex items-center gap-2 text-sm text-slate-500"><MapPin className="w-3 h-3" /> {cvData.location}</p>
                                </div>
                                <div className="text-right space-y-1 mt-20">
                                    <p className="text-sm font-bold">{letterData.recipientName}</p>
                                    <p className="text-sm text-slate-500 italic">{letterData.recipientTitle}</p>
                                    <p className="text-sm font-black">{letterData.companyName}</p>
                                    <p className="text-sm text-slate-500">{letterData.companyAddress}</p>
                                </div>
                            </div>

                            <div className="mb-10 text-right text-sm">
                                <p className="flex items-center justify-end gap-2 text-slate-400 font-bold"><Calendar className="w-3 h-3" /> Fait le {letterData.date}</p>
                            </div>

                            <div className="mb-8">
                                <h5 className="font-black text-lg underline decoration-couture-gold decoration-4 underline-offset-8 transition-all hover:decoration-slate-900 cursor-default">
                                    OBJET : {letterData.subject}
                                </h5>
                            </div>

                            <div className="flex-1 whitespace-pre-wrap leading-[1.8] text-slate-800 text-justify px-4">
                                {letterData.content || 'Commencez à rédiger votre contenu...'}
                            </div>

                            <div className="mt-20 border-t border-slate-100 pt-10 flex justify-between items-end">
                                <div className="space-y-4">
                                    <p className="text-sm italic text-slate-500">Cordialement,</p>
                                    <p className="text-xl font-black italic tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>{cvData.nom}</p>
                                </div>
                                <div className="w-32 h-1 bg-slate-900" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default LetterPage
