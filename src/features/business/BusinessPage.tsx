import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Briefcase, GraduationCap, Users, MessageSquare, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react'
import { Card, Button } from '@/components/ui'

const BusinessPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12 pb-20"
        >
            <header className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-couture-gold/10 text-couture-gold rounded-full mb-4">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Opportunité_Business</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-couture tracking-tight">Monétisez votre Expertise</h1>
                <p className="text-slate-500 max-w-2xl mx-auto font-serif italic text-lg">
                    "Transformez DeOS Studio en votre propre agence de recrutement digitale et générez des revenus dès aujourd'hui."
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: GraduationCap,
                        title: "Ciblez les Étudiants",
                        desc: "Proposez des packs 'Stage & Premier Emploi'. Les étudiants cherchent désespérément de l'aide pour se démarquer.",
                        tips: "Tarif conseillé : 5.000 - 15.000 FCFA / Pack"
                    },
                    {
                        icon: Users,
                        title: "Cadres & Pros",
                        desc: "Utilisez nos templates Elite et Majesty pour des profils à haute valeur ajoutée. C'est le luxe accessible.",
                        tips: "Tarif conseillé : 25.000 - 50.000 FCFA / Profil"
                    },
                    {
                        icon: Briefcase,
                        title: "Freelance Complet",
                        desc: "Offrez CV + Lettre + Conseils IA. Un service clé en main que personne ne peut refuser.",
                        tips: "Tarif conseillé : Abonnement ou Forfait Premium"
                    }
                ].map((item, i) => (
                    <Card key={i} className="p-8 editorial-card group">
                        <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-6 italic">{item.desc}</p>
                        <div className="pt-4 border-t border-slate-50">
                            <span className="text-[9px] font-black text-couture-gold uppercase tracking-widest">{item.tips}</span>
                        </div>
                    </Card>
                ))}
            </div>

            <section className="bg-slate-900 p-12 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-couture-gold/5 rounded-full blur-3xl" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-black font-couture mb-6">Prêt à lancer votre Agence ?</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                "Accès illimité aux templates Couture",
                                "Outils d'analyse IA pour vos clients",
                                "Exports HD sans filigrane DeOS",
                                "Support prioritaire pour vos projets business"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-couture-gold" />
                                    <span className="text-sm font-medium opacity-80">{text}</span>
                                </div>
                            ))}
                        </div>
                        <Button
                            className="bg-couture-gold text-slate-900 border-none px-10 py-6 text-sm font-black uppercase tracking-widest hover:bg-white transition-all overflow-hidden relative group"
                            onClick={() => window.open('https://wa.me/2250700000000', '_blank')}
                        >
                            <span className="relative z-10 flex items-center gap-2">Me Contacter pour Débuter <ArrowRight className="w-4 h-4" /></span>
                            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 opacity-20">
                        <div className="p-8 border border-white/10 flex flex-col items-center">
                            <Zap className="w-10 h-10 mb-4" />
                            <span className="text-xs font-black uppercase">Rapidité</span>
                        </div>
                        <div className="p-8 border border-white/10 flex flex-col items-center">
                            <Star className="w-10 h-10 mb-4" />
                            <span className="text-xs font-black uppercase">Qualité</span>
                        </div>
                        <div className="p-8 border border-white/10 flex flex-col items-center">
                            <Users className="w-10 h-10 mb-4" />
                            <span className="text-xs font-black uppercase">Réseau</span>
                        </div>
                        <div className="p-8 border border-white/10 flex flex-col items-center">
                            <MessageSquare className="w-10 h-10 mb-4" />
                            <span className="text-xs font-black uppercase">Support</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center pt-10">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">DeOS_Business_Division_2026</p>
            </footer>
        </motion.div>
    )
}

export default BusinessPage
