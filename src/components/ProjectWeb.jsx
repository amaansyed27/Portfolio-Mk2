import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrowserFrame = ({ url, style, color, title, rotateX, rotateY, z }) => (
    <motion.div
        style={{
            width: '800px',
            height: '500px',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            position: 'absolute',
            backfaceVisibility: 'hidden', // Crucial for performance
            border: '1px solid rgba(0,0,0,0.1)',
            overflow: 'hidden',
            ...style
        }}
    >
        {/* Browser Bar */}
        <div style={{ height: '40px', background: '#f5f5f5', borderBottom: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            <div style={{ marginLeft: '1rem', flex: 1, background: '#fff', height: '24px', borderRadius: '4px', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: '12px', color: '#888' }}>
                {url}
            </div>
        </div>

        {/* Content */}
        <div style={{ height: 'calc(100% - 40px)', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ color: '#666' }}>Interactive React Dashboard</p>
        </div>
    </motion.div>
);

export default function ProjectWeb() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // 3D Deck Transformation
    // They start stacked and tilted, then spread out into a grid-like view
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [45, 0]);
    const y1 = useTransform(scrollYProgress, [0, 1], [400, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [350, -250]);
    const y3 = useTransform(scrollYProgress, [0, 1], [300, -400]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    const zLeft = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
    const zRight = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

    const xLeft = useTransform(scrollYProgress, [0, 0.5], [0, -900]); // Spread left
    const xRight = useTransform(scrollYProgress, [0, 0.5], [0, 900]); // Spread right

    return (
        <section ref={containerRef} className="container section" style={{ minHeight: '150vh', perspective: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center', transformStyle: 'preserve-3d' }}>

                {/* Left Card */}
                <motion.div style={{ x: xLeft, y: y1, rotateX, z: zLeft, position: 'absolute' }}>
                    <BrowserFrame title="E-Commerce Interface" color="#E3F2FD" url="shop.example.com" />
                </motion.div>

                {/* Center Card (Front) */}
                <motion.div style={{ y: y2, rotateX, scale, position: 'absolute', zIndex: 10 }}>
                    <BrowserFrame title="SaaS Analytic Dashboard" color="#F3E5F5" url="app.analytics.io" />
                </motion.div>

                {/* Right Card */}
                <motion.div style={{ x: xRight, y: y3, rotateX, z: zRight, position: 'absolute' }}>
                    <BrowserFrame title="Design System Library" color="#E8F5E9" url="figma.com/design" />
                </motion.div>

            </div>

            <div style={{ position: 'absolute', bottom: '10%', textAlign: 'center', width: '100%' }}>
                <h2 style={{ fontSize: '4vw' }}>Web & Interface.</h2>
            </div>
        </section>
    );
}
