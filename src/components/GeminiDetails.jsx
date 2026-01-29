import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Zap, Image as ImageIcon, MessageSquare, Search, Code2, Cpu, Database, Globe, Palette, Layout } from 'lucide-react';
import homeImg from '../assets/web/gemini_gpt/home.png';
import modelsImg from '../assets/web/gemini_gpt/models.png';
import loadingImg from '../assets/web/gemini_gpt/loading.png';
import imageGenImg from '../assets/web/gemini_gpt/image_gen.png';
import geminiLogo from '../assets/web/gemini_gpt/Gemini_gpt_logo.png';

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

export default function GeminiDetails({ onClose }) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <motion.div
            layoutId="gemini-card-container"
            data-lenis-prevent
            ref={scrollRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#FAFAFA',
                zIndex: 9999,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Close Button - Fixed */}
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

            {/* HERO SECTION: Refined Premium Layout */}
            <div style={{
                minHeight: isMobile ? 'auto' : '85vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: isMobile ? '6rem' : 0,
                paddingBottom: isMobile ? '4rem' : 0,
                background: 'radial-gradient(circle at 60% 50%, #fff 0%, #f4f4f5 100%)'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr',
                    gap: isMobile ? '3rem' : '2rem',
                    alignItems: 'center',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: isMobile ? '0 1.5rem' : '0 4rem'
                }}>

                    {/* LEFT: Branding & Info */}
                    <div style={{ zIndex: 2, order: isMobile ? 1 : 0 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
                        >
                            <motion.img
                                src={geminiLogo}
                                alt="Gemini Logo"
                                style={{ width: isMobile ? '48px' : '56px', height: 'auto' }}
                            />
                            <div style={{
                                padding: '0.5rem 1rem',
                                background: '#E0F2FE',
                                color: '#0284C7',
                                borderRadius: '100px',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                letterSpacing: '0.05em'
                            }}>
                                V 1.0.0
                            </div>
                        </motion.div>

                        <motion.h1
                            layoutId="gemini-card-title"
                            style={{
                                fontSize: isMobile ? '3rem' : '4.5rem',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                color: '#111',
                                marginBottom: '1.5rem'
                            }}
                        >
                            Gemini GPT
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                fontSize: isMobile ? '1.1rem' : '1.25rem',
                                lineHeight: 1.6,
                                color: '#555',
                                marginBottom: '2.5rem',
                                maxWidth: '520px'
                            }}
                        >
                            Experience the power of Google's Gemini Models.
                            Streaming chat, multimodal vision, and live web grounding
                            in a premium, minimal interface.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem' }}
                        >
                            <a href="https://github.com/amaansyed27/gemini_gpt" target="_blank" rel="noopener noreferrer" style={{ ...buttonStyle, justifyContent: 'center' }}>
                                <Github size={20} /> <span style={{ marginLeft: '8px' }}>View Source</span>
                            </a>
                            <a href="https://gemini-gpt-ui.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ ...buttonStyle, background: '#111', color: '#fff', border: 'none', justifyContent: 'center' }}>
                                <ExternalLink size={20} /> <span style={{ marginLeft: '8px' }}>Launch App</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* RIGHT: 3D Image Showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: 0 }}
                        animate={{ opacity: 1, x: 0, rotateY: -12 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        style={{
                            perspective: '2000px',
                            display: 'flex',
                            justifyContent: 'center',
                            transformStyle: 'preserve-3d',
                            order: isMobile ? 2 : 1,
                            marginBottom: isMobile ? '2rem' : 0,
                            scale: isMobile ? 1 : 1.15
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            style={{
                                borderRadius: '24px',
                                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.15), 0 30px 60px -30px rgba(0,0,0,0.3)',
                                border: '4px solid #fff',
                                overflow: 'hidden',
                                transform: 'rotateY(-12deg) rotateX(2deg)',
                                maxWidth: '100%'
                            }}
                        >
                            <img
                                src={homeImg}
                                alt="Dashboard Preview"
                                style={{ display: 'block', width: '100%', height: 'auto' }}
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="container" style={{ padding: isMobile ? '2rem 1.5rem' : '4rem', maxWidth: '1200px', margin: '0 auto', flex: 1 }}>

                {/* Info Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.8fr 1fr', gap: isMobile ? '3rem' : '5rem', marginBottom: '8rem' }}>
                    {/* Left: Features */}
                    <div>
                        <RevealSection>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: 600 }}>Engineered for Performance</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem' }}>
                                <FeatureItem icon={<Zap size={24} />} title="Streaming Response" desc="Real-time token generation with zero latency." />
                                <FeatureItem icon={<ImageIcon size={24} />} title="Multimodal Vision" desc="Analyze images and diagrams instantly." />
                                <FeatureItem icon={<Search size={24} />} title="Web Grounding" desc="Live search integration for factual queries." />
                                <FeatureItem icon={<MessageSquare size={24} />} title="Chat History" desc="Local persistent storage for conversations." />
                            </div>
                        </RevealSection>
                    </div>

                    {/* Right: Specs */}
                    <RevealSection delay={0.2}>
                        <div style={{ background: '#F8F9FA', padding: '2rem', borderRadius: '24px', border: '1px solid #E9ECEF' }}>
                            <h4 style={{ marginBottom: '1.5rem', fontWeight: 600 }}>Tech Stack</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <TechSpecRow icon={<Code2 size={18} />} label="Frontend" value="React 18" />
                                <TechSpecRow icon={<Layout size={18} />} label="Build Tool" value="Vite" />
                                <TechSpecRow icon={<Cpu size={18} />} label="AI Model" value="Gemini Pro 1.5" />
                                <TechSpecRow icon={<Palette size={18} />} label="UI Lib" value="Tailwind + Motion" />
                            </div>
                        </div>
                    </RevealSection>
                </div>

                {/* BENTO GRID GALLERY */}
                <RevealSection delay={0.3}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Interface Gallery</h3>
                        <p style={{ color: '#666', fontSize: '1.1rem' }}>A closer look at the experience. Click to enlarge.</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        autoRows: '250px'
                    }}>
                        {/* 1. Main Feature Card (Large) */}
                        <BentoCard
                            src={homeImg}
                            caption="Welcome Screen"
                            onClick={() => setSelectedImage(homeImg)}
                            style={{
                                gridColumn: isMobile ? 'span 1' : 'span 2',
                                gridRow: isMobile ? 'span 1' : 'span 2'
                            }}
                        />

                        {/* 2. Detail Card */}
                        <BentoCard
                            src={modelsImg}
                            caption="Model Selector"
                            onClick={() => setSelectedImage(modelsImg)}
                            style={{ gridColumn: 'span 1', gridRow: 'span 1' }}
                        />

                        {/* 3. Detail Card */}
                        <BentoCard
                            src={imageGenImg}
                            caption="Image Generation"
                            onClick={() => setSelectedImage(imageGenImg)}
                            style={{ gridColumn: 'span 1', gridRow: 'span 1' }}
                        />

                        {/* 4. Wide Card (Bottom) */}
                        <BentoCard
                            src={loadingImg}
                            caption="Loading States & Transitions"
                            onClick={() => setSelectedImage(loadingImg)}
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
                            onClick={(e) => e.stopPropagation()} // Keep modal open if clicking image? Or close? User said "Enlarge", usually clicking outside closes.
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
