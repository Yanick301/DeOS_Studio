import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin } from 'lucide-react'

export const Obsidian: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const textColor = 'white'
    const subTextColor = '#9ca3af'
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-8 h-[1123px] w-[794px] overflow-hidden"
            style={{ backgroundColor: bgColor, color: textColor, fontFamily }}
        >
            <header className="text-center pb-8 border-b-2" style={{ borderColor: accentColor }}>
                {data.photo && (
                    <img
                        src={data.photo}
                        alt="Profile"
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 object-cover"
                        style={{ borderColor: accentColor }}
                    />
                )}
                <h1 className="text-4xl font-extrabold uppercase tracking-tight" style={{ color: accentColor }}>
                    {data.nom || 'Votre Nom'}
                </h1>
                <p className="text-lg font-light mt-1" style={{ color: subTextColor }}>
                    {data.titre || 'Votre Titre Professionnel'}
                </p>
            </header>

            <div className="grid grid-cols-3 gap-10 pt-8">
                <div className="col-span-1 space-y-8 border-r pr-6" style={{ borderColor: '#4b5563' }}>
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>Contact</h2>
                        <div className="space-y-3 text-xs" style={{ color: subTextColor }}>
                            <div className="flex items-center gap-2">
                                <Mail className="w-3 h-3" style={{ color: accentColor }} />
                                <span>{data.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-3 h-3" style={{ color: accentColor }} />
                                <span>{data.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3 h-3" style={{ color: accentColor }} />
                                <span>{data.location}</span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>Compétences</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 rounded bg-[#374151] border border-[#4b5563] text-[10px] font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>Formation</h2>
                        <div className="space-y-4">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-xs font-bold leading-tight">{f.titre}</h4>
                                    <p className="text-[10px] mt-1" style={{ color: subTextColor }}>{f.etablissement}</p>
                                    <p className="text-[10px]" style={{ color: accentColor }}>{f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-2 space-y-8">
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>Résumé</h2>
                        <p className="text-sm italic leading-relaxed" style={{ color: subTextColor }}>
                            {data.profilSummary || 'Résumé professionnel...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: accentColor }}>Expérience</h2>
                        <div className="space-y-6">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <h4 className="text-base font-bold">{exp.titre}</h4>
                                    <p className="text-sm font-semibold mt-0.5" style={{ color: accentColor }}>
                                        {exp.entreprise} <span className="font-light" style={{ color: subTextColor }}>| {exp.duree}</span>
                                    </p>
                                    <p className="text-xs mt-2 leading-relaxed" style={{ color: subTextColor }}>
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
