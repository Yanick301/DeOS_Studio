import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages, ShieldCheck } from 'lucide-react'

export const Summit: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#1e293b' // Slate 800

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#f8fafc] text-slate-700 overflow-hidden flex flex-col" style={{ fontFamily }}>
            {/* The Corporate Monolith Header */}
            <div className="bg-slate-900 text-white p-20 pb-16 flex justify-between items-start border-b-[16px] border-blue-600 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                <div className="z-10">
                    <div className="flex items-center gap-3 text-blue-500 mb-6 group">
                        <ShieldCheck className="w-8 h-8 fill-blue-500/20" />
                        <span className="text-xs font-black uppercase tracking-[0.8em]">Executive Standard</span>
                    </div>
                    <h1 className="text-7xl font-black tracking-tight leading-none mb-4 uppercase">{data.nom || 'YOUR FULL NAME'}</h1>
                    <p className="text-2xl font-bold text-blue-500 tracking-[0.3em] uppercase">{data.titre || 'EXECUTIVE LEADERSHIP'}</p>
                </div>
                {data.photo && (
                    <div className="z-10 w-48 h-48 rounded-none border-[12px] border-slate-800 overflow-hidden shadow-2xl brightness-90 contrast-110">
                        <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>

            <div className="flex-1 flex px-20 pt-16 gap-20 overflow-hidden">
                <div className="flex-1 space-y-16 overflow-y-auto pb-20 pr-4 scrollbar-hide">
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-10 flex items-center justify-between">
                            Strategic Summary <div className="h-2 w-20 bg-blue-600 ml-4" />
                        </h2>
                        <p className="text-xl font-medium leading-relaxed text-slate-800">
                            {data.profilSummary || 'Delivering exceptional leadership and strategic growth through decades of industry-leading expertise...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-12 flex items-center justify-between">
                            Career Milestones <div className="h-2 w-20 bg-blue-600 ml-4" />
                        </h2>
                        <div className="space-y-16">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="max-w-[75%]">
                                            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2 group-hover:text-blue-600 transition-colors">{exp.titre}</h3>
                                            <p className="text-sm font-black text-blue-600 uppercase tracking-[0.2em]">{exp.entreprise}</p>
                                        </div>
                                        <span className="text-xs font-black text-slate-400 italic pt-2 whitespace-nowrap">{exp.duree}</span>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed font-bold border-l-4 border-slate-200 pl-8 italic">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="w-[280px] space-y-12">
                    <section className="bg-white p-8 border border-slate-200 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-1 p-full bg-blue-600" />
                        <h2 className="text-xs font-black uppercase text-slate-400 mb-8 tracking-widest">Global Connect</h2>
                        <div className="space-y-6 text-xs font-black text-slate-900 uppercase tracking-tighter">
                            <p className="flex flex-col gap-2">
                                <span className="text-[10px] text-blue-500 tracking-[0.3em]">SECURE_MAIL</span>
                                {data.email}
                            </p>
                            <p className="flex flex-col gap-2">
                                <span className="text-[10px] text-blue-500 tracking-[0.3em]">DIRECT_LINE</span>
                                {data.phone}
                            </p>
                            <p className="flex flex-col gap-2">
                                <span className="text-[10px] text-blue-500 tracking-[0.3em]">RESIDENCE</span>
                                {data.location}
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase text-slate-400 mb-10 tracking-[0.5em]">Global Expertise</h2>
                        <div className="grid grid-cols-1 gap-2">
                            {skills.map((s, i) => (
                                <div key={i} className="flex justify-between items-center text-[11px] font-black text-slate-800 uppercase border-b border-slate-100 pb-2">
                                    <span>{s}</span>
                                    <div className="w-1.5 h-1.5 bg-blue-600" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {data.certificates.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase text-slate-400 mb-10 tracking-[0.5em]">Board Credentials</h2>
                            <div className="space-y-6">
                                {data.certificates.map((c, i) => (
                                    <div key={i} className="relative pl-6">
                                        <div className="absolute left-0 top-1 w-2 h-2 bg-blue-600" />
                                        <h4 className="text-[11px] font-black text-slate-800 uppercase mb-1">{c.title}</h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{c.year}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* The Summit Bottom Bar */}
            <div className="mt-auto p-12 bg-slate-900 text-slate-500 flex justify-between items-center text-[9px] font-black uppercase tracking-[1em]">
                <span>DeOS Summit Edition</span>
                <span className="opacity-20">// 2026_ESTD_CORP</span>
            </div>
        </div>
    )
}
