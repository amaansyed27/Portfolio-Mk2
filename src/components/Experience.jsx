import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import carImage from '../assets/race_assets/single-car.png';

// --- Utilites ---
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);
        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [matches, query]);
    return matches;
};

// --- Desktop Components ---
const DesktopPitStop = ({ date, title, company, description, xPosition, align, index, currentProgress }) => {
    // xPosition is 0-100. We consider the card "active" if the car has passed it (with a small buffer).
    // Let's say active if progress >= xPosition - 5
    const isActive = currentProgress >= xPosition;
    const isTop = align === 'top';

    return (
        <div style={{
            position: 'absolute',
            left: `${xPosition}%`,
            top: '50%',
            transform: `translate(-50%, ${isTop ? '-115%' : '15%'})`,
            zIndex: 20,
            pointerEvents: 'none' // Let clicks pass through if needed, though cards usually interactive
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                animate={{
                    borderColor: isActive ? '#FF3333' : 'rgba(255,255,255,0.1)',
                    scale: isActive ? 1.05 : 1,
                    boxShadow: isActive ? '0 10px 40px rgba(255, 51, 51, 0.3)' : '0 8px 32px rgba(0,0,0,0.5)'
                }}
                transition={{ duration: 0.4 }}
                style={{
                    width: '240px',
                    background: 'rgba(10, 10, 10, 0.95)',
                    borderTop: isTop ? '3px solid #DDD' : 'none',
                    borderBottom: !isTop ? '3px solid #DDD' : 'none',
                    padding: '1rem',
                    borderRadius: '12px',
                    backdropFilter: 'blur(16px)',
                    textAlign: 'center',
                    position: 'relative',
                    borderLeft: '1px solid rgba(255,255,255,0.05)',
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                }}
            >
                {/* Connector Line to track */}
                <motion.div
                    animate={{ background: isActive ? '#FF3333' : '#444' }}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        [isTop ? 'bottom' : 'top']: '-20px',
                        height: '20px',
                        width: '2px',
                    }}
                />

                {/* Dot */}
                <motion.div
                    animate={{
                        backgroundColor: isActive ? '#FF3333' : '#444',
                        boxShadow: isActive ? '0 0 15px #FF3333' : 'none'
                    }}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        [isTop ? 'bottom' : 'top']: '-24px',
                        width: '10px', height: '10px',
                        borderRadius: '50%',
                        transform: 'translateX(-50%)',
                    }}
                />

                <div style={{
                    fontFamily: 'var(--font-display)',
                    color: '#888', fontSize: '0.7rem',
                    letterSpacing: '0.1em', fontWeight: 700,
                    marginBottom: '0.3rem'
                }}>
                    {date}
                </div>
                <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem', color: '#fff',
                    margin: '0.2rem 0', lineHeight: 1.1
                }}>
                    {title}
                </h3>
                <h4 style={{
                    fontSize: '0.75rem', color: '#FF3333',
                    fontWeight: 600, margin: '0 0 0.5rem'
                }}>
                    {company}
                </h4>
                <p style={{ fontSize: '0.75rem', color: '#aaa', lineHeight: 1.4, margin: 0 }}>
                    {description}
                </p>
            </motion.div>
        </div>
    );
};

const DesktopExperience = ({ jobs }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    // We want the car to traverse 0-100% during the middle part of the scroll
    // The section is tall (300vh or so), ensuring we have scroll room.
    const pathProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 100]);
    const smoothProgress = useSpring(pathProgress, { stiffness: 60, damping: 20 });

    // State to force re-render for progress updates (framer motion values doesn't always trigger react render for children props)
    const [currentProg, setCurrentProg] = useState(0);
    useEffect(() => smoothProgress.on("change", v => setCurrentProg(v)), [smoothProgress]);

    return (
        <section ref={targetRef} style={{ height: '300vh', position: 'relative' }}>
            <div style={{
                position: 'sticky', top: 0,
                height: '100vh',
                overflow: 'hidden',
                background: '#FAFAFA',
                display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>
                <div style={{ textAlign: 'center', position: 'absolute', top: '10vh', width: '100%' }}>
                    <h2 style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#111' }}>Career Circuit</h2>
                    <p style={{ color: '#666', fontFamily: 'var(--font-sans)', marginTop: '0.5rem', fontSize: '1.1rem' }}>Scroll to Drive</p>
                </div>

                <div style={{ position: 'relative', width: '100%', height: '600px', display: 'flex', alignItems: 'center' }}>

                    {/* SVG HORIZONTAL TRACK */}
                    {/* Using explicit viewBox to fix scaling issues. 
                        Path data range: x ~ -200 to 1800. y ~ 200 to 400.
                        Let's set viewBox to cover this with padding.
                     */}
                    <svg
                        viewBox="-250 100 2100 400"
                        style={{ width: '100%', height: '100%', overflow: 'visible' }}
                    >
                        <defs>
                            <path id="horizonTrackPath" d="M -200,300 C 300,300 500,200 800,300 C 1100,400 1300,300 1800,300" />
                        </defs>

                        {/* Bezel */}
                        <path d="M -200,300 C 300,300 500,200 800,300 C 1100,400 1300,300 1800,300"
                            fill="none" stroke="#111" strokeWidth="160" strokeLinecap="round" />

                        {/* Red Kerb Base */}
                        <path d="M -200,300 C 300,300 500,200 800,300 C 1100,400 1300,300 1800,300"
                            fill="none" stroke="#CC0000" strokeWidth="150" strokeLinecap="round" />

                        {/* White Kerb Dashes */}
                        <path d="M -200,300 C 300,300 500,200 800,300 C 1100,400 1300,300 1800,300"
                            fill="none" stroke="#fff" strokeWidth="150" strokeLinecap="round" strokeDasharray="40 40" />

                        {/* Asphalt */}
                        <path d="M -200,300 C 300,300 500,200 800,300 C 1100,400 1300,300 1800,300"
                            fill="none" stroke="#222" strokeWidth="110" strokeLinecap="round" />

                        {/* Center Line */}
                        <path d="M -200,300 C 300,300 500,200 800,300 C 1100,400 1300,300 1800,300"
                            fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="30 50" strokeOpacity="0.5" />
                    </svg>

                    {/* THE CAR */}
                    <motion.div
                        style={{
                            width: '120px', height: '60px',
                            offsetPath: `path("M -200,300 C 300,300 500,200 800,300 C 1100,400 1300,300 1800,300")`,
                            // map 0-100% progress to the path
                            offsetDistance: useTransform(smoothProgress, v => `${v}%`),
                            offsetRotate: 'auto 90deg',
                            position: 'absolute',
                            top: 0, left: 0,
                            backgroundImage: `url(${carImage})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            filter: 'drop-shadow(0 15px 10px rgba(0,0,0,0.4))'
                        }}
                    />

                    {/* Cards */}
                    {jobs.map((job, i) => (
                        <DesktopPitStop key={i} {...job} index={i} currentProgress={currentProg} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- Mobile Components ---
const MobilePitStop = ({ date, title, company, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                position: 'relative',
                marginLeft: '2rem',
                marginBottom: '3rem',
                background: '#1a1a1a',
                borderLeft: '4px solid #FF3333',
                padding: '1.5rem',
                borderRadius: '0 12px 12px 0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
        >
            {/* Connector Dot on the line */}
            <div style={{
                position: 'absolute',
                left: '-2.4rem', // Adjust based on margin/padding
                top: '0',
                width: '12px', height: '12px',
                background: '#FF3333',
                borderRadius: '50%',
                boxShadow: '0 0 0 4px rgba(255, 51, 51, 0.2)'
            }} />

            <span style={{
                display: 'inline-block',
                padding: '0.2rem 0.6rem',
                background: 'rgba(255,51,51,0.1)',
                color: '#FF3333',
                borderRadius: '4px',
                fontSize: '0.7rem', fontWeight: 700,
                marginBottom: '0.5rem'
            }}>
                {date}
            </span>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0.5rem 0' }}>{title}</h3>
            <h4 style={{ color: '#ccc', fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{company}</h4>
            <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.5 }}>{description}</p>
        </motion.div>
    );
};

const MobileExperience = ({ jobs }) => {
    return (
        <div style={{ padding: '4rem 1.5rem', background: '#FAFAFA' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#111' }}>My Journey</h2>
            </motion.div>

            <div style={{ position: 'relative', borderLeft: '2px dashed #ccc', paddingLeft: '0.5rem', maxWidth: '500px', margin: '0 auto' }}>
                {jobs.map((job, i) => (
                    <MobilePitStop key={i} {...job} index={i} />
                ))}
            </div>
        </div>
    );
};


export default function Experience() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const jobs = [
        { date: "NOV 2024", title: "WIREFRAME DESIGNER", company: "MakeMyCards.com", description: "Designed 15+ wireframes, optimized workflows.", xPosition: 20, align: 'top' },
        { date: "MAR 2025", title: "ANDROID DEV LEAD", company: "The Android Club", description: "Mentored 20+ students, led hackathon teams.", xPosition: 50, align: 'bottom' },
        { date: "SEP 2025", title: "SOFTWARE ENGINEER", company: "VideoDB", description: "Architected agentic AI systems, reducing analysis time.", xPosition: 80, align: 'top' }
    ];

    return isMobile ? <MobileExperience jobs={jobs} /> : <DesktopExperience jobs={jobs} />;
}
