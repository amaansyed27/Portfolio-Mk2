import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Card = ({ i, title, body, color }) => {
    const containerRef = useRef(null);
    // We don't strictly need scroll progress for basic sticky, but it helps for scale/fade

    return (
        <div
            ref={containerRef}
            style={{
                height: '100vh',
                position: 'sticky',
                top: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: `calc(${i} * 40px)` // Offset so they stack visibly
            }}
        >
            <motion.div
                style={{
                    background: color,
                    width: '800px',
                    maxWidth: '90vw',
                    height: '500px',
                    borderRadius: '32px',
                    padding: '40px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h3 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>{title}</h3>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: '#444' }}>{body}</p>
            </motion.div>
        </div>
    );
};

export default function CardStack() {
    const cards = [
        { title: "Agentic AI & RAG", body: "Building autonomous agents and RAG pipelines using LangChain, LangGraph, and Vector Databases. Expertise in LLM integration (Gemini, OpenAI) and prompt engineering.", color: "#FAFAFA" },
        { title: "Full-Stack & Mobile", body: "End-to-end development with React, Next.js, and Android (Kotlin/Flutter). From high-fidelity Figma wireframes to production-ready scalable backends.", color: "#F0F0F0" },
        { title: "Automation Systems", body: "Designing intelligent workflows with n8n and Python scripts. Implementing 'Kaizen' philosophy for continuous improvement in software quality and efficiency.", color: "#E5E5E5" }
    ];

    return (
        <section className="container" style={{ marginBottom: '100px' }}>
            <div style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2 style={{ fontSize: '10vw', opacity: 0.2 }}>Expertise</h2>
            </div>
            {cards.map((card, i) => (
                <Card key={i} {...card} i={i} />
            ))}
        </section>
    );
}
