import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages, Cpu } from 'lucide-react'

export const Futura: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#8b5cf6' // Violet

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#fdf2ff] text-slate-800 overflow-hidden flex flex-col" style={{ fontFamily }}>
            {/* Top Navigation-like Header */}
            <div className="p-10 flex justify-between items-center bg-white border-b-2 border-violet-100">
                <div className="flex items-center gap-6">
                    {data.photo && (
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1">
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                                <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    )}
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">{data.nom || 'User.Name'}</h1>
                        <p className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em]">{data.titre || 'Product Manager'}</p>
                    </div>
                </div>
                <div className="text-right flex flex-col gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>{data.location}</span>
                    <span>{data.email}</span>
                </div>
            </div>

            <div className="flex-1 flex">
                <div className="w-2/3 p-12 space-y-10 overflow-y-auto bg-white/40">
                    <section>
                        <h2 className="text-2xl font-black text-slate-900 mb-6 flex gap-2">
                            <span className="text-violet-500">//</span> Summary
                        </h2>
                        <p className="text-sm leading-relaxed font-medium text-slate-600 bg-white p-6 rounded-3xl shadow-sm border border-violet-50">
                            {data.profilSummary || 'Innovative approach to technical challenges and team management...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 mb-8 flex gap-2">
                            <span className="text-violet-500">//</span> Experience
                        </h2>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between mb-2">
                                        <h3 className="text-md font-black text-slate-800 uppercase">{exp.titre}</h3>
                                        <span className="text-[10px] font-black text-violet-500 px-3 py-1 bg-violet-50 rounded-full">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-bold text-fuchsia-500 mb-4">{exp.entreprise}</p>
                                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="w-1/3 p-10 space-y-10 border-l border-violet-100">
                    <section>
                        <h2 className="text-sm font-black uppercase text-violet-600 mb-6 tracking-widest flex items-center gap-2">
                            <Cpu className="w-4 h-4" /> Core Stack
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((s, i) => (
                                <span key={i} className="px-3 py-1 bg-white border border-violet-100 text-[10px] font-black text-slate-600 rounded-xl shadow-sm italic">
                                    #{s.replace(' ', '')}
                                </span>
                            ))}
                        </div>
                    </section>

                    {data.projects.length > 0 && (
                        <section>
                            <h2 className="text-sm font-black uppercase text-violet-600 mb-6 tracking-widest flex items-center gap-2">
                                <Globe className="w-4 h-4" /> Shipments
                            </h2>
                            <div className="space-y-4">
                                {data.projects.map((p, i) => (
                                    <div key={i} className="group bg-gradient-to-r from-violet-50 to-transparent p-4 rounded-2xl border border-violet-50">
                                        <h4 className="text-xs font-black text-slate-800 mb-1">{p.title}</h4>
                                        <p className="text-[10px] text-fuchsia-500 font-bold truncate">{p.link}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.certificates.length > 0 && (
                        <section>
                            <h2 className="text-sm font-black uppercase text-violet-600 mb-6 tracking-widest flex items-center gap-2">
                                <Award className="w-4 h-4" /> Badges
                            </h2>
                            <div className="space-y-3">
                                {data.certificates.map((c, i) => (
                                    <div key={i}>
                                        <p className="text-[10px] font-black text-slate-700">{c.title}</p>
                                        <p className="text-[10px] text-slate-400">{c.year}</p>
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
