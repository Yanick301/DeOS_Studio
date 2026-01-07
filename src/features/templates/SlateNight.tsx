import React from 'react'
import { TemplateProps } from './types'

export const SlateNight: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col bg-[#0f172a]"
            style={{ color: '#f1f5f9', fontFamily: "'Inter', sans-serif" }}
        >
            <header className="mb-20 flex justify-between items-end">
                <div>
                    <h1 className="text-7xl font-black tracking-tighter leading-[0.8]">
                        {data.nom || 'NOM'}
                    </h1>
                    <p className="text-2xl font-black mt-6 uppercase tracking-[0.4em] text-indigo-400">
                        {data.titre || 'NIGHT ROLE'}
                    </p>
                </div>
                <div className="text-right text-[10px] font-black uppercase tracking-[0.6em] opacity-30">
                    <p className="mb-1">{data.email}</p>
                    <p>{data.phone}</p>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-16 flex-1">
                <div className="col-span-8 space-y-16">
                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[1em] mb-10 opacity-20">Profile_Module</h3>
                        <p className="text-xl font-medium leading-relaxed italic opacity-80 border-l-8 pl-8 border-indigo-500/20">
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[1em] mb-12 opacity-20">Exp_Log</h3>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="p-8 bg-white/5 border border-white/10 rounded-3xl relative group hover:bg-white/10 transition-all">
                                    <div className="absolute top-4 right-8 text-[10px] font-black text-indigo-400/40">{exp.duree}</div>
                                    <h4 className="text-2xl font-black tracking-tight mb-2">{exp.titre}</h4>
                                    <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-6 italic">@{exp.entreprise}</p>
                                    <p className="text-xs leading-relaxed opacity-40 font-medium text-justify">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-4 space-y-16">
                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 opacity-20">Logic_Grid</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
                                    <span className="text-xs font-black uppercase tracking-widest">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 opacity-20">Education</h3>
                        <div className="space-y-8">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-sm font-black uppercase tracking-tight">{f.titre}</h4>
                                    <p className="text-[10px] font-bold opacity-30 mt-2">{f.etablissement}</p>
                                    <p className="text-[10px] font-black text-indigo-400 mt-1">{f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {data.photo && (
                        <div className="mt-auto py-10">
                            <img src={data.photo} alt="Profile" className="w-full grayscale brightness-125 contrast-125 opacity-40 rounded-3xl" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
