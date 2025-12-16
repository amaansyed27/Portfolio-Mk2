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
        { title: "Engineering", body: "Building robust, scalable foundations using modern architectures. From microservices to monolithic masterpieces, code quality is paramount.", color: "#FAFAFA" },
        { title: "Artificial Intelligence", body: "Integrating LLMs and generative models to create smarter interfaces. Moving beyond chatbots to true agentic workflows.", color: "#F0F0F0" },
        { title: "Design Systems", body: "Crafting fluid, intuitive UI/UX that feels alive. Where physics meets pixel-perfect precision.", color: "#E5E5E5" }
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
