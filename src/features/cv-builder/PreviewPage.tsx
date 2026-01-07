import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '@/store/useStore'
import { Button } from '@/components/ui'
import { getTemplate } from '@/features/templates/TemplateRegistry'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { Download, FileText, ImageIcon, ChevronLeft, Layout, Share2, Globe, QrCode as QrIcon, ShieldCheck } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

const PreviewPage = () => {
    const { cvData, currentTemplateId, setCurrentPage } = useStore()
    const resumeRef = useRef<HTMLDivElement>(null)
    const template = getTemplate(currentTemplateId)
    const TemplateComponent = template.component

    // Placeholder for public URL
    const publicUrl = `https://deos.studio/v/${cvData.nom?.toLowerCase().replace(/\s+/g, '-') || 'resume'}`

    const handleDownloadPDF = async () => {
        if (!resumeRef.current) return
        const canvas = await html2canvas(resumeRef.current, {
            scale: 4,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            windowWidth: 794,
            windowHeight: 1123,
            onclone: (clonedDoc) => {
                const el = clonedDoc.querySelector('[data-resume-container]') as HTMLElement
                if (el) {
                    el.style.transform = 'none'
                    el.style.margin = '0'
                }
            }
        })
        const imgData = canvas.toDataURL('image/jpeg', 1.0)
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        })
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'SLOW')
        pdf.save(`CV_${cvData.nom?.replace(/\s+/g, '_') || 'DeOS'}.pdf`)
    }

    const handleDownloadPNG = async () => {
        if (!resumeRef.current) return
        const canvas = await html2canvas(resumeRef.current, {
            scale: 4,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            windowWidth: 794,
            windowHeight: 1123,
            onclone: (clonedDoc) => {
                const el = clonedDoc.querySelector('[data-resume-container]') as HTMLElement
                if (el) {
                    el.style.transform = 'none'
                    el.style.margin = '0'
                }
            }
        })
        const link = document.createElement('a')
        link.download = `CV_${cvData.nom?.replace(/\s+/g, '_') || 'DeOS'}.png`
        link.href = canvas.toDataURL('image/png')
        link.click()
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16 pb-20"
        >
            <header className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-card-border pb-10">
                <div>
                    <h2 className="text-4xl font-black font-couture tracking-tight text-text-main">Signature Finale</h2>
                    <p className="text-text-muted mt-2 font-serif italic">"Votre identité, immortalisée dans l'excellence."</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" onClick={() => setCurrentPage('templates')} className="text-[10px] uppercase font-black tracking-widest gap-2 bg-slate-50 dark:bg-slate-800 border-card-border">
                        <ChevronLeft className="w-3 h-3" /> Changer de Style
                    </Button>
                    <div className="flex items-center gap-2 px-4 py-2 bg-couture-gold/10 rounded-full">
                        <ShieldCheck className="w-4 h-4 text-couture-gold" />
                        <span className="text-[10px] font-black uppercase text-couture-gold tracking-widest italic">Vérifié_PRO</span>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* EXPORT OPTIONS */}
                <div className="space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted">Archives_Physiques</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.button
                            whileHover={{ y: -5 }}
                            onClick={handleDownloadPDF}
                            className="p-8 bg-slate-900 dark:bg-slate-800 text-white flex flex-col items-center text-center gap-4 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform">
                                <FileText className="w-20 h-20" />
                            </div>
                            <FileText className="w-8 h-8 text-couture-gold" />
                            <div>
                                <div className="text-sm font-black uppercase tracking-widest mb-1">Exporter PDF</div>
                                <div className="text-[9px] text-slate-400 font-serif italic">Format Universel Haute Définition</div>
                            </div>
                        </motion.button>

                        <motion.button
                            whileHover={{ y: -5 }}
                            onClick={handleDownloadPNG}
                            className="p-8 bg-white dark:bg-slate-900 border border-card-border text-text-main flex flex-col items-center text-center gap-4 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform">
                                <ImageIcon className="w-20 h-20" />
                            </div>
                            <ImageIcon className="w-8 h-8 text-slate-400" />
                            <div>
                                <div className="text-sm font-black uppercase tracking-widest mb-1">Exporter Image</div>
                                <div className="text-[9px] text-text-muted font-serif italic">Prêt pour les réseaux & réseaux</div>
                            </div>
                        </motion.button>
                    </div>

                    {/* QR CODE & WEB PRESENCE */}
                    <div className="editorial-card p-8 space-y-8 h-full flex flex-col justify-center">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-slate-900 dark:bg-couture-gold rounded-none">
                                <QRCodeSVG value={publicUrl} size={80} level="H" bgColor="#ffffff" fgColor="#000000" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-couture-gold mb-1">Présence_Digitale_QR</h4>
                                <p className="text-xs text-text-muted font-serif italic mb-4">"Lien direct vers votre CV Web interactif."</p>
                                <div className="p-3 bg-slate-50 dark:bg-slate-800 border border-card-border flex items-center justify-between">
                                    <code className="text-[9px] text-text-main truncate w-40">{publicUrl}</code>
                                    <button className="text-[9px] font-black uppercase tracking-widest text-couture-gold hover:underline">Copier</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button className="flex-1 text-[9px] font-black uppercase tracking-[0.2em] gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                                <Globe className="w-3 h-3" /> Activer Page Web
                            </Button>
                            <Button variant="outline" className="flex-1 text-[9px] font-black uppercase tracking-[0.2em] gap-2 border-card-border">
                                <Share2 className="w-3 h-3" /> Partager
                            </Button>
                        </div>
                    </div>
                </div>

                {/* VISUAL PREVIEW */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-couture-gold/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex justify-center bg-slate-50 dark:bg-slate-900/50 p-12 lg:p-16 border border-card-border shadow-inner overflow-hidden">
                        <div
                            ref={resumeRef}
                            data-resume-container
                            className="transform scale-[0.45] md:scale-[0.55] lg:scale-[0.42] xl:scale-[0.5] origin-top mb-[-800px] shadow-[0_60px_120px_rgba(0,0,0,0.3)] shrink-0 bg-white"
                        >
                            <TemplateComponent
                                data={cvData}
                                accentColor={template.accent}
                                bgColor={template.bgColor}
                                fontFamily={template.font}
                            />
                        </div>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-400 animate-pulse">Aperçu_Impression_Certifié</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PreviewPage
