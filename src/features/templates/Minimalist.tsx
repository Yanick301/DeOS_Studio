import React from 'react'
import { TemplateProps } from './types'

export const Minimalist: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-12 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#1f2937', fontFamily }}
        >
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight" style={{ color: '#111827' }}>
                    {data.nom || 'Votre Nom'}
                </h1>
                <p className="text-xl font-medium mt-1" style={{ color: accentColor }}>
                    {data.titre || 'Développeur Fullstack'}
                </p>
                <div className="flex gap-4 mt-4 text-xs text-gray-500 font-medium uppercase tracking-widest">
                    <span>{data.email}</span>
                    <span>•</span>
                    <span>{data.phone}</span>
                    <span>•</span>
                    <span>{data.location}</span>
                </div>
            </header>

            <div className="flex-1 grid grid-cols-4 gap-12">
                <div className="col-span-4 space-y-10">
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 pb-2 border-b-2 border-gray-100" style={{ color: '#9ca3af' }}>
                            Profil
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-600">
                            {data.profilSummary || 'Résumé professionnel...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-6 pb-2 border-b-2 border-gray-100" style={{ color: '#9ca3af' }}>
                            Expériences
                        </h2>
                        <div className="space-y-8">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="grid grid-cols-4 gap-4">
                                    <span className="col-span-1 text-[10px] font-bold text-gray-400 mt-1 uppercase mt-1">{exp.duree}</span>
                                    <div className="col-span-3">
                                        <h4 className="text-sm font-bold text-gray-900">{exp.titre}</h4>
                                        <p className="text-xs font-bold mt-0.5" style={{ color: accentColor }}>{exp.entreprise}</p>
                                        <p className="text-[11px] mt-2 text-gray-600 leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-2 gap-12">
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 pb-2 border-b-2 border-gray-100" style={{ color: '#9ca3af' }}>
                                Formation
                            </h2>
                            <div className="space-y-4">
                                {data.formations.map((f) => (
                                    <div key={f.id}>
                                        <h4 className="text-xs font-bold text-gray-900">{f.titre}</h4>
                                        <p className="text-[10px] text-gray-500 mt-1">{f.etablissement} | {f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 pb-2 border-b-2 border-gray-100" style={{ color: '#9ca3af' }}>
                                Compétences
                            </h2>
                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                {skills.map((skill, i) => (
                                    <span key={i} className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">• {skill}</span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
