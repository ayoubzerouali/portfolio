"use client"
import { ArrowDown } from 'lucide-react'
import { motion } from 'motion/react'
export default function ScrollDown() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
            <span className="text-gray-400 text-sm mb-2">Scroll down</span>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowDown size={20} className="primary" />
            </motion.div>
        </motion.div>
    )
}
