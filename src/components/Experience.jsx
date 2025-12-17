import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ExperienceItem = ({ date, title, company, description, align }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: align === 'left' ? 'flex-end' : 'flex-start',
            padding: '2rem 0',
            width: '50%',
            marginLeft: align === 'left' ? 0 : '50%',
            paddingRight: align === 'left' ? '3rem' : 0,
            paddingLeft: align === 'right' ? '3rem' : 0,
            position: 'relative'
        }}>
            <div style={{ maxWidth: '400px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-highlight)', textTransform: 'uppercase' }}>{date}</span>
                <h3 style={{ fontSize: '2rem', marginTop: '0.5rem', lineHeight: 1.1 }}>{title}</h3>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text-light)', marginBottom: '1rem' }}>{company}</h4>
                <p style={{ lineHeight: 1.6, color: 'var(--color-text-light)' }}>{description}</p>
            </div>

            {/* Dot on the line */}
            <div style={{
                position: 'absolute',
                top: '2.5rem',
                [align === 'left' ? 'right' : 'left']: '-6px',
                width: '12px',
                height: '12px',
                background: 'var(--color-text)',
                borderRadius: '50%',
                border: '2px solid var(--color-bg)'
            }} />
        </div>
    );
};

export default function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

    const jobs = [
        { date: "Sep 2025 - Dec 2025", title: "Software Engineer Intern", company: "VideoDB (San Francisco)", description: "Architected advanced agentic AI systems to automate video analysis workflows. Reduced manual analysis time by 65%.", align: "left" },
        { date: "Nov 2024 - Oct 2025", title: "Android Developer & AI Lead", company: "The Android Club", description: "Mentored 20+ students on AI concepts. Led AI initiatives and tool integration for multiple hackathons.", align: "right" },
        { date: "Nov 2024 - Oct 2025", title: "Wireframe Designer", company: "MakeMyCards.com", description: "Designed 15+ wireframes in Figma, improving design hand-off efficiency by 35%. Optimized workflows to reduce expenses.", align: "left" }
    ];

    return (
        <section ref={containerRef} className="container" style={{ position: 'relative', padding: '100px 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ fontSize: '4rem' }}>Journey</h2>
            </div>

            <div style={{ position: 'relative' }}>
                {/* The Line */}
                <svg style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', width: '2px', height: '100%', overflow: 'visible' }}>
                    <motion.path
                        d="M 1 0 V 1000" // Simple vertical line, adjusted via CSS height roughly
                        stroke="var(--color-text)"
                        strokeWidth="2"
                        strokeDasharray="0 1"
                        style={{ pathLength, height: '100%' }}
                    />
                    {/* Fix: SVG Path length is relative to coordinate system. Better to use a Div for straight line */}
                </svg>

                {/* Better Line Implementation */}
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: '#E5E5E5', transform: 'translateX(-50%)' }}>
                    <motion.div style={{ width: '100%', background: 'var(--color-highlight)', scaleY: pathLength, transformOrigin: 'top', height: '100%' }} />
                </div>

                {jobs.map((job, i) => (
                    <ExperienceItem key={i} {...job} />
                ))}
            </div>
        </section>
    );
}
