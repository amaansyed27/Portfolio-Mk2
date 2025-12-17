import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
    const [lights, setLights] = useState(0);
    const [lightsOut, setLightsOut] = useState(false);
    const [startSwipe, setStartSwipe] = useState(false);
    const [fill, setFill] = useState(0);

    // 1. Race Lights Sequence
    useEffect(() => {
        const lightInterval = setInterval(() => {
            setLights(prev => {
                if (prev >= 5) {
                    clearInterval(lightInterval);
                    return 5;
                }
                return prev + 1;
            });
        }, 300);

        return () => clearInterval(lightInterval);
    }, []);

    // 2. Lights Out & Start Swipe
    useEffect(() => {
        if (lights === 5) {
            const randomDelay = Math.random() * 1000 + 500;
            const timer = setTimeout(() => {
                setLightsOut(true);
                setStartSwipe(true);
            }, randomDelay);
            return () => clearTimeout(timer);
        }
    }, [lights]);

    // 3. Swipe Animation & Completion
    useEffect(() => {
        if (!startSwipe) return;

        let animationFrame;
        let progress = 0;

        const animate = () => {
            progress += 1.5; // Smooth speed
            if (progress >= 100) {
                setFill(100);
                // Wait briefly then complete
                setTimeout(onComplete, 800);
            } else {
                setFill(progress);
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [startSwipe, onComplete]);

    return (
        <motion.div
            className="loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#080808',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* F1 Race Lights */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                marginBottom: '4vh',
                opacity: lightsOut ? 0 : 1,
                transition: 'opacity 0.1s',
                transform: 'translateX(30px)' // Shift Right to match italic slant
            }}>
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: i <= lights ? '#ff0000' : '#111',
                        backgroundImage: i <= lights
                            ? 'radial-gradient(#ffcccc 15%, transparent 16%), radial-gradient(#ff0000 15%, transparent 16%)'
                            : 'radial-gradient(#333 15%, transparent 16%)',
                        backgroundSize: '4px 4px',
                        backgroundPosition: '0 0, 2px 2px',
                        boxShadow: i <= lights
                            ? '0 0 50px rgba(255, 0, 0, 0.9), inset 0 0 20px rgba(255, 100, 100, 0.5)'
                            : 'inset 0 0 10px #000',
                        border: '4px solid #000'
                    }} />
                ))}
            </div>

            <div style={{ position: 'relative' }}>
                {/* The Outline / Empty Base */}
                <motion.h1
                    style={{
                        fontSize: '30vh',
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontStyle: 'italic',
                        fontWeight: 800,
                        color: '#111',
                        margin: 0,
                        lineHeight: 0.8,
                        position: 'absolute',
                        zIndex: 1,
                        WebkitTextStroke: '2px #333'
                    }}
                >
                    27
                </motion.h1>

                {/* The Liquid Fill */}
                <motion.div
                    layoutId="hero-number-27"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        clipPath: `inset(0 ${100 - fill}% 0 0)`,
                        opacity: startSwipe ? 1 : 0
                    }}
                >
                    <h1 style={{
                        fontSize: '30vh',
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontStyle: 'italic',
                        fontWeight: 800,
                        margin: 0,
                        lineHeight: 0.8,
                        background: 'linear-gradient(to right, #666 0%, #ccc 50%, #666 100%)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))'
                    }}>
                        27
                    </h1>
                </motion.div>
            </div>
        </motion.div>
    );
}
