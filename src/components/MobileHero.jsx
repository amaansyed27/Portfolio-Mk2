
import { motion } from 'framer-motion';
import Portrait from './Portrait';
import { ArrowDown } from 'lucide-react';

export default function MobileHero() {
    return (
        <section style={{
            height: '100svh',
            width: '100%',
            position: 'relative',
            background: '#fff',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Start from top
            paddingTop: '7svh', // Aggressively reduced to remove white space
            paddingLeft: '2rem',
            paddingRight: '2rem',
            zIndex: 999
        }}>
            {/* Background "27" Watermark - LOUDER */}
            <div style={{
                position: 'absolute',
                top: '5%',
                right: '-5%',
                fontSize: '35vh',
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 900,
                color: '#ebebeb', // Much darker to be visible
                zIndex: 0,
                pointerEvents: 'none',
                fontStyle: 'italic'
            }}>
                27
            </div>

            {/* Main Text Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p style={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontStyle: 'italic',
                        fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                        color: '#666',
                        marginBottom: '0.5rem'
                    }}>
                        "Stay Hungry, Stay Foolish"
                    </p>
                    <h1 style={{
                        fontSize: '17vw',
                        lineHeight: 0.85,
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        color: '#000',
                        letterSpacing: '-0.05em',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <span>AMAAN</span>
                        <span style={{
                            color: 'transparent',
                            WebkitTextStroke: '1.5px #000',
                            opacity: 0.8
                        }}>SYED</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ marginTop: '1rem' }}
                >
                    <p style={{
                        fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                        color: '#444',
                        fontWeight: 500,
                        maxWidth: '80%',
                        lineHeight: 1.4
                    }}>
                        AI Engineer.<br />
                        LLM Pipelines.<br />
                        <b>VideoDB Intern.</b>
                    </p>
                </motion.div>
            </div>

            {/* Portrait - Bottom Right Bleed */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: '-20%',
                    width: '100vw',
                    height: '60vh',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'flex-end',
                    opacity: 1
                }}
            >
                <Portrait />
            </motion.div>

            {/* Scroll Indicator - Absolute Bottom Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '2rem',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '1px solid #ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(5px)'
                }}>
                    <ArrowDown size={20} color="#333" />
                </div>
                <span style={{ fontSize: '0.8rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Scroll</span>
            </motion.div>
        </section>
    );
}
