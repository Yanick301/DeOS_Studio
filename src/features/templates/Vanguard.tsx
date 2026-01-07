import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages } from 'lucide-react'

export const Vanguard: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#ef4444' // Red

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-white text-slate-900 overflow-hidden flex flex-col" style={{ fontFamily }}>
            {/* Asymmetric Header */}
            <div className="flex h-64 border-b-2 border-slate-900">
                <div className="w-2/3 p-16 flex flex-col justify-center">
                    <h1 className="text-7xl font-black tracking-tighter leading-none mb-2 text-slate-900">{data.nom || 'FIRST LAST'}</h1>
                    <p className="text-2xl font-black text-rose-600 uppercase tracking-widest">{data.titre || 'STRATEGIST'}</p>
                </div>
                <div className="w-1/3 bg-slate-900 text-white p-12 flex flex-col justify-center">
                    <div className="space-y-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-rose-500" /> {data.email}</p>
                        <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-rose-500" /> {data.phone}</p>
                        <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-rose-500" /> {data.location}</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/3 p-12 space-y-12 border-r-2 border-slate-100 bg-slate-50/30 overflow-y-auto">
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8 underline decoration-rose-500 decoration-4 underline-offset-8">Objective</h2>
                        <p className="text-sm font-bold leading-relaxed text-slate-600 italic">
                            {data.profilSummary || 'Pushing the boundaries of innovation through disciplined execution...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8 underline decoration-rose-500 decoration-4 underline-offset-8">Toolkit</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {skills.map((s, i) => (
                                <div key={i} className="flex justify-between items-center text-[11px] font-black uppercase border-b border-slate-200 pb-1">
                                    <span>{s}</span>
                                    <div className="w-12 h-1 bg-rose-500" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {data.languages.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8 underline decoration-rose-500 decoration-4 underline-offset-8">Languages</h2>
                            <div className="space-y-4">
                                {data.languages.map((l, i) => (
                                    <div key={i} className="flex justify-between items-baseline">
                                        <span className="text-xs font-black uppercase">{l.name}</span>
                                        <span className="text-[10px] font-black text-rose-600">{l.level}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <div className="flex-1 p-16 space-y-16 overflow-y-auto">
                    <section>
                        <h2 className="text-4xl font-black uppercase text-slate-900 mb-10 tracking-tighter">Experience</h2>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative">
                                    <div className="flex justify-between items-baseline mb-4">
                                        <h3 className="text-lg font-black uppercase leading-tight max-w-[70%]">{exp.titre}</h3>
                                        <span className="text-xs font-black text-rose-600 px-3 py-1 bg-rose-50 rounded italic whitespace-nowrap">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{exp.entreprise}</p>
                                    <p className="text-xs text-slate-600 leading-relaxed font-medium text-justify">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-4xl font-black uppercase text-slate-900 mb-10 tracking-tighter">Formation</h2>
                        <div className="grid grid-cols-2 gap-8">
                            {data.formations.map((f) => (
                                <div key={f.id} className="p-6 bg-slate-900 text-white rounded-2xl transform hover:scale-105 transition-transform">
                                    <h4 className="text-sm font-black uppercase mb-2">{f.titre}</h4>
                                    <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">{f.etablissement}</p>
                                    <p className="text-[10px] font-black text-slate-500">{f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
