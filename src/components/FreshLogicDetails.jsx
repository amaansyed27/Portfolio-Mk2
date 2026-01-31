
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, CloudRain, Truck, Leaf, Brain, Activity, BarChart3, Wind, Thermometer, MapPin, Award, ChevronLeft, ChevronRight } from 'lucide-react';

// --- SLIDES IMPORTS ---
import slide1 from '../assets/ai-and-agents/freshlogic/the-problem.jpg';
import slide2 from '../assets/ai-and-agents/freshlogic/exsisting-solutions.jpg';
import slide3 from '../assets/ai-and-agents/freshlogic/our-solution.jpg';
import slide4 from '../assets/ai-and-agents/freshlogic/what-it-unlocks.jpg';
import slide5 from '../assets/ai-and-agents/freshlogic/ui.jpg';
import slide6 from '../assets/ai-and-agents/freshlogic/final-call.jpg';

const PRESENTATION_SLIDES = [slide1, slide2, slide3, slide4, slide5, slide6];

const ACCENT_COLOR = '#43a047'; // Agriculture Green

export default function FreshLogicDetails({ onClose }) {
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
                background: `#fff`,
                color: '#111',
                paddingTop: isMobile ? '80px' : '6rem',
                paddingBottom: '4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Pattern - Leaf/Organicish */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(#e8f5e9 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.8
                }} />

                <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 4rem', position: 'relative', zIndex: 2 }}>

                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        {/* Hackathon Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem',
                                background: '#E8F5E9', padding: '8px 20px', borderRadius: '100px',
                                border: `1px solid ${ACCENT_COLOR}`, boxShadow: '0 4px 15px rgba(67, 160, 71, 0.15)'
                            }}
                        >
                            <Award size={16} color={ACCENT_COLOR} />
                            <span style={{ fontSize: '0.9rem', color: '#2e7d32', fontWeight: 700, letterSpacing: '0.5px' }}>
                                2ND PLACE - GENAI HACKATHON (ML MUMBAI)
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            style={{
                                fontSize: isMobile ? '2.5rem' : '4.5rem',
                                fontWeight: 800, margin: '0 0 1.5rem 0',
                                letterSpacing: '-1px', color: '#1b5e20', lineHeight: 1.1
                            }}
                        >
                            <span style={{ fontSize: isMobile ? '2rem' : '4rem', verticalAlign: 'middle', marginRight: '10px' }}>🌾</span>
                            FreshLogic.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            style={{
                                fontSize: isMobile ? '1.1rem' : '1.35rem',
                                color: '#555', maxWidth: '750px', margin: '0 auto',
                                lineHeight: 1.6
                            }}
                        >
                            An <b>Agentic AI Platform</b> preventing food spoilage. Combines <b>13+ Google Cloud APIs</b> with a <b>proprietary predictive regressor model</b> to create the ultimate agricultural agent.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                        >
                            <button
                                onClick={() => window.open('https://github.com/amaansyed27/FreshLogic', '_blank')}
                                style={{
                                    padding: '12px 28px', borderRadius: '12px',
                                    background: '#2e7d32', color: '#fff', border: 'none',
                                    fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    boxShadow: '0 10px 25px rgba(46, 125, 50, 0.25)',
                                    transition: 'transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <Github size={20} /> GitHub
                            </button>
                            <button
                                disabled
                                style={{
                                    padding: '12px 28px', borderRadius: '12px',
                                    background: '#fff', color: '#999', border: '1px solid #e0e0e0',
                                    fontSize: '1rem', fontWeight: 500, cursor: 'not-allowed',
                                    display: 'flex', alignItems: 'center', gap: '10px'
                                }}
                            >
                                <CloudRain size={20} /> Hugging Face (Coming Soon)
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: isMobile ? '2rem 1.25rem' : '4rem 2rem' }}>

                {/* Performance Metrics Table */}
                <div style={{ marginBottom: '6rem', background: '#fff', borderRadius: '24px', padding: isMobile ? '1.5rem' : '3rem', boxShadow: '0 20px 60px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1b5e20', marginBottom: '0.5rem' }}>Model Performance</h2>
                        <p style={{ color: '#666' }}>Trained on 92,000 samples across 92 crop types using Arrhenius Equation physics.</p>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #e0e0e0', textAlign: 'left' }}>
                                    <th style={{ padding: '1rem', color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Model</th>
                                    <th style={{ padding: '1rem', color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Type</th>
                                    <th style={{ padding: '1rem', color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>MAE</th>
                                    <th style={{ padding: '1rem', color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>R² Score</th>
                                    <th style={{ padding: '1rem', color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Accuracy/F1</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '1.25rem 1rem', fontWeight: 600 }}>RandomForest Regressor</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#555' }}>Spoilage Risk (0.0 - 1.0)</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#2e7d32', fontWeight: 700 }}>0.0344</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#2e7d32', fontWeight: 700 }}>0.9741</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#888' }}>-</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '1.25rem 1rem', fontWeight: 600 }}>RandomForest Classifier</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#555' }}>Safe vs Spoiled</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#888' }}>-</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#888' }}>-</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#2e7d32', fontWeight: 700 }}>95.9% / 0.96</td>
                                </tr>
                                <tr style={{ background: '#f1f8e9' }}>
                                    <td style={{ padding: '1.25rem 1rem', fontWeight: 700, color: '#1b5e20' }}>Ensemble Model</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#555' }}>Combined Logic</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#1b5e20', fontWeight: 700 }}>0.0344</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#1b5e20', fontWeight: 700 }}>0.9741</td>
                                    <td style={{ padding: '1.25rem 1rem', color: '#1b5e20', fontWeight: 700 }}>Target: 96%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --- HACKATHON SLIDES - MODERN CAROUSEL --- */}
                <div style={{ marginBottom: '6rem', position: 'relative', overflow: 'hidden', padding: '2rem 0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '3rem', textAlign: 'center' }}>Project Presentation</h2>

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
                                // Calculate position relative to current index
                                let position = index - currentIndex;

                                // Handle infinite loop wrapping logic for smoother visual flow if needed,
                                // but for simple prev/next/active:
                                // We strictly want to show: prev (-1), current (0), next (1)
                                // But since we have a list, we need to handle the wrap-around logic for the render.
                                // A simpler approach for Framer Motion 'AnimatePresence' style or simple transforms:

                                const isActive = index === currentIndex;
                                const isPrev = index === (currentIndex - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length;
                                const isNext = index === (currentIndex + 1) % PRESENTATION_SLIDES.length;

                                // Determine visual state
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
                                } else if (index === (currentIndex - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length) {
                                    // Previous Slide logic (visual left)
                                    // Note: If using true circular index, we need to be careful.
                                    // Let's rely on a simpler circular distance relative to active.
                                    // But standard map index vs State index is tricky for circular.
                                    // Alternative: Just check if it's the specific index state.
                                    x = isMobile ? '-10%' : '-60%'; // Offset to left
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 5;
                                    blur = '3px';
                                    rotateY = 15; // 3D effect
                                } else if (index === (currentIndex + 1) % PRESENTATION_SLIDES.length) {
                                    // Next Slide logic (visual right)
                                    x = isMobile ? '10%' : '60%'; // Offset to right
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 5;
                                    blur = '3px';
                                    rotateY = -15; // 3D effect
                                }

                                // We intentionally hide others to keep DOM clean or just let them fade out
                                if (!isActive && !isPrev && !isNext) {
                                    return null;
                                }

                                return (
                                    <motion.div
                                        key={index}
                                        initial={false}
                                        animate={{
                                            x,
                                            scale,
                                            opacity,
                                            filter: `blur(${blur})`,
                                            zIndex,
                                            rotateY
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }}
                                        style={{
                                            position: 'absolute',
                                            width: isMobile ? '80%' : '600px',
                                            height: 'auto',
                                            aspectRatio: '16/9',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: isActive ? '0 20px 50px rgba(0,0,0,0.2)' : 'none',
                                            backgroundColor: '#fff',
                                            left: 0, right: 0, margin: 'auto', // Centering trick for absolute
                                            cursor: isActive ? 'default' : 'pointer'
                                        }}
                                        onClick={() => {
                                            if (isPrev) prevSlide();
                                            if (isNext) nextSlide();
                                        }}
                                    >
                                        <img
                                            src={slide}
                                            alt={`Slide ${index}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                        {/* Overlay for non-active slides to darken them slightly */}
                                        {!isActive && (
                                            <div style={{
                                                position: 'absolute', inset: 0,
                                                background: 'rgba(255,255,255,0.4)'
                                            }} />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '2.5rem', textAlign: 'center' }}>Core Intelligence Modules</h2>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '6rem' }}>

                    <FeatureCard
                        icon={<Brain size={24} color="#d81b60" />}
                        title="Evaluative AI Agent"
                        desc="Powered by Gemini 2.5 Flash + RAG. Retrieves specific storage rules for 92 distinct crops and acts as a 'Race Engineer' for your shipment."
                    />
                    <FeatureCard
                        icon={<Activity size={24} color="#2e7d32" />}
                        title="Ensemble ML Model"
                        desc="Combines a Regressor for continuous risk (0-100%) and a Classifier for binary safety checks. High confidence decisions only."
                    />
                    <FeatureCard
                        icon={<MapPin size={24} color="#1976d2" />}
                        title="Dynamic Telemetry"
                        desc="Uses Google Maps & Routes API for real-time routing and geocoding. Tracks the shipment's path across real-world waypoints."
                    />
                    <FeatureCard
                        icon={<Thermometer size={24} color="#f57c00" />}
                        title="Per-Waypoint Analysis"
                        desc="Integrates Google Cloud Weather API to check temperature/humidity at every checkpoint. Calculates 'Danger Zone' exposure time."
                    />

                </div>

                {/* Stack Info */}
                <div style={{ textAlign: 'center', padding: '4rem 0', borderTop: '1px solid #e0e0e0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', marginBottom: '2rem' }}>Powered By</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', opacity: 0.7 }}>
                        <span style={{ fontWeight: 600 }}>Google Cloud Platform</span>
                        <span style={{ fontWeight: 600 }}>Gemini 2.5</span>
                        <span style={{ fontWeight: 600 }}>FastAPI</span>
                        <span style={{ fontWeight: 600 }}>React + Vite</span>
                        <span style={{ fontWeight: 600 }}>scikit-learn</span>
                        <span style={{ fontWeight: 600 }}>Google Weather API</span>
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
