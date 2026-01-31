import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Zap, Code, FileCode, GitBranch, Terminal, Shield, Eye, Cpu, Layout } from 'lucide-react';

// CodeGuardian Assets
import homeImg from '../assets/web/code-guardian-ai/home.png';
import fullReviewImg from '../assets/web/code-guardian-ai/full-review-generated.png';
import fileDirImg from '../assets/web/code-guardian-ai/file-directory.png';
import singleFileImg from '../assets/web/code-guardian-ai/single-file.png';
import logoImg from '../assets/web/code-guardian-ai/code-guardian-ai-logo.png';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);
    return matches;
};

export default function CodeGuardianDetails({ onClose }) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    // Force Scroll to Top on Mount (Nuclear Option)
    useLayoutEffect(() => {
        const resetScroll = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop = 0;
            }
            window.scrollTo(0, 0); // Reset global scroll
        };

        resetScroll();
        [10, 50, 100, 300].forEach(delay => setTimeout(resetScroll, delay));
    }, []);

    return (
        <motion.div
            // layoutId="codeguardian-card-container" // Disabled for mobile stability
            data-lenis-prevent
            ref={scrollRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: '#FAFAFA',
                zIndex: 99999,
                overflowY: 'scroll',
                WebkitOverflowScrolling: 'touch',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* MOBILE HEADER BAR (Glassmorphism) */}
            {isMobile && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '70px',
                    background: 'rgba(255,255,255,0.98)',
                    backdropFilter: 'blur(20px)',
                    zIndex: 100000,
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '0 1.5rem'
                }}>
                    <button
                        onClick={onClose}
                        style={{
                            background: '#F3F4F6',
                            border: '1px solid #E5E7EB',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#111'
                        }}
                    >
                        <X size={22} />
                    </button>
                </div>
            )}

            {/* DESKTOP CLOSE BUTTON (Floating) */}
            {!isMobile && (
                <button
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: '2rem',
                        right: '2rem',
                        background: '#fff',
                        border: '1px solid #e5e5e5',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#000',
                        zIndex: 100,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <X size={24} />
                </button>
            )}

            {/* HERO SECTION */}
            <div style={{
                minHeight: isMobile ? 'auto' : '85vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'visible',
                paddingTop: isMobile ? '120px' : 0, // Huge padding
                paddingBottom: isMobile ? '4rem' : 0,
                // Cyan/Slate Gradient for CodeGuardian identity
                background: 'radial-gradient(circle at 60% 50%, #fff 0%, #f0fdff 100%)'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '1.5rem' : '3rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: isMobile ? '0 1.5rem' : '0 4rem',
                    width: '100%'
                }}>

                    {/* RIGHT: 3D Image Showcase (Top on Mobile) */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            order: isMobile ? 0 : 1, // Image First on Mobile
                            marginBottom: isMobile ? '1rem' : 0,
                            width: '100%',
                            flex: isMobile ? 'auto' : '1.1',
                        }}
                    >
                        <div // Removed motion wrapper
                            style={{
                                borderRadius: '16px', // Smaller radius on mobile
                                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.15)',
                                border: '2px solid #fff',
                                overflow: 'hidden',
                                width: '100%'
                            }}
                        >
                            <img
                                src={homeImg}
                                alt="Dashboard Preview"
                                style={{ display: 'block', width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>

                    {/* LEFT: Branding & Info (Bottom on Mobile) */}
                    <div style={{
                        zIndex: 2,
                        order: isMobile ? 1 : 0,
                        flex: isMobile ? 'auto' : '0.9',
                        textAlign: isMobile ? 'center' : 'left', // Center text on mobile
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isMobile ? 'center' : 'flex-start', // Center items on mobile
                        width: '100%'
                    }}>
                        <div // Removed motion
                            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', justifyContent: isMobile ? 'center' : 'flex-start' }}
                        >
                            <img // Static img on mobile
                                src={logoImg}
                                alt="CodeGuardian Logo"
                                style={{ width: isMobile ? '40px' : '56px', height: 'auto', borderRadius: '8px' }}
                            />
                            <div style={{
                                padding: '0.4rem 0.8rem',
                                background: '#E0F7FA',
                                color: '#06B6D4',
                                borderRadius: '100px',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                letterSpacing: '0.05em'
                            }}>
                                V 1.0.0
                            </div>
                        </div>

                        <h1 // Removed layoutId
                            style={{
                                fontSize: isMobile ? '2.5rem' : '4.5rem', // Smaller title on mobile
                                fontWeight: 800,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                color: '#0F172A',
                                marginBottom: '1rem',
                                margin: 0
                            }}
                        >
                            CodeGuardian AI
                        </h1>

                        <p
                            style={{
                                fontSize: isMobile ? '1rem' : '1.25rem', // Smaller text
                                lineHeight: 1.5,
                                color: '#475569',
                                marginBottom: '2rem',
                                marginTop: '1rem',
                                maxWidth: '520px'
                            }}
                        >
                            AI-powered, in-browser code reviewer.<br />
                            Fetch public repos, analyze file trees, and get concise,
                            actionable fixes powered by Google's Gemini models.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem' }}
                        >
                            <a href="https://github.com/amaansyed27/CodeGuardian-ai" target="_blank" rel="noopener noreferrer" style={{ ...buttonStyle, justifyContent: 'center' }}>
                                <Github size={20} /> <span style={{ marginLeft: '8px' }}>View Source</span>
                            </a>
                            <a href="https://codeguardian-ai.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ ...buttonStyle, background: '#0F172A', color: '#fff', border: 'none', justifyContent: 'center' }}>
                                <ExternalLink size={20} /> <span style={{ marginLeft: '8px' }}>Launch App</span>
                            </a>
                        </motion.div>
                    </div>



                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="container" style={{ padding: isMobile ? '2rem 1.5rem' : '4rem', maxWidth: '1200px', margin: '0 auto', flex: 1 }}>

                {/* Info Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.8fr 1fr', gap: isMobile ? '3rem' : '5rem', marginBottom: '8rem' }}>
                    {/* Left: Features */}
                    <div>
                        <RevealSection>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>Analyzing Code Intelligence</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem' }}>
                                <FeatureItem icon={<GitBranch size={24} />} title="Repo Fetcher" desc="Browse any public GitHub repository instantly." />
                                <FeatureItem icon={<Eye size={24} />} title="Line-Aware" desc="Pinpoints errors to specific lines of code." />
                                <FeatureItem icon={<Shield size={24} />} title="Security Scan" desc="Identifies vulnerabilities and bad practices." />
                                <FeatureItem icon={<Zap size={24} />} title="Bulk Analysis" desc="Scan multiple files in a single pass." />
                            </div>
                        </RevealSection>
                    </div>

                    {/* Right: Specs */}
                    <RevealSection delay={0.2}>
                        <div style={{ background: '#F8F9FA', padding: '2rem', borderRadius: '24px', border: '1px solid #E9ECEF' }}>
                            <h4 style={{ marginBottom: '1.5rem', fontWeight: 600 }}>Tech Stack</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <TechSpecRow icon={<Code size={18} />} label="Frontend" value="React + Vite" />
                                <TechSpecRow icon={<Terminal size={18} />} label="API" value="GitHub REST" />
                                <TechSpecRow icon={<Cpu size={18} />} label="AI Model" value="Gemini Flash" />
                                <TechSpecRow icon={<Layout size={18} />} label="Data" value="JSON Schema" />
                            </div>
                        </div>
                    </RevealSection>
                </div>

                {/* BENTO GRID GALLERY */}
                <RevealSection delay={0.3}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Review Gallery</h3>
                        <p style={{ color: '#666', fontSize: '1.1rem' }}>Deep dive into the analysis engine. Click to enlarge.</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        autoRows: '250px'
                    }}>
                        {/* 1. Main Feature Card (Large) */}
                        <BentoCard
                            src={fullReviewImg}
                            caption="Comprehensive Code Review"
                            onClick={() => setSelectedImage(fullReviewImg)}
                            style={{
                                gridColumn: isMobile ? 'span 1' : 'span 2',
                                gridRow: isMobile ? 'span 1' : 'span 2'
                            }}
                        />

                        {/* 2. Detail Card */}
                        <BentoCard
                            src={fileDirImg}
                            caption="Repository Browser"
                            onClick={() => setSelectedImage(fileDirImg)}
                            style={{ gridColumn: 'span 1', gridRow: 'span 1' }}
                        />

                        {/* 3. Detail Card */}
                        <BentoCard
                            src={singleFileImg}
                            caption="Single File Analysis"
                            onClick={() => setSelectedImage(singleFileImg)}
                            style={{ gridColumn: 'span 1', gridRow: 'span 1' }}
                        />

                        {/* 4. Wide Card (Bottom) */}
                        <BentoCard
                            src={homeImg} // Reusing home img if 'loading' isn't fit, or could use another asset
                            caption="Clean, Minimal Interface"
                            onClick={() => setSelectedImage(homeImg)}
                            style={{ gridColumn: isMobile ? 'span 1' : 'span 3', gridRow: 'span 1' }}
                        />
                    </div>
                </RevealSection>

                <div style={{ height: '100px' }} />

            </div>

            {/* IMAGE MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.85)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 10000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem',
                            cursor: 'zoom-out'
                        }}
                    >
                        <motion.img
                            src={selectedImage}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            style={{
                                maxWidth: '90%',
                                maxHeight: '90%',
                                borderRadius: '12px',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'white',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={20} color="black" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
    );
}

// Sub-components

const RevealSection = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.div>
    );
};

const FeatureItem = ({ icon, title, desc }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
            {icon}
        </div>
        <div>
            <h4 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{title}</h4>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5 }}>{desc}</p>
        </div>
    </div>
);

const TechSpecRow = ({ icon, label, value }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #E9ECEF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#555' }}>
            {icon}
            <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{label}</span>
        </div>
        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#000' }}>{value}</span>
    </div>
);

const BentoCard = ({ src, caption, style, onClick }) => (
    <motion.div
        whileHover={{ y: -6, scale: 1.01, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
            ...style,
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid #fff',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.08)',
            background: '#fff',
            cursor: 'zoom-in'
        }}
    >
        <img
            src={src}
            alt={caption}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top left'
            }}
        />
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '1.5rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            color: '#fff',
            pointerEvents: 'none'
        }}>
            <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>{caption}</p>
        </div>
    </motion.div>
);

const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderRadius: '12px',
    background: '#fff',
    border: '1px solid #e5e5e5',
    color: '#000',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.2s',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
};
