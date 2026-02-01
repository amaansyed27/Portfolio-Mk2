
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import androidIcon from '../assets/mobile/android.png';
import figmaIcon from '../assets/mobile/figma.png';
import flutterIcon from '../assets/mobile/flutter.png';
import kotlinIcon from '../assets/mobile/kotlin.png';
import javaIcon from '../assets/mobile/java.png';
// apk icon might not be needed for the stack, but available if needed.

// --- DATA ---
const PROJECTS = [
    {
        id: 'soma',
        title: 'Soma',
        type: 'Mental Health App',
        color: '#E0F2F1', // Light Teal
        textColor: '#004D40',
        desc: 'Android health companion built with Jetpack Compose & Health Connect.',
        stack: [kotlinIcon, androidIcon],
        rotation: -10,
        zIndex: 1
    },
    {
        id: 'flexhero',
        title: 'FlexHero',
        type: 'Fitness & Workouts',
        color: '#E3F2FD', // Light Blue
        textColor: '#0D47A1',
        desc: 'Comprehensive fitness app generating personalized home workouts with Flutter.',
        stack: [flutterIcon, figmaIcon],
        rotation: 0,
        zIndex: 10 // Center card on top
    },
    {
        id: 'ecobridge',
        title: 'EcoBridge',
        type: 'Ecosystem Bridge',
        color: '#F3E5F5', // Light Purple
        textColor: '#4A148C',
        desc: 'High-performance bridge turning Android into a desktop extension.',
        stack: [flutterIcon, androidIcon],
        rotation: 10,
        zIndex: 1
    }
];

// --- PHONE FRAME COMPONENT (No Notch) ---
// --- HOOKS ---
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Tablet/Mobile breakpoint
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

// --- PHONE FRAME COMPONENT (Responsive) ---
const PhoneFrame = ({ project, index, isMobile }) => (
    <motion.div
        whileHover={!isMobile ? {
            scale: 1.05,
            y: -20,
            zIndex: 20,
            rotate: 0,
            transition: { type: "spring", stiffness: 300 }
        } : {}} // Disable hover transforms on mobile for stability
        initial={{
            rotate: isMobile ? 0 : project.rotation,
            y: (!isMobile && project.id === 'flexhero') ? 0 : (!isMobile ? 30 : 0)
        }}
        style={{
            width: '280px',
            height: '580px',
            backgroundColor: '#111',
            borderRadius: '40px',
            padding: '10px',
            boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            zIndex: isMobile ? 1 : project.zIndex,
            margin: isMobile ? '20px 0' : '0 -40px', // No overlap on mobile, vertical spacing
            cursor: 'pointer'
        }}
    >
        {/* ... existing card content ... */}
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: project.color,
            borderRadius: '32px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.5rem',
            position: 'relative'
        }}>

            {/* Header */}
            <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: project.textColor, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {project.type}
                </h4>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: project.textColor, lineHeight: 1.1, marginTop: '0.5rem' }}>
                    {project.title}
                </h3>
            </div>

            {/* Middle Visual/Desc */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ textAlign: 'center', color: project.textColor, fontWeight: 500, lineHeight: 1.5, fontSize: '1rem', opacity: 0.9 }}>
                    {project.desc}
                </p>
            </div>

            {/* Footer / Stack */}
            <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                {project.stack.map((icon, i) => (
                    <div key={i} style={{
                        width: '36px', height: '36px', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.6)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        backdropFilter: 'blur(5px)'
                    }}>
                        <img src={icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                    </div>
                ))}

                {/* Arrow Button */}
                <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: project.textColor, marginLeft: 'auto',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <span style={{ color: '#fff', fontSize: '1.2rem', lineHeight: 0 }}>→</span>
                </div>
            </div>

        </div>
    </motion.div>
);

// ... icons ...

const BACKGROUND_ICONS = [androidIcon, flutterIcon, kotlinIcon, figmaIcon, javaIcon];

// --- FLOATING BACKGROUND ICONS ---
const FloatingIcons = () => {
    // Grid-based generation for even distribution
    const icons = [];
    const rows = 4;
    const cols = 5; // 4x5 grid = 20 cells

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Skip some cells randomly to not be too crowded (70% fill)
            if (Math.random() > 0.7) continue;

            const iconIndex = (r * cols + c) % BACKGROUND_ICONS.length;
            const icon = BACKGROUND_ICONS[iconIndex];

            // Base position based on grid
            const baseTop = (r / rows) * 100;
            const baseLeft = (c / cols) * 100;

            // Jitter within the cell (approx 20% width/height)
            const top = baseTop + Math.random() * 15;
            const left = baseLeft + Math.random() * 15;
            const size = 30 + Math.random() * 50; // Smaller size range
            const duration = 20 + Math.random() * 15;

            icons.push(
                <motion.img
                    key={`${r}-${c}`}
                    src={icon}
                    alt=""
                    initial={{ y: 0, rotate: 0, opacity: 0 }}
                    animate={{
                        y: [0, -50, 0], // Reduced movement range
                        rotate: [0, 360],
                        opacity: [0.1, 0.25, 0.1]
                    }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        top: `${top}%`,
                        left: `${left}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        filter: 'grayscale(100%) blur(1px)',
                        opacity: 0.15,
                        maxWidth: 'none' // Prevent css constraints
                    }}
                />
            );
        }
    }

    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            {icons}
        </div>
    );
};

export default function ProjectMobile() {
    const isMobile = useIsMobile();

    return (
        <section className="section" style={{
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            position: 'relative',
            background: 'radial-gradient(circle at center, #FAFAFA 0%, #F5F5F5 100%)',
            overflow: 'hidden'
        }}>
            {/* ... bg ... */}
            <FloatingIcons />
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(#e0e0e0 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                opacity: 0.3,
                zIndex: 0
            }} />

            <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem', position: 'relative', zIndex: 2, padding: '0 1rem' }}>
                <h2 style={{ fontSize: isMobile ? '2.5rem' : '4rem', fontWeight: 800, color: '#111', marginBottom: '0.5rem', letterSpacing: '-1px' }}>
                    Built for Mobile.
                </h2>
                <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                    Crafting fluid experiences with Flutter & Kotlin.
                </p>
            </div>

            {/* Phones Container */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                perspective: '1000px',
                marginBottom: '4rem',
                flexWrap: 'wrap',
                flexDirection: isMobile ? 'column' : 'row', // Vertical stack on mobile
                gap: isMobile ? '0' : '0', // Margin handled in PhoneFrame
                position: 'relative',
                zIndex: 10,
                width: '100%'
            }}>
                {PROJECTS.map((project, i) => (
                    <PhoneFrame key={project.id} project={project} index={i} isMobile={isMobile} />
                ))}
            </div>

            {/* Tech Stack Row */}
            <div style={{
                display: 'flex',
                gap: '3rem',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                opacity: 0.9,
                position: 'relative',
                zIndex: 10,
                background: 'rgba(255,255,255,0.8)',
                padding: '1rem 3rem',
                borderRadius: '50px',
                border: '1px solid #fff',
                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                backdropFilter: 'blur(10px)'
            }}>
                <img src={androidIcon} alt="Android" style={{ height: '40px', filter: 'grayscale(0%)', opacity: 1 }} />
                <img src={flutterIcon} alt="Flutter" style={{ height: '35px', filter: 'grayscale(0%)', opacity: 1 }} />
                <img src={kotlinIcon} alt="Kotlin" style={{ height: '35px', filter: 'grayscale(0%)', opacity: 1 }} />
                <img src={javaIcon} alt="Java" style={{ height: '45px', filter: 'grayscale(0%)', opacity: 1 }} />
                <img src={figmaIcon} alt="Figma" style={{ height: '40px', filter: 'grayscale(0%)', opacity: 1 }} />
            </div>

        </section>
    );
}
