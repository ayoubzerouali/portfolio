"use client"
import { Code, Database, Figma, Server, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";

const icons = [
    { Icon: Code, color: "text-primary-400", delay: 0 },
    { Icon: Terminal, color: "text-secondary-400", delay: 0.5 },
    { Icon: Server, color: "text-accent-400", delay: 1 },
    { Icon: Database, color: "text-green-400", delay: 1.5 },
    { Icon: Figma, color: "text-purple-400", delay: 2 },
];

export default function FloatingIcons() {
    const floatingIconsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const container = floatingIconsRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const moveX = (x - centerX) / 50; // Reduced intensity
            const moveY = (y - centerY) / 50;

            const index = parseInt(container.dataset.index || '0');
            const factor = (index % 3) + 1; // Vary movement by icon
            container.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={floatingIconsRef}
            className="relative h-[400px] w-full" // bigger height for better floating
        >
            {/* Center Blob */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
                className=" absolute top-1/2 left-1/2 w-[280px] h-[180px] md:w-[220px] md:h-[220px] -translate-x-1/2 -translate-y-1/2"
            >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/10 to-gray-500/20 backdrop-blur-xl"></div>
            </motion.div>
            {/* Floating Icons */}
            {icons.map(({ Icon, color, delay }, i) => {

                const angle = (i / icons.length) * 2 * Math.PI; // Spread equally around circle
                const radius = 150; // distance from center

                const offsetX = Math.round(Math.cos(angle) * radius);
                const offsetY = Math.round(Math.sin(angle) * radius);


                return (
                    <motion.div
                        key={i}
                        initial={{ y: 0 }}
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay }}
                        className={`floating-icon top-20 left-20  absolute  w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg bg-gray-700/20 backdrop-blur-md border border-gray-700 shadow-lg ${color}`}
                        style={{
                            top: `calc(50% + ${offsetY}px)`,
                            left: `calc(50% + ${offsetX}px)`,
                            transform: `translate(-50%, -50%)`,
                        }}

                    >
                        <Icon size={32} />
                    </motion.div>
                );
            })}
        </div>
    );
}

