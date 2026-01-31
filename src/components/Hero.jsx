import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhysicsBackground from './PhysicsBackground';
import AeroFlow from './AeroFlow';
import Portrait from './Portrait';

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
            <AeroFlow />

            <motion.div
                style={{ y, opacity, zIndex: 1 }}
                className="container"
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative' }}>

                    {/* The "27" - Connected to Loader via LayoutId */}
                    <motion.div
                        layoutId="hero-number-27"
                        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }} // Smoother bezier
                        style={{
                            fontSize: '18vw', // Slightly larger for impact
                            fontFamily: '"Space Grotesk", sans-serif',
                            fontStyle: 'italic',
                            fontWeight: 800,
                            lineHeight: 0.8,
                            background: 'linear-gradient(to right, #666 0%, #ccc 50%, #666 100%)', // Darker "Gunmetal" Silver
                            backgroundSize: '200% auto', // Enable flow
                            animation: 'shine 3s linear infinite', // Continuous flow
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.1))' // Stronger shadow
                        }}
                    >
                        27
                    </motion.div>

                    {/* Container for Quote + Name */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Quote - Larger */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                            style={{
                                fontSize: '2rem', // Larger
                                fontStyle: 'italic',
                                color: 'var(--color-text-light)',
                                fontFamily: '"Space Grotesk", sans-serif',
                                marginBottom: '0.5rem',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            "Stay Hungry, Stay Foolish"
                        </motion.div>

                        <h1 style={{ fontSize: '10vw', lineHeight: 0.85, fontWeight: 600, letterSpacing: '-0.04em' }}>
                            Amaan <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-text)' }}>Syed</span>
                        </h1>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <p style={{ fontSize: '1.25rem', maxWidth: '40ch', fontWeight: 500 }}>
                        AI Engineer | LLM Pipelines & Automation Systems. <br />
                        Ex-VideoDB Intern. 3x Hackathon Winner.
                    </p>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        ↓
                    </div>
                </div>
            </motion.div>

            {/* Right Side: Portrait */}
            <motion.div
                style={{
                    position: 'absolute',
                    right: '-5%', // Pull slightly off-screen for that "cut-off" look
                    bottom: 0,
                    width: '55vw', // Much larger
                    height: '85vh', // High enough
                    zIndex: 0, // Behind text interaction but visible
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end', // Align image to right
                    pointerEvents: 'none'
                }}
            >
                <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
                    <Portrait />
                </div>
            </motion.div>
        </section>
    );
}
