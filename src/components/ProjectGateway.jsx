import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Smartphone, Monitor, Cpu } from 'lucide-react';
import AIMascot from './AIMascot';

// ASSETS
import androidIcon from '../assets/mobile/android.png';
import flutterIcon from '../assets/mobile/flutter.png';
import kotlinIcon from '../assets/mobile/kotlin.png';
import jediSymbol from '../assets/ai-and-agents/jedi-symbol.svg';
import pythonIcon from '../assets/ai-and-agents/python.png';
import jsIcon from '../assets/ai-and-agents/js-logo.png';
import aiIcon from '../assets/ai-and-agents/ai.png';
import automationIcon from '../assets/ai-and-agents/automation.png';

// --- UTILS: 3D TILT EFFECT ---
const use3DTilt = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return { x: mouseX, y: mouseY, handleMouseMove, handleMouseLeave };
};

// Helper for hover state on the icon
const ArrowRightWrapper = () => {
    return (
        <motion.div
            variants={{
                initial: { color: '#111' },
                hover: { color: '#fff' }
            }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <ArrowRight size={24} />
        </motion.div>
    )
}

// --- COMPONENT: GATEWAY CARD (WRAPPER) ---
const GatewayCard = ({ title, subtitle, color, href, children, icon: Icon }) => {
    const { x, y, handleMouseMove, handleMouseLeave } = use3DTilt();
    const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]); // Reverse for natural tilt
    const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);

    return (
        <Link href={href}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    perspective: 1000,
                    cursor: 'pointer',
                    height: '100%'
                }}
            >
                <motion.div
                    style={{
                        height: '420px',
                        borderRadius: '32px',
                        background: color,
                        position: 'relative',
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    whileHover={{ scale: 1.02, boxShadow: '0 30px 60px -15px rgba(0,0,0,0.15)' }}
                >
                    {/* Header */}
                    <div style={{ padding: '2.5rem', zIndex: 10, transform: 'translateZ(20px)' }}>
                        <div style={{
                            width: '50px', height: '50px', borderRadius: '14px',
                            background: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', marginBottom: '1.5rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                        }}>
                            <Icon size={24} color="#333" />
                        </div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1a1a', lineHeight: 1, marginBottom: '0.5rem' }}>
                            {title}
                        </h3>
                        <p style={{ fontSize: '1rem', color: '#555', fontWeight: 500 }}>{subtitle}</p>
                    </div>

                    {/* Content Area */}
                    <div style={{
                        flex: 1,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        transformStyle: 'preserve-3d',
                        zIndex: 5
                    }}>
                        {children}
                    </div>

                    {/* Gradient Overlay for Depth */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(255,255,255,0.5) 0%, transparent 100%)',
                        pointerEvents: 'none',
                        zIndex: 20
                    }} />

                    {/* Visible CTA Arrow (Top Right) */}
                    <div style={{
                        position: 'absolute',
                        top: '2rem',
                        right: '2rem',
                        zIndex: 30,
                        transform: 'translateZ(30px)'
                    }}>
                        <motion.div
                            style={{
                                width: '54px',
                                height: '54px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                                position: 'relative',
                                overflow: 'hidden', // Clip the spinner
                                background: '#fff', // Fallback
                                cursor: 'pointer'
                            }}
                            whileHover="hover"
                            initial="initial"
                        >
                            {/* Rotating Silver Border (Hidden by default, shown on hover) */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0 },
                                    hover: { opacity: 1 }
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '-150%', left: '-50%', width: '200%', height: '400%',
                                    background: 'conic-gradient(from 0deg, transparent 0%, #C0C0C0 25%, #FFFFFF 50%, #C0C0C0 75%, transparent 100%)',
                                    zIndex: 0
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner Circle (Mask) */}
                            <div style={{
                                position: 'absolute',
                                inset: '3px', // Border width
                                background: '#fff',
                                borderRadius: '50%',
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <motion.div
                                    variants={{
                                        initial: { x: 0 },
                                        hover: { x: 4 }
                                    }}
                                >
                                    <ArrowRight size={24} color="#111" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </Link>
    );
};

// --- MICRO-INTERACTION: MOBILE STACK ---
const MobileShowcase = () => {
    return (
        <motion.div
            style={{
                position: 'relative',
                width: '180px',
                height: '240px', // Visible part
                marginBottom: '-40px', // Push slightly down
                transformStyle: 'preserve-3d',
            }}
            whileHover="hover"
        >
            {/* Card 3 (Back) */}
            <motion.div
                variants={{ hover: { rotateZ: 15, x: 60, y: 10 } }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                    position: 'absolute', width: '100%', height: '300px',
                    background: '#263238', borderRadius: '24px',
                    border: '4px solid #37474F',
                    top: 0, left: 0, zIndex: 1,
                    transform: 'rotateZ(5deg)',
                    boxShadow: '-10px 10px 20px rgba(0,0,0,0.2)'
                }}
            />
            {/* Card 2 (Middle) */}
            <motion.div
                variants={{ hover: { rotateZ: 0, x: 0, y: -10 } }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                    position: 'absolute', width: '100%', height: '300px',
                    background: '#01579B', borderRadius: '24px',
                    border: '4px solid #0277BD',
                    top: 10, left: -10, zIndex: 2,
                    transform: 'rotateZ(-2deg)',
                    boxShadow: '-10px 10px 20px rgba(0,0,0,0.2)'
                }}
            />
            {/* Card 1 (Front) */}
            <motion.div
                variants={{ hover: { rotateZ: -15, x: -60, y: 10 } }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                    position: 'absolute', width: '100%', height: '300px',
                    background: '#fff', borderRadius: '24px',
                    border: '6px solid #111',
                    top: 20, left: -20, zIndex: 3,
                    boxShadow: '-10px 10px 30px rgba(0,0,0,0.25)',
                    display: 'flex', flexDirection: 'column', overflow: 'hidden'
                }}
            >
                {/* Mock UI */}
                <div style={{ height: '30%', background: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#2196F3' }} />
                </div>
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ height: '12px', width: '60%', background: '#eee', borderRadius: '4px' }} />
                    <div style={{ height: '8px', width: '90%', background: '#f5f5f5', borderRadius: '4px' }} />
                    <div style={{ height: '8px', width: '80%', background: '#f5f5f5', borderRadius: '4px' }} />
                    <div style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
                        <div style={{ flex: 1, height: '60px', borderRadius: '8px', background: '#f0f0f0' }} />
                        <div style={{ flex: 1, height: '60px', borderRadius: '8px', background: '#f0f0f0' }} />
                    </div>
                </div>
            </motion.div>

            {/* Floating Icons */}
            <motion.img src={flutterIcon} style={{ width: '40px', position: 'absolute', top: '-20px', right: '-40px', zIndex: 10 }}
                animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.img src={kotlinIcon} style={{ width: '35px', position: 'absolute', bottom: '100px', left: '-50px', zIndex: 10 }}
                animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
        </motion.div>
    );
};

// --- MICRO-INTERACTION: WEB BROWSER ---
const WebShowcase = () => {
    return (
        <motion.div
            style={{
                width: '90%',
                maxWidth: '300px',
                height: '200px',
                marginBottom: '-20px',
                perspective: '1000px'
            }}
            whileHover="hover"
        >
            <motion.div
                variants={{ hover: { y: -20, rotateX: 5 } }}
                transition={{ type: "spring", stiffness: 120 }}
                style={{
                    width: '100%', height: '100%',
                    background: '#fff', borderRadius: '12px 12px 0 0',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}
            >
                {/* Browser Toolbar */}
                <div style={{ height: '32px', background: '#f8f8f8', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                    <div style={{ marginLeft: '12px', flex: 1, height: '20px', background: '#fff', borderRadius: '4px', border: '1px solid #ddd' }} />
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', position: 'relative' }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#f0f0f0' }} />
                        <div style={{ flex: 1 }}>
                            <div style={{ width: '80%', height: '16px', background: '#333', borderRadius: '4px', marginBottom: '8px' }} />
                            <div style={{ width: '50%', height: '12px', background: '#ccc', borderRadius: '4px' }} />
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                        <div style={{ height: '80px', background: '#f5f5f5', borderRadius: '8px' }} />
                        <div style={{ height: '80px', background: '#f5f5f5', borderRadius: '8px' }} />
                        <div style={{ height: '80px', background: '#f5f5f5', borderRadius: '8px' }} />
                    </div>

                    {/* Cursor Animation */}
                    <motion.div
                        style={{
                            width: '0', height: '0',
                            borderLeft: '12px solid transparent',
                            borderRight: '12px solid transparent',
                            borderBottom: '20px solid #333',
                            position: 'absolute',
                            zIndex: 20,
                            rotate: -35
                        }}
                        animate={{ x: [20, 150, 80, 20], y: [100, 40, 120, 100], opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- MICRO-INTERACTION: AI CORE ---
const AIShowcase = () => {
    return (
        <div style={{
            position: 'relative',
            width: '100%', // Use full width to avoid alignment issues
            height: '300px', // Taller to accommodate larger elements
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '-20px'
        }}>

            {/* Jedi Symbol Background (Static Watermark) */}
            <div
                style={{
                    position: 'absolute',
                    top: '55%', left: '50%', // Centered but slightly lower
                    transform: 'translate(-50%, -50%)',
                    width: '320px', // Much Larger
                    opacity: 0.08,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            >
                <img src={jediSymbol} alt="" style={{ width: '100%' }} />
            </div>

            {/* Tech Stack Orbiting */}
            {[pythonIcon, jsIcon, aiIcon, automationIcon].map((icon, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: '45px', height: '45px', // Larger icons
                        background: '#fff', borderRadius: '50%',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 10,
                        padding: '8px'
                    }}
                    animate={{
                        x: [
                            130 * Math.cos(i * (Math.PI / 2)),
                            130 * Math.cos(i * (Math.PI / 2) + Math.PI * 2)
                        ],
                        y: [
                            130 * Math.sin(i * (Math.PI / 2)),
                            130 * Math.sin(i * (Math.PI / 2) + Math.PI * 2)
                        ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    <img src={icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </motion.div>
            ))}

            {/* The Droid (Center) */}
            <div style={{ zIndex: 20, position: 'relative', marginTop: '20px' }}>
                <AIMascot size={150} color="#4CAF50" isThinking={false} />
            </div>

            {/* Holographic Rings (Foreground) */}
            <motion.div
                style={{
                    position: 'absolute', inset: 10,
                    borderRadius: '50%', border: '1px dashed #A5D6A7',
                    opacity: 0.2, zIndex: 5
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};


// --- EXPORTED COMPONENT ---
export default function ProjectGateway() {
    return (
        <section className="container section" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px', fontFamily: '"Orbitron", sans-serif' }}>
                    EXPLORE WORK
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                    Dive into specific domains. From fluid mobile apps to intelligent agents.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                padding: '0 1rem'
            }}>
                {/* 1. Mobile */}
                <GatewayCard
                    title="Mobile Apps"
                    subtitle="Flutter & React Native"
                    color="#E3F2FD"
                    href="/mobile"
                    icon={Smartphone}
                >
                    <MobileShowcase />
                </GatewayCard>

                {/* 2. Web */}
                <GatewayCard
                    title="Web Platforms"
                    subtitle="React, Next.js, System Design"
                    color="#F3E5F5"
                    href="/web"
                    icon={Monitor}
                >
                    <WebShowcase />
                </GatewayCard>

                {/* 3. AI */}
                <GatewayCard
                    title="AI & Agents"
                    subtitle="LLMs, RAG, Python"
                    color="#E8F5E9"
                    href="/ai"
                    icon={Cpu}
                >
                    <AIShowcase />
                </GatewayCard>
            </div>
        </section>
    );
}
