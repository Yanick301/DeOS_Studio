import React from 'react'
import { TemplateProps } from './types'

export const ModernArt: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#1f2937', fontFamily }}
        >
            <header className="p-12 mb-8 bg-black text-white flex justify-between items-end">
                <div>
                    <h1 className="text-5xl font-black tracking-tighter" style={{ color: accentColor }}>
                        {data.nom || 'VOTRE NOM'}
                    </h1>
                    <p className="text-xl font-light mt-2 tracking-widest uppercase opacity-70">
                        {data.titre || 'VOTRE TITRE'}
                    </p>
                </div>
                <div className="text-right text-[10px] font-bold uppercase tracking-[0.2em] space-y-1 opacity-60">
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>{data.location}</p>
                </div>
            </header>

            <div className="px-12 py-6 grid grid-cols-12 gap-12 flex-1">
                <div className="col-span-8 space-y-12 pr-12 border-r border-black/5">
                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-black border-b-4 border-black inline-block pb-1">
                            About
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-600 font-medium">
                            {data.profilSummary || 'Résumé professionnel...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-black border-b-4 border-black inline-block pb-1">
                            Experience
                        </h2>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="group">
                                    <span className="text-[10px] font-black text-white bg-black px-3 py-1 mb-3 inline-block">{exp.duree}</span>
                                    <h4 className="text-xl font-black text-gray-900 group-hover:text-black transition-colors">{exp.titre}</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: accentColor }}>{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed text-gray-500 mt-4">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-4 space-y-12">
                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-black border-b-4 border-black inline-block pb-1">
                            Experts
                        </h2>
                        <div className="space-y-4">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-black/5 pb-2">
                                    <span className="text-xs font-black uppercase">{skill}</span>
                                    <span className="text-[8px] font-black opacity-30">0{i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-black border-b-4 border-black inline-block pb-1">
                            Education
                        </h2>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-xs font-black uppercase leading-tight">{f.titre}</h4>
                                    <p className="text-[10px] font-bold text-gray-400 mt-1">{f.etablissement}</p>
                                    <p className="text-[10px] font-black mt-1" style={{ color: accentColor }}>{f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {data.photo && (
                        <div className="pt-8">
                            <img src={data.photo} alt="Profile" className="w-full grayscale brightness-125 contrast-125 rounded-none" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
