import React from 'react'
import { TemplateProps } from './types'

export const Bauhaus: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col bg-white"
            style={{ color: '#000', fontFamily: "'Space Grotesk', sans-serif" }}
        >
            <div className="h-20 w-full flex">
                <div className="h-full flex-1 bg-[#ff0000]" />
                <div className="h-full flex-1 bg-[#0000ff]" />
                <div className="h-full flex-1 bg-[#ffff00]" />
            </div>

            <div className="p-16 flex-1 flex flex-col">
                <header className="mb-16 border-b-[20px] border-black pb-8">
                    <h1 className="text-8xl font-black tracking-tighter leading-[0.7]">
                        {data.nom || 'NOM'}
                    </h1>
                    <p className="text-2xl font-black mt-8 uppercase tracking-widest bg-black text-white inline-block px-4 py-2">
                        {data.titre || 'FUNCTION'}
                    </p>
                </header>

                <div className="grid grid-cols-12 gap-0 flex-1 border-t border-black">
                    <div className="col-span-3 border-r border-black p-6 space-y-12">
                        <section>
                            <h3 className="text-xs font-black uppercase mb-4 text-[#ff0000]">Contact</h3>
                            <div className="text-[10px] font-black uppercase space-y-1">
                                <p>{data.email}</p>
                                <p>{data.phone}</p>
                            </div>
                        </section>
                        <section>
                            <h3 className="text-xs font-black uppercase mb-4 text-[#0000ff]">Skills</h3>
                            <div className="space-y-1">
                                {skills.map((skill, i) => (
                                    <p key={i} className="text-[10px] font-black uppercase border-b border-black/10 py-1">{skill}</p>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="col-span-9 p-10 space-y-16">
                        <section>
                            <p className="text-xl font-bold leading-tight uppercase">
                                {data.profilSummary || 'Résumé...'}
                            </p>
                        </section>

                        <section>
                            <h3 className="text-sm font-black uppercase mb-8 underline decoration-[10px] decoration-[#ffff00] underline-offset-[-2px]">Experience</h3>
                            <div className="space-y-12">
                                {data.experiences.map((exp) => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-end mb-2">
                                            <h4 className="text-3xl font-black tracking-tighter uppercase">{exp.titre}</h4>
                                            <span className="text-xs font-black opacity-30">{exp.duree}</span>
                                        </div>
                                        <p className="text-xs font-black uppercase tracking-widest mb-4 opacity-100">{exp.entreprise}</p>
                                        <p className="text-xs font-medium leading-relaxed text-justify max-w-xl">{exp.description}</p>
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
