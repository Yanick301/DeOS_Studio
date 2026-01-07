import React from 'react'
import { TemplateProps } from './types'

export const GreenCorp: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#1f2937', fontFamily }}
        >
            <header className="flex items-center justify-between border-b-4 pb-8 mb-12" style={{ borderColor: accentColor }}>
                <div className="flex items-center gap-8">
                    {data.photo && (
                        <img src={data.photo} alt="Profile" className="w-24 h-24 rounded-lg object-cover shadow-md" />
                    )}
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{data.nom || 'NOM'}</h1>
                        <p className="text-xl font-light mt-1" style={{ color: accentColor }}>{data.titre || 'CORPORATE ROLE'}</p>
                    </div>
                </div>
                <div className="text-right text-xs space-y-1 font-medium text-gray-500">
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>{data.location}</p>
                </div>
            </header>

            <div className="grid grid-cols-3 gap-16">
                <div className="col-span-1 space-y-10">
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b-2 inline-block" style={{ borderColor: accentColor }}>Formation</h3>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-sm font-bold text-gray-900 leading-tight">{f.titre}</h4>
                                    <p className="text-xs mt-1 text-gray-500">{f.etablissement}</p>
                                    <p className="text-xs font-bold mt-1" style={{ color: accentColor }}>{f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b-2 inline-block" style={{ borderColor: accentColor }}>Compétences</h3>
                        <div className="space-y-2">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                                    <span className="text-xs font-medium text-gray-600">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-2 space-y-12">
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b-2 inline-block" style={{ borderColor: accentColor }}>Profil Professionnel</h3>
                        <p className="text-sm leading-relaxed text-gray-600 font-medium">
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-6 border-b-2 inline-block" style={{ borderColor: accentColor }}>Expérience</h3>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="text-base font-bold text-gray-900">{exp.titre}</h4>
                                        <span className="text-xs font-bold text-gray-400">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: accentColor }}>{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed text-gray-500 italic border-l-2 pl-4">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
