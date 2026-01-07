import React from 'react'
import { TemplateProps } from './types'

export const ClassicBanker: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#1a1a1a', fontFamily: "'Times New Roman', serif" }}
        >
            <header className="text-center border-b-2 border-black pb-8 mb-10">
                <h1 className="text-4xl font-bold uppercase tracking-[0.2em]">
                    {data.nom || 'NOM COMPLET'}
                </h1>
                <div className="flex justify-center gap-6 mt-4 text-[11px] font-bold uppercase tracking-widest text-gray-600">
                    <span>{data.email}</span>
                    <span>|</span>
                    <span>{data.phone}</span>
                    <span>|</span>
                    <span>{data.location}</span>
                </div>
            </header>

            <div className="space-y-12">
                <section>
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-black mb-4 pb-1">Summary</h2>
                    <p className="text-[13px] leading-relaxed text-justify">
                        {data.profilSummary || 'Résumé professionnel formel...'}
                    </p>
                </section>

                <section>
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-black mb-6 pb-1">Professional Experience</h2>
                    <div className="space-y-8">
                        {data.experiences.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="text-sm font-bold uppercase">{exp.entreprise}</h4>
                                    <span className="text-xs font-bold italic">{exp.duree}</span>
                                </div>
                                <div className="flex justify-between items-baseline mb-3">
                                    <p className="text-xs font-bold underline" style={{ color: accentColor }}>{exp.titre}</p>
                                </div>
                                <p className="text-[12px] leading-relaxed pl-4 border-l border-gray-200">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-2 gap-16">
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-black mb-4 pb-1">Education</h2>
                        <div className="space-y-4">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <div className="flex justify-between">
                                        <h4 className="text-xs font-bold uppercase">{f.etablissement}</h4>
                                        <span className="text-xs italic">{f.annee}</span>
                                    </div>
                                    <p className="text-xs font-medium mt-1">{f.titre}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-black mb-4 pb-1">Core Competencies</h2>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {skills.map((skill, i) => (
                                <span key={i} className="text-[11px] font-medium">• {skill}</span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
