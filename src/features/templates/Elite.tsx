import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin } from 'lucide-react'

export const Elite: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="grid grid-cols-4 h-[1123px] w-[794px] overflow-hidden"
            style={{ backgroundColor: bgColor, color: '#1f2937', fontFamily }}
        >
            <div className="col-span-1 p-8 space-y-8 border-r-4" style={{ backgroundColor: '#f9fafb', borderColor: accentColor }}>
                <div className="text-center">
                    {data.photo && (
                        <img
                            src={data.photo}
                            alt="Profile"
                            className="w-24 h-24 rounded-2xl mx-auto mb-4 object-cover shadow-lg border-2"
                            style={{ borderColor: accentColor }}
                        />
                    )}
                    <h1 className="text-xl font-black text-gray-900 leading-tight">{data.nom || 'VOTRE NOM'}</h1>
                    <p className="text-xs font-bold mt-2 uppercase tracking-widest" style={{ color: accentColor }}>
                        {data.titre || 'VOTRE TITRE'}
                    </p>
                </div>

                <section>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-gray-400">Contact</h3>
                    <div className="space-y-3 text-[10px] font-medium text-gray-600">
                        <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3" style={{ color: accentColor }} />
                            <span className="break-all">{data.email}</span>
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
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-gray-400">Expertise</h3>
                    <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-full bg-white border border-gray-200 text-[9px] font-bold shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            </div>

            <div className="col-span-3 p-12 space-y-12">
                <section>
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2" style={{ color: accentColor }}>
                        <span className="w-8 h-[2px]" style={{ backgroundColor: accentColor }} /> Profile
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-600 font-medium">
                        {data.profilSummary || 'Résumé professionnel...'}
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-2" style={{ color: accentColor }}>
                        <span className="w-8 h-[2px]" style={{ backgroundColor: accentColor }} /> Experiences
                    </h2>
                    <div className="space-y-10">
                        {data.experiences.map((exp) => (
                            <div key={exp.id} className="relative pl-6 border-l-2 border-gray-100">
                                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-base font-black text-gray-900">{exp.titre}</h4>
                                    <span className="text-[10px] font-black uppercase text-gray-400">{exp.duree}</span>
                                </div>
                                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>{exp.entreprise}</p>
                                <p className="text-xs leading-relaxed text-gray-500">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-2" style={{ color: accentColor }}>
                        <span className="w-8 h-[2px]" style={{ backgroundColor: accentColor }} /> Formation
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                        {data.formations.map((f) => (
                            <div key={f.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                <h4 className="text-xs font-black text-gray-900">{f.titre}</h4>
                                <p className="text-[10px] font-bold mt-1 text-gray-500 uppercase">{f.etablissement}</p>
                                <p className="text-[10px] font-black mt-1" style={{ color: accentColor }}>{f.annee}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
