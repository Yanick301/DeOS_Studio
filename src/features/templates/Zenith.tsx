import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User } from 'lucide-react'

export const Zenith: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const textColor = (bgColor === '#1f2937' || bgColor === '#0f172a') ? 'white' : 'black'
    const subTextColor = textColor === 'white' ? '#d1d5db' : '#4b5563'
    const descriptionTextColor = textColor === 'white' ? '#e5e7eb' : '#374151'

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-8 grid grid-cols-3 gap-8 h-[1123px] w-[794px] overflow-hidden"
            style={{ backgroundColor: bgColor, color: textColor, fontFamily }}
        >
            <div className="col-span-1 border-r pr-6" style={{ borderColor: accentColor }}>
                <div className="text-center mb-8">
                    {data.photo && (
                        <img
                            src={data.photo}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 object-cover"
                            style={{ borderColor: accentColor }}
                        />
                    )}
                    <h1 className="text-2xl font-black">{data.nom || 'Votre Nom'}</h1>
                    <p className="text-sm font-medium mt-1" style={{ color: subTextColor }}>{data.titre || 'Votre Titre'}</p>
                </div>

                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: accentColor, borderColor: accentColor }}>
                        Contact
                    </h2>
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3" style={{ color: accentColor }} />
                            <span>{data.email || 'email@exemple.com'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3" style={{ color: accentColor }} />
                            <span>{data.phone || '+33 600 000 000'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3" style={{ color: accentColor }} />
                            <span>{data.location || 'Ville, Pays'}</span>
                        </div>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: accentColor, borderColor: accentColor }}>
                        Compétences
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 rounded bg-gray-100 text-[10px] font-bold text-gray-700 border border-gray-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            </div>

            <div className="col-span-2 space-y-8">
                <section>
                    <div className="flex items-center gap-2 mb-3 text-xl font-bold" style={{ color: accentColor }}>
                        <User className="w-5 h-5" />
                        <h3>Profil</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: descriptionTextColor }}>
                        {data.profilSummary || 'Résumé de votre parcours professionnel...'}
                    </p>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-4 text-xl font-bold" style={{ color: accentColor }}>
                        <Briefcase className="w-5 h-5" />
                        <h3>Expérience</h3>
                    </div>
                    <div className="space-y-6">
                        {data.experiences.map((exp) => (
                            <div key={exp.id} className="relative pl-4 border-l-2" style={{ borderColor: accentColor }}>
                                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2" style={{ borderColor: accentColor }} />
                                <h4 className="text-lg font-bold">{exp.titre}</h4>
                                <p className="text-sm font-semibold" style={{ color: accentColor }}>
                                    {exp.entreprise} <span className="font-light text-gray-400">| {exp.duree}</span>
                                </p>
                                <p className="text-xs mt-2 leading-relaxed" style={{ color: descriptionTextColor }}>
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-4 text-xl font-bold" style={{ color: accentColor }}>
                        <GraduationCap className="w-5 h-5" />
                        <h3>Formation</h3>
                    </div>
                    <div className="space-y-4">
                        {data.formations.map((f) => (
                            <div key={f.id}>
                                <h4 className="text-sm font-bold">{f.titre}</h4>
                                <p className="text-xs" style={{ color: subTextColor }}>{f.etablissement} • {f.annee}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
