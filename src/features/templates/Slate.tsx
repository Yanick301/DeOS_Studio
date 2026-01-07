import React from 'react'
import { TemplateProps } from './types'

export const Slate: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: '#1e293b', color: '#f8fafc', fontFamily: "'Inter', sans-serif" }}
        >
            <header className="mb-20">
                <div className="flex justify-between items-end border-b-8 pb-8" style={{ borderColor: accentColor }}>
                    <h1 className="text-7xl font-black tracking-tighter leading-none">
                        {data.nom || 'NOM'}
                    </h1>
                    <div className="text-right text-[10px] font-black uppercase tracking-widest opacity-40">
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                    </div>
                </div>
                <p className="text-2xl font-bold mt-4 uppercase tracking-[0.3em]" style={{ color: accentColor }}>
                    {data.titre || 'INDUSTRIAL ROLE'}
                </p>
            </header>

            <div className="grid grid-cols-12 gap-16 flex-1">
                <div className="col-span-8 space-y-16">
                    <section>
                        <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-8 bg-white text-slate-900 inline-block px-3 py-1">Profile</h3>
                        <p className="text-base font-medium leading-relaxed italic opacity-80">
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-10 bg-white text-slate-900 inline-block px-3 py-1">Experience</h3>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="border-l-4 pl-8" style={{ borderColor: accentColor }}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="text-xl font-black uppercase tracking-tight">{exp.titre}</h4>
                                        <span className="text-xs font-black opacity-30">{exp.duree}</span>
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed opacity-60 font-medium">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-4 space-y-12">
                    <section>
                        <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-8 border-b-2" style={{ borderColor: accentColor }}>Skills</h3>
                        <div className="space-y-3">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2">
                                    <span className="text-xs font-black uppercase">{skill}</span>
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-8 border-b-2" style={{ borderColor: accentColor }}>Study</h3>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-xs font-black uppercase leading-tight">{f.titre}</h4>
                                    <p className="text-[10px] font-bold mt-1 opacity-40 uppercase">{f.etablissement} | {f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
