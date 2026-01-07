import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages, Leaf } from 'lucide-react'

export const Emerald: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#059669' // Emerald Green

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#fbfdfb] text-[#064e3b] overflow-hidden flex flex-col" style={{ fontFamily }}>
            {/* Organic Header */}
            <div className="p-16 pb-12 flex justify-between items-end">
                <div>
                    <div className="flex items-center gap-2 text-emerald-600 mb-4">
                        <Leaf className="w-8 h-8" />
                        <span className="text-xs font-black tracking-[0.5em] uppercase">Sustainable Career</span>
                    </div>
                    <h1 className="text-6xl font-bold tracking-tighter leading-none mb-2">{data.nom || 'Votre Nom'}</h1>
                    <p className="text-2xl font-medium text-emerald-600/80 italic">{data.titre || 'Titre de Vision'}</p>
                </div>
                {data.photo && (
                    <div className="w-32 h-32 rounded-[2rem] overflow-hidden border-4 border-emerald-100 rotate-6 shadow-xl">
                        <img src={data.photo} alt="Profile" className="w-full h-full object-cover -rotate-6 scale-110" />
                    </div>
                )}
            </div>

            <div className="flex-1 flex px-16 gap-12">
                <div className="w-1/3 space-y-12">
                    <section>
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-800 mb-4 underline decoration-emerald-300 underline-offset-8">Contact</h2>
                        <div className="space-y-4 text-xs">
                            <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-emerald-600" /> {data.email}</p>
                            <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-600" /> {data.phone}</p>
                            <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-emerald-600" /> {data.location}</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-800 mb-4 underline decoration-emerald-300 underline-offset-8">Hard Skills</h2>
                        <div className="grid grid-cols-1 gap-2">
                            {skills.map((s, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span className="text-xs font-medium text-emerald-900/70">{s}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {data.languages.length > 0 && (
                        <section>
                            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-800 mb-4 underline decoration-emerald-300 underline-offset-8">Langues</h2>
                            <div className="space-y-2">
                                {data.languages.map((l, i) => (
                                    <div key={i} className="text-xs">
                                        <p className="font-bold text-emerald-900">{l.name}</p>
                                        <div className="w-full h-1 bg-emerald-100 rounded-full mt-1">
                                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: l.level === 'C2' ? '100%' : l.level === 'C1' ? '90%' : l.level === 'B2' ? '75%' : '50%' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <div className="flex-1 space-y-12">
                    <section className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100 shadow-inner">
                        <p className="text-sm leading-relaxed text-emerald-900 italic font-medium">
                            {data.profilSummary || 'Visionnaire engagé, expert dans la transformation positive...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-800 mb-6 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-emerald-500" /> Expériences Clés
                        </h2>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-emerald-200">
                                    <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-emerald-500" />
                                    <h3 className="text-md font-bold text-[#064e3b] uppercase flex justify-between">
                                        {exp.titre}
                                        <span className="text-[10px] text-emerald-600/60">{exp.duree}</span>
                                    </h3>
                                    <p className="text-xs font-black text-emerald-700/80 mb-3">{exp.entreprise}</p>
                                    <p className="text-xs text-emerald-900/60 leading-relaxed italic">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-800 mb-6 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-emerald-500" /> Formation
                        </h2>
                        <div className="space-y-4">
                            {data.formations.map((f) => (
                                <div key={f.id} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-emerald-900">{f.titre}</h4>
                                        <p className="text-[10px] text-emerald-700 uppercase tracking-widest">{f.etablissement} • {f.annee}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
