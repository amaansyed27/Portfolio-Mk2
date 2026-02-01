import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import PhysicsBackground from './PhysicsBackground';
import AeroFlow from './AeroFlow';
import Portrait from './Portrait';
import BackgroundDoodles from './BackgroundDoodles';

const SilverFlowButton = () => (
    <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
            position: 'relative',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0
        }}
    >
        {/* Rotating Silver Border */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
                position: 'absolute',
                inset: -2,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, transparent 0%, #C0C0C0 15%, #FFFFFF 50%, #C0C0C0 85%, transparent 100%)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '2px' // Border width
            }}
        />

        {/* Inner Glass Circle */}
        <div style={{
            position: 'absolute',
            inset: 2,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <ArrowDown size={24} color="#555" />
        </div>
    </motion.button>
);

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
            <BackgroundDoodles color="#333" />

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
                    <SilverFlowButton />
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
