import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages, Rocket } from 'lucide-react'

export const Impact: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#f97316' // Orange

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#0c0c0e] text-slate-400 overflow-hidden flex" style={{ fontFamily }}>
            {/* Left Block: Bold Identity */}
            <div className="w-2/5 bg-[#f97316] p-16 flex flex-col items-center justify-center text-white relative overflow-hidden">
                <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-black/10 rounded-full" />
                <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full" />

                {data.photo && (
                    <div className="w-48 h-48 rounded-full border-8 border-white/20 overflow-hidden mb-12 shadow-2xl relative z-10">
                        <img src={data.photo} alt="Profile" className="w-full h-full object-cover scale-110 grayscale contrast-125 hover:grayscale-0 transition-all duration-500" />
                    </div>
                )}

                <h1 className="text-5xl font-black text-center leading-[0.8] mb-6 uppercase tracking-tighter relative z-10">{data.nom || 'FIRST LAST NAME'}</h1>
                <div className="w-16 h-2 bg-black/40 mb-6 relative z-10" />
                <p className="text-xl font-black text-black uppercase tracking-[0.2em] mb-12 relative z-10 text-center">{data.titre || 'LEAD INNOVATOR'}</p>

                <div className="w-full space-y-6 relative z-10 border-t border-white/20 pt-10">
                    <p className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Mail className="w-5 h-5 text-black" /> {data.email}</p>
                    <p className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><Phone className="w-5 h-5 text-black" /> {data.phone}</p>
                    <p className="flex items-center gap-4 text-xs font-black uppercase tracking-widest"><MapPin className="w-5 h-5 text-black" /> {data.location}</p>
                </div>
            </div>

            {/* Right Block: Pure Content */}
            <div className="flex-1 p-16 space-y-16 overflow-y-auto">
                <section>
                    <h2 className="text-5xl font-black text-white italic mb-10 border-b-8 border-[#f97316] inline-block pr-6">IMPACT.</h2>
                    <p className="text-lg font-bold leading-relaxed text-slate-300 italic pl-4 border-l-4 border-slate-800">
                        {data.profilSummary || 'High-performance professional with a track record of driving results and leading transformation...'}
                    </p>
                </section>

                <section>
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-[#f97316] mb-12 flex items-center gap-4">
                        <Rocket className="w-6 h-6" /> Milestone Experiences
                    </h2>
                    <div className="space-y-12">
                        {data.experiences.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-3">
                                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">{exp.titre}</h3>
                                    <span className="text-[10px] font-black text-[#f97316] px-4 py-1 border-2 border-[#f97316] rounded-full uppercase italic whitespace-nowrap">{exp.duree}</span>
                                </div>
                                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 italic">{exp.entreprise}</p>
                                <p className="text-sm text-slate-400 leading-relaxed font-bold border-l-2 border-slate-800 pl-6 italic">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-[#f97316] mb-12">Competencies</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {skills.map((s, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="w-3 h-3 bg-[#f97316] transform rotate-45 group-hover:bg-white transition-colors" />
                                <span className="text-sm font-black text-white uppercase italic tracking-widest">{s}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {data.projects.length > 0 && (
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-[#f97316] mb-12">Showcase</h2>
                        <div className="space-y-6">
                            {data.projects.map((p, i) => (
                                <div key={i} className="p-8 bg-[#16161a] rounded-3xl border border-slate-800 hover:border-[#f97316] transition-all group">
                                    <h4 className="text-xl font-black text-white mb-2 uppercase italic">{p.title}</h4>
                                    <p className="text-xs text-slate-500 font-bold truncate tracking-widest uppercase">{p.link}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}
