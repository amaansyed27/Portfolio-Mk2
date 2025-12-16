import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Node = ({ x, y, label, delay }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: "spring" }}
        style={{
            position: 'absolute',
            left: x,
            top: y,
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.8)',
            border: '2px solid #00FF88',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00FF88',
            fontSize: '0.8rem',
            textAlign: 'center',
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
            zIndex: 2
        }}
    >
        {label}
    </motion.div>
);

const Connection = ({ start, end, delay }) => (
    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        <motion.line
            x1={start[0]} y1={start[1]}
            x2={end[0]} y2={end[1]}
            stroke="#00FF88"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ delay, duration: 1 }}
        />
    </svg>
);

const TerminalLine = ({ text, delay }) => {
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        let current = '';
        let timeout;

        const type = (i) => {
            if (i < text.length) {
                current += text[i];
                setDisplayed(current);
                timeout = setTimeout(() => type(i + 1), 30 + Math.random() * 50);
            }
        };

        const startTimeout = setTimeout(() => type(0), delay * 1000);
        return () => { clearTimeout(timeout); clearTimeout(startTimeout); };
    }, [text, delay]);

    return <div style={{ fontFamily: 'monospace', color: '#00FF88', marginBottom: '4px' }}>{'>'} {displayed}</div>;
};

export default function ProjectAI() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="container section" style={{ minHeight: '120vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FAFAFA' }}> {/* Light bg to separate from dark terminal */}

            <div style={{ position: 'relative', width: '900px', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                {/* Nodes */}
                <Node x="10%" y="20%" label="RAG DB" delay={0.2} />
                <Node x="80%" y="30%" label="LLM Core" delay={0.4} />
                <Node x="20%" y="70%" label="Agent A" delay={0.6} />
                <Node x="70%" y="80%" label="Agent B" delay={0.8} />

                {/* Connections */}
                <Connection start={['15%', '25%']} end={['50%', '50%']} delay={0.5} />
                <Connection start={['80%', '35%']} end={['50%', '50%']} delay={0.7} />
                <Connection start={['25%', '70%']} end={['50%', '50%']} delay={0.9} />
                <Connection start={['70%', '80%']} end={['50%', '50%']} delay={1.1} />

                {/* Main Terminal */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    style={{
                        width: '600px',
                        height: '400px',
                        background: '#080808',
                        borderRadius: '16px',
                        padding: '2rem',
                        border: '1px solid #333',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                        zIndex: 10,
                        position: 'relative'
                    }}
                >
                    <div style={{ borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                        <span style={{ marginLeft: 'auto', color: '#444', fontSize: '0.8rem' }}>agent_controller.py</span>
                    </div>

                    <TerminalLine text="Initializing autonomous agents..." delay={0.5} />
                    <TerminalLine text="Connecting to Vector Database [Pinecone]..." delay={1.5} />
                    <TerminalLine text="Loading context from memory..." delay={2.5} />
                    <TerminalLine text="> Agent A: Task received. Analyzing metrics." delay={3.5} />
                    <TerminalLine text="> Agent B: Generating optimization strategy." delay={4.5} />
                    <TerminalLine text="System ready. Waiting for input..." delay={5.5} />
                </motion.div>

            </div>

            <div style={{ position: 'absolute', bottom: '10%', textAlign: 'center', width: '100%' }}>
                <h2 style={{ fontSize: '4vw' }}>AI & Agents.</h2>
            </div>
        </section>
    );
}
