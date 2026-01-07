import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages, Moon } from 'lucide-react'

export const Nebula: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#020617] text-slate-300 overflow-hidden relative flex flex-col" style={{ fontFamily }}>
            {/* Cosmic Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 blur-[150px] rounded-full -mr-96 -mt-96" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full -ml-96 -mb-96" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-10 flex-1 flex p-16 gap-16">
                <div className="w-1/3 flex flex-col gap-12">
                    <div className="space-y-8">
                        {data.photo && (
                            <div className="w-full aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.2)]">
                                <img src={data.photo} alt="Profile" className="w-full h-full object-cover grayscale" />
                            </div>
                        )}
                        <div>
                            <h1 className="text-4xl font-black text-white tracking-tighter leading-none mb-4 uppercase">{data.nom || 'VOYAGER ONE'}</h1>
                            <div className="px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-xs font-black rounded-2xl uppercase tracking-[0.2em] inline-block shadow-lg">
                                {data.titre || 'MISSION COMMANDER'}
                            </div>
                        </div>
                    </div>

                    <section className="bg-slate-900/40 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/5">
                        <h2 className="text-[10px] font-black uppercase text-indigo-400 mb-6 tracking-[0.5em]">Orbit Contact</h2>
                        <div className="space-y-4 text-xs font-medium">
                            <p className="flex items-center gap-4 break-all"><Mail className="w-4 h-4 text-indigo-500 shrink-0" /> {data.email}</p>
                            <p className="flex items-center gap-4"><Phone className="w-4 h-4 text-indigo-500 shrink-0" /> {data.phone}</p>
                            <p className="flex items-center gap-4"><MapPin className="w-4 h-4 text-indigo-500 shrink-0" /> {data.location}</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-[10px] font-black uppercase text-indigo-400 mb-6 tracking-[0.5em]">Core Specs</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((s, i) => (
                                <span key={i} className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-black text-indigo-300 rounded-lg uppercase italic">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="flex-1 flex flex-col gap-12 overflow-y-auto pr-4 scrollbar-hide">
                    <section>
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-6xl font-black text-white/10 italic">01.</h2>
                            <h3 className="text-xl font-black text-white uppercase tracking-[0.2em]">The Mission</h3>
                        </div>
                        <p className="text-lg font-light leading-relaxed text-slate-400 italic border-l border-indigo-500/30 pl-8">
                            {data.profilSummary || 'Exploring the unknown frontiers of digital excellence...'}
                        </p>
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-6xl font-black text-white/10 italic">02.</h2>
                            <h3 className="text-xl font-black text-white uppercase tracking-[0.2em]">Trajectory</h3>
                        </div>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative group pl-10">
                                    <div className="absolute left-0 top-2 w-px h-full bg-gradient-to-b from-indigo-500 to-transparent" />
                                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]" />
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-lg font-black text-white uppercase">{exp.titre}</h4>
                                        <span className="text-[10px] font-bold text-indigo-400 italic uppercase">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-black text-indigo-500/60 uppercase tracking-widest mb-4 italic">{exp.entreprise}</p>
                                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-6xl font-black text-white/10 italic">03.</h2>
                            <h3 className="text-xl font-black text-white uppercase tracking-[0.2em]">Launchpad</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {data.formations.map((f) => (
                                <div key={f.id} className="p-6 bg-slate-900/30 backdrop-blur-md rounded-3xl border border-white/5">
                                    <h4 className="text-xs font-black text-white uppercase mb-2">{f.titre}</h4>
                                    <p className="text-[10px] font-bold text-indigo-400 italic mb-2">{f.etablissement}</p>
                                    <p className="text-[9px] font-black text-slate-500">{f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Price tag effect */}
            <div className="p-10 flex justify-between items-center opacity-30 relative z-10">
                <div className="text-[8px] font-black uppercase tracking-[1em]">Nebula Cosmic Edition</div>
                <div className="flex gap-2">
                    <div className="w-1 h-1 rounded-full bg-white" />
                    <div className="w-1 h-1 rounded-full bg-white" />
                    <div className="w-1 h-1 rounded-full bg-white" />
                </div>
            </div>
        </div>
    )
}
