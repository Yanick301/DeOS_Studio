import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Sparkles, Star, Lightbulb, MessageCircle, X, Terminal } from 'lucide-react'
import { CONCIERGE_TIPS } from '@/data/suggestions'

export const AtelierConcierge = () => {
    const [tipIndex, setTipIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [isThinking, setIsThinking] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isThinking) setTipIndex((prev) => (prev + 1) % CONCIERGE_TIPS.length)
        }, 15000)
        return () => clearInterval(interval)
    }, [isThinking])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    className="fixed bottom-24 right-8 z-[60] w-72"
                >
                    <div className="bg-slate-900 dark:bg-black border border-white/10 dark:border-couture-gold/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-7 relative overflow-hidden group">
                        {/* Matrix-like background effect */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                            <div className="text-[8px] font-mono text-couture-gold animate-slide-up">
                                {Array(20).fill(0).map((_, i) => (
                                    <div key={i}>0101-ALPHA-SYSTEM-LOADED-v2.0</div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                            <Brain className="w-16 h-16 text-couture-gold" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-3 h-3 text-couture-gold" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-couture-gold">DeOS_Concierge</span>
                                </div>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="w-3 h-3 text-slate-500 hover:text-white" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <motion.div
                                    key={tipIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-2 top-0 bottom-0 w-[2px] bg-couture-gold/30" />
                                    <p className="text-[11px] text-slate-300 leading-relaxed font-serif italic pl-4">
                                        "{CONCIERGE_TIPS[tipIndex]}"
                                    </p>
                                </motion.div>

                                <div className="pt-4 border-t border-white/5">
                                    <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all flex items-center justify-center gap-2">
                                        <Sparkles className="w-3 h-3 text-couture-gold" />
                                        Analyser ma section
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="h-full bg-couture-gold shadow-[0_0_10px_#d4af37]"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
