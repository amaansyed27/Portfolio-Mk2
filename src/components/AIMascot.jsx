import { motion } from 'framer-motion';

export default function AIMascot({ size = 150 }) {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ width: size, height: size, position: 'relative' }}
        >
            <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none">
                {/* Legs */}
                <motion.rect x="20" y="60" width="10" height="20" rx="5" fill="#333" />
                <motion.rect x="70" y="60" width="10" height="20" rx="5" fill="#333" />

                {/* Body */}
                <path d="M 25 35 H 75 V 70 C 75 75 70 80 65 80 H 35 C 30 80 25 75 25 70 V 35 Z" fill="#F0F0F0" stroke="#333" strokeWidth="2" />

                {/* Head */}
                <path d="M 25 35 C 25 20 35 15 50 15 C 65 15 75 20 75 35 Z" fill="#fff" stroke="#333" strokeWidth="2" />

                {/* Eye Scanner */}
                <rect x="35" y="25" width="30" height="6" rx="2" fill="#333" />
                <motion.circle
                    cx="45" cy="28" r="2" fill="#00FF88"
                    animate={{ cx: [40, 60, 40] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />

                {/* Antenna */}
                <line x1="50" y1="15" x2="50" y2="5" stroke="#333" strokeWidth="2" />
                <circle cx="50" cy="5" r="3" fill="#ff5f56" />

                {/* Details */}
                <rect x="35" y="50" width="30" height="20" rx="2" fill="#E0E0E0" />
                <circle cx="40" cy="55" r="2" fill="#00ccff" />
                <circle cx="45" cy="55" r="2" fill="#00ccff" />
            </svg>
        </motion.div>
    );
}
