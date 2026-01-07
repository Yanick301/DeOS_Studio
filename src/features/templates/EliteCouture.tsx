import React from 'react'
import { TemplateProps } from './types'
import { User, Mail, Phone, MapPin, Globe, Award, BookOpen, Briefcase, Zap, Star } from 'lucide-react'
import { QRCodeCanvas } from 'qrcode.react'

export const EliteCouture: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex"
            style={{ backgroundColor: bgColor, color: '#0f172a', fontFamily: "'Playfair Display', serif" }}
        >
            {/* Colonne de Gauche - Identité & Contact */}
            <div className="w-[280px] h-full bg-[#1e293b] text-white p-10 flex flex-col justify-between border-r-[10px]" style={{ borderColor: accentColor }}>
                <div className="space-y-12">
                    <div className="space-y-4">
                        <div className="w-32 h-32 bg-white/10 border border-white/20 p-2">
                            <div className="w-full h-full overflow-hidden relative">
                                {data.photo ? (
                                    <img src={data.photo} className="w-full h-full object-cover grayscale brightness-110" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                                        <User className="w-12 h-12 text-slate-600" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <h1 className="text-3xl font-black leading-tight tracking-tighter uppercase">{data.nom || 'PRENOM NOM'}</h1>
                        <div className="w-12 h-1 bg-couture-gold" style={{ backgroundColor: accentColor }} />
                        <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-60 italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {data.titre || 'VOTRE TITRE'}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-couture-gold" style={{ color: accentColor }}>Contact_Direct</h3>
                        <div className="space-y-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <p className="flex items-center gap-3 text-[10px] font-medium opacity-80 italic"><Mail className="w-3 h-3" /> {data.email}</p>
                            <p className="flex items-center gap-3 text-[10px] font-medium opacity-80 italic"><Phone className="w-3 h-3" /> {data.phone}</p>
                            <p className="flex items-center gap-3 text-[10px] font-medium opacity-80 italic"><MapPin className="w-3 h-3" /> {data.location}</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-couture-gold" style={{ color: accentColor }}>Certificats_Or</h3>
                        <div className="space-y-4">
                            {data.certificates.map((cert, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-[10px] font-black italic">{cert.title}</p>
                                    <p className="text-[9px] opacity-40 uppercase tracking-widest">{cert.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-10 border-t border-white/10">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                        <div className="bg-white p-2 rounded-lg shrink-0">
                            <QRCodeCanvas
                                value={`https://deos-studio.com/ref/${data.nom?.replace(/\s+/g, '') || 'profile'}`}
                                size={60}
                                level="H"
                            />
                        </div>
                        <div>
                            <p className="text-[8px] font-black uppercase tracking-widest text-couture-gold mb-1" style={{ color: accentColor }}>Candidature_Digitalisée</p>
                            <p className="text-[7px] opacity-40 uppercase tracking-tighter">Scannez pour voir le portfolio animé.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Colonne de Droite - Contenu Principal */}
            <div className="flex-1 p-16 flex flex-col pt-24 bg-white relative">
                <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                    <Star className="w-40 h-40 fill-current" />
                </div>

                <div className="flex-1 space-y-16">
                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-black opacity-10">01</span>
                            <h2 className="text-xl font-black uppercase tracking-widest border-b-2 pb-2 inline-block">Manifesto_Pro</h2>
                        </div>
                        <p className="text-sm leading-[1.8] text-slate-600 italic font-medium max-w-lg" style={{ fontFamily: "'Lora', serif" }}>
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-black opacity-10">02</span>
                            <h2 className="text-xl font-black uppercase tracking-widest border-b-2 pb-2 inline-block">Chronologie_Elite</h2>
                        </div>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative pl-8 border-l border-slate-100">
                                    <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-slate-900" style={{ backgroundColor: accentColor }} />
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-black leading-none">{exp.titre}</h4>
                                        <span className="text-[9px] font-black uppercase tracking-widest bg-slate-50 px-2 py-1">{exp.duree}</span>
                                    </div>
                                    <p className="text-[10px] font-black text-couture-gold uppercase tracking-tighter mb-4" style={{ color: accentColor }}>@{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed text-slate-500 max-w-md italic" style={{ fontFamily: "'Inter', sans-serif" }}>{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-2 gap-12">
                        <section className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-black opacity-10">03</span>
                                <h3 className="text-sm font-black uppercase tracking-widest">Maîtrise_Outils</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 border border-slate-200 text-[9px] font-black uppercase tracking-widest hover:border-slate-900 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-black opacity-10">04</span>
                                <h3 className="text-sm font-black uppercase tracking-widest">Formation_Haut_Niveau</h3>
                            </div>
                            <div className="space-y-4">
                                {data.formations.map((f) => (
                                    <div key={f.id} className="space-y-1">
                                        <p className="text-[11px] font-black">{f.titre}</p>
                                        <p className="text-[9px] opacity-40 uppercase tracking-widest">{f.etablissement} | {f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                <footer className="mt-12 flex items-center justify-between border-t border-slate-50 pt-8 opacity-40">
                    <div className="flex gap-4">
                        {data.languages.map((l, i) => (
                            <span key={i} className="text-[9px] font-black uppercase tracking-widest">{l.name} ({l.level})</span>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    )
}
