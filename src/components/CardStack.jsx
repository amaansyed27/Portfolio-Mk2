import { useRef } from 'react';
import { motion } from 'framer-motion';

// --- Telemetry Components ---
const EngineMode = ({ label, value, color }) => (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: '12px', border: '1px solid #e5e5e5', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ color: '#666', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{label}</div>
        <div style={{ display: 'flex', alignItems: 'end', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1, color: color }}>{value}</span>
            <span style={{ fontSize: '0.8rem', color: '#999', marginBottom: '4px' }}>%</span>
        </div>
        <div style={{ width: '100%', height: '4px', background: '#f0f0f0', marginTop: '0.5rem', borderRadius: '2px' }}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ height: '100%', background: color, borderRadius: '2px' }}
            />
        </div>
    </div>
);

const SectorList = ({ title, items, color }) => (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: '12px', border: '1px solid #e5e5e5', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ color: '#666', fontSize: '0.75rem', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{title}</div>
        <div style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {items.map((item, i) => (
                <span key={i} style={{
                    fontSize: '0.85rem',
                    color: '#444',
                    background: '#f4f4f4',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    borderLeft: `2px solid ${color}`,
                    fontWeight: 500
                }}>
                    {item}
                </span>
            ))}
        </div>
    </div>
);

const TrackMap = ({ color }) => (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: '12px', border: '1px solid #e5e5e5', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
        <div style={{ color: '#666', fontSize: '0.75rem', marginBottom: '0.5rem', width: '100%', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Track Map</div>
        <svg width="100%" height="60" viewBox="0 0 200 60" style={{ opacity: 1.0 }}>
            <path d="M10,50 C30,50 30,10 50,10 L150,10 C170,10 170,50 190,50" fill="none" stroke={color} strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="190" cy="50" r="4" fill={color} />
        </svg>
    </div>
);

// --- Main Card ---
const TelemetryCard = ({ i, title, body, color, stats, skills }) => {
    return (
        <div style={{
            height: '100vh',
            position: 'sticky',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: `calc(env(safe-area-inset-top) + ${i * 40}px)`
        }}>
            <motion.div
                style={{
                    background: '#ffffff', // Light Theme
                    width: '900px',
                    maxWidth: '92vw',
                    height: '600px', // Taller for stats
                    borderRadius: '24px',
                    padding: '40px',
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.05)', // Softer shadow
                    display: 'grid',
                    gridTemplateColumns: '1fr 300px',
                    gridTemplateRows: 'auto 1fr',
                    gap: '2rem',
                    overflow: 'hidden',
                    position: 'relative'
                }}
                initial={{ scale: 0.95, y: 50, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header Line - visual only */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: `linear-gradient(90deg, ${color}, transparent)` }} />

                {/* Left Column: Title & Description */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ color: color, fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                        SYSTEM CHECK 0{i + 1}
                    </div>
                    <h3 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', color: '#111', lineHeight: 1 }}>{title}</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444', maxWidth: '40ch' }}>{body}</p>
                </div>

                {/* Right Column: Telemetry Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', alignContent: 'center' }}>
                    <EngineMode label="Efficiency" value={stats.efficiency} color={color} />
                    <SectorList title="Tech Stack" items={skills} color={color} />
                    <TrackMap color={color} />
                </div>

                {/* Background Grid Pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'linear-gradient(#eee 1px, transparent 1px), linear-gradient(90deg, #eee 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    opacity: 0.6,
                    zIndex: -1,
                    pointerEvents: 'none'
                }} />
            </motion.div>
        </div>
    );
};

export default function CardStack() {
    const cards = [
        {
            title: "Agentic AI & RAG",
            body: "Architecting autonomous agents that can plan, execute, and verify. Using RAG pipelines to ground LLMs in private data.",
            color: "#FF4D00",
            stats: { efficiency: 98 },
            skills: ["LangChain", "Vector DBs", "OpenAI", "Gemini"]
        },
        {
            title: "Full-Stack Ops",
            body: "End-to-end development of scalable web applications. From pixel-perfect frontends to robust, distributed backends.",
            color: "#0055FF",
            stats: { efficiency: 100 },
            skills: ["React", "Next.js", "Node.js", "Drizzle"]
        },
        {
            title: "Automation",
            body: "Designing intelligent workflows that reduce manual toil. Python scripting and n8n nodes for seamless process integration.",
            color: "#00AA00",
            stats: { efficiency: 99 },
            skills: ["n8n", "Python", "APIs", "Webhooks"]
        }
    ];

    return (
        <section className="container" style={{ marginBottom: '100px' }}>
            <div style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', color: '#111' }}>Technical Telemetry</h2>
            </div>
            {cards.map((card, i) => (
                <TelemetryCard key={i} {...card} i={i} />
            ))}
        </section>
    );
}
