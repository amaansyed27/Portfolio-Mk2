import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, Activity, Smartphone, Heart, Zap, Layers, ChevronLeft, ChevronRight, Code, Brain, FileText, BarChart } from 'lucide-react';

// --- IMAGES ---
import logoImg from '../assets/mobile/soma/soma-logo.png';
import toolsImg from '../assets/mobile/soma/tools-&-health-assistant.png';
import handwritingImg from '../assets/mobile/soma/handwriting analyzer.png';
import mentalHealthImg from '../assets/mobile/soma/mentalh-health.png';
import resultImg from '../assets/mobile/soma/result.png';

// --- SLIDES ---
const IMAGES = [toolsImg, handwritingImg, mentalHealthImg, resultImg];

// --- THEME ---
const THEME = {
    bg: '#E0F2F1', // Light Teal
    text: '#004D40', // Dark Teal
    accent: '#00897B', // Teal Accent
    cardBg: '#FFFFFF',
    cardBorder: 'rgba(0, 77, 64, 0.1)',
};

export default function SomaDetails({ onClose }) {
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

    // Scroll to top upon opening
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
                    boxShadow: '0 10px 30px rgba(0, 77, 64, 0.15)',
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
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '20px', background: 'rgba(255,255,255,0.6)', border: `1px solid ${THEME.cardBorder}`, marginBottom: '1.5rem' }}
                    >
                        <Heart size={16} color={THEME.accent} fill={THEME.accent} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: THEME.accent, letterSpacing: '0.5px' }}>HEALTH HACKATHON FINALIST</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-2px', color: THEME.text }}
                    >
                        <img src={logoImg} alt="Soma" style={{ height: '60px', width: 'auto', verticalAlign: 'middle', marginRight: '15px', marginBottom: '10px' }} />
                        SOMA V1.
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.2rem', color: THEME.text, opacity: 0.8, maxWidth: '750px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}
                    >
                        An Android health companion integrating <b>Health Connect</b> & <b>Generative AI</b>.
                    </motion.p>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.45 }}
                        style={{ fontSize: '1rem', color: THEME.text, opacity: 0.7, maxWidth: '700px', margin: '0 auto 2.5rem auto', fontStyle: 'italic' }}
                    >
                        "Top 30 Finalist — Johns Hopkins University Health Hackathon"
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}
                    >
                        <button
                            onClick={() => window.open('https://github.com/amaansyed27/SOMAV1', '_blank')}
                            style={{
                                padding: '12px 28px', borderRadius: '12px',
                                background: THEME.accent, color: '#fff', border: 'none',
                                fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '10px',
                                boxShadow: '0 10px 25px rgba(0, 137, 123, 0.25)',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Github size={20} /> GitHub
                        </button>
                    </motion.div>
                </div>

                {/* --- 3D SLIDES CAROUSEL --- */}
                <div style={{ marginBottom: '6rem', position: 'relative', overflow: 'hidden', padding: '2rem 0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: THEME.text, marginBottom: '3rem', textAlign: 'center' }}>Interface Preview</h2>

                    <div style={{
                        position: 'relative',
                        height: '600px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        perspective: '1000px'
                    }}>
                        {/* Navigation Buttons */}
                        <button onClick={prevSlide} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 30, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ChevronLeft size={28} color="#333" /></button>
                        <button onClick={nextSlide} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 30, width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><ChevronRight size={28} color="#333" /></button>

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

                                let x = '50%';
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
                                    x = isMobile ? '-10%' : '-30%';
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 5;
                                    blur = '3px';
                                } else if (isNext) {
                                    x = isMobile ? '10%' : '30%';
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
                                            width: isMobile ? '80%' : '300px', // Phone width
                                            height: 'auto',
                                            aspectRatio: '9/19.5', // Typical phone aspect ratio
                                            borderRadius: '24px',
                                            overflow: 'hidden',
                                            boxShadow: isActive ? '0 20px 50px rgba(0,77,64,0.2)' : 'none',
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

                    {/* PERSONAL STORY */}
                    <div style={{ background: '#fff', padding: '2rem', borderRadius: '24px', border: `1px solid ${THEME.cardBorder}`, gridColumn: '1 / -1' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#E0F2F1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Smartphone size={24} color={THEME.accent} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: THEME.text }}>Creating SOMA</h3>
                        <p style={{ color: THEME.text, opacity: 0.8, lineHeight: 1.6 }}>
                            "This was my <b>first major native Android app</b> I made on my own. It was also my first team hackathon and only my 2nd hackathon ever. We were selected as a <b>Top 30 Finalist</b> at the prestigious <b>Johns Hopkins VIT Health Hackathon</b>."
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div style={{ background: '#fff', padding: '2rem', borderRadius: '24px', border: `1px solid ${THEME.cardBorder}` }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#E0F2F1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Brain size={24} color={THEME.accent} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: THEME.text }}>AI & Analysis</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { title: 'RxAnalysis', desc: 'Scan prescriptions for insights using AI.' },
                                { title: 'ReportAnalyzer', desc: 'Analyze lab reports with Generative AI.' },
                                { title: 'AI Chat Bot', desc: 'Personal health assistant powered by Gemini.' },
                                { title: 'Handwriting Recognition', desc: 'Decipher doctor notes.' }
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

                    {/* HEALTH TOOLS */}
                    <div style={{ background: '#fff', padding: '2rem', borderRadius: '24px', border: `1px solid ${THEME.cardBorder}` }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: '#E0F2F1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <Activity size={24} color={THEME.accent} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: THEME.text }}>Health Tools</h3>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { title: 'Health Connect', desc: 'Syncs steps, heart rate, & vitals.' },
                                { title: 'Mental Health', desc: 'Journaling, venting, & meditation tools.' },
                                { title: 'Markdown Reports', desc: 'Beautifully rendered medical summaries.' },
                                { title: 'Vico Charts', desc: 'Visual analytics of your health data.' }
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

                {/* TECH STACK */}
                <div style={{ background: '#fff', borderRadius: '30px', padding: '3rem', marginBottom: '4rem', border: `1px solid ${THEME.cardBorder}` }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center', color: THEME.text }}>Tech Stack</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {['Kotlin', 'Jetpack Compose', 'Health Connect', 'Google GenAI', 'MVVM', 'Coil', 'Lottie', 'Room DB', 'Vico Charts'].map((tech, i) => (
                            <span key={i} style={{
                                padding: '10px 20px', borderRadius: '12px',
                                background: '#E0F2F1', color: THEME.accent,
                                fontWeight: 700, fontSize: '1rem'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FOOTER credit */}
                <div style={{ textAlign: 'center', opacity: 0.6 }}>
                    <p style={{ fontSize: '0.9rem', color: THEME.text }}>Top 30 Finalist @ Johns Hopkins VIT Hackathon</p>
                </div>

            </div>
        </motion.div>
    );
}
