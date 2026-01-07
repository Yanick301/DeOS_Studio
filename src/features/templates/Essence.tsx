import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages } from 'lucide-react'

export const Essence: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#ec4899' // Pink/Rose

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#fffafb] text-slate-700 overflow-hidden flex flex-col" style={{ fontFamily }}>
            {/* Curved Header */}
            <div className="h-72 bg-gradient-to-br from-rose-100 to-pink-50 relative overflow-hidden flex items-center px-16">
                <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-white/40 rounded-full blur-3xl" />
                <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-rose-200/20 rounded-full blur-2xl" />

                <div className="flex items-center gap-10 relative z-10 w-full">
                    {data.photo && (
                        <div className="w-40 h-40 rounded-[3rem] overflow-hidden border-8 border-white shadow-xl rotate-3">
                            <img src={data.photo} alt="Profile" className="w-full h-full object-cover -rotate-3" />
                        </div>
                    )}
                    <div className="flex-1">
                        <h1 className="text-5xl font-black text-rose-900 tracking-tight leading-none mb-4">{data.nom || 'Firstname Lastname'}</h1>
                        <div className="flex items-center gap-4">
                            <span className="px-4 py-1.5 bg-rose-500 text-white text-sm font-black rounded-full uppercase tracking-widest shadow-lg shadow-rose-200">{data.titre || 'Product Designer'}</span>
                            <div className="flex items-center gap-2 text-rose-300">
                                <MapPin className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-tighter">{data.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex px-16 pt-12 gap-16 overflow-hidden">
                <div className="flex-1 space-y-12 overflow-y-auto pb-12">
                    <section>
                        <h2 className="text-xl font-black text-rose-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center"><User className="w-5 h-5 text-rose-500" /></div>
                            About Me
                        </h2>
                        <p className="text-md leading-relaxed text-slate-500 font-medium italic">
                            {data.profilSummary || 'Bringing empathy and creativity to every project I touch...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-rose-900 mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center"><Briefcase className="w-5 h-5 text-rose-500" /></div>
                            Experiences
                        </h2>
                        <div className="space-y-10 pl-5 border-l-2 border-dashed border-rose-200">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative">
                                    <div className="absolute left-[-29px] top-1 w-4 h-4 rounded-full bg-white border-2 border-rose-500" />
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-black text-slate-800">{exp.titre}</h3>
                                        <span className="text-xs font-black text-rose-400 italic bg-rose-50 px-3 py-1 rounded-full">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-black text-rose-500 uppercase mb-4 tracking-widest">{exp.entreprise}</p>
                                    <p className="text-xs text-slate-400 leading-relaxed font-medium">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="w-[280px] space-y-10 pb-12">
                    <section className="bg-white p-6 rounded-[2.5rem] border border-rose-50 shadow-sm">
                        <h2 className="text-xs font-black uppercase text-rose-300 mb-6 tracking-widest">Connect</h2>
                        <div className="space-y-4 text-xs font-bold text-slate-600">
                            <p className="flex items-center gap-4 bg-rose-50/50 p-3 rounded-2xl"><Mail className="w-4 h-4 text-rose-400" /> {data.email}</p>
                            <p className="flex items-center gap-4 bg-rose-50/50 p-3 rounded-2xl"><Phone className="w-4 h-4 text-rose-400" /> {data.phone}</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase text-rose-300 mb-6 tracking-widest">Superpowers</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((s, i) => (
                                <span key={i} className="px-4 py-2 bg-white text-[10px] font-black text-rose-500 rounded-2xl border border-rose-100 shadow-sm uppercase tracking-tighter">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </section>

                    {data.qualities.length > 0 && (
                        <section className="p-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-[2.5rem] text-white shadow-xl shadow-rose-200">
                            <h2 className="text-xs font-black uppercase mb-4 tracking-widest opacity-60 text-white">Soft Skills</h2>
                            <ul className="space-y-2">
                                {data.qualities.map((q, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[11px] font-black uppercase">
                                        <Star className="w-3 h-3 fill-white" /> {q}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </div>
    )
}
