import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Sparkles, Star, Lightbulb, MessageCircle } from 'lucide-react'
import { CONCIERGE_TIPS } from '@/data/suggestions'

export const AtelierConcierge = () => {
    const [tipIndex, setTipIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setTipIndex((prev) => (prev + 1) % CONCIERGE_TIPS.length)
        }, 15000)
        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-32 right-8 z-[60] w-64"
                >
                    <div className="bg-slate-900 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Brain className="w-12 h-12 text-couture-gold" />
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-couture-gold animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-couture-gold">L'Atelier_Concierge</span>
                        </div>

                        <motion.p
                            key={tipIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs text-slate-300 leading-relaxed font-serif italic"
                        >
                            "{CONCIERGE_TIPS[tipIndex]}"
                        </motion.p>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-2 right-2 text-slate-500 hover:text-white transition-colors"
                        >
                            <span className="text-[8px] font-black">FERMER</span>
                        </button>

                        <div className="mt-4 flex gap-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-[2px] w-4 bg-white/10 overflow-hidden">
                                    {i - 1 === tipIndex % 3 && <motion.div layoutId="tip-progress" className="h-full bg-couture-gold w-full" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
