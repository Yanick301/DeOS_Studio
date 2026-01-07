import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages, Sunrise } from 'lucide-react'

export const Aurora: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#fdfcfb] text-slate-800 overflow-hidden relative flex flex-col" style={{ fontFamily }}>
            {/* Soft Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-orange-50/50 via-rose-50/30 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 blur-[100px] rounded-full -mr-48 -mt-48 pointer-events-none" />

            {/* Ethereal Header */}
            <div className="relative z-10 p-20 pb-16 flex flex-col items-center">
                <div className="flex items-center gap-3 text-rose-400 mb-8 px-6 py-2 bg-white/50 backdrop-blur-md rounded-full border border-rose-100/50 shadow-sm">
                    <Sunrise className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">The New Dawn</span>
                </div>

                {data.photo && (
                    <div className="w-40 h-40 rounded-full border-8 border-white overflow-hidden shadow-2xl mb-10 z-20">
                        <img src={data.photo} alt="Profile" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                    </div>
                )}

                <h1 className="text-6xl font-light tracking-tighter text-slate-900 mb-2 uppercase leading-none">{data.nom || 'FIRSTNAME LASTNAME'}</h1>
                <p className="text-xl font-medium text-rose-400 tracking-[0.4em] uppercase">{data.titre || 'CREATIVE DIRECTOR'}</p>

                <div className="mt-10 flex gap-12 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <p className="flex items-center gap-2 underline decoration-rose-200 decoration-2 underline-offset-4">{data.email}</p>
                    <p className="flex items-center gap-2 underline decoration-rose-200 decoration-2 underline-offset-4">{data.phone}</p>
                    <p className="flex items-center gap-2 underline decoration-rose-200 decoration-2 underline-offset-4">{data.location}</p>
                </div>
            </div>

            <div className="relative z-10 flex-1 grid grid-cols-12 gap-16 px-20 overflow-hidden">
                <div className="col-span-12 space-y-16 overflow-y-auto pb-20 scrollbar-hide">
                    <section className="text-center max-w-2xl mx-auto">
                        <p className="text-2xl font-serif italic text-slate-500 leading-relaxed">
                            "{data.profilSummary || 'Visionary professional dedicated to the pursuit of aesthetic and functional excellence...'}"
                        </p>
                    </section>

                    <div className="grid grid-cols-12 gap-16">
                        <div className="col-span-7 space-y-12">
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-rose-400 mb-10 flex items-center gap-4">
                                    <span className="w-10 h-px bg-rose-200" /> Professional Journey
                                </h2>
                                <div className="space-y-12">
                                    {data.experiences.map((exp) => (
                                        <div key={exp.id} className="relative pl-10 group">
                                            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border border-rose-200 group-hover:bg-rose-100 transition-colors" />
                                            <div className="flex justify-between items-baseline mb-3">
                                                <h3 className="text-xl font-light text-slate-900 uppercase tracking-tight">{exp.titre}</h3>
                                                <span className="text-[10px] font-black text-rose-300 uppercase italic">{exp.duree}</span>
                                            </div>
                                            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{exp.entreprise}</p>
                                            <p className="text-sm text-slate-500 leading-relaxed font-light">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="col-span-5 space-y-12">
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-rose-400 mb-10 flex items-center gap-4">
                                    <span className="w-10 h-px bg-rose-200" /> Expertise Area
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((s, i) => (
                                        <span key={i} className="px-5 py-2 bg-white rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-100 shadow-sm">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-rose-400 mb-10 flex items-center gap-4">
                                    <span className="w-10 h-px bg-rose-200" /> Academic Base
                                </h2>
                                <div className="space-y-8">
                                    {data.formations.map((f) => (
                                        <div key={f.id}>
                                            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-2">{f.titre}</h4>
                                            <p className="text-[10px] font-black text-rose-300 uppercase tracking-widest">{f.etablissement}</p>
                                            <p className="text-[10px] font-medium text-slate-400 mt-1">{f.annee}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Accent */}
            <div className="h-2 bg-gradient-to-r from-orange-100 via-rose-100 to-blue-100 w-full" />
        </div>
    )
}
