import { useRef } from 'react';
import { motion } from 'framer-motion';

const AchievementCard = ({ title, project, year }) => (
    <div style={{
        minWidth: '400px',
        height: '250px',
        background: '#fff',
        borderRadius: '24px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        marginRight: '2rem',
        userSelect: 'none',
        border: '1px solid #f0f0f0'
    }}>
        <h3 style={{ fontSize: '1.5rem', lineHeight: 1.3, fontFamily: 'var(--font-display)', fontWeight: 600 }}>{title}</h3>
        <div>
            <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '0.5rem' }}>{project}</p>
            <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 500 }}>{year}</span>
        </div>
    </div>
);

export default function Achievements() {
    const constraintsRef = useRef(null);

    const achievements = [
        { title: "1st Place Winner", project: "AI Demos x VideoDB Hackathon (Project: Edentic)", year: "2025" },
        { title: "1st Place Winner", project: "AcWoC'25 (Android Club Winter of Code)", year: "2025" },
        { title: "Top 10 Contributor", project: "Social Summer Code (SSOC'25) - Rank 8", year: "2025" },
        { title: "Top 100 Finalist", project: "Hack Hazards'25 AI Cybersecurity Track", year: "2025" },
        { title: "Finalist (Top 30)", project: "John Hopkins VIT Health Hack", year: "2025" }
    ];

    return (
        <section className="container section" style={{ overflow: 'hidden' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Achievements</h2>

            <div ref={constraintsRef} style={{ overflow: 'hidden', cursor: 'grab' }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -600 }}
                    style={{ display: 'flex' }}
                >
                    {achievements.map((t, i) => (
                        <AchievementCard key={i} {...t} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
