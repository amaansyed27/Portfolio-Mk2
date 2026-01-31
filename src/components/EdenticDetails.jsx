import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Play, Layers, Sparkles, Wand2, Mic, Film, Video, Share2, Award } from 'lucide-react';
import edenticLogo from '../assets/ai-and-agents/edentic/edentic-logo.png';

const ACCENT_COLOR = '#00ccff'; // Cyan Blue for Edentic/Identity

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
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
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
            background: `${ACCENT_COLOR}15`,
            color: '#00A3CC',
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

export default function EdenticDetails({ onClose }) {
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
                background: '#FAFAFA',
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
                        <img src={edenticLogo} alt="Edentic" style={{ width: '24px', height: 'auto' }} />
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#333' }}>EDENTIC</span>
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
                    background: `radial-gradient(circle at 0% 0%, ${ACCENT_COLOR}15 0%, #FAFAFA 60%)`,
                    paddingTop: isMobile ? '80px' : '6rem',
                    paddingBottom: '3rem',
                    borderBottom: '1px solid #e5e5e5',
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
                                    padding: '6px 12px', borderRadius: '100px', background: '#FFD700', color: '#856404',
                                    fontSize: '0.75rem', fontWeight: 800, marginBottom: '1.5rem',
                                    boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
                                    alignSelf: isMobile ? 'center' : 'flex-start'
                                }}
                            >
                                <Award size={14} fill="#856404" />
                                1ST PLACE WINNER - VIDEODB HACKATHON
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', gap: '1rem', marginBottom: '1rem' }}
                            >
                                <img src={edenticLogo} alt="Edentic Logo" style={{ width: isMobile ? '50px' : '64px', height: 'auto' }} />
                                <h1 style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: isMobile ? '2.5rem' : '4rem',
                                    color: '#111',
                                    fontWeight: 800,
                                    margin: 0,
                                    lineHeight: 1
                                }}>
                                    Edentic.
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
                                The story is yours. The edit is ours.<br />
                                <span style={{ fontSize: '0.9em', color: '#777', fontWeight: 400 }}>
                                    Transform raw media into broadcast-quality videos automatically with AI.
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
                                        width: isMobile ? '100%' : 'auto', fontSize: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
                                    }}>
                                    <Play size={20} fill="currentColor" /> Watch Setup Demo
                                </button>
                                <button style={{
                                    padding: '14px 28px', borderRadius: '12px', background: '#fff', border: '1px solid #e5e5e5',
                                    color: '#333', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                                    cursor: 'pointer', width: isMobile ? '100%' : 'auto', fontSize: '1rem'
                                }}
                                    onClick={() => window.open('https://github.com/amaansyed27/Edentic', '_blank')}
                                >
                                    <Github size={20} /> View Code
                                </button>
                            </motion.div>
                        </div>

                        {/* Hero Video Embed */}
                        <motion.div
                            id="demo-video"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                width: '100%',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                border: '4px solid #fff'
                            }}
                        >
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
                                <iframe
                                    src="https://www.youtube.com/embed/xI1MlH932Ak?si=f1gla_yg7Lxt-kBT&autoplay=1"
                                    title="Edentic Demo"
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
                                Revolutionary AI Features
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                                Our intelligent pipeline analyzes, understands, and edits your content in real-time.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
                            <BentoCard delay={0.3}>
                                <FeatureItem
                                    icon={<Layers size={24} />}
                                    title="Multi-Asset Ingestion"
                                    desc="Upload any combination of screen recordings, images, and audio. Edentic unifies them into a cohesive narrative."
                                />
                            </BentoCard>
                            <BentoCard delay={0.4}>
                                <FeatureItem
                                    icon={<Wand2 size={24} />}
                                    title="Smart Duration"
                                    desc="Automatically adjusts video pacing to match the generated voiceover and script density."
                                />
                            </BentoCard>
                            <BentoCard delay={0.5}>
                                <FeatureItem
                                    icon={<Mic size={24} />}
                                    title="AI Narration"
                                    desc="Generates professional voiceovers with perfect timing, matching the tone of your content."
                                />
                            </BentoCard>
                            <BentoCard delay={0.6}>
                                <FeatureItem
                                    icon={<Sparkles size={24} />}
                                    title="Automatic Polishing"
                                    desc="Adds title cards, transitions, and background music without you lifting a finger."
                                />
                            </BentoCard>
                            <BentoCard delay={0.7} style={{ gridColumn: isMobile ? '1' : 'span 2', background: `linear-gradient(135deg, ${ACCENT_COLOR}10 0%, #fff 100%)` }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ padding: '8px', background: '#111', borderRadius: '8px', color: '#fff' }}><Video size={20} /></div>
                                    <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>Intelligent Context Awareness</h3>
                                </div>
                                <p style={{ color: '#555', lineHeight: 1.6 }}>
                                    Edentic doesn't just cut clips. It <b>watches</b> your screen recordings to understand what feature you're demonstrating, then writes a script that actually explains it.
                                </p>
                                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {['Computer Vision', 'OCR', 'Scene Detection', 'Script Generation'].map(tag => (
                                        <span key={tag} style={{ fontSize: '0.8rem', padding: '4px 10px', borderRadius: '100px', background: '#fff', border: '1px solid #e5e5e5', fontWeight: 600, color: '#333' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </BentoCard>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>Powering the Magic</h3>
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem',
                            padding: '2rem', background: '#fff', borderRadius: '20px', border: '1px solid #e5e5e5'
                        }}>
                            {[
                                { name: 'VideoDB', role: 'Rendering Engine' },
                                { name: 'Gemini 2.5 Flash', role: 'Vision & Logic' },
                                { name: 'Streamlit', role: 'Frontend UI' },
                                { name: 'Python', role: 'Core' }
                            ].map((tech, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    padding: '10px 20px', borderRadius: '100px',
                                    background: '#f9f9f9', border: '1px solid #eee'
                                }}>
                                    <span style={{ fontWeight: 700, color: '#111' }}>{tech.name}</span>
                                    <span style={{ width: '1px', height: '14px', background: '#ddd' }} />
                                    <span style={{ fontSize: '0.9rem', color: '#666' }}>{tech.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
