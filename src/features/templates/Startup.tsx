import React from 'react'
import { TemplateProps } from './types'

export const Startup: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-12 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#1f2937', fontFamily }}
        >
            <header className="flex items-center gap-8 mb-12">
                {data.photo && (
                    <img src={data.photo} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4" style={{ borderColor: accentColor }} />
                )}
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-gray-900">{data.nom || 'NOM'}</h1>
                    <p className="text-xl font-bold mt-1" style={{ color: accentColor }}>{data.titre || 'Startup Founder / Dev'}</p>
                    <div className="flex gap-4 mt-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <span>{data.email}</span>
                        <span>•</span>
                        <span>{data.phone}</span>
                    </div>
                </div>
            </header>

            <div className="space-y-10">
                <section className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-100">
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">The Pitch</h3>
                    <p className="text-sm leading-relaxed text-gray-600 font-medium italic">
                        "{data.profilSummary || 'Résumé...'}"
                    </p>
                </section>

                <div className="grid grid-cols-2 gap-12">
                    <section>
                        <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} /> Experience
                        </h3>
                        <div className="space-y-8">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <h4 className="text-sm font-black text-gray-900">{exp.titre}</h4>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-0.5 mb-2">
                                        <span>{exp.entreprise}</span>
                                        <span>{exp.duree}</span>
                                    </div>
                                    <p className="text-[11px] leading-relaxed text-gray-500">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="space-y-10">
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} /> Stack / Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-white border-2 border-gray-100 rounded-lg text-[10px] font-black text-gray-600 shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} /> Education
                            </h3>
                            <div className="space-y-4">
                                {data.formations.map((f) => (
                                    <div key={f.id} className="border-l-4 pl-4" style={{ borderColor: accentColor }}>
                                        <h4 className="text-xs font-black text-gray-900">{f.titre}</h4>
                                        <p className="text-[10px] font-bold text-gray-400 mt-0.5">{f.etablissement} | {f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
