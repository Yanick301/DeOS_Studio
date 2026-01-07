import React from 'react'
import { TemplateProps } from './types'

export const Botanical: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: '#fdfcf8', color: '#2d332d', fontFamily: "'Outfit', sans-serif" }}
        >
            <header className="flex justify-between items-center mb-16 pb-8 border-b-2 border-[#e1e8e1]">
                <div className="flex items-center gap-10">
                    {data.photo && (
                        <img src={data.photo} alt="Profile" className="w-24 h-24 rounded-3xl object-cover shadow-xl rotate-3" />
                    )}
                    <div>
                        <h1 className="text-5xl font-black tracking-tight text-[#1a2e1a]">{data.nom || 'NOM'}</h1>
                        <p className="text-xl font-medium mt-1" style={{ color: accentColor }}>{data.titre || 'ECO DESIGNER'}</p>
                    </div>
                </div>
                <div className="text-right text-[11px] font-bold text-[#5c695c] space-y-1 italic">
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>{data.location}</p>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-16 flex-1">
                <div className="col-span-4 space-y-12">
                    <section>
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#1a2e1a] mb-6 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: accentColor }} /> Nature
                        </h3>
                        <p className="text-sm leading-relaxed opacity-80">
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#1a2e1a] mb-6 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: accentColor }} /> Roots
                        </h3>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id} className="p-4 bg-[#f4f7f4] rounded-2xl border border-[#e1e8e1]">
                                    <h4 className="text-xs font-black text-[#1a2e1a]">{f.titre}</h4>
                                    <p className="text-[10px] font-bold text-[#5c695c] mt-1">{f.etablissement} | {f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-8 space-y-12">
                    <section>
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#1a2e1a] mb-8 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: accentColor }} /> Growth_Exp
                        </h3>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-lg bg-[#f4f7f4] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                                    </div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-lg font-black text-[#1a2e1a]">{exp.titre}</h4>
                                        <span className="text-[10px] font-black text-[#8ba38b]">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-3 opacity-60" style={{ color: accentColor }}>{exp.entreprise}</p>
                                    <p className="text-sm leading-relaxed text-[#5c695c]">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#1a2e1a] mb-6 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: accentColor }} /> Pollen_Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-white rounded-full border-2 border-[#e1e8e1] text-[11px] font-black text-[#1a2e1a] shadow-sm italic hover:scale-105 transition-transform">
                                    #{skill}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <footer className="mt-auto py-8 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#8ba38b]">
                Ecological Data Processing // DeOS Studio
            </footer>
        </div>
    )
}
