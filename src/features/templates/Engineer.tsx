import React from 'react'
import { TemplateProps } from './types'
import { Settings, Cpu, Globe, GraduationCap } from 'lucide-react'

export const Engineer: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="h-[1123px] w-[794px] overflow-hidden flex flex-col"
            style={{ backgroundColor: bgColor, color: '#1e293b', fontFamily: "'Fira Code', 'Inter', monospace" }}
        >
            <header className="px-12 py-10 border-b-8 flex items-center justify-between" style={{ borderColor: accentColor, backgroundColor: '#f8fafc' }}>
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900">{data.nom || 'VOTRE NOM'}</h1>
                    <p className="text-lg font-bold mt-1 uppercase tracking-widest" style={{ color: accentColor }}>
                        {data.titre || 'SOFTWARE ENGINEER'}
                    </p>
                </div>
                <div className="text-right text-[10px] font-bold space-y-1 text-slate-400">
                    <p className="bg-slate-900 text-white px-3 py-1 mb-1">{data.email}</p>
                    <p>{data.phone}</p>
                    <p>{data.location}</p>
                </div>
            </header>

            <div className="flex-1 grid grid-cols-12 gap-0">
                <div className="col-span-12 p-12 space-y-12">
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-slate-100 rounded-lg">
                                <Settings className="w-5 h-5 text-slate-600" />
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">Summary_Module_v1.0</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600 bg-slate-50 p-6 rounded-2xl border border-slate-100 font-medium">
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-slate-100 rounded-lg">
                                <Cpu className="w-5 h-5 text-slate-600" />
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">Project_Experience</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                                    <span className="text-[9px] font-black bg-slate-900 text-white px-2 py-0.5 rounded tracking-widest">{exp.duree}</span>
                                    <h4 className="text-base font-black text-slate-900 mt-3">{exp.titre}</h4>
                                    <p className="text-xs font-bold mt-0.5 mb-4" style={{ color: accentColor }}>@{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed text-slate-500">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-2 gap-12 pt-4">
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <Globe className="w-5 h-5 text-slate-600" />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">Hard_Skills</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded uppercase tracking-widest">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <GraduationCap className="w-5 h-5 text-slate-600" />
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900">Education</h3>
                            </div>
                            <div className="space-y-4">
                                {data.formations.map((f) => (
                                    <div key={f.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <h4 className="text-xs font-black text-slate-900">{f.titre}</h4>
                                        <p className="text-[10px] font-bold text-slate-400 mt-1">{f.etablissement} | {f.annee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <footer className="px-12 py-4 bg-slate-900 text-slate-500 text-[8px] font-bold uppercase tracking-[0.5em] flex justify-between">
                <span>DeOS_STUDIO_PRO_OUTPUT</span>
                <span>VER_2024.0.1</span>
            </footer>
        </div>
    )
}
