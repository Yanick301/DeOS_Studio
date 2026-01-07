import React from 'react'
import { TemplateProps } from './types'
import { Mail, Phone, MapPin } from 'lucide-react'

export const Architect: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#1f2937', fontFamily }}
        >
            <div className="flex h-full">
                <div className="w-[45%] bg-[#1a1a1a] text-white p-12 flex flex-col">
                    <header className="mb-auto">
                        <h1 className="text-5xl font-black leading-tight tracking-tighter" style={{ color: accentColor }}>
                            {data.nom || 'NOM'}
                        </h1>
                        <div className="h-2 w-16 mt-6 mb-6" style={{ backgroundColor: accentColor }} />
                        <p className="text-xl font-light uppercase tracking-widest opacity-60">
                            {data.titre || 'ARCHITECT'}
                        </p>
                    </header>

                    <div className="space-y-10">
                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4" style={{ color: accentColor }}>Contact</h3>
                            <div className="space-y-2 text-xs font-light opacity-80">
                                <p className="flex items-center gap-2 block"><Mail className="w-3 h-3" /> {data.email}</p>
                                <p className="flex items-center gap-2 block"><Phone className="w-3 h-3" /> {data.phone}</p>
                                <p className="flex items-center gap-2 block"><MapPin className="w-3 h-3" /> {data.location}</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4" style={{ color: accentColor }}>Education</h3>
                            <div className="space-y-6">
                                {data.formations.map((f) => (
                                    <div key={f.id}>
                                        <h4 className="text-xs font-bold leading-tight">{f.titre}</h4>
                                        <p className="text-[10px] mt-1 opacity-60">{f.etablissement} | {f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                <div className="w-[55%] p-16 space-y-12 overflow-hidden">
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-6 text-gray-300">Statement</h2>
                        <p className="text-base font-medium leading-relaxed italic border-l-8 pl-6" style={{ borderColor: accentColor }}>
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-gray-300">Experience</h2>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-lg font-black text-gray-900 leading-tight">{exp.titre}</h4>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-xs font-black uppercase tracking-widest" style={{ color: accentColor }}>{exp.entreprise}</p>
                                        <span className="text-[10px] font-bold text-gray-400">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs leading-relaxed text-gray-500 font-medium">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-6 text-gray-300">Expertise</h2>
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-baseline gap-2">
                                    <span className="text-[10px] font-bold text-gray-900 border-b-2" style={{ borderColor: accentColor }}>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
