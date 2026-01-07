import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Tone from 'tone'

interface SplashScreenProps {
    onComplete: () => void
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [isStarted, setIsStarted] = useState(false)

    const handleStart = async () => {
        if (isStarted) return
        setIsStarted(true)

        try {
            await Tone.start()
            const synth = new Tone.PolySynth(Tone.Synth, {
                oscillator: { type: "sine" },
                envelope: { attack: 0.05, decay: 0.3, sustain: 0.1, release: 1.4 }
            }).toDestination()

            const now = Tone.now()
            synth.triggerAttackRelease("C4", "8n", now)
            synth.triggerAttackRelease("E4", "8n", now + 0.3)
            synth.triggerAttackRelease("G4", "8n", now + 0.6)
            synth.triggerAttackRelease("C5", "4n", now + 0.8)
        } catch (e) {
            console.warn("Audio error:", e)
        }

        // Completion after animation (approx. 1.8s in legacy)
        setTimeout(() => {
            onComplete()
        }, 1800)
    }

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center cursor-pointer"
            onClick={handleStart}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                className="flex items-center text-5xl font-black text-gray-900"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mr-4 text-indigo-600">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <path d="M12 18V6" />
                    <path d="M9 9h6" />
                </svg>
                DeOS
            </motion.div>
            <motion.p
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-4 text-xl font-light text-gray-600"
            >
                Tapez pour commencer la création.
            </motion.p>

            {isStarted && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.8 }}
                    className="absolute bottom-0 left-0 h-1 bg-indigo-600"
                />
            )}
        </motion.div>
    )
}

export default SplashScreen
