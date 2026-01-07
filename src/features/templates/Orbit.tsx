import React from 'react'
import { TemplateProps } from './types'

export const Orbit: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col p-20 relative bg-[#010101]"
            style={{ color: '#fff', fontFamily: "'Space Grotesk', sans-serif" }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full pointer-events-none" />

            <div className="z-10 flex flex-col h-full">
                <header className="flex justify-between items-center mb-24">
                    <div className="relative">
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-6 h-6 border-2 border-white rotate-45" />
                        <h1 className="text-6xl font-black tracking-tighter leading-none">
                            {data.nom || 'NOM'}
                        </h1>
                        <p className="text-lg font-bold mt-4 uppercase tracking-[0.5em] opacity-40">
                            {data.titre || 'ORBITAL ROLE'}
                        </p>
                    </div>
                    {data.photo && (
                        <div className="relative">
                            <div className="absolute inset-0 border border-white/20 -m-4 rounded-full animate-spin-slow" />
                            <img src={data.photo} alt="Profile" className="w-24 h-24 rounded-full object-cover grayscale" />
                        </div>
                    )}
                </header>

                <div className="grid grid-cols-12 gap-16 flex-1">
                    <div className="col-span-8 flex flex-col">
                        <section className="mb-16">
                            <h3 className="text-[10px] font-black uppercase tracking-[1em] mb-10 text-white/30">System_Summary</h3>
                            <p className="text-2xl font-light leading-snug tracking-tight">
                                {data.profilSummary || 'Résumé...'}
                            </p>
                        </section>

                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[1em] mb-12 text-white/30">Mission_Logs</h3>
                            <div className="space-y-16">
                                {data.experiences.map((exp) => (
                                    <div key={exp.id} className="relative">
                                        <div className="absolute -left-12 top-2 w-4 h-[1px] bg-white opacity-20" />
                                        <div className="flex justify-between items-baseline mb-3">
                                            <h4 className="text-3xl font-black italic tracking-tighter hover:text-indigo-400 transition-colors cursor-default">{exp.titre}</h4>
                                            <span className="text-[10px] font-black text-white/20">{exp.duree}</span>
                                        </div>
                                        <p className="text-xs font-black uppercase tracking-[0.3em] mb-6" style={{ color: accentColor }}>{exp.entreprise}</p>
                                        <p className="text-sm leading-relaxed text-gray-400 font-medium max-w-lg">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="col-span-4 space-y-16">
                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 text-white/30 text-right">Core_Grid</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {skills.map((skill, i) => (
                                    <div key={i} className="flex justify-end items-center gap-4">
                                        <span className="text-xs font-black uppercase tracking-widest">{skill}</span>
                                        <div className="w-10 h-[1px] bg-white/10" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 text-white/30 text-right">Database</h3>
                            <div className="space-y-8 text-right">
                                {data.formations.map((f) => (
                                    <div key={f.id}>
                                        <h4 className="text-sm font-black uppercase tracking-tight">{f.titre}</h4>
                                        <p className="text-[10px] font-bold opacity-30 mt-2">{f.etablissement} // {f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mt-auto pt-20 text-right text-[10px] font-black uppercase tracking-widest space-y-2 opacity-20">
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <p>{data.location}</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
