import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages, Settings } from 'lucide-react'

export const Copper: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#d97706' // Warm Copper

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-white text-gray-800 overflow-hidden flex" style={{ fontFamily }}>
            {/* Sidebar Left */}
            <div className="w-16 bg-[#d97706] flex flex-col items-center py-10 text-white gap-8 shadow-xl z-10">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20"><User className="w-6 h-6" /></div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10"><Briefcase className="w-6 h-6" /></div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10"><Award className="w-6 h-6" /></div>
                <div className="mt-auto opacity-50 text-[10px] font-black -rotate-90 origin-center whitespace-nowrap mb-12 tracking-[1em]">COPPER</div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <div className="p-12 pb-6 border-b-8 border-gray-100 flex justify-between">
                    <div>
                        <h1 className="text-6xl font-black text-gray-900 leading-none mb-2">{data.nom || 'NOM PRENOM'}</h1>
                        <p className="text-xl font-bold text-[#d97706] tracking-[0.5em] uppercase">{data.titre || 'VOTRE TITRE'}</p>
                    </div>
                </div>

                <div className="flex-1 flex">
                    <div className="w-2/3 p-12 space-y-12 border-r border-gray-100">
                        <section>
                            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="w-3 h-3 bg-[#d97706] rounded-sm" /> Expérience
                            </h2>
                            <div className="space-y-10">
                                {data.experiences.map((exp) => (
                                    <div key={exp.id} className="relative group">
                                        <div className="flex justify-between mb-2">
                                            <h3 className="text-md font-black text-gray-900 uppercase">{exp.titre}</h3>
                                            <span className="text-sm font-bold text-gray-400">{exp.duree}</span>
                                        </div>
                                        <p className="text-sm font-black text-[#d97706] mb-3">{exp.entreprise}</p>
                                        <p className="text-xs text-gray-500 leading-relaxed font-medium">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                                <span className="w-3 h-3 bg-[#d97706] rounded-sm" /> Formation
                            </h2>
                            <div className="grid grid-cols-2 gap-6">
                                {data.formations.map((f) => (
                                    <div key={f.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                        <h4 className="text-sm font-black text-gray-800 uppercase mb-1">{f.titre}</h4>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase">{f.etablissement}</p>
                                        <p className="text-[10px] text-[#d97706] font-black">{f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="w-1/3 p-10 bg-gray-50/50 space-y-10">
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Contact</h2>
                            <div className="space-y-4 text-xs font-bold text-gray-700">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-[#d97706]" />
                                    <span className="truncate">{data.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-[#d97706]" />
                                    <span>{data.phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-[#d97706]" />
                                    <span>{data.location}</span>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Expertise</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((s, i) => (
                                    <span key={i} className="px-2 py-1 bg-white text-[9px] font-black text-gray-700 rounded border border-gray-200 shadow-sm uppercase">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {data.certificates.length > 0 && (
                            <section>
                                <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Certificats</h2>
                                <div className="space-y-3">
                                    {data.certificates.map((c, i) => (
                                        <div key={i}>
                                            <p className="text-[10px] font-black text-gray-800 uppercase">{c.title}</p>
                                            <p className="text-[9px] font-bold text-[#d97706]">{c.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
