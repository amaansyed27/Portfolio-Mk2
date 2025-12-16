import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhysicsBackground from './PhysicsBackground';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <PhysicsBackground />

            <motion.div
                style={{ y, opacity, zIndex: 1 }}
                className="container"
            >
                <h1 style={{ fontSize: '12vw', lineHeight: 0.85, fontWeight: 600, letterSpacing: '-0.04em' }}>
                    Code <br />
                    <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-text)' }}>&</span> Context
                </h1>

                <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <p style={{ fontSize: '1.25rem', maxWidth: '32ch', fontWeight: 500 }}>
                        Full-stack Software Developer & AI Engineer specializing in modern web implementations.
                    </p>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        ↓
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
