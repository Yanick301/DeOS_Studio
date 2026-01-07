import React from 'react'
import { TemplateProps } from './types'
import { Crown, Sparkles, Award, Star, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'

export const MajestyCouture: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col p-20"
            style={{ backgroundColor: '#020617', color: '#f8fafc', fontFamily: "'Playfair Display', serif" }}
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-couture-gold" style={{ backgroundColor: accentColor }} />

            <header className="text-center space-y-8 mb-20 relative">
                <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full border-4 border-couture-gold mb-6 overflow-hidden bg-slate-800" style={{ borderColor: accentColor }}>
                        {data.photo ? (
                            <img src={data.photo} className="w-full h-full object-cover grayscale brightness-125" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Crown className="w-10 h-10 text-couture-gold" style={{ color: accentColor }} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-5xl font-black uppercase tracking-tighter leading-tight">{data.nom || 'VOTRE NOM'}</h1>
                    <div className="flex items-center justify-center gap-6">
                        <div className="h-[1px] w-20 bg-white/20" />
                        <p className="text-sm font-bold uppercase tracking-[0.5em] text-couture-gold italic" style={{ color: accentColor }}>
                            {data.titre || 'VOTRE TITRE'}
                        </p>
                        <div className="h-[1px] w-20 bg-white/20" />
                    </div>
                </div>

                <div className="flex justify-center gap-8 pt-4">
                    <p className="flex items-center gap-2 text-[10px] font-bold tracking-widest opacity-60 uppercase"><Mail className="w-4 h-4 text-couture-gold" /> {data.email}</p>
                    <p className="flex items-center gap-2 text-[10px] font-bold tracking-widest opacity-60 uppercase"><Phone className="w-4 h-4 text-couture-gold" /> {data.phone}</p>
                    <p className="flex items-center gap-2 text-[10px] font-bold tracking-widest opacity-60 uppercase"><MapPin className="w-4 h-4 text-couture-gold" /> {data.location}</p>
                </div>
            </header>

            <div className="flex-1 grid grid-cols-12 gap-16">
                <div className="col-span-8 space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-couture-gold border-l-4 pl-4" style={{ borderColor: accentColor, color: accentColor }}>Professional_Ethos</h2>
                        <p className="text-sm leading-[2] text-slate-300 text-justify font-medium" style={{ fontFamily: "'Lora', serif" }}>
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-couture-gold border-l-4 pl-4" style={{ borderColor: accentColor, color: accentColor }}>Elite_Chronicles</h2>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="group relative">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-xl font-black">{exp.titre}</h4>
                                        <span className="text-[10px] font-black opacity-30 tracking-widest">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-bold italic tracking-widest opacity-70 mb-4" style={{ color: accentColor }}>{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed text-slate-400 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-4 space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-couture-gold" style={{ color: accentColor }}>Master_Skills</h2>
                        <div className="space-y-3">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-couture-gold transition-colors">{skill}</span>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(dot => (
                                            <div key={dot} className={`w-1 h-1 rounded-full ${dot <= 4 ? 'bg-couture-gold' : 'bg-white/10'}`} style={{ backgroundColor: dot <= 4 ? accentColor : 'rgba(255,255,255,0.1)' }} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-couture-gold" style={{ color: accentColor }}>Academic_Pedigree</h2>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id} className="space-y-1">
                                    <p className="text-xs font-black">{f.titre}</p>
                                    <p className="text-[9px] opacity-40 uppercase tracking-widest font-bold">{f.etablissement} | {f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-couture-gold" style={{ color: accentColor }}>Accolades</h2>
                        <div className="space-y-4">
                            {data.certificates.map((cert, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <Award className="w-4 h-4 text-couture-gold shrink-0" style={{ color: accentColor }} />
                                    <div>
                                        <p className="text-[10px] font-black italic leading-tight">{cert.title}</p>
                                        <p className="text-[8px] opacity-30 mt-1 uppercase tracking-widest">{cert.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <footer className="mt-12 flex justify-center opacity-10">
                <Crown className="w-12 h-12" />
            </footer>
        </div>
    )
}
