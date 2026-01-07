import React from 'react'
import { TemplateProps } from './types'

export const Nordic: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-20 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: '#f4f4f4', color: '#2c3e50', fontFamily: "'Inter', sans-serif" }}
        >
            <header className="flex justify-between items-center mb-20">
                <div className="bg-white p-10 shadow-sm rounded-none border-l-4 border-[#2c3e50]">
                    <h1 className="text-4xl font-light tracking-widest uppercase mb-2">
                        {data.nom || 'Votre Nom'}
                    </h1>
                    <p className="text-sm font-bold tracking-[0.3em] opacity-40 uppercase">
                        {data.titre || 'MANAGER'}
                    </p>
                </div>
                <div className="text-right text-[10px] font-bold uppercase tracking-widest space-y-2 opacity-30">
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>{data.location}</p>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-20">
                <div className="col-span-8 space-y-16">
                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-8 opacity-20">Overview</h3>
                        <p className="text-sm leading-[1.8] font-medium text-justify italic border-l-2 pl-8 border-gray-200">
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-10 opacity-20">Career</h3>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between mb-2">
                                        <h4 className="text-base font-bold uppercase tracking-wider">{exp.titre}</h4>
                                        <span className="text-[10px] font-bold opacity-30">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-bold mb-4" style={{ color: accentColor }}>{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed opacity-60 text-justify">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-4 space-y-12">
                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-8 opacity-20">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <span key={i} className="text-[10px] font-bold uppercase border-b-2 border-gray-200 pb-1">{skill}</span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-8 opacity-20">Academy</h3>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-[10px] font-bold uppercase">{f.titre}</h4>
                                    <p className="text-[9px] mt-1 opacity-40 uppercase font-black">{f.etablissement} | {f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
