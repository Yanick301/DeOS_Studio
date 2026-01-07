import React from 'react'
import { TemplateProps } from './types'

export const Creative: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#1c1c1e', fontFamily }}
        >
            <div className="h-6 w-full" style={{ backgroundColor: accentColor }} />

            <div className="flex-1 p-12">
                <header className="flex justify-between items-start mb-12">
                    <div className="max-w-[70%]">
                        <h1 className="text-6xl font-black leading-tight tracking-tighter" style={{ color: '#000' }}>
                            {data.nom || 'NOM'}
                        </h1>
                        <h2 className="text-2xl font-light mt-2" style={{ color: accentColor }}>
                            {data.titre || 'FONCTION'}
                        </h2>
                    </div>
                    {data.photo && (
                        <img src={data.photo} alt="Profile" className="w-32 h-32 object-cover rounded-none grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl" />
                    )}
                </header>

                <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-4 space-y-10">
                        <section>
                            <h3 className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: accentColor }}>Contact</h3>
                            <div className="space-y-1 text-xs font-medium">
                                <p>{data.email}</p>
                                <p>{data.phone}</p>
                                <p>{data.location}</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: accentColor }}>Skills</h3>
                            <div className="space-y-2">
                                {skills.map((skill, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="h-1 flex-1 bg-gray-100">
                                            <div className="h-full" style={{ width: '85%', backgroundColor: accentColor }} />
                                        </div>
                                        <span className="text-[10px] font-bold w-12">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="col-span-8 space-y-12">
                        <section>
                            <h3 className="text-sm font-black tracking-[0.3em] uppercase mb-4 border-l-4 pl-4" style={{ borderColor: accentColor }}>Profile</h3>
                            <p className="text-sm leading-relaxed text-gray-700 italic">
                                "{data.profilSummary || 'Un résumé percutant...'}"
                            </p>
                        </section>

                        <section>
                            <h3 className="text-sm font-black tracking-[0.3em] uppercase mb-6 border-l-4 pl-4" style={{ borderColor: accentColor }}>Work Experience</h3>
                            <div className="space-y-10">
                                {data.experiences.map((exp) => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="text-lg font-black">{exp.titre}</h4>
                                            <span className="text-[10px] font-bold uppercase" style={{ color: accentColor }}>{exp.duree}</span>
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{exp.entreprise}</p>
                                        <p className="text-xs leading-relaxed text-gray-600">{exp.description}</p>
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
