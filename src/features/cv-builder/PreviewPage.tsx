import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, ImageIcon, ChevronLeft, Layout } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { Button } from '@/components/ui'
import { getTemplate } from '@/features/templates/TemplateRegistry'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const PreviewPage = () => {
    const { cvData, currentTemplateId, setCurrentPage } = useStore()
    const resumeRef = useRef<HTMLDivElement>(null)
    const template = getTemplate(currentTemplateId)
    const TemplateComponent = template.component

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
            className="space-y-12 pb-20"
        >
            <header className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-black">Prêt pour l'Export</h2>
                    <p className="text-slate-500 italic">"Votre signature professionnelle attend."</p>
                </div>
                <Button variant="ghost" onClick={() => setCurrentPage('templates')} className="gap-2">
                    <ChevronLeft className="w-4 h-4" /> Changer Design
                </Button>
            </header>

            <div className="flex flex-col md:flex-row gap-6">
                <Button onClick={handleDownloadPDF} className="flex-1 py-8 text-xl font-black bg-slate-900 rounded-none shadow-xl gap-3">
                    <FileText className="w-6 h-6" /> EXPORTER PDF HD
                </Button>
                <Button onClick={handleDownloadPNG} variant="secondary" className="flex-1 py-8 text-xl font-black rounded-none shadow-xl gap-3">
                    <ImageIcon className="w-6 h-6" /> EXPORTER IMAGE
                </Button>
            </div>

            <div className="flex justify-center bg-slate-50 py-20 rounded-[40px] border border-dashed border-slate-200 overflow-hidden">
                <div
                    ref={resumeRef}
                    data-resume-container
                    className="transform scale-[0.45] origin-top mb-[-600px] shadow-[0_40px_100px_rgba(0,0,0,0.15)] shrink-0"
                >
                    <TemplateComponent
                        data={cvData}
                        accentColor={template.accent}
                        bgColor={template.bgColor}
                        fontFamily={template.font}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default PreviewPage
