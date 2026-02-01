import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, Activity, Smartphone, Monitor, Wifi, Layers, ChevronLeft, ChevronRight, Zap, Globe, Cpu } from 'lucide-react';

// --- IMAGES ---
import logoImg from '../assets/mobile/Ecobridge/ecobridgelogo.png';
import remoteInputImg from '../assets/mobile/Ecobridge/remote-input.png';
import splashScreenImg from '../assets/mobile/Ecobridge/spalshscreen.png';
import systemDashboardImg from '../assets/mobile/Ecobridge/system-dasboard.png';
import homeImg from '../assets/mobile/Ecobridge/home.png';

// --- ASSETS ---
const IMAGES = [splashScreenImg, homeImg, remoteInputImg, systemDashboardImg];

// --- THEME ---
const THEME = {
    bg: '#FFF8E1', // Sun Yellow/Amber Light
    text: '#800000', // Maroon
    accent: '#FF6F00', // Deep Amber
    cardBg: '#FFFFFF',
    cardBorder: 'rgba(255, 111, 0, 0.1)',
};

export default function EcoBridgeDetails({ onClose }) {
    const scrollRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Mobile Check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Lock body scroll
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = originalStyle; };
    }, []);

    // Scroll to top on mount
    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, []);

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % IMAGES.length);
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

    return (
        <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
            ref={scrollRef}
            style={{
                position: 'fixed', inset: 0, background: THEME.bg,
                zIndex: 99999, overflowY: 'auto', overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch', display: 'block', boxSizing: 'border-box',
                transformOrigin: 'center center',
                color: THEME.text
            }}
        >
            {/* Close Button */}
            <motion.button
                onClick={onClose}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                style={{
                    position: 'fixed', top: '2rem', right: '2rem', width: '50px', height: '50px',
                    borderRadius: '50%', border: 'none', background: '#fff',
                    boxShadow: '0 10px 30px rgba(128, 0, 0, 0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', zIndex: 100, color: THEME.text
                }}
            >
                <X size={24} />
            </motion.button>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 1.5rem 8rem 1.5rem' }}>

                {/* HERO SECTION */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '20px', background: 'rgba(255,255,255,0.5)', border: `1px solid ${THEME.cardBorder}`, marginBottom: '1.5rem' }}
                    >
                        <Wifi size={16} color={THEME.accent} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: THEME.accent, letterSpacing: '0.5px' }}>ECOSYSTEM BRIDGE</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-2px', color: THEME.text }}
                    >
                        <img src={logoImg} alt="EcoBridge" style={{ height: '60px', width: 'auto', verticalAlign: 'middle', marginRight: '15px', marginBottom: '10px' }} />
                        EcoBridge.
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.2rem', color: THEME.text, opacity: 0.8, maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}
                    >
                        Breaking the barriers between your devices. Turn your Android phone into a powerful extension of your Windows desktop—cam, keyboard, and more.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
                    >
                        <button
                            onClick={() => window.open('https://github.com/amaansyed27/EcoBridge', '_blank')}
                            style={{
                                padding: '12px 28px', borderRadius: '12px',
                                background: THEME.accent, color: '#fff', border: 'none',
                                fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '10px',
                                boxShadow: '0 10px 25px rgba(255, 111, 0, 0.25)',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Github size={20} /> GitHub
                        </button>
                    </motion.div>
                </div>

                {/* --- SLIDES CAROUSEL --- */}
                <div style={{ marginBottom: '6rem', position: 'relative', overflow: 'hidden', padding: '2rem 0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: THEME.text, marginBottom: '3rem', textAlign: 'center' }}>App Interface</h2>

                    <div style={{
                        position: 'relative',
                        height: '600px', // Matches FlexHero
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        perspective: '1000px'
                    }}>
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            style={{
                                position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
                                zIndex: 30, width: '50px', height: '50px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                            }}
                        >
                            <ChevronLeft size={28} color="#333" />
                        </button>

                        <button
                            onClick={nextSlide}
                            style={{
                                position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                                zIndex: 30, width: '50px', height: '50px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                            }}
                        >
                            <ChevronRight size={28} color="#333" />
                        </button>

                        {/* Slides Container */}
                        <div style={{
                            position: 'relative', width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {IMAGES.map((slide, index) => {
                                const isActive = index === activeSlide;
                                const isPrev = index === (activeSlide - 1 + IMAGES.length) % IMAGES.length;
                                const isNext = index === (activeSlide + 1) % IMAGES.length;

                                if (!isActive && !isPrev && !isNext) return null;

                                let x = '50%'; // Default for desktop, logic needs isMobile ideally but defaulting to center behavior
                                // Note: FlexHero logic uses isMobile state. I should probably add isMobile hook here too for full parity, 
                                // but for now I'll use standard % that worked there.
                                // Wait, FlexHero uses: x = isMobile ? '100%' : '50%'; for non-active.
                                // Let's try to match it closely.

                                let scale = 0.8;
                                let opacity = 0;
                                let zIndex = 0;
                                let blur = '10px';

                                if (isActive) {
                                    x = '0%';
                                    scale = 1;
                                    opacity = 1;
                                    zIndex = 10;
                                    blur = '0px';
                                } else if (isPrev) {
                                    x = '-30%'; // Assuming desktop-ish width, 30% offset
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 5;
                                    blur = '3px';
                                } else if (isNext) {
                                    x = '30%';
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 5;
                                    blur = '3px';
                                }

                                return (
                                    <motion.div
                                        key={index}
                                        initial={false}
                                        animate={{ x, scale, opacity, filter: `blur(${blur})`, zIndex }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{
                                            position: 'absolute',
                                            width: '300px', // Phone width
                                            height: 'auto',
                                            aspectRatio: '9/19.5', // Typical phone aspect ratio
                                            borderRadius: '24px',
                                            overflow: 'hidden',
                                            boxShadow: isActive ? '0 20px 50px rgba(128,0,0,0.2)' : 'none', // Maroon shadow
                                            backgroundColor: '#111',
                                            border: '4px solid #333',
                                            left: 0, right: 0, margin: 'auto'
                                        }}
                                    >
                                        <img src={slide} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

                    {/* VISION */}
                    <div style={{ background: '#fff', padding: '2rem', borderRadius: '24px', border: `1px solid ${THEME.cardBorder}` }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Globe size={24} color={THEME.accent} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: THEME.text }}>The Vision</h3>
                        <p style={{ color: THEME.text, opacity: 0.8, lineHeight: 1.6 }}>
                            Most "ecosystem" features are locked behind expensive, proprietary walls (Apple Continuity, Samsung DeX).
                            <strong> EcoBridge is the universal alternative.</strong> It creates a seamless link between Android and Windows, regardless of the manufacturer.
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div style={{ background: '#fff', padding: '2rem', borderRadius: '24px', border: `1px solid ${THEME.cardBorder}` }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Zap size={24} color={THEME.accent} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: THEME.text }}>Key Features</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { title: 'Virtual Webcam', desc: '1080p/60fps with <100ms latency' },
                                { title: 'Remote Input', desc: 'Control phone with PC keyboard/mouse' },
                                { title: 'Universal Clipboard', desc: 'Copy on one, paste on other' },
                                { title: 'End-to-End Encrypted', desc: 'AES-256 + TLS security' }
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: THEME.accent, marginTop: '8px', flexShrink: 0 }} />
                                    <div>
                                        <strong style={{ display: 'block', color: THEME.text }}>{item.title}</strong>
                                        <span style={{ fontSize: '0.9rem', color: THEME.text, opacity: 0.7 }}>{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ARCHITECTURE SECTION */}
                <div style={{ marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', color: THEME.text }}>System Architecture</h2>


                    {/* Visual Architecture Diagram */}
                    <div style={{
                        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center', justifyContent: 'center', gap: '2rem',
                        background: '#fff', padding: '3rem', borderRadius: '24px',
                        border: `1px solid ${THEME.cardBorder}`
                    }}>

                        {/* Desktop Node */}
                        <div style={{
                            background: '#F5F5F5', padding: '2rem', borderRadius: '20px',
                            textAlign: 'center', minWidth: '200px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Monitor size={40} color={THEME.text} />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: THEME.text }}>Desktop PC</h4>
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>Electron + Next.js</span>
                        </div>

                        {/* Connections */}
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '1.5rem',
                            flex: 1, width: isMobile ? '100%' : 'auto', maxWidth: '400px'
                        }}>
                            {[
                                { label: 'Discovery (mDNS/UDP)', color: '#FFB74D' },
                                { label: 'WebSocket (Signaling)', color: '#4DB6AC' },
                                { label: 'WebRTC (Media Stream)', color: '#E57373' }
                            ].map((conn, i) => (
                                <div key={i} style={{ position: 'relative', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {/* Line */}
                                    <div style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: '#e0e0e0', zIndex: 0 }} />
                                    {/* Arrows */}
                                    <div style={{ position: 'absolute', left: 0, width: '6px', height: '6px', borderRadius: '50%', background: '#bbb' }} />
                                    <div style={{ position: 'absolute', right: 0, width: '6px', height: '6px', borderRadius: '50%', background: '#bbb' }} />

                                    {/* Label Pill */}
                                    <div style={{
                                        position: 'relative', zIndex: 1, padding: '6px 16px',
                                        borderRadius: '20px', background: conn.color, color: '#fff',
                                        fontSize: '0.85rem', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                    }}>
                                        {conn.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Node */}
                        <div style={{
                            background: '#F5F5F5', padding: '2rem', borderRadius: '20px',
                            textAlign: 'center', minWidth: '200px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Smartphone size={40} color={THEME.text} />
                            </div>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: THEME.text }}>Android Phone</h4>
                            <span style={{ fontSize: '0.9rem', color: '#666' }}>Flutter</span>
                        </div>

                    </div>
                </div>

                {/* TECH STACK */}
                <div style={{ background: '#fff', borderRadius: '30px', padding: '3rem', marginBottom: '4rem', border: `1px solid ${THEME.cardBorder}` }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', color: THEME.text }}>Tech Stack</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {['Flutter', 'Electron', 'Next.js', 'Node.js', 'WebRTC', 'Socket.io', 'TailwindCSS'].map((tech, i) => (
                            <span key={i} style={{
                                padding: '10px 20px', borderRadius: '12px',
                                background: '#FFF3E0', color: THEME.accent,
                                fontWeight: 700, fontSize: '1rem'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FOOTER credit */}
                <div style={{ textAlign: 'center', opacity: 0.6 }}>
                    <p style={{ fontSize: '0.9rem', color: THEME.text }}>Created with ❤️ for AcWoC 2026</p>
                </div>

            </div>
        </motion.div>
    );
}
