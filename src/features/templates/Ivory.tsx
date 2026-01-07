import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages } from 'lucide-react'

export const Ivory: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#78350f' // Warm Brown/Charcoal

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-[#fafaf6] text-[#2c2c2c] overflow-hidden p-16 flex flex-col items-center" style={{ fontFamily }}>
            {/* Minimal Header */}
            <div className="text-center mb-16 max-w-lg">
                <h1 className="text-4xl font-serif tracking-tight mb-2 uppercase">{data.nom || 'Nom de Famille'}</h1>
                <div className="w-12 h-px bg-[#78350f] mx-auto mb-4" />
                <p className="text-sm font-medium tracking-[0.4em] text-gray-400 uppercase">{data.titre || 'Titre Professionnel'}</p>
            </div>

            <div className="w-full grid grid-cols-12 gap-12 flex-1">
                {/* Left Column: Bio & Experience */}
                <div className="col-span-8 space-y-12">
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#78350f] mb-6 flex items-center gap-3">
                            <span className="w-8 h-px bg-[#78350f]" /> À Propos
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-600 pl-11">
                            {data.profilSummary || 'Une présentation sobre et élégante de votre parcours académique et professionnel...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#78350f] mb-8 flex items-center gap-3">
                            <span className="w-8 h-px bg-[#78350f]" /> Expérience
                        </h2>
                        <div className="space-y-10 pl-11">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-sm font-black uppercase text-[#2c2c2c]">{exp.titre}</h3>
                                        <span className="text-[10px] text-gray-400">{exp.duree}</span>
                                    </div>
                                    <p className="text-[11px] font-bold text-[#78350f] mb-3">{exp.entreprise}</p>
                                    <p className="text-xs text-gray-500 font-light leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Contact & Info */}
                <div className="col-span-4 space-y-12 bg-white/50 p-6 rounded-2xl border border-[#e5e7eb]">
                    {data.photo && (
                        <div className="w-full aspect-square rounded-xl overflow-hidden grayscale contrast-125 mb-8">
                            <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    )}

                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#78350f]">Contact</h2>
                        <div className="space-y-3 text-[11px] text-gray-600">
                            <p className="flex items-center gap-3"><Mail className="w-3.5 h-3.5" /> {data.email}</p>
                            <p className="flex items-center gap-3"><Phone className="w-3.5 h-3.5" /> {data.phone}</p>
                            <p className="flex items-center gap-3"><MapPin className="w-3.5 h-3.5" /> {data.location}</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#78350f]">Expertise</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((s, i) => (
                                <span key={i} className="text-[9px] uppercase tracking-tighter text-gray-500">· {s}</span>
                            ))}
                        </div>
                    </section>

                    {data.languages.length > 0 && (
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#78350f]">Langues</h2>
                            <div className="space-y-1">
                                {data.languages.map((l, i) => (
                                    <p key={i} className="text-[11px] text-gray-600 flex justify-between">
                                        <span>{l.name}</span>
                                        <span className="text-gray-400 italic font-light">{l.level}</span>
                                    </p>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-[9px] text-gray-300 uppercase tracking-widest">
                DeOS Studio Premium Template • Ivory Edition
            </div>
        </div>
    )
}
