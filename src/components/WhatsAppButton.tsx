import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
    const phoneNumber = '+22941124048'
    const message = encodeURIComponent('Bonjour, je souhaite en savoir plus sur DeOS Studio.')
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/20"
            title="Contactez-nous sur WhatsApp"
        >
            <MessageCircle className="w-6 h-6 fill-current" />
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl whitespace-nowrap hidden md:block"
            >
                Besoin d'aide ? Contactez-nous !
            </motion.div>
        </motion.a>
    )
}

export default WhatsAppButton
