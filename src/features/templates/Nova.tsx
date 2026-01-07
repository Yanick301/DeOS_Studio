import React from 'react'
import { TemplateProps } from './types'

export const Nova: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col p-20 relative bg-[#020617]"
            style={{ color: '#f8fafc', fontFamily: "'Outfit', sans-serif" }}
        >
            <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full opacity-20 blur-[150px]" style={{ backgroundColor: accentColor }} />
            <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full opacity-10 blur-[150px] bg-red-500" />

            <div className="z-10 flex flex-col h-full">
                <header className="mb-20">
                    <div className="flex items-center gap-6 mb-4">
                        {data.photo && (
                            <img src={data.photo} alt="Profile" className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white/10" />
                        )}
                        <h1 className="text-7xl font-black tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
                            {data.nom || 'NAME'}
                        </h1>
                    </div>
                    <p className="text-2xl font-black uppercase tracking-[0.2em] opacity-40">
                        {data.titre || 'CREATIVE DIRECTOR'}
                    </p>
                </header>

                <div className="grid grid-cols-12 gap-20 flex-1">
                    <div className="col-span-7 space-y-16">
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-8 text-white/20">The Core</h3>
                            <p className="text-lg font-medium leading-relaxed border-t border-white/10 pt-8 italic">
                                {data.profilSummary || 'Résumé...'}
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-10 text-white/20">Journey</h3>
                            <div className="space-y-12">
                                {data.experiences.map((exp) => (
                                    <div key={exp.id} className="relative group">
                                        <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border border-white/20 group-hover:border-white transition-all flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all" />
                                        </div>
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h4 className="text-xl font-black tracking-tight">{exp.titre}</h4>
                                            <span className="text-xs font-black opacity-20">{exp.duree}</span>
                                        </div>
                                        <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: accentColor }}>{exp.entreprise}</p>
                                        <p className="text-xs leading-relaxed opacity-50 font-medium text-justify">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="col-span-5 space-y-12">
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-8 text-white/20">Skills.exe</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span key={i} className="px-4 py-2 border border-white/5 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-crosshair">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-8 text-white/20">Learning</h3>
                            <div className="space-y-6">
                                {data.formations.map((f) => (
                                    <div key={f.id} className="p-6 bg-white/5 rounded-2xl border border-white/5 pointer-events-none">
                                        <h4 className="text-sm font-black uppercase leading-tight">{f.titre}</h4>
                                        <p className="text-[10px] font-bold mt-2 opacity-30">{f.etablissement} | {f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="pt-20">
                            <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-6 text-white/20">Direct_COM</h3>
                            <div className="space-y-2 text-xs font-bold uppercase tracking-widest opacity-60">
                                <p className="hover:opacity-100 transition-all">{data.email}</p>
                                <p>{data.phone}</p>
                                <p>{data.location}</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
