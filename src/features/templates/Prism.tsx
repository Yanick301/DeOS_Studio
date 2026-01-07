import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages, Zap } from 'lucide-react'

export const Prism: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#0a0a0a] text-white overflow-hidden relative flex flex-col" style={{ fontFamily }}>
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-rose-600/10 blur-[100px] rounded-full" />

            {/* Glass Header */}
            <div className="relative z-10 p-12 bg-white/5 backdrop-blur-xl border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    {data.photo && (
                        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-blue-500 p-1 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0a0a0a]">
                                <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    )}
                    <div>
                        <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent mb-2">
                            {data.nom || 'Creative Mind'}
                        </h1>
                        <p className="text-xl font-bold bg-gradient-to-r from-rose-400 to-blue-400 bg-clip-text text-transparent uppercase tracking-widest flex items-center gap-3">
                            <Zap className="w-5 h-5 text-rose-400 fill-rose-400" /> {data.titre || 'Visual Architect'}
                        </p>
                    </div>
                </div>
                <div className="text-right text-[10px] uppercase font-black tracking-[0.3em] text-white/30 hidden md:block">
                    DeOS / Prism
                </div>
            </div>

            <div className="relative z-10 flex-1 flex">
                <div className="w-2/3 p-12 space-y-12">
                    <section>
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/40 mb-6 flex items-center gap-3">
                            <span className="w-6 h-px bg-white/20" /> Mission
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-white/80">
                            {data.profilSummary || 'Transforming complex challenges into elegant visual stories...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/40 mb-8 flex items-center gap-3">
                            <span className="w-6 h-px bg-white/20" /> Experience
                        </h2>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl font-black text-white group-hover:text-rose-400 transition-colors uppercase">{exp.titre}</h3>
                                        <span className="text-xs font-black text-rose-400/80 italic">{exp.duree}</span>
                                    </div>
                                    <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">{exp.entreprise}</p>
                                    <p className="text-xs text-white/50 leading-relaxed font-medium">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="w-1/3 p-10 bg-white/5 backdrop-blur-sm border-l border-white/10 space-y-12">
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-rose-400 mb-6">Contact</h2>
                        <div className="space-y-4 text-xs font-bold text-white/70">
                            <p className="flex items-center gap-4"><Mail className="w-4 h-4 text-rose-400" /> {data.email}</p>
                            <p className="flex items-center gap-4"><Phone className="w-4 h-4 text-rose-400" /> {data.phone}</p>
                            <p className="flex items-center gap-4"><MapPin className="w-4 h-4 text-rose-400" /> {data.location}</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-6">Skill Set</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((s, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest rounded-lg">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </section>

                    {data.projects.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-purple-400 mb-6">Portfolio</h2>
                            <div className="space-y-3">
                                {data.projects.map((p, i) => (
                                    <div key={i} className="p-4 bg-gradient-to-r from-rose-500/10 to-transparent border-l-2 border-rose-500 rounded-r-2xl">
                                        <h4 className="text-[10px] font-black uppercase mb-1">{p.title}</h4>
                                        <p className="text-[9px] text-white/30 truncate">{p.link}</p>
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
