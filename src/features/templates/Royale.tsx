import React from 'react'
import { TemplateProps } from './types'

export const Royale: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col border-[2px]"
            style={{ backgroundColor: '#fff', color: '#1a1a1a', fontFamily: "'Cormorant Garamond', serif", borderColor: accentColor }}
        >
            <header className="text-center mb-16 relative">
                <div className="absolute top-0 left-0 w-full h-[1px]" style={{ backgroundColor: accentColor }} />
                <div className="pt-10">
                    <h1 className="text-6xl font-light italic mb-4 tracking-tighter">
                        {data.nom || 'Votre Nom'}
                    </h1>
                    <p className="text-sm font-bold uppercase tracking-[0.6em] mb-2" style={{ color: accentColor }}>
                        {data.titre || 'PRÉSIDENT'}
                    </p>
                </div>
                <div className="h-[40px] w-[1px] mx-auto mt-6" style={{ backgroundColor: accentColor }} />
            </header>

            <div className="grid grid-cols-12 gap-16 flex-1">
                <div className="col-span-4 border-r pr-10" style={{ borderColor: `${accentColor}44` }}>
                    <section className="mb-12">
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-6 text-center italic">Contacts</h3>
                        <div className="text-xs font-medium space-y-4 opacity-70 text-center uppercase tracking-widest">
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <p>{data.location}</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] mb-6 text-center italic">Compétences</h3>
                        <div className="space-y-2 text-center text-xs font-medium italic opacity-80">
                            {skills.map((skill, i) => (
                                <p key={i}>{skill}</p>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-8 flex flex-col">
                    <section className="mb-12">
                        <p className="text-xl font-light italic leading-relaxed text-center opacity-80">
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-10 border-b pb-2" style={{ borderColor: accentColor }}>Parcours Professionnel</h3>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-3">
                                        <h4 className="text-2xl font-light italic tracking-tight">{exp.titre}</h4>
                                        <span className="text-[10px] font-bold opacity-30 italic">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-4 italic" style={{ color: accentColor }}>{exp.entreprise}</p>
                                    <p className="text-sm font-light leading-relaxed text-justify opacity-70">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
