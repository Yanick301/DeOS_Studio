import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages, Code } from 'lucide-react'

export const Midnight: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#3b82f6' // Deep Blue

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#0f172a] text-slate-100 overflow-hidden flex flex-col" style={{ fontFamily }}>
            {/* Top Header */}
            <div className="p-12 border-b border-slate-800 bg-slate-900/50 flex items-center gap-10">
                {data.photo && (
                    <div className="w-36 h-36 rounded-3xl overflow-hidden shadow-2xl rotate-3 border-4 border-blue-500/30 ring-8 ring-blue-500/10">
                        <img src={data.photo} alt="Profile" className="w-full h-full object-cover -rotate-3 scale-110" />
                    </div>
                )}
                <div>
                    <h1 className="text-5xl font-black tracking-tight text-white mb-2">{data.nom || 'PRENOM NOM'}</h1>
                    <div className="h-1 w-20 bg-blue-500 mb-4" />
                    <p className="text-2xl font-bold text-blue-400 tracking-wide uppercase">{data.titre || 'VOTRE TITRE'}</p>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Main */}
                <div className="flex-1 p-10 space-y-12 overflow-y-auto">
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                                <User className="w-5 h-5 text-blue-400" />
                            </div>
                            <h2 className="text-xl font-black uppercase tracking-widest text-white">Profil</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {data.profilSummary || 'Expertise stratégique et vision technologique...'}
                        </p>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                                <Briefcase className="w-5 h-5 text-blue-400" />
                            </div>
                            <h2 className="text-xl font-black uppercase tracking-widest text-white">Parcours</h2>
                        </div>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:left-[19px] before:w-px before:bg-slate-800">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="pl-12 relative">
                                    <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-[#0f172a] border border-slate-800 flex items-center justify-center z-10 transition-colors group">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    </div>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-lg font-bold text-white uppercase">{exp.titre}</h3>
                                        <span className="text-[10px] font-black px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">{exp.duree}</span>
                                    </div>
                                    <p className="text-sm font-semibold text-blue-500/80 mb-2">{exp.entreprise}</p>
                                    <p className="text-xs text-slate-500 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="w-[280px] bg-slate-900/30 p-8 border-l border-slate-800 space-y-8">
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Contact</h2>
                        <div className="space-y-4 text-xs font-medium">
                            <div className="flex items-center gap-3 text-slate-300">
                                <Mail className="w-4 h-4 text-blue-500" />
                                <span className="truncate">{data.email || 'hello@dev.io'}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Phone className="w-4 h-4 text-blue-500" />
                                <span>{data.phone || '+33 600...'}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <MapPin className="w-4 h-4 text-blue-500" />
                                <span>{data.location || 'Cyber City'}</span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Stack Technique</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((s, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-800 border border-slate-700 text-[9px] font-black text-blue-300 rounded uppercase">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </section>

                    {data.projects.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Labs / Projets</h2>
                            <div className="space-y-3">
                                {data.projects.map((p, i) => (
                                    <div key={i} className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 group hover:border-blue-500/50 transition-colors">
                                        <h4 className="text-[10px] font-bold text-white mb-1 flex items-center gap-2">
                                            <Code className="w-3 h-3 text-blue-400" /> {p.title}
                                        </h4>
                                        <p className="text-[9px] text-slate-500 truncate">{p.link}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    )
}
