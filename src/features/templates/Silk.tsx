import React from 'react'
import { TemplateProps } from './types'

export const Silk: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-20 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: '#fffaf5', color: '#433422', fontFamily: "'Playfair Display', serif" }}
        >
            <header className="text-center mb-16">
                {data.photo && (
                    <img src={data.photo} alt="Profile" className="w-28 h-28 rounded-full mx-auto mb-8 border border-[#e5d9c9] p-1 object-cover" />
                )}
                <h1 className="text-5xl font-light italic tracking-tight mb-2">
                    {data.nom || 'Votre Nom'}
                </h1>
                <p className="text-sm uppercase tracking-[0.4em] font-medium opacity-60" style={{ color: accentColor }}>
                    {data.titre || 'FONCTION'}
                </p>
            </header>

            <div className="grid grid-cols-12 gap-16 flex-1">
                <div className="col-span-4 space-y-12">
                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border-b border-[#e5d9c9] pb-2">Coordination</h3>
                        <div className="space-y-3 text-[11px] font-medium italic opacity-70">
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <p>{data.location}</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border-b border-[#e5d9c9] pb-2">Talents</h3>
                        <div className="space-y-2">
                            {skills.map((skill, i) => (
                                <p key={i} className="text-[11px] font-medium opacity-80 decoration-[#e5d9c9] underline underline-offset-4">{skill}</p>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border-b border-[#e5d9c9] pb-2">Academic</h3>
                        <div className="space-y-4">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-[11px] font-bold italic">{f.titre}</h4>
                                    <p className="text-[9px] mt-1 opacity-50 uppercase tracking-widest">{f.etablissement}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-8 space-y-14">
                    <section>
                        <p className="text-lg font-light leading-relaxed italic text-center px-12 opacity-80">
                            "{data.profilSummary || 'Résumé...'}"
                        </p>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border-b border-[#e5d9c9] pb-2">Career History</h3>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-lg font-bold italic">{exp.titre}</h4>
                                        <span className="text-[9px] font-bold opacity-40 uppercase tracking-widest">{exp.duree}</span>
                                    </div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-4" style={{ color: accentColor }}>{exp.entreprise}</p>
                                    <p className="text-[12px] leading-relaxed opacity-70 font-light text-justify">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
