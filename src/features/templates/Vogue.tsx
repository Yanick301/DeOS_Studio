import React from 'react'
import { TemplateProps } from './types'

export const Vogue: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#000', fontFamily: "'Playfair Display', serif" }}
        >
            <div className="flex-1 flex flex-col">
                <div className="h-[400px] relative overflow-hidden bg-black flex items-center justify-center p-20">
                    {data.photo ? (
                        <img src={data.photo} alt="Profile" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale contrast-150" />
                    ) : (
                        <div className="text-[180px] font-black text-white/10 select-none">VOGUE</div>
                    )}
                    <div className="relative z-10 text-center">
                        <h1 className="text-8xl font-black text-white tracking-tighter leading-none mb-4 drop-shadow-2xl">
                            {data.nom || 'ICONIC'}
                        </h1>
                        <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: accentColor }} />
                        <p className="text-2xl font-light italic text-white/90 tracking-[0.2em] uppercase">
                            {data.titre || 'L\'ÉLITE'}
                        </p>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-12 gap-12 p-16">
                    <div className="col-span-5 space-y-12 pr-12 border-r border-black/10">
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-gray-300">Manifesto</h2>
                            <p className="text-xl font-light leading-relaxed italic text-gray-800">
                                "{data.profilSummary || 'Résumé...'}"
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-gray-300">Contact</h2>
                            <div className="text-lg font-light space-y-2 truncate">
                                <p className="border-b border-black/5 pb-2">{data.email}</p>
                                <p className="border-b border-black/5 pb-2">{data.phone}</p>
                                <p>{data.location}</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-4 text-gray-300">Education</h2>
                            <div className="space-y-6">
                                {data.formations.map((f) => (
                                    <div key={f.id}>
                                        <h4 className="text-sm font-black uppercase">{f.titre}</h4>
                                        <p className="text-[10px] font-bold mt-1 text-gray-400">{f.etablissement} | {f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="col-span-7 space-y-12">
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-gray-300">Career History</h2>
                            <div className="space-y-14">
                                {data.experiences.map((exp) => (
                                    <div key={exp.id} className="group">
                                        <div className="flex justify-between items-baseline mb-4">
                                            <h4 className="text-3xl font-black italic tracking-tighter group-hover:pl-4 transition-all duration-500" style={{ borderLeft: `0px solid ${accentColor}` }}>{exp.titre}</h4>
                                            <span className="text-[10px] font-black opacity-30">{exp.duree}</span>
                                        </div>
                                        <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: accentColor }}>{exp.entreprise}</p>
                                        <p className="text-sm leading-relaxed text-gray-500 font-light text-justify">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-6 text-gray-300">Expertise</h2>
                            <div className="flex flex-wrap gap-x-8 gap-y-4">
                                {skills.map((skill, i) => (
                                    <span key={i} className="text-xl font-light italic decoration-black underline underline-offset-8">{skill}</span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
