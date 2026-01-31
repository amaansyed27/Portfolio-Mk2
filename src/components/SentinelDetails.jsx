
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, Shield, Lock, Eye, AlertTriangle, ExternalLink, Globe, Play, ChevronLeft, ChevronRight } from 'lucide-react';

// --- SLIDES IMPORTS ---
import slide1 from '../assets/ai-and-agents/sentinel-logo/hero-carousel-1.png';
import slide2 from '../assets/ai-and-agents/sentinel-logo/hero-carousel-2.png';
import slide3 from '../assets/ai-and-agents/sentinel-logo/hero-carousel-3.png';

// --- LOGO IMPORTS ---
import sentinelLogo from '../assets/ai-and-agents/sentinel-logo/sentinel-logo-big.png';

const PRESENTATION_SLIDES = [slide1, slide2, slide3];
const ACCENT_COLOR = '#ff5f56'; // Security Red/Warning
const ACCENT_GRADIENT = 'linear-gradient(135deg, #ff5f56 0%, #d81b60 100%)';

export default function SentinelDetails({ onClose }) {
    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % PRESENTATION_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length);
    };

    // Mobile Check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
                position: 'fixed', inset: 0, background: '#FAFAFA',
                zIndex: 99999, overflowY: 'auto', overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch', display: 'block', boxSizing: 'border-box'
            }}
        >
            {/* Close Button */}
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

            {/* --- HERO SECTION --- */}
            <div style={{
                background: '#fff',
                color: '#111',
                paddingTop: isMobile ? '80px' : '6rem',
                paddingBottom: '4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Pattern - Security/Mesh */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.6
                }} />

                <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 4rem', position: 'relative', zIndex: 2 }}>

                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        {/* Hackathon Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem',
                                background: '#FFF3E0', padding: '8px 20px', borderRadius: '100px',
                                border: `1px solid #FFCC80`, boxShadow: '0 4px 15px rgba(255, 152, 0, 0.15)'
                            }}
                        >
                            <Shield size={16} color="#E65100" />
                            <span style={{ fontSize: '0.9rem', color: '#E65100', fontWeight: 700, letterSpacing: '0.5px' }}>
                                TOP 100 - HACKHAZARDS 25 (8000+ SUBMISSIONS)
                            </span>
                        </motion.div>

                        {/* Title with Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
                            style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                        >
                            <img src={sentinelLogo} alt="Sentinel Logo" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                            <h1 style={{
                                fontSize: isMobile ? '2.5rem' : '4.5rem',
                                fontWeight: 800,
                                letterSpacing: '-1px', color: '#B71C1C', lineHeight: 1.1,
                                margin: 0
                            }}>
                                Sentinel MK2.
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            style={{
                                fontSize: isMobile ? '1.1rem' : '1.35rem',
                                color: '#555', maxWidth: '750px', margin: '0 auto',
                                lineHeight: 1.6
                            }}
                        >
                            Next-gen browser extension for <b>real-time web security</b>, powered by visual indicators and <b>AI-powered analysis</b>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                        >
                            <button
                                onClick={() => window.open('https://sentinel-cyber.vercel.app', '_blank')}
                                style={{
                                    padding: '12px 28px', borderRadius: '12px',
                                    background: ACCENT_GRADIENT, color: '#fff', border: 'none',
                                    fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    boxShadow: '0 10px 25px rgba(216, 27, 96, 0.3)',
                                    transition: 'transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <Globe size={20} /> Live Project
                            </button>
                            <button
                                onClick={() => window.open('https://youtu.be/U0GpWONDVRU', '_blank')}
                                style={{
                                    padding: '12px 28px', borderRadius: '12px',
                                    background: '#fff', color: '#d81b60', border: '2px solid #d81b60',
                                    fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    transition: 'transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <Play size={20} /> Watch Demo
                            </button>
                            <button
                                onClick={() => window.open('https://github.com/amaansyed27/sentinel', '_blank')}
                                style={{
                                    padding: '12px 28px', borderRadius: '12px',
                                    background: '#333', color: '#fff', border: 'none',
                                    fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                }}
                            >
                                <Github size={20} /> GitHub
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- MODERN CAROUSEL SECTION --- */}
            <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 2rem' }}>
                <div style={{ marginBottom: '6rem', position: 'relative', overflow: 'hidden', padding: '2rem 0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '3rem', textAlign: 'center' }}>Project Showcase</h2>

                    <div style={{
                        position: 'relative',
                        height: isMobile ? '250px' : '500px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        perspective: '1000px'
                    }}>

                        {/* Navigation Buttons */}
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: '#fff' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevSlide}
                            style={{
                                position: 'absolute', left: isMobile ? '10px' : '10%', top: '50%', translateY: '-50%',
                                zIndex: 30, width: '50px', height: '50px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                            }}
                        >
                            <ChevronLeft size={28} color="#333" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: '#fff' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextSlide}
                            style={{
                                position: 'absolute', right: isMobile ? '10px' : '10%', top: '50%', translateY: '-50%',
                                zIndex: 30, width: '50px', height: '50px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                            }}
                        >
                            <ChevronRight size={28} color="#333" />
                        </motion.button>

                        {/* Slides Container */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {PRESENTATION_SLIDES.map((slide, index) => {
                                const isActive = index === currentIndex;
                                const isPrev = index === (currentIndex - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length;
                                const isNext = index === (currentIndex + 1) % PRESENTATION_SLIDES.length;

                                let x = '100%';
                                let scale = 0.8;
                                let opacity = 0;
                                let zIndex = 0;
                                let blur = '10px';
                                let rotateY = 0;

                                if (isActive) {
                                    x = '0%';
                                    scale = 1;
                                    opacity = 1;
                                    zIndex = 10;
                                    blur = '0px';
                                    rotateY = 0;
                                } else if (isPrev) {
                                    x = isMobile ? '-10%' : '-60%';
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 5;
                                    blur = '3px';
                                    rotateY = 15;
                                } else if (isNext) {
                                    x = isMobile ? '10%' : '60%';
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 5;
                                    blur = '3px';
                                    rotateY = -15;
                                }

                                if (!isActive && !isPrev && !isNext) return null;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={false}
                                        animate={{ x, scale, opacity, filter: `blur(${blur})`, zIndex, rotateY }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{
                                            position: 'absolute',
                                            width: isMobile ? '80%' : '600px',
                                            height: 'auto',
                                            aspectRatio: '16/9',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: isActive ? '0 20px 50px rgba(0,0,0,0.2)' : 'none',
                                            backgroundColor: '#fff',
                                            left: 0, right: 0, margin: 'auto',
                                            cursor: isActive ? 'default' : 'pointer',
                                            border: '1px solid #eee'
                                        }}
                                        onClick={() => {
                                            if (isPrev) prevSlide();
                                            if (isNext) nextSlide();
                                        }}
                                    >
                                        <img src={slide} alt={`Slide ${index}`} style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#f5f5f5' }} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* --- CONTENT SECTION --- */}

                {/* Features Grid */}
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '2.5rem', textAlign: 'center' }}>Key Features</h2>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '6rem' }}>

                    <FeatureCard
                        icon={<Shield size={24} color="#d81b60" />}
                        title="Real-Time Security Scoring"
                        desc="Instantly assess the security of any website you visit with a dynamic scoring system."
                    />
                    <FeatureCard
                        icon={<Lock size={24} color="#2e7d32" />}
                        title="SSL/TLS Certificate Insights"
                        desc="View detailed certificate verification for HTTPS connections to ensure encrypted communication."
                    />
                    <FeatureCard
                        icon={<Eye size={24} color="#1976d2" />}
                        title="AI Security Chat"
                        desc="Ask AI-powered questions about the current site's safety using the Groq API (LLaMA 3)."
                    />
                    <FeatureCard
                        icon={<AlertTriangle size={24} color="#f57c00" />}
                        title="Link Security Markers"
                        desc="Get visual cues on link safety before clicking to prevent phishing attacks."
                    />
                    <FeatureCard
                        icon={<ExternalLink size={24} color="#7E57C2" />}
                        title="Screen Content Analysis"
                        desc="Powered by Screenpipe to detect potential phishing or risky content displayed on-screen."
                    />

                </div>

                {/* Tech Stack Info */}
                <div style={{ textAlign: 'center', padding: '4rem 0', borderTop: '1px solid #e0e0e0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', marginBottom: '2rem' }}>Tech Stack</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', opacity: 0.8 }}>
                        <span style={{ fontWeight: 600, color: '#d81b60' }}>Chrome Extension APIs</span>
                        <span style={{ fontWeight: 600, color: '#1976d2' }}>Groq API (LLaMA 3)</span>
                        <span style={{ fontWeight: 600, color: '#7E57C2' }}>Screenpipe</span>
                        <span style={{ fontWeight: 600, color: '#FBC02D' }}>JavaScript + Webpack</span>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

// Simple Feature Card Component
function FeatureCard({ icon, title, desc }) {
    return (
        <div style={{
            background: '#fff', padding: '2rem', borderRadius: '20px',
            border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column', gap: '1rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.02)', transition: 'all 0.3s ease'
        }}>
            <div style={{ width: '50px', height: '50px', background: '#fafafa', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
            </div>
            <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#222', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.95rem' }}>{desc}</p>
            </div>
        </div>
    );
}
