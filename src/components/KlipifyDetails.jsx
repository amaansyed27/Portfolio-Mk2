import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, Play, Layers, FileText, MessageSquare, Video, Award, Scissors } from 'lucide-react';
import klipifyLogo from '../assets/ai-and-agents/klipify/klipify-logo.png';

const ACCENT_COLOR = '#8B5CF6'; // Soft Purple

const BentoCard = ({ children, style, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        style={{
            background: '#fff',
            borderRadius: '16px',
            border: '1px solid #e5e5e5',
            padding: '24px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)', // Minimal shadow
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            ...style
        }}
    >
        {children}
    </motion.div>
);

const FeatureItem = ({ icon, title, desc }) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div style={{
            padding: '10px',
            borderRadius: '10px',
            background: `${ACCENT_COLOR}15`, // Very light purple bg
            color: ACCENT_COLOR,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
        }}>
            {icon}
        </div>
        <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5, margin: 0 }}>{desc}</p>
        </div>
    </div>
);

export default function KlipifyDetails({ onClose }) {
    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 900px)').matches);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useLayoutEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={scrollRef}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#FAFAFA', // Paper theme background
                zIndex: 99999,
                overflowY: 'auto',
                overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch',
                display: 'block',
                boxSizing: 'border-box'
            }}
        >
            {/* Close Button & Header */}
            {isMobile ? (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, height: '60px',
                    background: 'rgba(250,250,250,0.95)', backdropFilter: 'blur(10px)',
                    zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)',
                    boxSizing: 'border-box'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src={klipifyLogo} alt="Klipify" style={{ width: '24px', height: 'auto' }} />
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#333' }}>KLIPIFY</span>
                    </div>
                    <button onClick={onClose} style={{
                        width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #e5e5e5',
                        background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <X size={18} color="#333" />
                    </button>
                </div>
            ) : (
                <motion.button
                    onClick={onClose}
                    initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }}
                    style={{
                        position: 'fixed', top: '2rem', right: '2rem', width: '50px', height: '50px',
                        borderRadius: '50%', border: '1px solid #e5e5e5', background: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                        zIndex: 10000, boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                    }}
                >
                    <X size={24} color="#333" />
                </motion.button>
            )}

            <div style={{
                minHeight: '100%', width: '100%',
                maxWidth: '100vw', overflowX: 'hidden',
                boxSizing: 'border-box'
            }}>
                {/* --- HERO SECTION --- */}
                <div style={{
                    background: '#FAFAFA',
                    paddingTop: isMobile ? '80px' : '6rem',
                    paddingBottom: '3rem',
                    borderBottom: '1px solid #e5e5e5', // Minimal border instead of gradient
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        maxWidth: '1200px', width: '100%', margin: '0 auto',
                        padding: isMobile ? '0 1.25rem' : '0 2rem',
                        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
                        gap: isMobile ? '2rem' : '4rem',
                        alignItems: 'center',
                        boxSizing: 'border-box'
                    }}>

                        {/* Hero Text */}
                        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    padding: '6px 12px', borderRadius: '100px', background: '#F3E8FF', color: '#6B21A8',
                                    fontSize: '0.75rem', fontWeight: 700, marginBottom: '1.5rem',
                                    border: '1px solid #E9D5FF',
                                    alignSelf: isMobile ? 'center' : 'flex-start'
                                }}
                            >
                                <Award size={14} fill="#6B21A8" />
                                2ND PLACE WINNER - VIDEODB HACKATHON
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '1rem', marginBottom: '1rem' }}
                            >
                                <img src={klipifyLogo} alt="Klipify Logo" style={{ width: isMobile ? '50px' : '64px', height: 'auto' }} />
                                <h1 style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: isMobile ? '2.5rem' : '4rem',
                                    color: '#111',
                                    fontWeight: 800,
                                    margin: 0,
                                    lineHeight: 1
                                }}>
                                    Klipify.
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    fontSize: isMobile ? '1rem' : '1.25rem',
                                    color: '#555',
                                    lineHeight: 1.6,
                                    marginBottom: '2rem',
                                    fontWeight: 500
                                }}
                            >
                                AI-Powered Educational Video Platform.<br />
                                <span style={{ fontSize: '0.9em', color: '#777', fontWeight: 400 }}>
                                    Transform long educational videos into smart clips, summaries, and notes.
                                </span>
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{ display: 'flex', gap: '1rem', flexDirection: isMobile ? 'column' : 'row' }}
                            >
                                <button
                                    onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}
                                    style={{
                                        padding: '14px 28px', borderRadius: '12px', background: '#111', color: '#fff',
                                        border: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer',
                                        width: isMobile ? '100%' : 'auto', fontSize: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                                    }}>
                                    <Play size={20} fill="currentColor" /> Watch Demo
                                </button>
                                <button
                                    onClick={() => window.open('https://github.com/amaansyed27/Klipify', '_blank')}
                                    style={{
                                        padding: '14px 28px', borderRadius: '12px', background: '#fff', border: '1px solid #e5e5e5',
                                        color: '#333', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                                        cursor: 'pointer', width: isMobile ? '100%' : 'auto', fontSize: '1rem'
                                    }}
                                >
                                    <Github size={20} /> View Source
                                </button>
                            </motion.div>
                        </div>

                        {/* Hero Video Embed - Minimal Frame */}
                        <motion.div
                            id="demo-video"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                width: '100%',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.08)', // Softer shadow
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid #eee',
                                background: '#fff'
                            }}
                        >
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#f5f5f5' }}>
                                <iframe
                                    src="https://www.youtube.com/embed/fq-FSP1BK18?si=aKg1EKcndud6QZgQ&autoplay=1"
                                    title="Klipify Demo"
                                    style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0
                                    }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- CONTENT SECTION --- */}
                <div style={{
                    maxWidth: '1200px', width: '100%', margin: '0 auto',
                    padding: isMobile ? '2rem 1.25rem' : '4rem 2rem',
                    boxSizing: 'border-box'
                }}>

                    {/* Features Grid */}
                    <div style={{ marginBottom: '4rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#111' }}>
                                Learn Smarter, Not Harder
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                                Klipify uses Gemini and VideoDB to deconstruct complex lectures into digestible knowledge.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
                            <BentoCard delay={0.3}>
                                <FeatureItem
                                    icon={<Scissors size={24} />}
                                    title="Smart Video Clips"
                                    desc="AI-curated educational shorts that focus strictly on key concepts, removing fluff."
                                />
                            </BentoCard>
                            <BentoCard delay={0.4}>
                                <FeatureItem
                                    icon={<FileText size={24} />}
                                    title="Intelligent Summaries"
                                    desc="Comprehensive overviews with clear learning objectives and timestamped notes."
                                />
                            </BentoCard>
                            <BentoCard delay={0.5}>
                                <FeatureItem
                                    icon={<MessageSquare size={24} />}
                                    title="AI Study Assistant"
                                    desc="Interactive tutor that answers questions based directly on the video content."
                                />
                            </BentoCard>
                        </div>
                    </div>

                    {/* Tech & Architecture */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>Built With</h3>
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem',
                            padding: '2rem', background: '#fff', borderRadius: '16px', border: '1px solid #e5e5e5'
                        }}>
                            {[
                                { name: 'Streamlit', role: 'Frontend' },
                                { name: 'VideoDB', role: 'Processing & Indexing' },
                                { name: 'Google GenAI', role: 'Content Generation' },
                                { name: 'Python', role: 'Backend' }
                            ].map((tech, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    padding: '8px 16px', borderRadius: '8px', // More square/paper-like
                                    background: '#fff', border: '1px solid #ddd',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                }}>
                                    <span style={{ fontWeight: 600, color: '#333' }}>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
