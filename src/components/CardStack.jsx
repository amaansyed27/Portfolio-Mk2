import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Smartphone, Layers, Cpu, Globe, Zap, Code, Layout, Box, Command, Wifi } from 'lucide-react';

// Import Icons
import androidIcon from '../assets/mobile/android.png';
import apkIcon from '../assets/mobile/apk.png';
import figmaIcon from '../assets/mobile/figma.png';
import flutterIcon from '../assets/mobile/flutter.png';
import javaIcon from '../assets/mobile/java.png';
import kotlinIcon from '../assets/mobile/kotlin.png';

import aiIcon from '../assets/ai-and-agents/ai.png';
import jsIcon from '../assets/ai-and-agents/js-logo.png';
import multiAgentIcon from '../assets/ai-and-agents/multi-agent-system.png';
import pythonIcon from '../assets/ai-and-agents/python.png';
import automationIcon from '../assets/ai-and-agents/automation.png';

import reactIcon from '../assets/web-dev-logos/react.png';
import nextIcon from '../assets/web-dev-logos/nextjs.png';

const KeyCapability = ({ icon, title, desc, color }) => (
    <div style={{
        display: 'flex', gap: '1rem', alignItems: 'flex-start',
        background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: '12px',
        border: '1px solid rgba(0,0,0,0.05)', backdropFilter: 'blur(4px)'
    }}>
        <div style={{
            color: color, background: '#fff', padding: '8px', borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
            {icon}
        </div>
        <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 4px', color: '#333' }}>{title}</h4>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: 1.4 }}>{desc}</p>
        </div>
    </div>
);

const TechBadge = ({ label }) => (
    <span style={{
        fontSize: '0.8rem', fontWeight: 600, color: '#444',
        background: '#fff', padding: '6px 12px', borderRadius: '100px',
        border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    }}>
        {label}
    </span>
);

const FocusCard = ({ i, title, subtitle, description, themeColor, icon: Icon, capabilities, techStack, visual }) => {
    return (
        <div style={{
            height: '100vh',
            position: 'sticky',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: `calc(env(safe-area-inset-top) + ${i * 40}px)`,
            zIndex: i + 1
        }}>
            <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    background: '#FAFAFA',
                    width: '1000px',
                    maxWidth: '92vw',
                    height: '650px',
                    borderRadius: '32px',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr', // Text Left, Visual Right
                }}
            >
                {/* Accent Line */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: themeColor }} />

                {/* Left Content */}
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        color: themeColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem',
                        marginBottom: '1.5rem'
                    }}>
                        <Icon size={18} />
                        Focus Area 0{i + 1}
                    </div>

                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', color: '#111', lineHeight: 1.1, marginBottom: '1rem' }}>
                        {title}
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#555', fontWeight: 500, marginBottom: '2rem', maxWidth: '90%' }}>
                        {subtitle}
                    </p>
                    <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '90%' }}>
                        {description}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: 'auto' }}>
                        {capabilities.map((cap, idx) => (
                            <KeyCapability key={idx} {...cap} color={themeColor} />
                        ))}
                    </div>
                </div>

                {/* Right Visual / Decor */}
                <div style={{ position: 'relative', background: `${themeColor}08`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem', overflow: 'hidden', gap: '2rem' }}>
                    {/* Background Pattern */}
                    <div style={{
                        position: 'absolute', inset: 0, opacity: 0.4,
                        backgroundImage: `radial-gradient(${themeColor} 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }} />

                    {/* Visual Content Placeholder - Could be replaced by actual components for richer UI */}
                    <div style={{ position: 'relative', flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {visual}
                    </div>

                    {/* Tech Stack Footer */}
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#888', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 700 }}>Core Technologies</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {techStack.map(tech => (
                                <TechBadge key={tech} label={tech} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const MobileDeck = ({ cards }) => {
    // State to track active cards. We remove them from the top.
    const [activeCards, setActiveCards] = useState(cards);

    const removeCard = (index) => {
        setActiveCards((prev) => prev.filter((_, i) => i !== index));
    };

    // If all cards are gone, maybe show a "Reset" or just empty state?
    // Let's auto-reset for the loop effect after a delay
    if (activeCards.length === 0) {
        setTimeout(() => setActiveCards(cards), 1000);
    }

    return (
        <div style={{
            height: '600px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
            overflow: 'hidden' // Keep tears contained
        }}>
            <AnimatePresence>
                {activeCards.map((card, index) => {
                    // We only want the top card to be draggable
                    const isTop = index === activeCards.length - 1;
                    return (
                        <motion.div
                            key={card.title} // Use title as key for stable identity
                            style={{
                                position: 'absolute',
                                width: '300px',
                                height: '420px',
                                background: '#fff',
                                borderRadius: '20px',
                                border: '1px solid rgba(0,0,0,0.1)',
                                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                zIndex: index,
                                cursor: isTop ? 'grab' : 'default',
                                transformOrigin: 'top center'
                            }}
                            initial={{ scale: 0.9 + index * 0.05, y: -index * 15, rotate: index % 2 === 0 ? 2 : -2 }}
                            animate={{ scale: 0.9 + index * 0.05, y: -index * 15, rotate: index % 2 === 0 ? 2 : -2, opacity: 1 }}
                            exit={{
                                y: 800,
                                rotate: Math.random() * 40 - 20,
                                opacity: 0,
                                transition: { duration: 0.4, ease: "easeIn" }
                            }}
                            drag={isTop ? "y" : false} // Only top card drags
                            dragConstraints={{ top: 0, bottom: 0 }} // Don't let it stay dragged
                            onDragEnd={(_, info) => {
                                if (info.offset.y > 100) { // Dragged down enough
                                    removeCard(index);
                                }
                            }}
                            whileTap={{ cursor: 'grabbing' }}
                        >
                            {/* Tape / Sticky Look */}
                            <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', width: '100px', height: '24px', background: 'rgba(255,255,200,0.8)', opacity: 0.5, boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transform: 'rotate(-2deg)' }} />

                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: card.themeColor, fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>
                                    <card.icon size={16} />
                                    <span>Focus 0{cards.indexOf(card) + 1}</span>
                                </div>
                                <h3 style={{ fontSize: '1.8rem', fontFamily: '"Orbitron", sans-serif', lineHeight: 1, marginBottom: '0.5rem', color: '#111' }}>{card.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.4 }}>{card.subtitle}</p>
                            </div>

                            {/* Mini Tech Stack - ICONS NOW */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '12px',
                                marginTop: '1rem',
                                padding: '10px 0',
                                borderTop: '1px dashed #eee'
                            }}>
                                {card.logos && card.logos.map((logo, i) => (
                                    <div key={i} style={{
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: '#fff',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                                        border: '1px solid #f0f0f0'
                                    }}>
                                        <img src={logo} alt="tech" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                    </div>
                                ))}
                            </div>

                            <div style={{ fontSize: '0.8rem', color: '#999', textAlign: 'center', fontStyle: 'italic', marginTop: 'auto' }}>
                                {isTop ? "Tear me off ↓" : "..."}
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

const DesktopStack = ({ cards }) => {
    return (
        <div>
            {cards.map((card, i) => (
                <FocusCard key={i} {...card} i={i} />
            ))}
        </div>
    );
};

export default function CardStack() {
    const cards = [
        {
            icon: Cpu,
            title: "Agentic AI",
            subtitle: "Systems that Reason, Plan, and Execute.",
            description: "Moving beyond simple chatbots to autonomous agents. I architect systems that can use tools, maintain memory, and execute complex multi-step workflows.",
            themeColor: "#FF4D00", // International Orange / Scorpion Theme
            techStack: ["LangChain", "OpenAI API", "Vector DBs", "Python"],
            logos: [pythonIcon, aiIcon, multiAgentIcon, automationIcon],
            capabilities: [
                { icon: <Command size={18} />, title: "Autonomous Execution", desc: "Agents that plan their own steps to solve ambiguity." },
                { icon: <Database size={18} />, title: "RAG Pipelines", desc: "Grounding LLMs in private enterprise data." },
                { icon: <Zap size={18} />, title: "Tool Use", desc: "Connecting AI to APIs, Browsers, and Filesystems." }
            ],
            visual: (
                // Abstract Terminal / Node Graph
                <div style={{
                    width: '100%', height: 'auto', maxHeight: '100%', aspectRatio: '0.85', background: '#1e1e1e', borderRadius: '16px',
                    border: '1px solid #333', boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    fontFamily: 'monospace', padding: '1.5rem', color: '#0f0', fontSize: '0.8rem',
                    display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.9,
                    overflow: 'hidden'
                }}>
                    <div><span style={{ color: '#888' }}>&gt;</span> Initializing Agent...</div>
                    <div><span style={{ color: '#888' }}>&gt;</span> Core Loaded.</div>
                    <div style={{ color: '#FF4D00' }}>&gt; plan = generate_plan(goal)</div>
                    <div><span style={{ color: '#888' }}>&gt;</span> Step 1: Search Knowledge Base</div>
                    <div><span style={{ color: '#888' }}>&gt;</span> Step 2: Analyze Results</div>
                    <div style={{ marginTop: 'auto', borderTop: '1px solid #333', paddingTop: '8px', color: '#fff' }}>
                        Status: <span style={{ color: '#0f0' }}>ONLINE</span>
                    </div>
                </div>
            )
        },
        {
            icon: Layers,
            title: "Full-Stack Ops",
            subtitle: "Scalable Foundations for Complex Apps.",
            description: "Bridging the gap between frontend beauty and backend reliability. I build end-to-end applications with a focus on type-safety, performance, and clean architecture.",
            themeColor: "#0055FF", // Electric Blue
            techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Drizzle", "Docker"],
            logos: [reactIcon, nextIcon, jsIcon],
            capabilities: [
                { icon: <Layout size={18} />, title: "Pixel-Perfect UI", desc: "Responsive, accessible, and fluid interfaces." },
                { icon: <Database size={18} />, title: "Distributed Backends", desc: "Scalable APIs with robust data modeling." },
                { icon: <Box size={18} />, title: "DevOps Integration", desc: "CI/CD, containerization, and cloud deployment." }
            ],
            visual: (
                // Blueprint / Wireframe Stylized
                <div style={{
                    width: '80%', height: '80%', transform: 'rotate(-5deg)',
                    background: '#fff', borderRadius: '12px', border: '2px solid #0055FF',
                    boxShadow: '0 20px 40px rgba(0, 85, 255, 0.15)', padding: '10px',
                    display: 'grid', gridTemplateRows: 'auto 1fr', gap: '10px'
                }}>
                    <div style={{ height: '10px', width: '40%', background: '#0055FF', borderRadius: '10px' }}></div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div style={{ background: '#f0f7ff', borderRadius: '8px' }}></div>
                        <div style={{ background: '#f0f7ff', borderRadius: '8px' }}></div>
                    </div>
                </div>
            )
        },
        {
            icon: Smartphone,
            title: "Mobile Dev",
            subtitle: "Native Performance, Universal Reach.",
            description: "Crafting fluid, native-feeling mobile experiences. Whether it's complex state management or smooth 60fps animations, I ensure the app feels like an extension of the phone.",
            themeColor: "#00C853", // Vibrant Green / Android
            techStack: ["Flutter", "Dart", "Kotlin", "Firebase", "Riverpod", "Android"],
            logos: [flutterIcon, kotlinIcon, androidIcon, javaIcon, figmaIcon],
            capabilities: [
                { icon: <Wifi size={18} />, title: "Offline-First", desc: "Apps that work seamlessly without internet." },
                { icon: <Zap size={18} />, title: "High Performance", desc: "Optimized rendering for smooth 60/120fps." },
                { icon: <Layout size={18} />, title: "Cross-Platform", desc: "Single codebase, native quality on iOS & Android." }
            ],
            visual: (
                // Phone Mockup style
                <div style={{
                    width: '140px', height: '280px', background: '#111', borderRadius: '24px',
                    border: '4px solid #333', boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    position: 'relative', overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#000' }}></div>
                    <div style={{
                        width: '100%', height: '100%',
                        background: 'linear-gradient(135deg, #00C853 0%, #009688 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '1.5rem'
                    }}>
                        APK
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="container" style={{ marginBottom: '100px' }}>
            <div style={{ padding: '80px 0', textAlign: 'center' }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)', // Dynamic Sizing
                    color: '#111',
                    fontWeight: 700,
                    fontFamily: '"Orbitron", sans-serif',
                    textTransform: 'uppercase',
                    lineHeight: 1.1
                }}>
                    Technical Focus
                </h2>
                <p style={{ color: '#666', marginTop: '1rem', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '600px', margin: '1rem auto 0' }}>
                    My core areas of expertise, built on years of hands-on build experience.
                </p>
            </div>

            {/* Desktop View: Sticky Scroll */}
            <div className="desktop-only">
                <DesktopStack cards={cards} />
            </div>

            {/* Mobile View: Tearing Sticky Notes */}
            <div className="mobile-only">
                <MobileDeck cards={cards} />
            </div>

            <style>{`
                .desktop-only { display: block; }
                .mobile-only { display: none; }
                @media (max-width: 900px) {
                    .desktop-only { display: none; }
                    .mobile-only { display: block; }
                }
            `}</style>
        </section>
    );
}
