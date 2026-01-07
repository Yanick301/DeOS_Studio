import React from 'react'
import { TemplateProps } from './types'

export const Cyberpunk: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-12 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: '#0a0a0c', color: '#fff', fontFamily: "'Orbitron', sans-serif" }}
        >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f0f] to-transparent opacity-50" />

            <header className="flex justify-between items-start mb-16 relative">
                <div className="z-10">
                    <h1 className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
                        {data.nom || 'ACCESS_GRANTED'}
                    </h1>
                    <p className="text-xl font-bold mt-2 uppercase tracking-[0.4em]" style={{ color: accentColor }}>
                        {data.titre || 'CYBER_OPERATIVE'}
                    </p>
                </div>
                <div className="text-right text-[9px] font-bold uppercase opacity-40 space-y-1">
                    <p className="text-[#0ff]">{data.email}</p>
                    <p className="text-[#f0f]">{data.phone}</p>
                    <p>{data.location}</p>
                </div>
                {data.photo && (
                    <img src={data.photo} alt="Profile" className="w-24 h-24 object-cover border-2 p-1 absolute -right-2 top-0 opacity-80 hue-rotate-90 contrast-125" style={{ borderColor: accentColor }} />
                )}
            </header>

            <div className="grid grid-cols-12 gap-12 flex-1 relative">
                <div className="col-span-4 space-y-12">
                    <section className="p-6 border border-white/5 bg-white/5 backdrop-blur-3xl rounded-none relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: accentColor }} />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#0ff]">DATA_STREAM</h3>
                        <div className="space-y-4">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex justify-between items-center text-[10px] font-bold">
                                    <span className="opacity-60">{skill}</span>
                                    <div className="w-16 h-1 bg-white/10 overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-[#0ff] to-[#f0f]" style={{ width: '90%' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="p-6 border border-white/5 bg-white/5 backdrop-blur-3xl rounded-none">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#f0f]">NEURAL_SYNC</h3>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-[10px] font-black leading-tight text-white mb-1 uppercase">{f.titre}</h4>
                                    <p className="text-[8px] opacity-40 font-bold uppercase">{f.etablissement} // {f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-8 space-y-12">
                    <section>
                        <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-6 flex items-center gap-3">
                            <span className="w-10 h-[1px] bg-[#0ff]" /> OS_OBJECTIVE
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400 font-medium font-mono">
                            {data.profilSummary || 'Initialisation...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
                            <span className="w-10 h-[1px] bg-[#f0f]" /> CORE_RUNTIME
                        </h3>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full border border-white/20 group-hover:bg-[#0ff] transition-all" />
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-base font-black italic text-white uppercase">{exp.titre}</h4>
                                        <span className="text-[10px] font-bold text-[#f0f]">{exp.duree}</span>
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-3">LOC_@{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed text-gray-500 font-mono italic">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <footer className="mt-auto pt-8 border-t border-white/5 flex justify-between text-[8px] font-black tracking-[0.6em] opacity-20">
                <span>DEOS_STUDIO_GEN_4</span>
                <span>CONNECTION_SECURE</span>
            </footer>
        </div>
    )
}
