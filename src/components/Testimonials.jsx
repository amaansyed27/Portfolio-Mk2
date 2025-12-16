import { useRef } from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, author, role }) => (
    <div style={{
        minWidth: '400px',
        height: '300px',
        background: '#fff',
        borderRadius: '24px',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        marginRight: '2rem',
        userSelect: 'none'
    }}>
        <p style={{ fontSize: '1.25rem', lineHeight: 1.5, fontFamily: 'var(--font-sans)' }}>"{quote}"</p>
        <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{author}</h4>
            <span style={{ fontSize: '0.9rem', color: '#888' }}>{role}</span>
        </div>
    </div>
);

export default function Testimonials() {
    const constraintsRef = useRef(null);

    const testimonials = [
        { quote: "The most creative engineer we've worked with. The attention to physics and detail is unmatched.", author: "Sarah Jenkins", role: "CTO, FutureWeb" },
        { quote: "Transformed our boring dashboard into an immersive experience. Our users love the interactivity.", author: "Mike Ross", role: "Product Manager" },
        { quote: "Fast, reliable, and incredibly eye for design. Best investment for our frontend team.", author: "Jessica Lee", role: "Founder" },
        { quote: "Able to bridge the gap between complex AI logic and beautiful UI seamlessly.", author: "David Chen", role: "Lead Dev" }
    ];

    return (
        <section className="container section" style={{ overflow: 'hidden' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>What People Say</h2>

            <div ref={constraintsRef} style={{ overflow: 'hidden', cursor: 'grab' }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -1000 }}
                    style={{ display: 'flex' }}
                >
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} {...t} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
