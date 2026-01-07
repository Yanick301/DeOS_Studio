import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin } from 'lucide-react'

export const Executive: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const textColor = '#1c1c1e'
    const subTextColor = '#4b5563'
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-10 h-[1123px] w-[794px] overflow-hidden"
            style={{ backgroundColor: bgColor, color: textColor, fontFamily }}
        >
            <header className="pb-8 border-b-2 mb-8" style={{ borderColor: '#d1d5db' }}>
                <div className="flex justify-between items-end">
                    <div className="flex-1">
                        <h1 className="text-4xl font-extrabold tracking-tight">{data.nom || 'Votre Nom'}</h1>
                        <p className="text-xl font-semibold mt-1" style={{ color: accentColor }}>
                            {data.titre || 'Titre Professionnel'}
                        </p>
                    </div>
                    {data.photo && (
                        <img
                            src={data.photo}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover ml-6"
                        />
                    )}
                </div>
                <p className="text-sm mt-4 leading-relaxed max-w-2xl" style={{ color: subTextColor }}>
                    {data.profilSummary || 'Résumé professionnel élégant...'}
                </p>
            </header>

            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-1 space-y-8">
                    <div className="p-4 rounded-xl" style={{ backgroundColor: '#f8fafc' }}>
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>Contact</h2>
                        <div className="space-y-2 text-[10px]" style={{ color: subTextColor }}>
                            <div className="flex items-center gap-2">
                                <Mail className="w-3 h-3" />
                                <span>{data.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-3 h-3" />
                                <span>{data.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3 h-3" />
                                <span>{data.location || 'Ville, Pays'}</span>
                            </div>
                        </div>
                    </div>

                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-4 pb-1 border-b" style={{ color: accentColor }}>Compétences</h2>
                        <ul className="space-y-1.5 list-disc pl-4 text-[10px]" style={{ color: subTextColor }}>
                            {skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest mb-4 pb-1 border-b" style={{ color: accentColor }}>Formation</h2>
                        <div className="space-y-4">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-[10px] font-bold leading-tight">{f.titre}</h4>
                                    <p className="text-[9px] mt-1" style={{ color: subTextColor }}>{f.etablissement}</p>
                                    <p className="text-[9px] font-semibold" style={{ color: accentColor }}>{f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-2">
                    <h2 className="text-xs font-bold uppercase tracking-widest mb-6 pb-1 border-b" style={{ color: accentColor }}>Expérience Professionnelle</h2>
                    <div className="space-y-8">
                        {data.experiences.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-bold">{exp.titre}</h4>
                                    <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded" style={{ color: subTextColor }}>{exp.duree}</span>
                                </div>
                                <p className="text-[10px] font-semibold italic mt-0.5" style={{ color: accentColor }}>
                                    {exp.entreprise}
                                </p>
                                <div className="text-[10px] mt-2 leading-relaxed" style={{ color: subTextColor }}>
                                    {exp.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
