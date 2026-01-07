import React from 'react'
import { TemplateProps } from './types'

export const Gatsby: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col border-[20px] border-double"
            style={{ backgroundColor: '#1a1a1a', color: '#f3e5ab', fontFamily: "'Playfair Display', serif", borderColor: '#c5a059' }}
        >
            <header className="text-center mb-12 border-b border-[#c5a059] pb-8">
                <h1 className="text-5xl font-black tracking-[0.2em] uppercase mb-4" style={{ color: '#c5a059' }}>
                    {data.nom || 'THE GATSBY'}
                </h1>
                <p className="text-xl font-light italic tracking-widest opacity-80 decoration-[#c5a059] underline underline-offset-8">
                    {data.titre || 'PREMIUM ROLE'}
                </p>
            </header>

            <div className="grid grid-cols-12 gap-12 flex-1">
                <div className="col-span-4 space-y-12 border-r border-[#c5a059]/30 pr-8">
                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#c5a059]">Registry</h3>
                        <div className="space-y-3 text-xs opacity-70">
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <p>{data.location}</p>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#c5a059]">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <span key={i} className="px-2 py-1 border border-[#c5a059]/50 text-[9px] font-bold uppercase tracking-wider">{skill}</span>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-8 space-y-12">
                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-[#c5a059] text-right">Manifesto</h3>
                        <p className="text-sm italic leading-relaxed text-justify opacity-80 border-r-4 pr-6" style={{ borderColor: '#c5a059' }}>
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-[#c5a059] text-right">History</h3>
                        <div className="space-y-10">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-xl font-bold italic tracking-tight">{exp.titre}</h4>
                                        <span className="text-[10px] font-black text-[#c5a059]">{exp.duree}</span>
                                    </div>
                                    <p className="text-[11px] font-black uppercase tracking-widest opacity-50 mb-3">{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed opacity-70 text-justify">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
