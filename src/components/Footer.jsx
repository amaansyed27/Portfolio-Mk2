import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import resumeFile from '../assets/amaan_resume.pdf';

const MagneticButton = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.5, y: y * 0.5 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            style={{
                fontSize: '1.2rem',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                border: 'none',
                background: 'var(--color-text)',
                color: 'var(--color-bg)',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                marginTop: '2rem'
            }}
        >
            {children}
        </motion.button>
    );
};

export default function Footer() {
    return (
        <footer style={{ background: '#111', color: '#FAFAFA', padding: '100px 0', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', marginTop: '100px' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '10vw', lineHeight: 0.9, marginBottom: '2rem' }}>Let's Talk.</h2>
                <a href="mailto:amaansyed27@gmail.com" style={{ fontSize: '2rem', color: '#888', display: 'block', textDecoration: 'underline' }}>amaansyed27@gmail.com</a>

                <MagneticButton>Get in Touch</MagneticButton>

                <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap', gap: '1rem' }}>
                    <p>© 2025 Amaan Syed. Pune, India.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="https://www.linkedin.com/in/amaansyed27/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/amaansyed27" target="_blank" rel="noreferrer">GitHub</a>
                        <a href={resumeFile} download="Amaan_Syed_Resume.pdf">Resume</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
