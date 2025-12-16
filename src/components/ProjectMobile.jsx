import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Simple Phone Frame Component
const PhoneFrame = ({ color = '#fff', style, y }) => (
    <motion.div
        style={{
            ...style,
            y: y,
            width: '300px',
            height: '600px',
            backgroundColor: '#fff',
            borderRadius: '40px',
            border: '12px solid #1a1a1a',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
    >
        {/* Notch */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', height: '30px', background: '#1a1a1a', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', zIndex: 10 }} />

        {/* Content Placeholder */}
        <div style={{ width: '100%', height: '100%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '20px' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1a1a' }}>Project</h3>
            <p style={{ marginTop: '10px', textAlign: 'center', color: '#666' }}>App Interface Mockup</p>
        </div>
    </motion.div>
);

export default function ProjectMobile() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Different parallax speeds for the phones
    const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yCenter = useTransform(scrollYProgress, [0, 1], [300, -300]); // Moves faster
    const yRight = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="container section" style={{ minHeight: '150vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {/* Left Phone */}
                <div style={{ position: 'absolute', left: '5%', zIndex: 1 }}>
                    <PhoneFrame color="#FFD1DC" y={yLeft} style={{ rotate: -5 }} />
                </div>

                {/* Center Phone (Front) */}
                <div style={{ position: 'absolute', zIndex: 2 }}>
                    <PhoneFrame color="#E0F7FA" y={yCenter} />
                </div>

                {/* Right Phone */}
                <div style={{ position: 'absolute', right: '5%', zIndex: 1 }}>
                    <PhoneFrame color="#FFF9C4" y={yRight} style={{ rotate: 5 }} />
                </div>

            </div>

            <div style={{ position: 'absolute', bottom: '10%', textAlign: 'center', width: '100%' }}>
                <h2 style={{ fontSize: '4vw' }}>Built for Mobile.</h2>
            </div>
        </section>
    );
}
