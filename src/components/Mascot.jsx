import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Mascot() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll value for rotation
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const rotate = useTransform(smoothScroll, [0, 1], [0, 360]);
    const y = useTransform(smoothScroll, [0, 1], [0, 500]);

    // "Peek" animation variants
    const variants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0.4 } }
    };

    return (
        <div style={{ position: 'fixed', right: '5vw', top: '20vh', zIndex: 50, pointerEvents: 'none' }}>
            <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                style={{ rotate, y }}
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                {/* Simple Green Blob SVG based on user image */}
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0Z" fill="#00C49F" />
                    <circle cx="35" cy="40" r="8" fill="#0D3B31" />
                    <circle cx="65" cy="40" r="8" fill="#0D3B31" />
                    <path d="M35 65Q50 75 65 65" stroke="#0D3B31" strokeWidth="5" strokeLinecap="round" />
                </svg>
            </motion.div>
        </div>
    );
}
