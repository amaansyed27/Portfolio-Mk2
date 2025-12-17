import { motion } from 'framer-motion';
import amgF1 from '../assets/amgf1.png';

export default function AeroFlow() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {/* The F1 Car Background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '45%',
                height: '45%',
                backgroundImage: `url(${amgF1})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.1,
                filter: 'grayscale(100%) blur(2px)',
                zIndex: -1
            }} />

            {/* Scuderia Red Flow Lines */}
            <svg
                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                viewBox="0 0 1440 1080"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="scuderiaRed" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(232, 0, 32, 0)" />
                        <stop offset="50%" stopColor="rgba(232, 0, 32, 0.6)" /> {/* #E80020 with opacity */}
                        <stop offset="100%" stopColor="rgba(232, 0, 32, 0)" />
                    </linearGradient>
                </defs>

                {/* Increased count to 9 as requested */}
                {Array.from({ length: 9 }).map((_, i) => (
                    <WaveLine key={i} index={i} />
                ))}
            </svg>
        </div>
    );
}

const WaveLine = ({ index }) => {
    // Distributed Y position to cover the screen
    const yBase = Math.random() * 1080;

    // Wavy curves
    const amplitude = 60 + Math.random() * 60;

    // Smooth motion
    const duration = 8 + Math.random() * 4;
    const delay = Math.random() * -5;

    // Bezier Curve
    const pathData = `M -200 ${yBase} 
                      Q 400 ${yBase - amplitude} 800 ${yBase + (amplitude * 0.5)} 
                      T 1640 ${yBase}`;

    return (
        <motion.path
            d={pathData}
            stroke="url(#scuderiaRed)"
            strokeWidth={2.5} // Slightly heavier (was 1.5)
            fill="none"
            initial={{ pathOffset: 0, pathLength: 1, opacity: 0 }}
            animate={{
                strokeDasharray: ["0, 1200", "400, 1200", "0, 1200"],
                strokeDashoffset: [0, -2400],
                opacity: [0, 0.8, 0] // Stronger peak opacity
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
        />
    );
};
