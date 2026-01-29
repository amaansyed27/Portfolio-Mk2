import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import geminiHomeImg from '../assets/web/gemini_gpt/home.png';
import dataweaveHomeImg from '../assets/web/dataweave/home.png';
import codeGuardianHomeImg from '../assets/web/code-guardian-ai/home.png';

// --- Assets / Placeholders ---
const PROJECTS = [
    {
        id: 'gemini',
        title: 'Gemini GPT',
        url: 'gemini-gpt-ui.vercel.app',
        color: '#1a1a1a',
        img: geminiHomeImg,
        textColor: '#fff',
        subtitle: 'Interactive AI Assistant'
    },
    {
        id: 'codeguardian',
        title: 'CodeGuardian AI',
        url: 'codeguardian-ai.vercel.app',
        color: '#0F172A',
        img: codeGuardianHomeImg,
        textColor: '#38BDF8',
        subtitle: 'AI-Powered Code Reviewer'
    },
    {
        id: 'dataweave',
        title: 'Dataweave',
        url: 'dataweave-ai.vercel.app',
        color: '#fff',
        img: dataweaveHomeImg,
        textColor: '#333',
        subtitle: 'Schema Design. Reimagined.'
    },
    {
        id: 'osfolio',
        title: 'OSFolio',
        url: 'osfolio.vercel.app',
        color: '#F8FAFC',
        textColor: '#333'
    },
    {
        id: 'health',
        title: 'Vitality Health',
        url: 'vitality.io',
        color: '#F0FDF4',
        textColor: '#16A34A'
    }
];

// --- Hooks ---
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);
    return matches;
};

// --- Components ---

const BrowserFrame = ({ project, style, isHero, onClick }) => (
    <motion.div
        onClick={onClick}
        style={{
            background: project.color || '#fff',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.05)',
            overflow: 'hidden',
            cursor: project.id === 'gemini' ? 'pointer' : 'default',
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute', // Default absolute for splatter
            ...style
        }}
    >
        {/* Browser Header - Standardized Solid Look */}
        <div style={{
            height: '40px',
            background: '#f3f3f3', // Solid opaque gray
            borderBottom: '1px solid #e5e5e5',
            display: 'flex',
            alignItems: 'center',
            padding: '0 1rem',
            gap: '8px',
            zIndex: 10
        }}>
            <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56', border: '1px solid #e0443e' }} />
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e', border: '1px solid #dea123' }} />
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f', border: '1px solid #1aab29' }} />
            </div>

            <div style={{
                marginLeft: '1rem',
                flex: 1,
                background: '#fff',
                height: '24px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 10px',
                fontSize: '11px',
                color: '#666',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 500,
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}>
                <span style={{ opacity: 0.5, marginRight: '4px' }}>🔒</span> {project.url}
            </div>
            <div style={{ width: '40px' }} />
        </div>

        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {project.img ? (
                <div style={{ width: '100%', height: '100%' }}>
                    <img
                        src={project.img}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {isHero && (
                        <div style={{
                            position: 'absolute',
                            bottom: 0, left: 0, width: '100%',
                            padding: '2.5rem',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                            color: 'white'
                        }}>
                            <motion.h3
                                layoutId={`title-${project.id}`}
                                style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}
                            >
                                {project.title}
                            </motion.h3>
                            <p style={{ fontSize: '1rem', opacity: 0.9, fontWeight: 400 }}>{project.subtitle}</p>
                        </div>
                    )}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, color: project.textColor, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>{project.title}</h3>
                    <p style={{ opacity: 0.6, fontSize: '1rem', color: project.textColor }}>Work in Progress</p>
                </div>
            )}
        </div>
    </motion.div>
);

// Mobile Card for Vertical Carousel
// Uses scroll progress to scale up when in center view
const MobileCard = ({ project, onSelect, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Scale Logic: 0.8 when at edges, 1 when in center (0.5 progress)
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]); // Parallax shift

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                opacity,
                y, // Subtle parallax
                marginBottom: '-40px', // Overlap for carousel feel
                zIndex: index
            }}
        >
            <BrowserFrame
                project={project}
                style={{
                    width: '100%',
                    height: '280px',
                    position: 'relative', // Reset abs
                }}
                isHero={project.id === 'gemini' || project.id === 'dataweave' || project.id === 'codeguardian'}
                onClick={() => (project.id === 'gemini' || project.id === 'dataweave' || project.id === 'codeguardian') && onSelect && onSelect(project.id)}
            />
        </motion.div>
    );
}

export default function ProjectWeb({ onSelect }) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    const getDesktopVariant = (index) => {
        let target = {};
        // Fluid Sizing for Responsiveness
        switch (index) {
            case 0: // Gemini (Center)
                target = { x: '-50%', y: '-50%', scale: 1, rotate: 0, zIndex: 20 };
                break;
            case 1: // CodeGuardian (Left)
                target = { x: '-105%', y: '-60%', scale: 0.85, rotate: -8, zIndex: 15 };
                break;
            case 2: // Dataweave (Right)
                target = { x: '5%', y: '-60%', scale: 0.85, rotate: 8, zIndex: 15 };
                break;
            case 3: // OSFolio (Far Left)
                target = { x: '-125%', y: '10%', scale: 0.75, rotate: -15, zIndex: 10 };
                break;
            case 4: // Health (Far Right)
                target = { x: '25%', y: '10%', scale: 0.75, rotate: 15, zIndex: 10 };
                break;
            default:
                target = { x: 0, y: 0, scale: 0 };
        }

        return {
            hidden: {
                x: '-50%', y: '-50%', scale: 0, rotate: Math.random() * 20 - 10, opacity: 0
            },
            visible: {
                ...target,
                opacity: 1,
                transition: { type: "spring", damping: 15, stiffness: 100, delay: 0.2 + (index * 0.1) }
            }
        };
    };

    return (
        <section
            id="web-projects"
            ref={containerRef}
            className="container"
            style={{
                minHeight: isMobile ? 'auto' : '100vh',
                padding: isMobile ? '4rem 1.5rem 8rem 1.5rem' : '6rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'visible'
            }}
        >
            <div style={{
                marginBottom: isMobile ? '3rem' : '5rem',
                textAlign: 'center',
                maxWidth: '800px',
                zIndex: 30
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{
                        fontSize: isMobile ? '2.5rem' : '4.5rem',
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, #111 0%, #555 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        paddingBottom: '0.2em'
                    }}>
                        Web <span style={{ fontFamily: 'serif', fontStyle: 'italic', fontWeight: 400, color: '#000', WebkitTextFillColor: '#111' }}>&</span> Interface.
                    </h2>
                    <p style={{
                        marginTop: '0.5rem',
                        color: '#666',
                        fontSize: isMobile ? '1rem' : '1.25rem',
                        maxWidth: '500px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Crafting pixel-perfect, interactive experiences.
                    </p>
                </motion.div>
            </div>

            {/* SHOWCASE AREA */}
            <div style={{
                width: '100%',
                height: isMobile ? 'auto' : '600px',
                position: 'relative',
                display: isMobile ? 'flex' : 'block',
                flexDirection: 'column',
                gap: '0rem' // Gap handled by negative margin in MobileCard
            }}>
                {isMobile ? (
                    // MOBILE VERTICAL CAROUSEL
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingBottom: '50px'
                    }}>
                        {PROJECTS.map((proj, idx) => (
                            <MobileCard
                                key={proj.id}
                                project={proj}
                                index={idx}
                                onSelect={onSelect}
                            />
                        ))}
                    </div>
                ) : (
                    // DESKTOP SPLATTER
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '0px',
                        height: '0px'
                    }}>
                        {PROJECTS.map((proj, idx) => (
                            <motion.div
                                key={proj.id}
                                variants={{
                                    hidden: getDesktopVariant(idx).hidden,
                                    visible: getDesktopVariant(idx).visible
                                }}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                style={{
                                    position: 'absolute',
                                    // Fluid sizing: min(600px, 45vw) ensure it shrinks on small laptops
                                    width: 'clamp(300px, 45vw, 600px)',
                                    aspectRatio: '16/10', // Maintain Browser Ratio
                                    transformOrigin: 'center center'
                                }}
                                whileHover={(proj.id === 'gemini' || proj.id === 'dataweave' || proj.id === 'codeguardian') ? { scale: 1.05, zIndex: 100, transition: { duration: 0.2 } } : {}}
                            >
                                <BrowserFrame
                                    project={proj}
                                    style={{ width: '100%', height: '100%', position: 'relative' }}
                                    isHero={proj.id === 'gemini' || proj.id === 'dataweave' || proj.id === 'codeguardian'}
                                    onClick={() => (proj.id === 'gemini' || proj.id === 'dataweave' || proj.id === 'codeguardian') && onSelect && onSelect(proj.id)}
                                />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {!isMobile && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{ delay: 1 }}
                    style={{ position: 'absolute', bottom: '5%', fontSize: '0.9rem' }}
                >
                    Click on Gemini GPT to explore
                </motion.div>
            )}

        </section>
    );
}
