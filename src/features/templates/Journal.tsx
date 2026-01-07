import React from 'react'
import { TemplateProps } from './types'

export const Journal: React.FC<TemplateProps> = ({ data, accentColor, bgColor, fontFamily }) => {
    const skills = data.skills.split(',').map(s => s.trim()).filter(s => s)

    return (
        <div
            className="p-16 h-[1123px] w-[794px] overflow-hidden flex flex-col bg-[#fdfdfb]"
            style={{ color: '#1a1a1a', fontFamily: "'Source Serif Pro', serif" }}
        >
            <header className="text-center mb-10 border-double border-b-[8px] border-black pb-8">
                <h1 className="text-7xl font-black uppercase tracking-tighter leading-none mb-4">
                    {data.nom || 'LAST NAME'}
                </h1>
                <div className="flex justify-center gap-10 text-sm font-bold border-y border-black py-2 uppercase tracking-widest">
                    <span>Edition {new Date().getFullYear()}</span>
                    <span>•</span>
                    <span>{data.location}</span>
                    <span>•</span>
                    <span>Vol. 1</span>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-12 flex-1">
                <div className="col-span-12">
                    <h2 className="text-4xl font-black italic tracking-tight leading-tight mb-8 border-b border-black/10 pb-6">
                        "{data.titre || 'TITRE DU PARCOURS'}" : LA RÉUSSITE AU SERVICE DE L'EXCELLENCE.
                    </h2>
                </div>

                <div className="col-span-8 flex flex-col border-r border-black pr-12">
                    <section className="mb-12">
                        <h3 className="text-xl font-black uppercase border-b-4 border-black inline-block mb-6">ÉDITO</h3>
                        <p className="text-lg font-medium leading-relaxed text-justify first-letter:text-6xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                            {data.profilSummary || 'Résumé...'}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-black uppercase border-b-4 border-black inline-block mb-8">REPORTAGE DE CARRIÈRE</h3>
                        <div className="space-y-12">
                            {data.experiences.map((exp) => (
                                <div key={exp.id} className="relative">
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-2 underline">{exp.titre}</h4>
                                    <div className="flex justify-between items-center bg-black text-white px-3 py-1 mb-4">
                                        <span className="text-xs font-black uppercase">{exp.entreprise}</span>
                                        <span className="text-[10px] font-bold">{exp.duree}</span>
                                    </div>
                                    <p className="text-sm font-medium leading-[1.6] text-justify opacity-80">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-4 space-y-12">
                    <section>
                        <h3 className="text-sm font-black uppercase border-b-2 border-black inline-block mb-6">COMPÉTENCES CLÉS</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black" />
                                    <span className="text-sm font-bold uppercase tracking-widest">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-sm font-black uppercase border-b-2 border-black inline-block mb-6">FORMATION</h3>
                        <div className="space-y-6">
                            {data.formations.map((f) => (
                                <div key={f.id}>
                                    <h4 className="text-sm font-black uppercase">{f.titre}</h4>
                                    <p className="text-[10px] font-bold mt-1 opacity-60 italic">{f.etablissement} | {f.annee}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="pt-20 border-t border-black">
                        <h3 className="text-xs font-black uppercase mb-4">CONTACTEZ L'AUTEUR</h3>
                        <div className="text-[10px] font-bold uppercase space-y-1">
                            <p>Email: {data.email}</p>
                            <p>Tél: {data.phone}</p>
                        </div>
                    </div>

                    {data.photo && (
                        <div className="pt-8">
                            <img src={data.photo} alt="Profile" className="w-full grayscale border-2 border-black p-1 shadow-2xl" />
                            <p className="text-[8px] font-bold uppercase mt-2 text-center italic opacity-40">Photo : Archives DeOS Studio</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
