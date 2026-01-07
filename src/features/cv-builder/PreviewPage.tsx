import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, ImageIcon } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { Card, Button } from '@/components/ui'
import { getTemplateById } from '@/features/templates/TemplateRegistry'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const PreviewPage = () => {
    const { cvData, currentTemplateId } = useStore()
    const resumeRef = useRef<HTMLDivElement>(null)

    const template = getTemplateById(currentTemplateId)
    const TemplateComponent = template.component

    const exportPDF = async () => {
        if (!resumeRef.current) return
        const canvas = await html2canvas(resumeRef.current, {
            scale: 5, // Increased scale for ultra-HD
            useCORS: true,
            logging: false,
            allowTaint: true,
            backgroundColor: '#ffffff',
            windowWidth: 794,
            windowHeight: 1123,
            onclone: (document) => {
                // Ensure the cloned element is visible for rendering
                const element = document.querySelector('[ref="resumeRef"]');
                if (element instanceof HTMLElement) {
                    element.style.transform = 'none';
                }
            }
        })
        const imgData = canvas.toDataURL('image/jpeg', 1.0)
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            compress: true
        })
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'SLOW')
        pdf.save(`CV_${cvData.nom?.replace(/\s+/g, '_') || 'DeOS'}.pdf`)
    }

    const exportPNG = async () => {
        if (!resumeRef.current) return
        const canvas = await html2canvas(resumeRef.current, {
            scale: 5,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            windowWidth: 794,
            windowHeight: 1123
        })
        const link = document.createElement('a')
        link.download = `CV_${cvData.nom?.replace(/\s+/g, '_') || 'DeOS'}.png`
        link.href = canvas.toDataURL('image/png', 1.0)
        link.click()
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8 pb-10"
        >
            <header className="text-center">
                <h2 className="text-3xl font-black text-gray-900">Finalisation & Export</h2>
                <p className="text-gray-500 mt-2">Votre document est prêt pour le monde professionnel.</p>
            </header>

            <div className="flex justify-center">
                <div className="relative shadow-2xl rounded-sm transform scale-[0.45] origin-top mb-[-600px]">
                    <div ref={resumeRef}>
                        <TemplateComponent
                            data={cvData}
                            accentColor={template.accent}
                            bgColor={template.bgColor}
                            fontFamily={template.font}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button onClick={exportPDF} variant="primary" className="bg-red-600 hover:bg-red-700 shadow-red-500/30">
                    <FileText className="w-5 h-5" /> Télécharger PDF
                </Button>
                <Button onClick={exportPNG} variant="primary" className="bg-purple-600 hover:bg-purple-700 shadow-purple-500/30">
                    <ImageIcon className="w-5 h-5" /> Télécharger PNG
                </Button>
            </div>
        </motion.div>
    )
}

export default PreviewPage
