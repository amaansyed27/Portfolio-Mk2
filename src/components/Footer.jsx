import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import resumeFile from '../assets/amaan_resume.pdf';
import linkedinIcon from '../assets/linkedln.png';
import githubIcon from '../assets/github.png';
import resumeIcon from '../assets/resume.png';

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
                background: '#fff',
                color: '#000',
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

                {/* Social Icons - Centered */}
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '3rem', alignItems: 'center' }}>
                    <a href="https://www.linkedin.com/in/amaansyed27/" target="_blank" rel="noreferrer" style={{ display: 'block', transition: 'transform 0.2s' }}>
                        <img src={linkedinIcon} alt="LinkedIn" style={{ width: '32px', height: '32px', display: 'block' }} />
                    </a>
                    <a href="https://github.com/amaansyed27" target="_blank" rel="noreferrer" style={{ display: 'block', transition: 'transform 0.2s' }}>
                        <img src={githubIcon} alt="GitHub" style={{ width: '32px', height: '32px', display: 'block', filter: 'invert(1)' }} />
                    </a>
                    <a href={resumeFile} download="Amaan_Syed_Resume.pdf" style={{ display: 'block', transition: 'transform 0.2s' }}>
                        <img src={resumeIcon} alt="Resume" style={{ width: '32px', height: '32px', display: 'block', filter: 'invert(1)' }} />
                    </a>
                </div>

                <div style={{ marginTop: '80px', borderTop: '1px solid #333', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#666' }}>
                    <p style={{
                        margin: 0,
                        fontFamily: '"Great Vibes", cursive',
                        fontSize: '2rem',
                        color: '#fff',
                        textShadow: '0 0 10px rgba(255,255,255,0.8)',
                        letterSpacing: '1px'
                    }}>
                        © 2025 | Amaan Syed.
                    </p>
                </div>
            </div>
        </footer>
    );
}
