import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ASSETS: Mobile
import androidIcon from '../assets/mobile/android.png';
import apkIcon from '../assets/mobile/apk.png';
import figmaIcon from '../assets/mobile/figma.png';
import flutterIcon from '../assets/mobile/flutter.png';
import javaIcon from '../assets/mobile/java.png';
import kotlinIcon from '../assets/mobile/kotlin.png';

// ASSETS: Web
import cssIcon from '../assets/web-dev-logos/css.png';
import htmlIcon from '../assets/web-dev-logos/html.png';
import nextjsIcon from '../assets/web-dev-logos/nextjs.png';
import reactIcon from '../assets/web-dev-logos/react.png';
import tailwindIcon from '../assets/web-dev-logos/tailwind.png';
import viteIcon from '../assets/web-dev-logos/vite.png';

// ASSETS: AI
import pythonIcon from '../assets/ai-and-agents/python.png';
import jsIcon from '../assets/ai-and-agents/js-logo.png';
import aiIcon from '../assets/ai-and-agents/ai.png';
import automationIcon from '../assets/ai-and-agents/automation.png';

// --- ITEM CONFIGURATION ---
const MarqueeItem = ({ item }) => {
    if (item.type === 'text') {
        return (
            <span style={{
                fontSize: 'clamp(2.5rem, 15vw, 8rem)', // Adjusted for mobile safety
                fontWeight: 800, // Reduced for Orbitron readability
                color: item.color || '#e0e0e0',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em', // Added spacing
                lineHeight: 0.9,
                margin: '0 2rem'
            }}>
                {item.value}
            </span>
        );
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '0 2rem'
        }}>
            <img
                src={item.src}
                alt=""
                style={{
                    width: '80px', // Large icons
                    height: '80px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.1))'
                }}
            />
        </div>
    );
};

const MarqueeRow = ({ items, direction = 1, speed = 50 }) => {
    return (
        <div style={{ display: 'flex', overflow: 'hidden', padding: '1rem 0' }}>
            <motion.div
                initial={{ x: direction === 1 ? 0 : "-50%" }}
                animate={{ x: direction === 1 ? "-50%" : 0 }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
                style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
            >
                {/* Quadruple for safety on ultra-wide screens */}
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <MarqueeItem key={i} item={item} />
                ))}
            </motion.div>
        </div>
    );
};

export default function Skills() {
    // Row 1: Full Stack / Web
    const row1 = [
        { type: 'text', value: 'FULL STACK', color: '#1a1a1a' },
        { type: 'icon', src: reactIcon },
        { type: 'text', value: 'WEB DEV', color: '#ccc' },
        { type: 'icon', src: nextjsIcon },
        { type: 'text', value: 'SYSTEMS', color: '#1a1a1a' },
        { type: 'icon', src: tailwindIcon },
        { type: 'text', value: 'DESIGN', color: '#ccc' },
        { type: 'icon', src: cssIcon },
    ];

    // Row 2: AI & Agents (Opposite direction)
    const row2 = [
        { type: 'icon', src: pythonIcon },
        { type: 'text', value: 'ARTIFICIAL', color: '#4CAF50' }, // Accent color for AI
        { type: 'icon', src: aiIcon },
        { type: 'text', value: 'INTELLIGENCE', color: '#1a1a1a' },
        { type: 'icon', src: automationIcon },
        { type: 'text', value: 'AGENTS', color: '#1a1a1a' },
        { type: 'icon', src: jsIcon },
        { type: 'text', value: 'RAG', color: '#4CAF50' },
    ];

    // Row 3: Mobile & Tools
    const row3 = [
        { type: 'text', value: 'MOBILE', color: '#2196F3' }, // Accent for Mobile
        { type: 'icon', src: flutterIcon },
        { type: 'text', value: 'APPS', color: '#1a1a1a' },
        { type: 'icon', src: kotlinIcon },
        { type: 'text', value: 'ANDROID', color: '#ccc' },
        { type: 'icon', src: androidIcon },
        { type: 'text', value: 'DEPLOY', color: '#1a1a1a' },
        { type: 'icon', src: figmaIcon },
    ];

    return (
        <section className="container section" style={{ overflow: 'hidden', padding: '8rem 0 4rem' }}>
            {/* Static Heading as requested - No scrolling animation on this */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 700, fontFamily: '"Orbitron", sans-serif' }}>TECHNOLOGY ARSENAL</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <MarqueeRow items={row1} direction={-1} speed={40} />
                <MarqueeRow items={row2} direction={1} speed={45} />
                <MarqueeRow items={row3} direction={-1} speed={35} />
            </div>
        </section>
    );
}
