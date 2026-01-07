import React from 'react'
import { LetterData, CVData } from '@/store/useStore'

export interface LetterTemplateProps {
    data: LetterData
    cvData: CVData
    accentColor: string
}

export interface LetterTemplateDefinition {
    id: string
    name: string
    component: React.FC<LetterTemplateProps>
    accent: string
}

const EliteLetter: React.FC<LetterTemplateProps> = ({ data, cvData, accentColor }) => (
    <div className="w-full h-full bg-white p-16 flex flex-col" style={{ fontFamily: "'Lora', serif" }}>
        <div className="flex justify-between items-start mb-20">
            <div className="space-y-1">
                <h4 className="text-xl font-black uppercase tracking-widest leading-none mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{cvData.nom || 'VOTRE NOM'}</h4>
                <p className="flex items-center gap-2 text-xs text-slate-500 italic" style={{ fontFamily: "'Inter', sans-serif" }}> {cvData.titre}</p>
                <p className="flex items-center gap-2 text-[10px] text-slate-400" style={{ fontFamily: "'Inter', sans-serif" }}> {cvData.email} | {cvData.location}</p>
            </div>
            <div className="text-right space-y-1 mt-20">
                <p className="text-sm font-black uppercase tracking-tight">{data.recipientName}</p>
                <p className="text-xs text-slate-500 italic">{data.recipientTitle}</p>
                <p className="text-xs font-black text-slate-900">{data.companyName}</p>
                <p className="text-xs text-slate-400">{data.companyAddress}</p>
            </div>
        </div>

        <div className="mb-10 text-right text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
            Fait le {data.date}
        </div>

        <div className="mb-10">
            <h5 className="font-black text-lg underline decoration-couture-gold decoration-4 underline-offset-8" style={{ textDecorationColor: accentColor }}>
                OBJET : {data.subject}
            </h5>
        </div>

        <div className="flex-1 whitespace-pre-wrap leading-[1.8] text-slate-800 text-justify text-sm">
            {data.content || 'Commencez à rédiger votre contenu...'}
        </div>

        <div className="mt-20 flex justify-between items-end grayscale opacity-30">
            <div className="space-y-4">
                <p className="text-xs italic text-slate-500">Cordialement,</p>
                <p className="text-xl font-black italic tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>{cvData.nom}</p>
            </div>
            <div className="w-32 h-[1px] bg-slate-900" />
        </div>
    </div>
)

const MajestyLetter: React.FC<LetterTemplateProps> = ({ data, cvData, accentColor }) => (
    <div className="w-full h-full bg-[#020617] p-20 flex flex-col text-slate-100" style={{ fontFamily: "'Playfair Display', serif" }}>
        <div className="absolute top-0 left-0 w-full h-4" style={{ backgroundColor: accentColor }} />

        <header className="text-center mb-24">
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">{cvData.nom}</h1>
            <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-white/10" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-couture-gold" style={{ color: accentColor }}>{cvData.titre}</p>
                <div className="h-[1px] w-12 bg-white/10" />
            </div>
        </header>

        <div className="grid grid-cols-2 gap-20 mb-16">
            <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40">Expéditeur</h4>
                <div className="text-[11px] space-y-1 opacity-80" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p>{cvData.email}</p>
                    <p>{cvData.location}</p>
                </div>
            </div>
            <div className="space-y-4 text-right">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40">Destinataire</h4>
                <div className="text-[11px] space-y-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <p className="font-black text-white">{data.recipientName}</p>
                    <p className="italic opacity-60">{data.recipientTitle}</p>
                    <p className="font-black" style={{ color: accentColor }}>{data.companyName}</p>
                </div>
            </div>
        </div>

        <div className="mb-12 border-l-4 pl-6" style={{ borderColor: accentColor }}>
            <p className="text-[10px] font-black opacity-30 tracking-[0.3em] mb-4">OBJET_REQUISITION</p>
            <h3 className="text-lg font-black uppercase tracking-tight">{data.subject}</h3>
        </div>

        <div className="flex-1 leading-[2] text-slate-400 text-sm italic py-10" style={{ fontFamily: "'Lora', serif" }}>
            {data.content}
        </div>

        <div className="mt-10 pt-10 border-t border-white/5 flex justify-between items-center opacity-40">
            <p className="text-[9px] uppercase tracking-[0.5em]">DeOS_Letter_Majesty</p>
            <p className="text-[9px] uppercase tracking-[0.2em]">{data.date}</p>
        </div>
    </div>
)

export const letterTemplates: LetterTemplateDefinition[] = [
    {
        id: 'letter-elite',
        name: 'The Elite (Letter)',
        accent: '#d4af37',
        component: EliteLetter
    },
    {
        id: 'letter-majesty',
        name: 'The Majesty (Letter)',
        accent: '#e2b808',
        component: MajestyLetter
    }
]

export const getLetterTemplate = (id: string) => letterTemplates.find(t => t.id === id) || letterTemplates[0]
