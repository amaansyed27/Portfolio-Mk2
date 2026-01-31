import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, Terminal, Cpu, Globe, Zap, Activity, Command, FileText, Check } from 'lucide-react';

const ACCENT_COLOR = '#FFB000';

const SCORPION_ASCII = `
 ███████╗ ██████╗ ██████╗ ██████╗ ██████╗ ██╗ ██████╗ ███╗   ██╗
 ██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗██║██╔═══██╗████╗  ██║
 ███████╗██║     ██║   ██║██████╔╝██████╔╝██║██║   ██║██╔██╗ ██║
 ╚════██║██║     ██║   ██║██╔══██╗██╔═══╝ ██║██║   ██║██║╚██╗██║
 ███████║╚██████╗╚██████╔╝██║  ██║██║     ██║╚██████╔╝██║ ╚████║
 ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`;

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
            padding: '20px',
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
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', boxSizing: 'border-box' }}>
        <div style={{
            padding: '8px',
            borderRadius: '8px',
            background: `${ACCENT_COLOR}15`,
            color: '#D97706',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
        }}>
            {icon}
        </div>
        <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{title}</h4>
            <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.4, margin: 0 }}>{desc}</p>
        </div>
    </div>
);

const TerminalReplica = ({ isMobile }) => (
    <div style={{
        background: '#0c0c0c',
        borderRadius: '12px',
        overflow: 'hidden',
        fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
        fontSize: '14px',
        color: '#cccccc',
        lineHeight: '1.5',
        boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
        border: '1px solid #333',
        width: '100%',
        maxWidth: '100%', // FORCE CONSTRAINT
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxSizing: 'border-box'
    }}>
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1, boxSizing: 'border-box', overflowX: 'hidden' }}>
            <pre style={{
                color: ACCENT_COLOR,
                fontWeight: 'bold',
                fontSize: isMobile ? '6px' : '10px', // Responsive font size
                lineHeight: isMobile ? '6px' : '10px',
                whiteSpace: 'pre',
                marginBottom: '2rem',
                overflowX: 'hidden',
                width: '100%'
            }}>
                {SCORPION_ASCII}
            </pre>
            <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ color: ACCENT_COLOR }}>✦</span> Welcome to <span style={{ color: ACCENT_COLOR, fontWeight: 'bold' }}>Scorpion</span>!
            </div>
            {/* Same content... */}
            <div style={{ color: '#888', marginBottom: '1.5rem' }}>
                Tips for getting started:<br />
                1. Ask questions, edit files, or run commands.<br />
                2. Be specific for the best results.<br />
                3. Type <span style={{ color: ACCENT_COLOR }}>exit</span> to quit.
            </div>
            <div style={{ marginBottom: '1.5rem', color: '#00FF88' }}>
                ✓ Connected to qwen3:8b
            </div>
            <div style={{ color: '#888', marginBottom: '1.5rem' }}>
                <span style={{ color: '#569CD6' }}>while</span>(curious) {'{'}<br />
                &nbsp;&nbsp;question_everything();<br />
                &nbsp;&nbsp;dig_deeper();<br />
                &nbsp;&nbsp;connect_dots(unexpected);<br />
                <br />
                &nbsp;&nbsp;<span style={{ color: '#c586c0' }}>if</span> (stuck) {'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: ACCENT_COLOR, fontWeight: 'bold' }}>keep_thinking();</span><br />
                &nbsp;&nbsp;{'}'}<br />
                {'}'}
            </div>
            <div>
                <span style={{ color: ACCENT_COLOR }}>✦</span> Thinking...<br />
                <span>&gt; </span>
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ borderRight: '8px solid #ccc' }}
                />
            </div>
        </div>
    </div>
);

export default function ScorpionDetails({ onClose }) {
    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 900px)').matches);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText('npm i -g scorpion');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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
                overflowX: 'hidden', // STRICTLY PREVENT X SCROLL HERE
                WebkitOverflowScrolling: 'touch',
                display: 'block',
                boxSizing: 'border-box'
            }}
        >
            {/* Header same as before */}
            {isMobile ? (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, height: '60px',
                    background: 'rgba(250,250,250,0.95)', backdropFilter: 'blur(10px)',
                    zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)',
                    boxSizing: 'border-box'
                }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#333' }}>SCORPION CLI</span>
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
                minHeight: '100%',
                width: '100%',
                maxWidth: '100vw', // Extra safety
                overflowX: 'hidden',
                boxSizing: 'border-box'
            }}>
                {/* --- HERO SECTION --- */}
                <div style={{
                    background: `radial-gradient(circle at 100% 0%, ${ACCENT_COLOR}10 0%, #FAFAFA 50%)`,
                    paddingTop: isMobile ? '80px' : '6rem',
                    paddingBottom: '3rem',
                    borderBottom: '1px solid #e5e5e5',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        maxWidth: '1200px', width: '100%', margin: '0 auto',
                        padding: isMobile ? '0 1.25rem' : '0 2rem',
                        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.8fr 1.2fr',
                        gap: isMobile ? '2rem' : '3rem',
                        alignItems: 'center',
                        boxSizing: 'border-box'
                    }}>

                        {/* Hero Text */}
                        <div style={{ textAlign: 'left', boxSizing: 'border-box' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                padding: '6px 12px', borderRadius: '100px', background: '#111', color: '#fff',
                                fontSize: '0.75rem', fontWeight: 700, marginBottom: '1.5rem',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                            }}>
                                <Zap size={12} fill={ACCENT_COLOR} color={ACCENT_COLOR} />
                                AGENTIC AI
                            </div>

                            <h1 style={{
                                fontFamily: "'Press Start 2P', cursive",
                                fontSize: isMobile ? '1.75rem' : '3.5rem',
                                color: '#111',
                                lineHeight: 1.3,
                                marginBottom: '1rem',
                                letterSpacing: '-1px'
                            }}>
                                SCORPION <span style={{ color: ACCENT_COLOR, fontSize: '0.5em' }}>CLI</span>
                            </h1>

                            <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', color: '#555', lineHeight: 1.6, marginBottom: '2rem' }}>
                                An autonomous terminal agent that doesn't just talk — it <b>does</b>.
                                Web research, system ops, and file management.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexDirection: isMobile ? 'column' : 'row' }}>
                                <a
                                    href="https://github.com/amaansyed27/scorpion-cli-agent"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '12px 24px', borderRadius: '12px', background: '#111', color: '#fff',
                                        border: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer',
                                        textDecoration: 'none', boxSizing: 'border-box',
                                        width: isMobile ? '100%' : 'auto' // Full width on mobile
                                    }}
                                >
                                    <Github size={18} /> View on GitHub
                                </a>
                                <button
                                    onClick={handleCopy}
                                    style={{
                                        padding: '12px 24px', borderRadius: '12px', background: '#fff', border: '1px solid #e5e5e5',
                                        color: '#333', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontFamily: 'monospace',
                                        cursor: 'pointer', transition: 'all 0.2s', boxSizing: 'border-box',
                                        width: isMobile ? '100%' : 'auto' // Full width on mobile
                                    }}
                                >
                                    {copied ? <Check size={18} color="#059669" /> : <Terminal size={18} />}
                                    {copied ? 'Copied!' : 'npm i -g scorpion'}
                                </button>
                            </div>
                        </div>

                        {/* Hero Terminal */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            style={{ width: '100%', boxSizing: 'border-box' }}
                        >
                            <TerminalReplica isMobile={isMobile} />
                        </motion.div>
                    </div>
                </div>
                {/* ... Rest of code remains similar ... */}
                <div style={{
                    maxWidth: '1200px', width: '100%', margin: '0 auto',
                    padding: isMobile ? '2rem 1.25rem' : '3rem 2rem',
                    boxSizing: 'border-box'
                }}>
                    {/* ... Features ... */}
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                        <BentoCard delay={0.3}>
                            <FeatureItem
                                icon={<Globe size={20} />}
                                title="Deep Research"
                                desc="Autonomous web surfing to verify facts and gather fresh data."
                            />
                        </BentoCard>
                        <BentoCard delay={0.4}>
                            <FeatureItem
                                icon={<Activity size={20} />}
                                title="System Control"
                                desc="Executes shell commands to manage files and check system health."
                            />
                        </BentoCard>
                        <BentoCard delay={0.5}>
                            <FeatureItem
                                icon={<FileText size={20} />}
                                title="Code Analysis"
                                desc="Reads, parses, and modifies your local codebases intelligently."
                            />
                        </BentoCard>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
                        <BentoCard delay={0.6}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Zap size={16} color={ACCENT_COLOR} /> Power Commands
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <code style={{ background: '#f4f4f5', padding: '8px', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid #e5e5e5', boxSizing: 'border-box' }}>
                                    <span style={{ color: '#059669', fontWeight: 'bold' }}>@deep</span> "Analyze NVDA stock"
                                </code>
                                <code style={{ background: '#f4f4f5', padding: '8px', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid #e5e5e5', boxSizing: 'border-box' }}>
                                    <span style={{ color: '#059669', fontWeight: 'bold' }}>@quick</span> "Fix this JSON"
                                </code>
                            </div>
                        </BentoCard>

                        <BentoCard delay={0.7}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Cpu size={16} color={ACCENT_COLOR} /> Engine
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {['Node.js', 'Ollama', 'Qwen3:8b', 'Chalk', 'Puppeteer'].map((tech) => (
                                    <span key={tech} style={{
                                        padding: '6px 12px', borderRadius: '100px', background: '#fff',
                                        border: '1px solid #e5e5e5', fontSize: '0.8rem', fontWeight: 600
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </BentoCard>
                    </div>
                    <div style={{ height: '60px' }} />
                </div>
            </div>
        </motion.div>
    );
}
