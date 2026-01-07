import React from 'react'
import { TemplateProps } from './types'

export const Glass: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col p-12 relative"
            style={{ backgroundColor: '#f0f4f8', color: '#1a1a1a', fontFamily: "'Inter', sans-serif" }}
        >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-indigo-500/20 via-pink-500/20 to-yellow-500/20 blur-[100px] pointer-events-none" />

            <div className="z-10 bg-white/40 backdrop-blur-3xl rounded-[40px] border border-white/60 shadow-2xl p-16 flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-start mb-16">
                    <div>
                        <h1 className="text-6xl font-black tracking-tighter text-gray-900 leading-none mb-4">
                            {data.nom || 'NOM'}
                        </h1>
                        <div className="px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest text-white shadow-xl" style={{ backgroundColor: accentColor }}>
                            {data.titre || 'GLASS DESIGNER'}
                        </div>
                    </div>
                    {data.photo && (
                        <img src={data.photo} alt="Profile" className="w-24 h-24 rounded-[30px] object-cover shadow-2xl border-4 border-white/80" />
                    )}
                </header>

                <div className="grid grid-cols-12 gap-12 flex-1 relative">
                    <div className="col-span-8 space-y-12">
                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-gray-400">Abstract</h3>
                            <p className="text-base font-medium leading-relaxed text-gray-600 italic">
                                "{data.profilSummary || 'Résumé...'}"
                            </p>
                        </section>

                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-gray-400">Timeline</h3>
                            <div className="space-y-10">
                                {data.experiences.map((exp) => (
                                    <div key={exp.id} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-lg font-black text-gray-900 tracking-tight">{exp.titre}</h4>
                                            <span className="text-[10px] font-black text-gray-300 drop-shadow-sm">{exp.duree}</span>
                                        </div>
                                        <p className="text-xs font-bold mb-4 opacity-60" style={{ color: accentColor }}>@{exp.entreprise}</p>
                                        <p className="text-xs leading-relaxed text-gray-500 font-medium">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="col-span-4 space-y-10">
                        <div className="p-8 bg-white/60 rounded-[30px] border border-white shadow-sm">
                            <h3 className="text-xs font-black uppercase tracking-widest mb-6 underline decoration-4 underline-offset-8" style={{ textDecorationColor: accentColor }}>Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span key={i} className="text-[10px] font-bold text-gray-600 bg-white/80 px-3 py-1.5 rounded-xl shadow-inner">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-white/60 rounded-[30px] border border-white shadow-sm">
                            <h3 className="text-xs font-black uppercase tracking-widest mb-6 underline decoration-4 underline-offset-8" style={{ textDecorationColor: accentColor }}>Edu</h3>
                            <div className="space-y-6">
                                {data.formations.map((f) => (
                                    <div key={f.id}>
                                        <h4 className="text-xs font-black uppercase leading-tight">{f.titre}</h4>
                                        <p className="text-[8px] font-bold mt-1 opacity-40">{f.etablissement} | {f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
