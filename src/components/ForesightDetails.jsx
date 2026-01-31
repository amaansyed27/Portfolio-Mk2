import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Play, TrendingUp, AlertTriangle, Scale, Globe, Cpu, Server, Database, ShieldCheck } from 'lucide-react';

const ACCENT_COLOR = '#ffbd2e'; // Fintech Gold

// Tabbed Data for Demos
const DEMO_TABS = [
    {
        id: 'market',
        label: 'Market Intelligence',
        icon: <TrendingUp size={16} />,
        video: 'K1k6udgMGbU',
        desc: 'Real-time stock analysis & competitive insights via Finnhub.'
    },
    {
        id: 'crisis',
        label: 'Crisis Simulation',
        icon: <AlertTriangle size={16} />,
        video: 'lCp44184OYc',
        desc: 'AI-generated crisis scenarios & strategic response planning.'
    },
    {
        id: 'legal',
        label: 'Legal Inquiry',
        icon: <Scale size={16} />,
        video: 'tlhiUQdmBgw',
        desc: 'RAG-powered research into Indian Penal Code & compliance.'
    }
];

const FeatureCard = ({ icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid #e5e5e5',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        <div style={{
            position: 'absolute', top: 0, left: 0, width: '4px', height: '100%',
            background: ACCENT_COLOR, opacity: 0.5
        }} />
        <div style={{
            width: '40px', height: '40px', borderRadius: '8px',
            background: `${ACCENT_COLOR}20`, color: '#d48806',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {icon}
        </div>
        <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>{desc}</p>
        </div>
    </motion.div>
);

export default function ForesightDetails({ onClose }) {
    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState(DEMO_TABS[0]);

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

            {/* --- LIGHT THEME HERO --- */}
            <div style={{
                background: `#fff`,
                color: '#111',
                paddingTop: isMobile ? '80px' : '6rem',
                paddingBottom: '4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Pattern - Light Dot Matrix */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.6
                }} />

                <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 4rem', position: 'relative', zIndex: 2 }}>

                    {/* Desktop GRID Layout */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '0.7fr 1.3fr', // Wider monitor
                        gap: isMobile ? '3rem' : '4rem',
                        alignItems: 'center'
                    }}>

                        {/* LEFT: Text Content */}
                        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem',
                                    background: '#FFF8E1', padding: '6px 16px', borderRadius: '100px',
                                    border: `1px solid ${ACCENT_COLOR}`, alignSelf: isMobile ? 'center' : 'flex-start'
                                }}
                            >
                                <Globe size={14} color="#d48806" />
                                <span style={{ fontSize: '0.8rem', color: '#d48806', fontWeight: 700, letterSpacing: '1px' }}>GLOBAL STRATEGY MODULE</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                                style={{
                                    fontSize: isMobile ? '2.5rem' : '4.5rem',
                                    fontWeight: 800, margin: '0 0 1.5rem 0',
                                    letterSpacing: '-1px', color: '#111', lineHeight: 1.1
                                }}
                            >
                                Foresight.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                                style={{
                                    fontSize: isMobile ? '1rem' : '1.25rem',
                                    color: '#555', maxWidth: '600px',
                                    margin: isMobile ? '0 auto' : '0',
                                    lineHeight: 1.6
                                }}
                            >
                                An AI Co-Pilot for Corporate Strategy, integrating <span style={{ color: '#d48806', fontWeight: 600 }}>Financial Intelligence</span>, <span style={{ color: '#d48806', fontWeight: 600 }}>Crisis Management</span>, and <span style={{ color: '#d48806', fontWeight: 600 }}>Legal Compliance</span>.
                            </motion.p>

                            {/* Mobile Only: Scroll Prompt */}
                            {isMobile && (
                                <div style={{ marginTop: '2rem', color: ACCENT_COLOR, fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                                    Scroll for Features <TrendingUp size={16} />
                                </div>
                            )}
                        </div>

                        {/* RIGHT: HUD / Monitor Interface */}
                        <motion.div
                            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                background: '#fff',
                                borderRadius: '20px',
                                border: '1px solid #e0e0e0',
                                overflow: 'hidden',
                                boxShadow: '0 30px 80px rgba(0,0,0,0.12)', // Enhanced shadow
                                width: '100%'
                            }}
                        >
                            {/* Monitor Header */}
                            <div style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                padding: '1rem 1.5rem', borderBottom: '1px solid #f0f0f0',
                                background: '#fafafa'
                            }}>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', border: '1px solid rgba(0,0,0,0.1)' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', border: '1px solid rgba(0,0,0,0.1)' }} />
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', border: '1px solid rgba(0,0,0,0.1)' }} />
                                </div>
                                <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#999', fontWeight: 600 }}>SYSTEM.MONITOR // {activeTab.id.toUpperCase()}</span>
                            </div>

                            {/* Layout: Monitor Internal Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '280px 1fr' }}>

                                {/* Tabs Column */}
                                <div style={{ borderRight: isMobile ? 'none' : '1px solid #f0f0f0', borderBottom: isMobile ? '1px solid #f0f0f0' : 'none', background: '#fafafa' }}>
                                    {DEMO_TABS.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab)}
                                            style={{
                                                width: '100%',
                                                padding: '1.25rem',
                                                textAlign: 'left',
                                                background: activeTab.id === tab.id ? '#fff' : 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #f0f0f0',
                                                color: activeTab.id === tab.id ? '#111' : '#666',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                borderLeft: activeTab.id === tab.id ? `3px solid ${ACCENT_COLOR}` : '3px solid transparent',
                                                boxShadow: activeTab.id === tab.id ? '0 2px 10px rgba(0,0,0,0.02)' : 'none'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                                                <div style={{
                                                    color: activeTab.id === tab.id ? '#d48806' : '#999'
                                                }}>
                                                    {tab.icon}
                                                </div>
                                                <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{tab.label}</span>
                                            </div>
                                            {!isMobile && <p style={{ margin: 0, fontSize: '0.75rem', color: '#888', lineHeight: 1.3, paddingLeft: '26px' }}>{tab.desc}</p>}
                                        </button>
                                    ))}
                                    {/* Meta Info Area */}
                                    <div style={{ padding: '1.5rem' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '1rem', fontFamily: 'monospace' }}>
                                            &gt; MODE: ACTIVE<br />
                                            &gt; GEMS: 2.5 FLASH<br />
                                            &gt; API: FINNHUB
                                        </div>
                                        <button
                                            onClick={() => window.open('https://github.com/amaansyed27/Foresight', '_blank')}
                                            style={{
                                                width: '100%', padding: '10px', borderRadius: '8px',
                                                background: '#fff', border: '1px solid #e0e0e0',
                                                color: '#333', fontSize: '0.9rem', cursor: 'pointer',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                                fontWeight: 500, boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ccc'}
                                            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e0e0e0'}
                                        >
                                            <Github size={16} /> Source Code
                                        </button>
                                    </div>
                                </div>

                                {/* Video Column */}
                                <div style={{ background: '#f5f5f5', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <AnimatePresence mode='wait'>
                                        <motion.div
                                            key={activeTab.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ width: '100%', aspectRatio: '16/9' }}
                                        >
                                            <iframe
                                                src={`https://www.youtube.com/embed/${activeTab.video}?autoplay=1&mute=1&loop=1&playlist=${activeTab.video}`}
                                                title={activeTab.label}
                                                style={{ width: '100%', height: '100%', border: 0 }}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- DETAILS CONTENT --- */}
            <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: isMobile ? '3rem 1.25rem' : '4rem 2rem' }}>

                {/* Intro */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111', marginBottom: '1rem' }}>Total Enterprise Awareness</h2>
                    <p style={{ color: '#555', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Foresight isn't just a chatbot. It's a vertically integrated intelligence system that accesses real-time financial markets, legal databases, and historical crisis data.
                    </p>
                </div>

                {/* Features Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '5rem' }}>
                    <FeatureCard
                        icon={<TrendingUp size={20} />} title="Market Intelligence"
                        desc="Live stock analysis using the Finnhub API. Visualizes volatility, trends, and competitor movements instantly."
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={<ShieldCheck size={20} />} title="Crisis Simulation"
                        desc="Generates detailed disaster scenarios and creates step-by-step stakeholder management plans."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={<Scale size={20} />} title="Legal Inquiry (RAG)"
                        desc="Retrieves precise sections from the Indian Penal Code (IPC) using ChromaDB vector search."
                        delay={0.3}
                    />
                </div>

                {/* Architecture */}
                <div style={{ background: '#FFF8E1', borderRadius: '24px', padding: '3rem', textAlign: 'center', border: '1px solid #FFECB3' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: '#4e342e' }}>System Architecture</h3>

                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>

                        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e5e5e5', minWidth: '150px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <Cpu size={32} color={ACCENT_COLOR} style={{ marginBottom: '1rem' }} />
                            <div style={{ fontWeight: 700, color: '#333' }}>Streamlit UI</div>
                            <div style={{ fontSize: '0.8rem', color: '#888' }}>Frontend</div>
                        </div>

                        <div style={{ height: isMobile ? '40px' : '2px', width: isMobile ? '2px' : '40px', background: '#d48806', opacity: 0.3 }} />

                        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e5e5e5', minWidth: '150px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <Server size={32} color="#4caf50" style={{ marginBottom: '1rem' }} />
                            <div style={{ fontWeight: 700, color: '#333' }}>Gemini 2.5</div>
                            <div style={{ fontSize: '0.8rem', color: '#888' }}>Reasoning Core</div>
                        </div>

                        <div style={{ height: isMobile ? '40px' : '2px', width: isMobile ? '2px' : '40px', background: '#d48806', opacity: 0.3 }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: isMobile ? '100%' : 'auto', alignItems: 'center' }}>
                            <div style={{ background: '#fff', padding: '1rem', borderRadius: '12px', border: '1px solid #e5e5e5', minWidth: '140px', width: isMobile ? '100%' : 'auto', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                                <Database size={20} color="#9c27b0" />
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>ChromaDB</div>
                            </div>
                            <div style={{ background: '#fff', padding: '1rem', borderRadius: '12px', border: '1px solid #e5e5e5', minWidth: '140px', width: isMobile ? '100%' : 'auto', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                                <Globe size={20} color="#2196f3" />
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>Finnhub API</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </motion.div>
    );
}
