import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages } from 'lucide-react'

export const Heritage: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#1a1a1a'

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#fffdfa] text-[#1a1a1a] overflow-hidden p-16 flex flex-col border-[12px] border-[#e5e1da]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {/* Newspaper Header */}
            <div className="text-center border-b-4 border-black pb-8 mb-12">
                <div className="text-[10px] tracking-[1em] uppercase mb-4 font-sans font-black">CURRICULUM VITAE RÉPUBLIQUE</div>
                <h1 className="text-6xl font-black mb-2 uppercase">{data.nom || 'Prénom Nom'}</h1>
                <p className="text-lg italic font-serif opacity-60">Designé par DeOS Studio Premium Edition</p>
            </div>

            <div className="flex-1 grid grid-cols-12 gap-12 overflow-hidden">
                <div className="col-span-8 flex flex-col gap-12 overflow-y-auto pr-6 border-r border-[#e5e1da]">
                    <section>
                        <h2 className="text-xl font-black border-b border-black mb-6 uppercase tracking-widest">Parcours Professionnel</h2>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-black uppercase italic">{exp.titre}</h3>
                                        <span className="text-xs font-bold font-sans tracking-tighter uppercase">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-black uppercase mb-4 tracking-widest opacity-50">{exp.entreprise}</p>
                                    <p className="text-sm leading-relaxed text-justify opacity-80">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-black border-b border-black mb-6 uppercase tracking-widest">Formation Supérieure</h2>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id} className="flex justify-between items-baseline">
                                    <div>
                                        <h4 className="text-sm font-black uppercase italic">{f.titre}</h4>
                                        <p className="text-xs font-sans font-bold opacity-60 uppercase tracking-widest">{f.etablissement}</p>
                                    </div>
                                    <span className="text-xs font-bold font-sans">{f.annee}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-4 flex flex-col gap-10">
                    {data.photo && (
                        <div className="w-full aspect-[3/4] border-2 border-black p-1">
                            <img src={data.photo} alt="Profile" className="w-full h-full object-cover filter sepia-50 contrast-125" />
                        </div>
                    )}

                    <section>
                        <h2 className="text-xs font-black uppercase border-b border-black pb-1 mb-4 tracking-widest">Coordonnées</h2>
                        <div className="space-y-3 text-[11px] font-sans font-bold uppercase tracking-tighter opacity-70">
                            <p className="break-all">{data.email}</p>
                            <p>{data.phone}</p>
                            <p>{data.location}</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase border-b border-black pb-1 mb-4 tracking-widest">Expertise</h2>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {skills.map((s, i) => (
                                <span key={i} className="text-xs font-black italic tracking-tighter">· {s}</span>
                            ))}
                        </div>
                    </section>

                    {data.languages.length > 0 && (
                        <section>
                            <h2 className="text-xs font-black uppercase border-b border-black pb-1 mb-4 tracking-widest">Langues</h2>
                            <div className="space-y-2">
                                {data.languages.map((l, i) => (
                                    <p key={i} className="text-xs font-black italic flex justify-between">
                                        <span>{l.name}</span>
                                        <span className="opacity-40">{l.level}</span>
                                    </p>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* Price tag effect */}
            <div className="mt-8 flex justify-center opacity-20">
                <div className="border border-black px-4 py-1 text-[8px] font-black uppercase tracking-[0.5em]">Heritage Edition</div>
            </div>
        </div>
    )
}
