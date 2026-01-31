import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Trophy, Star, Medal, Award, Crown } from 'lucide-react';

const getAchievementIcon = (title) => {
    if (title.includes('1st') || title.includes('Winner')) return <Trophy color="#FFD700" size={32} />;
    if (title.includes('2nd')) return <Medal color="#C0C0C0" size={32} />;
    if (title.includes('3rd')) return <Medal color="#CD7F32" size={32} />;
    if (title.includes('Top 10')) return <Crown color="#9C27B0" size={32} />;
    return <Star color="#FF4081" size={32} />;
};

// --- 3D TILT CARD COMPONENT ---
const TiltCard = ({ data, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const gradients = [
        'linear-gradient(135deg, #FFF8E1 0%, #FFFFFF 100%)', // Gold
        'linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)', // Blue
        'linear-gradient(135deg, #F3E5F5 0%, #FFFFFF 100%)', // Purple
        'linear-gradient(135deg, #E8F5E9 0%, #FFFFFF 100%)', // Green
        'linear-gradient(135deg, #FFEBEE 0%, #FFFFFF 100%)', // Red
    ];
    const bg = gradients[index % gradients.length];

    return (
        <motion.div
            style={{
                perspective: 1000,
                marginRight: '2rem',
                cursor: 'grab'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{
                    width: '360px',
                    height: '260px',
                    borderRadius: '30px',
                    background: bg,
                    position: 'relative',
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.8)'
                }}
                whileHover={{ scale: 1.05 }}
            >
                {/* Glossy Overlay */}
                <div style={{
                    position: 'absolute', inset: 0, borderRadius: '30px',
                    background: 'linear-gradient(120deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)',
                    pointerEvents: 'none', transform: 'translateZ(50px)'
                }} />

                {/* Content Layer - Floating */}
                <div style={{
                    position: 'absolute', inset: '2rem',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    transform: 'translateZ(60px)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.9)', padding: '12px', borderRadius: '16px',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.08)', backdropFilter: 'blur(4px)'
                        }}>
                            {getAchievementIcon(data.title)}
                        </div>
                        <span style={{
                            background: '#222', color: '#fff', padding: '6px 14px',
                            borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700
                        }}>
                            {data.year}
                        </span>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.4rem', lineHeight: 1.2, fontWeight: 700, color: '#222', marginBottom: '0.75rem' }}>{data.title}</h3>
                        <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.4, fontWeight: 500 }}>{data.project}</p>
                    </div>
                </div>

            </motion.div>
        </motion.div>
    );
};

export default function Achievements() {
    const achievements = [
        { title: "2nd Place Winner", project: "GenAI Hackathon by ML Mumbai (FreshLogic)", year: "2025" },
        { title: "1st Place Winner", project: "AI Demos x VideoDB Hackathon (Project: Edentic)", year: "2025" },
        { title: "1st Place Winner", project: "AcWoC'25 (Android Club Winter of Code)", year: "2025" },
        { title: "Top 10 Contributor", project: "Social Summer Code (SSOC'25) - Rank 8", year: "2025" },
        { title: "Top 100 Finalist", project: "Hack Hazards'25 AI Cybersecurity Track", year: "2025" },
        { title: "Finalist (Top 30)", project: "John Hopkins VIT Health Hack", year: "2025" }
    ];

    const [width, setWidth] = useState(0);
    const sliderRef = useRef();

    useEffect(() => {
        if (sliderRef.current) {
            setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
        }
    }, [sliderRef]);

    return (
        <section className="container section" style={{
            overflow: 'visible',
            paddingBottom: '2rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <Award size={40} color="#333" />
                <h2 style={{ fontSize: '3rem', fontWeight: 800, margin: 0, letterSpacing: '-1px' }}>Achievements</h2>
            </div>

            <motion.div ref={sliderRef} style={{ cursor: 'grab', overflow: 'hidden' }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    whileTap={{ cursor: 'grabbing' }}
                    style={{ display: 'flex', padding: '1rem' }}
                >
                    {achievements.map((t, i) => (
                        <TiltCard key={i} data={t} index={i} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
