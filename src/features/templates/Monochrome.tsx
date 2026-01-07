import React from 'react'
import { TemplateProps } from './types'
import { Phone, Mail, MapPin, Briefcase, GraduationCap, User, Award, Globe, Heart, Star, Languages } from 'lucide-react'

export const Monochrome: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const accent = '#000000'

    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div className="h-[1123px] w-[794px] bg-white text-black overflow-hidden flex flex-col font-mono" style={{ fontFamily }}>
            {/* Strict Header */}
            <div className="p-20 py-16 flex flex-col items-center border-b-[20px] border-black">
                <h1 className="text-7xl font-black uppercase tracking-tighter mb-4">{data.nom || 'NAME SURNAME'}</h1>
                <p className="text-xl font-bold bg-black text-white px-6 py-2 uppercase tracking-[0.2em]">{data.titre || 'JOB TITLE'}</p>
            </div>

            <div className="flex-1 flex overflow-hidden">
                <div className="w-2/5 p-12 space-y-12 border-r-[1px] border-black overflow-y-auto">
                    <section>
                        <h2 className="text-lg font-black uppercase border-b-2 border-dashed border-black pb-2 mb-6">Info</h2>
                        <div className="space-y-4 text-xs font-bold leading-tight">
                            <p className="flex justify-between"><span>EMAIL</span> <span>{data.email}</span></p>
                            <p className="flex justify-between"><span>CELL</span> <span>{data.phone}</span></p>
                            <p className="flex justify-between"><span>LOC</span> <span>{data.location}</span></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-black uppercase border-b-2 border-dashed border-black pb-2 mb-6">Expertise</h2>
                        <div className="flex flex-col gap-3">
                            {skills.map((s, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-1/2 h-4 bg-black" style={{ width: `${90 - (i * 10)}%` }} />
                                    <span className="text-[10px] font-black uppercase">{s}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {data.qualities.length > 0 && (
                        <section>
                            <h2 className="text-lg font-black uppercase border-b-2 border-dashed border-black pb-2 mb-6">Soft</h2>
                            <div className="space-y-1">
                                {data.qualities.map((q, i) => (
                                    <p key={i} className="text-xs font-bold uppercase underline">· {q}</p>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                <div className="flex-1 p-12 space-y-16 overflow-y-auto">
                    <section>
                        <h2 className="text-2xl font-black uppercase border-l-[10px] border-black pl-6 mb-8">Experience</h2>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-sm font-black uppercase underline decoration-4 underline-offset-4">{exp.titre}</h3>
                                        <span className="text-[10px] font-bold bg-black text-white px-2 py-1">{exp.duree}</span>
                                    </div>
                                    <p className="text-xs font-black mb-4 italic uppercase">{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed font-bold text-gray-700">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black uppercase border-l-[10px] border-black pl-6 mb-8">Education</h2>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id} className="flex justify-between border-b border-black pb-2">
                                    <div className="w-2/3">
                                        <h4 className="text-xs font-black uppercase">{f.titre}</h4>
                                        <p className="text-[10px] font-bold uppercase text-gray-500">{f.etablissement}</p>
                                    </div>
                                    <span className="text-[10px] font-black">{f.annee}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="h-6 bg-black w-full" />
        </div>
    )
}
