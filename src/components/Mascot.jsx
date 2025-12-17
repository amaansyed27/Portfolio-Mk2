import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import tireImg from '../assets/race_assets/tire_asset.webp';

export default function Mascot() {
    const { scrollYProgress } = useScroll();

    // Smooth physics for the movement
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

    // Move from Top (10vh) to Bottom (85vh) of the viewport as you scroll the entire page
    const y = useTransform(smoothProgress, [0, 1], ['0vh', '75vh']);

    // Optional: Add some horizontal movement if "across" meant that? 
    // The original code didn't have X movement, just Y. I'll stick to Y but make it cover full height.

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: '10vh', // Start near top
                right: '5vw',
                width: '120px',
                height: '120px',
                zIndex: 50,
                y: y, // Driven by scroll
            }}
        >
            <motion.img
                src={tireImg}
                alt="Spinning Tire"
                animate={{ rotate: 360 }}
                // Spin faster based on scroll? User said "keep it spinning". 
                // Continuous spin is safer + maybe add extra rotation from scroll
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
        </motion.div>
    );
}
