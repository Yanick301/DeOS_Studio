import React from 'react'
import { TemplateProps } from './types'

export const Tokyo: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#333', fontFamily }}
        >
            <div className="flex h-full">
                <div className="w-1/3 pr-12 border-r border-gray-100 flex flex-col">
                    <header className="mb-12">
                        <h1 className="text-3xl font-black tracking-tighter leading-none mb-4">
                            {data.nom || 'NOM'}
                        </h1>
                        <div className="h-1 w-12 mb-6" style={{ backgroundColor: accentColor }} />
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                            {data.titre || 'TITRE'}
                        </p>
                    </header>

                    <div className="space-y-10 flex-1">
                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-4">Info</h3>
                            <div className="space-y-2 text-[10px] font-bold text-gray-500">
                                <p>{data.email}</p>
                                <p>{data.phone}</p>
                                <p>{data.location}</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-4">Expertise</h3>
                            <div className="space-y-3">
                                {skills.map((skill, i) => (
                                    <div key={i} className="flex items-center justify-between group">
                                        <span className="text-[10px] font-bold text-gray-600 uppercase">{skill}</span>
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-4">Study</h3>
                            <div className="space-y-6">
                                {data.formations.map((f) => (
                                    <div key={f.id}>
                                        <h4 className="text-[10px] font-bold text-gray-900">{f.titre}</h4>
                                        <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-wider">{f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {data.photo && (
                        <img src={data.photo} alt="Profile" className="w-full grayscale rounded-full border-8 border-gray-50" />
                    )}
                </div>

                <div className="w-2/3 pl-12 space-y-12">
                    <section>
                        <div className="text-[80px] font-black text-gray-100 absolute -mt-16 -ml-8 select-none">ABSTRACT</div>
                        <div className="relative">
                            <h2 className="text-xl font-black mb-6 uppercase tracking-tight">Summary</h2>
                            <p className="text-sm leading-relaxed text-gray-600">
                                {data.profilSummary || 'Résumé...'}
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-black mb-8 uppercase tracking-tight">Timeline</h2>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="grid grid-cols-4 gap-6">
                                    <span className="col-span-1 text-[10px] font-black text-gray-300 uppercase tracking-widest">{exp.duree}</span>
                                    <div className="col-span-3">
                                        <h4 className="text-sm font-black text-gray-900 uppercase">{exp.titre}</h4>
                                        <p className="text-[10px] font-bold mt-1 mb-3" style={{ color: accentColor }}>{exp.entreprise}</p>
                                        <p className="text-[11px] leading-relaxed text-gray-500">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
