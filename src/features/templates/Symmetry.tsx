import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages } from 'lucide-react'

export const Symmetry: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#475569' // Slate 600

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-white text-slate-800 overflow-hidden p-16 flex flex-col" style={{ fontFamily }}>
            {/* Balanced Grid Header */}
            <div className="grid grid-cols-2 border-b-2 border-slate-200 pb-12 mb-12">
                <div>
                    <h1 className="text-5xl font-light tracking-tight text-slate-900 mb-1 uppercase">{data.nom || 'Your Name'}</h1>
                    <p className="text-lg font-medium text-slate-400 tracking-[0.3em] uppercase">{data.titre || 'Lead Professional'}</p>
                </div>
                <div className="flex flex-col items-end justify-center text-xs font-bold text-slate-500 uppercase tracking-widest leading-loose">
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>{data.location}</p>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-x-12">
                <div className="space-y-12">
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-900 mb-6 flex items-center justify-between">
                            Profil <div className="h-px flex-1 bg-slate-100 ml-4" />
                        </h2>
                        <p className="text-sm leading-relaxed text-slate-500 font-medium">
                            {data.profilSummary || 'Un résumé structuré et précis de votre expertise multidisciplinaire...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-900 mb-8 flex items-center justify-between">
                            Expertise <div className="h-px flex-1 bg-slate-100 ml-4" />
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((s, i) => (
                                <div key={i} className="text-[10px] font-black text-slate-600 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-slate-900" /> {s}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-900 mb-8 flex items-center justify-between">
                            Formation <div className="h-px flex-1 bg-slate-100 ml-4" />
                        </h2>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-xs font-black text-slate-800 uppercase mb-1">{f.titre}</h4>
                                    <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <span>{f.etablissement}</span>
                                        <span>{f.annee}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-900 mb-8 flex items-center justify-between">
                            Experience <div className="h-px flex-1 bg-slate-100 ml-4" />
                        </h2>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xs font-black text-slate-900 px-2 py-1 border border-slate-900 uppercase inline-block">{exp.titre}</h3>
                                        <span className="text-[10px] font-black text-slate-400">{exp.duree}</span>
                                    </div>
                                    <p className="text-[11px] font-bold text-slate-900 mb-4 opacity-50 uppercase tracking-widest">{exp.entreprise}</p>
                                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {data.projects.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-900 mb-8 flex items-center justify-between">
                                Projets <div className="h-px flex-1 bg-slate-100 ml-4" />
                            </h2>
                            <div className="space-y-4">
                                {data.projects.map((p, i) => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                            <Globe className="w-5 h-5 text-slate-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-black text-slate-800 uppercase">{p.title}</h4>
                                            <p className="text-[10px] font-medium text-slate-400 truncate w-32">{p.link}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* Footer Tag */}
            <div className="mt-auto pt-12 text-center">
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-[1em]">SYMMETRY EDITION</span>
            </div>
        </div>
    )
}
