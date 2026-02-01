import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIMascot from './AIMascot';
import { Terminal, Cpu, Shield, Layers, Eye, Fingerprint, Sparkles, Rocket } from 'lucide-react';
import BackgroundDoodles from './BackgroundDoodles';

// --- ASSET IMPORTS ---
import aiIcon from '../assets/ai-and-agents/ai.png';
import automationIcon from '../assets/ai-and-agents/automation.png';
import jediSymbol from '../assets/ai-and-agents/jedi-symbol.svg';
import multiAgentIcon from '../assets/ai-and-agents/multi-agent-system.png';
import pythonIcon from '../assets/ai-and-agents/python.png';
import edenticLogo from '../assets/ai-and-agents/edentic/edentic-logo.png';
import klipifyLogo from '../assets/ai-and-agents/klipify/klipify-logo.png';
import sentinelLogo from '../assets/ai-and-agents/sentinel-logo/sentinel-logo.png';

const FALLING_ICONS = [aiIcon, automationIcon, multiAgentIcon, pythonIcon];

// --- HOLOGRAPHIC PARTICLES ---
const HolographicParticles = () => {
    const particles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5
    }));

    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        borderRadius: '50%',
                        background: 'rgba(0, 255, 136, 0.4)',
                        boxShadow: '0 0 10px rgba(0, 255, 136, 0.6)'
                    }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.5, 0.5],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

// --- FALLING ICONS BACKGROUND ---
const FallingIcons = () => {
    const [icons] = useState(() => Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        src: FALLING_ICONS[i % FALLING_ICONS.length],
        left: (i * (100 / 15)) + (Math.random() * 2 - 1), // Even distribution with slight jitter
        delay: Math.random() * 8,
        duration: 20 + Math.random() * 12,
        size: 35 + Math.random() * 50,
        rotate: Math.random() * 360
    })));

    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            {icons.map((icon) => (
                <motion.img
                    key={icon.id}
                    src={icon.src}
                    style={{
                        position: 'absolute',
                        left: `${icon.left}%`,
                        top: -100,
                        width: icon.size,
                        height: icon.size,
                        opacity: 0.07,
                        filter: 'grayscale(100%) contrast(1.2)',
                        rotate: icon.rotate
                    }}
                    animate={{ y: ['0vh', '110vh'], rotate: [icon.rotate, icon.rotate + 180] }}
                    transition={{
                        duration: icon.duration,
                        repeat: Infinity,
                        delay: icon.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

// --- DATA: The 6 Projects ---
const AI_PROJECTS = [
    {
        id: 'freshlogic',
        title: 'FreshLogic',
        icon: <span style={{ fontSize: '40px', lineHeight: 1 }}>🌾</span>,
        color: '#43a047',
        glowColor: 'rgba(67, 160, 71, 0.5)',
        logs: [
            "> Telemetry Service: ONLINE",
            "> Connecting 13+ Google Cloud APIs...",
            "> Proprietary Regressor: ACTIVE",
            "> Spoilage Risk Analysis: STARTED"
        ]
    },
    {
        id: 'scorpion',
        title: 'Scorpion-CLI',
        icon: <span style={{ fontSize: '40px', lineHeight: 1 }}>🦂</span>,
        color: '#ffae00',
        glowColor: 'rgba(255, 174, 0, 0.5)',
        logs: [
            "> Scorpion Agent Initialized...",
            "> Core: qwen3:8b [LOCAL]",
            "> Mode: Smart Research [ACTIVE]",
            "> Web: Connected (Ollama)",
            "> Analyzing System Performance..."
        ]
    },
    {
        id: 'edentic',
        title: 'Edentic',
        icon: <img src={edenticLogo} alt="Edentic" style={{ width: '42px', height: 'auto' }} />,
        color: '#00ccff',
        glowColor: 'rgba(0, 204, 255, 0.5)',
        logs: [
            "> Edentic Studio Initializing...",
            "> VideoDB Engine: ONLINE",
            "> AI Vision: Gemini 2.5 Flash",
            "> Audio Synthesis: Active",
            "> Ready for Multimedia Creation."
        ]
    },
    {
        id: 'klipify',
        title: 'Klipify',
        icon: <img src={klipifyLogo} alt="Klipify" style={{ width: '42px', height: 'auto' }} />,
        color: '#bd93f9',
        glowColor: 'rgba(189, 147, 249, 0.5)',
        logs: [
            "> Klipify Edu-Engine Active...",
            "> Analyzing Educational Content...",
            "> Summarization: Active",
            "> Quiz Generation: Ready"
        ]
    },
    {
        id: 'foresight',
        title: 'Foresight',
        icon: <Eye size={42} />,
        color: '#ffbd2e',
        glowColor: 'rgba(255, 189, 46, 0.5)',
        logs: [
            "> Strategy Engine Init...",
            "> Connecting Finnhub API...",
            "> Loading Indian Penal Code...",
            "> Simulation Mode: READY"
        ]
    },
    {
        id: 'sentinel',
        title: 'Sentinel',
        icon: <img src={sentinelLogo} alt="Sentinel" style={{ width: '42px', height: 'auto' }} />,
        color: '#ff5f56',
        glowColor: 'rgba(255, 95, 86, 0.5)',
        logs: [
            "> Sentinel Core: ONLINE",
            "> AI Engine: LLaMA 3 (Groq)",
            "> Analyzing DOM Elements...",
            "> Screenpipe Stream: SECURE",
            "> System Integrity: Verified"
        ]
    }
];

// --- LIGHTSABER CONNECTION LINE ---
const LightsaberLine = ({ startX, startY, endX, endY, color, isActive, delay = 0 }) => {
    const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
    const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));

    return (
        <motion.div
            style={{
                position: 'absolute',
                left: startX,
                top: startY,
                width: length,
                height: '3px',
                transformOrigin: '0 50%',
                transform: `rotate(${angle}deg)`,
                zIndex: 2
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
                scaleX: 1,
                opacity: isActive ? 1 : 0.3,
                boxShadow: isActive ? `0 0 20px ${color}, 0 0 40px ${color}` : 'none'
            }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
        >
            {/* Core of lightsaber */}
            <div style={{
                width: '100%',
                height: '100%',
                background: isActive
                    ? `linear-gradient(90deg, transparent, ${color}, ${color}, transparent)`
                    : 'linear-gradient(90deg, transparent, rgba(150, 150, 150, 0.3), transparent)',
                borderRadius: '2px'
            }} />

            {/* Glow effect */}
            {isActive && (
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '-4px',
                        left: 0,
                        width: '100%',
                        height: '11px',
                        background: `linear-gradient(90deg, transparent, ${color}40, ${color}40, transparent)`,
                        filter: 'blur(4px)',
                        borderRadius: '6px'
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )}
        </motion.div>
    );
};

// --- PROJECT NODE COMPONENT (Larger, More Dramatic) ---
const ProjectNode = ({ project, isActive, onHover, position, delay = 0, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            style={{
                position: 'absolute',
                ...position,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                zIndex: 10
            }}
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay, damping: 12 }}
            onMouseEnter={() => onHover(project)}
            onMouseLeave={() => onHover(null)}
        >
            {/* --- Empire/Cog Style Node --- */}
            <motion.div
                style={{
                    position: 'relative',
                    width: 'clamp(100px, 9vw, 130px)',
                    height: 'clamp(100px, 9vw, 130px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/* 1. Outer Cog Ring (Rotating) */}
                <motion.div
                    animate={{ rotate: isActive ? 360 : 0 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        border: `4px dashed ${isActive ? project.color : '#ccc'}`, // Dashed border mimics cog teeth
                        opacity: isActive ? 1 : 0.5,
                        boxShadow: isActive ? `0 0 20px ${project.glowColor}` : 'none'
                    }}
                />

                {/* 2. Inner Ring (Static or Counter-Rotate) */}
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: '6px',
                        borderRadius: '50%',
                        border: `2px solid ${isActive ? project.color : '#e0e0e0'}`,
                        background: '#fff', // White background so logos pop
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: isActive ? `inset 0 0 15px ${project.glowColor}40` : '0 4px 10px rgba(0,0,0,0.05)'
                    }}
                >
                    {/* Inner decorative "Empire" spokes */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: `radial-gradient(circle at center, transparent 60%, ${isActive ? project.color + '10' : '#f0f0f0'} 61%, transparent 62%)`, // Subtle ring
                        pointerEvents: 'none'
                    }} />

                    {/* The Icon */}
                    <motion.div
                        animate={{ scale: isActive ? 1.1 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{
                            position: 'relative',
                            zIndex: 2,
                            color: project.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {project.icon}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Title with glow */}
            <motion.div
                style={{
                    textAlign: 'center',
                    color: isActive ? project.color : '#444',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textShadow: isActive ? `0 0 10px ${project.glowColor}` : 'none'
                }}
                animate={{ opacity: isActive ? 1 : 0.7 }}
            >
                {project.title}
            </motion.div>
        </motion.div>
    );
};

// --- TERMINAL LOG COMPONENT ---
const TerminalLog = ({ activeProject }) => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        if (!activeProject) {
            setLines(["> System Standby...", "> Hover a module to analyze."]);
            return;
        }

        setLines([]);
        let delays = [];

        activeProject.logs.forEach((log, i) => {
            const timeout = setTimeout(() => {
                setLines(prev => [...prev, log]);
            }, i * 400);
            delays.push(timeout);
        });

        return () => delays.forEach(clearTimeout);
    }, [activeProject]);

    return (
        <div style={{
            fontFamily: '"SF Mono", "Monaco", "Inconsolata", monospace',
            fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', // Dynamic sizing as requested
            lineHeight: 1.6,
            color: activeProject ? activeProject.color : '#00FF88',
            overflow: 'hidden'
        }}>
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.3 }}
                    style={{ textShadow: `0 0 10px ${activeProject ? activeProject.glowColor : 'rgba(0,255,136,0.5)'}` }}
                >
                    {line}
                </motion.div>
            ))}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '18px',
                    background: activeProject ? activeProject.color : '#00FF88',
                    marginLeft: '4px',
                    boxShadow: `0 0 15px ${activeProject ? activeProject.glowColor : 'rgba(0,255,136,0.5)'}`
                }}
            />
        </div>
    );
};

// --- BLAST DOOR TERMINAL ---
const BlastDoorTerminal = ({ activeProject }) => {
    return (
        <div
            style={{
                position: 'relative',
                width: 'min(500px, 90vw)',
                aspectRatio: '4/3', // Specific user request
                maxHeight: '300px', // Cap height so it doesn't get too massive
                borderRadius: '16px',
                zIndex: 20,
                marginTop: '1rem'
            }}
        >
            {/* Terminal Frame */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: '#0a0a0a',
                border: '2px solid #333',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Holographic overlay */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(0,255,136,0.03) 0%, transparent 50%, rgba(0,255,136,0.02) 100%)',
                        pointerEvents: 'none'
                    }}
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Scanlines */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
                    pointerEvents: 'none',
                    opacity: 0.5
                }} />

                {/* Header Bar */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '1rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    paddingBottom: '0.75rem',
                    flexShrink: 0
                }}>
                    <motion.div
                        style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}
                        animate={{ boxShadow: ['0 0 5px #ff5f56', '0 0 15px #ff5f56', '0 0 5px #ff5f56'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}
                        animate={{ boxShadow: ['0 0 5px #ffbd2e', '0 0 15px #ffbd2e', '0 0 5px #ffbd2e'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div
                        style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}
                        animate={{ boxShadow: ['0 0 5px #27c93f', '0 0 15px #27c93f', '0 0 5px #27c93f'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                    <motion.span
                        style={{
                            marginLeft: 'auto',
                            fontSize: '0.7rem',
                            color: activeProject ? activeProject.color : '#00FF88',
                            fontFamily: 'monospace',
                            letterSpacing: '2px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        {activeProject ? '◉ METRICS' : '◉ IDLE'}
                    </motion.span>
                </div>

                {/* Terminal Content */}
                <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <TerminalLog activeProject={activeProject} />
                </div>
            </div>
        </div>
    );
};

// --- UPCOMING PROJECT CARD (Holographic Style) ---
const UpcomingCard = () => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        style={{
            marginTop: '2rem',
            padding: '1rem 1.5rem',
            background: 'linear-gradient(135deg, rgba(189, 147, 249, 0.1) 0%, rgba(255,255,255,0.95) 50%, rgba(189, 147, 249, 0.1) 100%)',
            border: '1px solid rgba(189, 147, 249, 0.3)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: '0 8px 32px rgba(189, 147, 249, 0.15)',
            maxWidth: '380px',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        {/* Shimmer effect */}
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '50%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                transform: 'skewX(-20deg)'
            }}
            animate={{ left: ['−100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />

        <motion.div
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #bd93f9 0%, #8e44ad 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 20px rgba(189, 147, 249, 0.4)'
            }}
            animate={{ boxShadow: ['0 4px 20px rgba(189, 147, 249, 0.4)', '0 4px 30px rgba(189, 147, 249, 0.6)', '0 4px 20px rgba(189, 147, 249, 0.4)'] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <Rocket size={24} color="#fff" />
        </motion.div>
        <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <Sparkles size={14} color="#bd93f9" />
                <span style={{ fontSize: '0.7rem', color: '#bd93f9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Coming Soon</span>
            </div>
            <h4 style={{ fontSize: '1.1rem', color: '#333', margin: 0, fontWeight: 700 }}>U2-Net.</h4>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: '2px 0 0' }}>AI Background Remover</p>
        </div>
    </motion.div>
);

// --- BLAST DOOR TRANSITION COMPONENT ---
const BlastDoorTransition = () => {
    return (
        <motion.div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                pointerEvents: 'none',
                display: 'flex'
            }}
        >
            {/* Left Door */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
                style={{
                    width: '50%',
                    height: '100%',
                    borderRight: '2px solid #1a222e',
                    position: 'relative',
                    background: 'linear-gradient(90deg, #222b38 0%, #2f3b4c 100%)',
                    boxShadow: 'inset -5px 0 20px rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}
            >
                {/* Geometric Panel Detail (Left Half) */}
                <div style={{
                    position: 'absolute',
                    top: '10%', bottom: '10%', right: '0',
                    width: '70%',
                    background: 'linear-gradient(135deg, #374659 0%, #2a3442 100%)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRight: 'none',
                    clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
                    boxShadow: 'inset 2px 2px 10px rgba(255,255,255,0.05), 10px 0 20px rgba(0,0,0,0.3)'
                }} >
                    {/* Inner Plate */}
                    <div style={{
                        position: 'absolute',
                        top: '15%', bottom: '15%', right: '0',
                        width: '70%',
                        border: '2px solid #1a222e',
                        borderRight: 'none',
                        background: '#2f3b4c',
                        clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0 90%)'
                    }} />
                </div>

                {/* Horizontal Groove */}
                <div style={{
                    position: 'absolute',
                    width: '100%', height: '4px',
                    background: '#151b24',
                    boxShadow: '0 1px 0 rgba(255,255,255,0.1)'
                }} />
            </motion.div>

            {/* Right Door */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
                style={{
                    width: '50%',
                    height: '100%',
                    borderLeft: '2px solid #1a222e',
                    position: 'relative',
                    background: 'linear-gradient(-90deg, #222b38 0%, #2f3b4c 100%)',
                    boxShadow: 'inset 5px 0 20px rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}
            >
                {/* Geometric Panel Detail (Right Half) */}
                <div style={{
                    position: 'absolute',
                    top: '10%', bottom: '10%', left: '0',
                    width: '70%',
                    background: 'linear-gradient(-135deg, #374659 0%, #2a3442 100%)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderLeft: 'none',
                    clipPath: 'polygon(100% 15%, 0 0, 0 100%, 100% 85%)',
                    boxShadow: 'inset -2px 2px 10px rgba(255,255,255,0.05), -10px 0 20px rgba(0,0,0,0.3)'
                }} >
                    {/* Inner Plate */}
                    <div style={{
                        position: 'absolute',
                        top: '15%', bottom: '15%', left: '0',
                        width: '70%',
                        border: '2px solid #1a222e',
                        borderLeft: 'none',
                        background: '#2f3b4c',
                        clipPath: 'polygon(100% 10%, 0 0, 0 100%, 100% 90%)'
                    }} />
                </div>

                {/* Horizontal Groove */}
                <div style={{
                    position: 'absolute',
                    width: '100%', height: '4px',
                    background: '#151b24',
                    boxShadow: '0 1px 0 rgba(255,255,255,0.1)'
                }} />
            </motion.div>

            {/* Central Lock Mechanism (Jedi Symbol) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    border: '6px solid #1a222e',
                    background: 'radial-gradient(circle at center, #2e3b4e 0%, #1a222e 100%)',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 60px rgba(0,0,0,0.6), inset 0 0 30px rgba(0,0,0,0.8)'
                }}
                initial={{ scale: 1, rotate: 0 }}
                animate={{ scale: 0, rotate: 360 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "backIn" }}
            >
                {/* Rotating Outer Ring */}
                <motion.div
                    style={{ position: 'absolute', inset: 0, border: '2px dashed rgba(255,255,255,0.1)', borderRadius: '50%' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />

                <motion.img
                    src={jediSymbol}
                    alt="Lock"
                    style={{ width: '90px', opacity: 0.9, filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.4))' }}
                    animate={{ filter: ['drop-shadow(0 0 5px rgba(0, 255, 136, 0.3))', 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.6))', 'drop-shadow(0 0 5px rgba(0, 255, 136, 0.3))'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </motion.div>
    );
};

export default function ProjectAI({ onSelect }) {
    const [activeProject, setActiveProject] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Node positions for desktop
    const nodePositions = {
        left: [
            { top: '8%', left: '8%' },
            { top: '40%', left: '3%' },
            { top: '72%', left: '8%' }
        ],
        right: [
            { top: '8%', right: '8%' },
            { top: '40%', right: '3%' },
            { top: '72%', right: '8%' }
        ]
    };

    // --- MOBILE LAYOUT ---
    if (isMobile) {
        return (
            <section style={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'linear-gradient(180deg, #FAFAFA 0%, #f0f0f0 100%)',
                padding: '60px 16px 100px',
                overflow: 'hidden',
                gap: '2rem'
            }}>
                <BlastDoorTransition />
                <FallingIcons />
                <BackgroundDoodles color="#333" />

                {/* Mobile Watermark */}
                <motion.img
                    src={jediSymbol}
                    alt=""
                    style={{
                        position: 'absolute',
                        top: '20%',
                        width: '90%',
                        maxWidth: '400px',
                        opacity: 0.04,
                        pointerEvents: 'none',
                        zIndex: 0
                    }}
                />

                <div style={{ textAlign: 'center', zIndex: 2 }}>
                    <motion.h2
                        style={{ fontSize: '2.2rem', color: '#111', marginBottom: '0.5rem', fontWeight: 700 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        AI & Agents.
                    </motion.h2>
                    <motion.p
                        style={{ fontSize: '0.95rem', color: '#666', maxWidth: '340px', margin: '0 auto', lineHeight: 1.5 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Neural architectures & autonomous agents.
                    </motion.p>
                </div>

                <motion.div
                    animate={{ y: activeProject ? -8 : 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    style={{ zIndex: 10 }}
                >
                    <AIMascot
                        size={110}
                        color={activeProject ? activeProject.color : '#00FF88'}
                        isThinking={!!activeProject}
                    />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.5rem',
                    width: '100%',
                    maxWidth: '360px',
                    zIndex: 5
                }}>
                    {AI_PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 * i, type: 'spring' }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer'
                            }}
                            onTouchStart={() => setActiveProject(project)}
                            onTouchEnd={() => setActiveProject(null)}
                            onClick={() => (project.id === 'scorpion' || project.id === 'edentic' || project.id === 'klipify' || project.id === 'foresight' || project.id === 'freshlogic' || project.id === 'sentinel') && onSelect && onSelect(project.id)}
                        >
                            <motion.div
                                animate={{
                                    scale: activeProject?.id === project.id ? 1.1 : 1,
                                    boxShadow: activeProject?.id === project.id
                                        ? `0 0 30px ${project.glowColor}`
                                        : '0 0 10px rgba(0,0,0,0.1)'
                                }}
                                style={{
                                    width: 'clamp(65px, 18vw, 85px)',
                                    height: 'clamp(65px, 18vw, 85px)',
                                    borderRadius: '50%',
                                    background: '#fff',
                                    border: `2px dashed ${activeProject?.id === project.id ? project.color : '#ccc'}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: project.color,
                                    boxShadow: activeProject?.id === project.id ? `0 0 15px ${project.glowColor}` : '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            >
                                {project.icon}
                            </motion.div>
                            <span style={{
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                color: activeProject?.id === project.id ? project.color : '#555'
                            }}>
                                {project.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <UpcomingCard />
            </section>
        );
    }

    // --- DESKTOP LAYOUT: Immersive Command Center ---
    return (
        <section style={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, #FAFAFA 0%, #f0f0f0 50%, #e8e8e8 100%)',
            padding: '40px 60px 160px',
            overflow: 'hidden'
        }}>
            <BlastDoorTransition />
            <FallingIcons />
            <HolographicParticles />
            <BackgroundDoodles color="#333" />

            {/* Watermark (Stationary) */}
            <motion.img
                src={jediSymbol}
                alt=""
                style={{
                    position: 'absolute',
                    width: '90%',
                    maxWidth: '900px',
                    opacity: 0.04,
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            {/* Header */}
            <motion.div
                style={{ textAlign: 'center', zIndex: 2, marginBottom: '2rem' }}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{
                    fontSize: '3.5rem',
                    color: '#111',
                    marginBottom: '0.5rem',
                    fontWeight: 700,
                    letterSpacing: '-1px'
                }}>
                    AI & Agents.
                </h2>
                <p style={{
                    fontSize: '1.15rem',
                    color: '#555',
                    maxWidth: '550px',
                    margin: '0 auto',
                    lineHeight: 1.5
                }}>
                    Neural architectures, autonomous agents, and computer vision systems.
                </p>
            </motion.div>

            {/* MAIN COMMAND CENTER AREA */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1400px',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* LEFT NODES */}
                {AI_PROJECTS.slice(0, 3).map((project, i) => (
                    <ProjectNode
                        key={project.id}
                        project={project}
                        isActive={activeProject?.id === project.id}
                        onHover={setActiveProject}
                        position={nodePositions.left[i]}
                        delay={0.2 + i * 0.15}
                        onClick={() => (project.id === 'scorpion' || project.id === 'edentic' || project.id === 'klipify' || project.id === 'foresight' || project.id === 'freshlogic' || project.id === 'sentinel') && onSelect && onSelect(project.id)}
                    />
                ))}

                {/* RIGHT NODES */}
                {AI_PROJECTS.slice(3, 6).map((project, i) => (
                    <ProjectNode
                        key={project.id}
                        project={project}
                        isActive={activeProject?.id === project.id}
                        onHover={setActiveProject}
                        position={nodePositions.right[i]}
                        delay={0.5 + i * 0.15}
                        onClick={() => (project.id === 'scorpion' || project.id === 'edentic' || project.id === 'klipify' || project.id === 'foresight' || project.id === 'freshlogic' || project.id === 'sentinel') && onSelect && onSelect(project.id)}
                    />
                ))}

                {/* CENTER: Mascot + Terminal */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    zIndex: 20
                }}>
                    {/* Mascot */}
                    <motion.div
                        animate={{
                            y: activeProject ? -12 : 0,
                            rotate: activeProject
                                ? (AI_PROJECTS.slice(0, 3).some(p => p.id === activeProject.id) ? -12 : 12)
                                : 0
                        }}
                        transition={{ type: "spring", stiffness: 80 }}
                        style={{ zIndex: 30 }}
                    >
                        <AIMascot
                            size={150}
                            color={activeProject ? activeProject.color : '#00FF88'}
                            isThinking={!!activeProject}
                        />
                    </motion.div>

                    {/* Terminal */}
                    <BlastDoorTerminal activeProject={activeProject} isOpen={true} />

                    {/* Upcoming Card */}
                    <UpcomingCard />
                </div>
            </div>
        </section>
    );
}
