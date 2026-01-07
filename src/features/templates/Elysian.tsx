import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages } from 'lucide-react'

export const Elysian: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const textColor = (bgColor === '#1f2937' || bgColor === '#0f172a') ? 'white' : 'black'
    const subTextColor = textColor === 'white' ? '#94a3b8' : '#64748b'

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-white text-gray-900 overflow-hidden flex flex-col" style={{ fontFamily }}>
            {/* Header Area */}
            <div className="h-48 bg-gray-900 text-white p-12 flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -mr-32 -mt-32" />
                <div className="z-10">
                    <h1 className="text-5xl font-light tracking-widest uppercase mb-2">{data.nom || 'PRENOM NOM'}</h1>
                    <p className="text-xl tracking-[0.3em] font-medium text-yellow-500 uppercase">{data.titre || 'VOTRE TITRE'}</p>
                </div>
                {data.photo && (
                    <div className="z-10 w-32 h-32 rounded-full border-4 border-yellow-500 overflow-hidden shadow-2xl">
                        <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>

            <div className="flex-1 flex">
                {/* Sidebar */}
                <div className="w-1/3 bg-gray-50 p-8 border-r border-gray-200 space-y-8">
                    <section>
                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-yellow-600 mb-4 flex items-center gap-2">
                            <User className="w-4 h-4" /> Contact
                        </h2>
                        <div className="space-y-3 text-xs">
                            <div className="flex items-center gap-3">
                                <Mail className="w-3 h-3 text-gray-400" />
                                <span>{data.email || 'email@domain.com'}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-3 h-3 text-gray-400" />
                                <span>{data.phone || '+33 600 000 000'}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-3 h-3 text-gray-400" />
                                <span>{data.location || 'Paris, France'}</span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-yellow-600 mb-4 flex items-center gap-2">
                            <Star className="w-4 h-4" /> Compétences
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((s, i) => (
                                <span key={i} className="px-2 py-1 bg-white border border-gray-200 text-[10px] font-medium rounded shadow-sm">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </section>

                    {data.languages.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-yellow-600 mb-4 flex items-center gap-2">
                                <Languages className="w-4 h-4" /> Langues
                            </h2>
                            <div className="space-y-2">
                                {data.languages.map((l, i) => (
                                    <div key={i} className="flex justify-between text-xs">
                                        <span className="font-semibold">{l.name}</span>
                                        <span className="text-gray-500 italic">{l.level}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {data.qualities.length > 0 && (
                        <section>
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-yellow-600 mb-4 flex items-center gap-2">
                                <Heart className="w-4 h-4" /> Qualités
                            </h2>
                            <ul className="text-xs space-y-1 list-disc list-inside text-gray-600">
                                {data.qualities.map((q, i) => <li key={i}>{q}</li>)}
                            </ul>
                        </section>
                    )}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-10 space-y-10">
                    <section>
                        <h2 className="text-lg font-bold tracking-widest uppercase border-b-2 border-yellow-500 pb-2 mb-4 flex items-center gap-3">
                            Profil Professionnel
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-700 italic">
                            {data.profilSummary || 'Résumé de votre vision et de vos objectifs...'}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold tracking-widest uppercase border-b-2 border-yellow-500 pb-2 mb-4 flex items-center gap-3">
                            Expériences
                        </h2>
                        <div className="space-y-8">
                            {data.experiences.map((exp) => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="text-md font-black uppercase text-gray-800">{exp.titre}</h3>
                                        <span className="text-xs font-bold text-yellow-600">{exp.duree}</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-tighter">{exp.entreprise}</p>
                                    <p className="text-xs text-gray-600 leading-relaxed font-light">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {data.projects.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold tracking-widest uppercase border-b-2 border-yellow-500 pb-2 mb-4 flex items-center gap-3 text-yellow-700">
                                <Globe className="w-5 h-5" /> Projets Marquants
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {data.projects.map((p, i) => (
                                    <div key={i} className="p-3 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
                                        <h4 className="text-xs font-bold mb-1">{p.title}</h4>
                                        <p className="text-[10px] text-gray-500 truncate">{p.link}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    )
}
