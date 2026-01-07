import React from 'react'
import { motion } from 'framer-motion'
import { User, X, Check } from 'lucide-react'
import { Card, Button } from '@/components/ui'

const PRESETS = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop",
]

interface Props {
    current: string
    onSelect: (url: string) => void
    onClose: () => void
}

export const AvatarGallery: React.FC<Props> = ({ current, onSelect, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white w-full max-w-lg p-10 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <User className="w-40 h-40" />
                </div>

                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter">Collection_Héritage</h3>
                        <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">Choisissez votre signature visuelle</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-50 transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {PRESETS.map((url, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { onSelect(url); onClose(); }}
                            className="relative aspect-square group overflow-hidden bg-slate-100"
                        >
                            <img src={url} alt={`Avatar Preset ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            {current === url && (
                                <div className="absolute inset-0 bg-couture-gold/80 flex items-center justify-center">
                                    <Check className="w-8 h-8 text-white" />
                                </div>
                            )}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-couture-gold transition-colors" />
                        </motion.button>
                    ))}
                </div>

                <div className="mt-10 pt-10 border-t border-slate-50 flex justify-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 italic">DeOS_Premium_Assets_2026</p>
                </div>
            </motion.div>
        </motion.div>
    )
}
