import React from 'react'
import { TemplateProps } from './types'

export const Berlin: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#000', fontFamily }}
        >
            <header className="mb-16 border-l-[12px] pl-10" style={{ borderColor: accentColor }}>
                <h1 className="text-6xl font-black tracking-tighter uppercase leading-[0.8]">
                    {data.nom || 'NOM'}
                </h1>
                <p className="text-2xl font-black mt-4 uppercase" style={{ color: accentColor }}>
                    {data.titre || 'BERLINER ROLE'}
                </p>
            </header>

            <div className="grid grid-cols-2 gap-16">
                <div className="space-y-12">
                    <section>
                        <h3 className="text-sm font-black uppercase mb-4 opacity-30">Profile_01</h3>
                        <p className="text-sm font-bold leading-tight uppercase">
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-sm font-black uppercase mb-4 opacity-30">Stack_02</h3>
                        <div className="space-y-1">
                            {skills.map((skill, i) => (
                                <p key={i} className="text-xs font-black uppercase border-b border-black/10 py-1">{skill}</p>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-sm font-black uppercase mb-4 opacity-30">Contact_03</h3>
                        <div className="text-xs font-black uppercase space-y-1">
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <p>{data.location}</p>
                        </div>
                    </section>
                </div>

                <div className="space-y-12">
                    <section>
                        <h3 className="text-sm font-black uppercase mb-6 opacity-30">Experience_04</h3>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <span className="text-[10px] font-black underline mb-2 block">{exp.duree}</span>
                                    <h4 className="text-lg font-black uppercase leading-tight">{exp.titre}</h4>
                                    <p className="text-xs font-bold uppercase mt-1" style={{ color: accentColor }}>{exp.entreprise}</p>
                                    <p className="text-xs mt-3 leading-tight opacity-60 font-medium">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-sm font-black uppercase mb-6 opacity-30">Education_05</h3>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-xs font-black uppercase underline">{f.titre}</h4>
                                    <p className="text-[10px] font-bold mt-1 opacity-50">{f.etablissement} | {f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
