import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowRight, X } from 'lucide-react';

// Import Certificates
import mlMumbaiCert from '../assets/certificates/Amaan Syed_ML_Mumbai_Certificate.jpg';
import videoDBCert from '../assets/certificates/Amaan_Syed_certificate.png';
import acwocCert from '../assets/certificates/Acwoc certificate.png';
import ssocCert from '../assets/certificates/Ssoc.png';
import hackHazardsCert from '../assets/certificates/Hackhazards.png';
import codefestCert from '../assets/certificates/codefest certificate.jpg';

const certificates = [
    { title: "VideoDB Hackathon Winner", img: null, rotate: 5, top: '75%', left: '15%', desc: "1st Place" },
    { title: "Top Maintainer - GSSoC'25", img: videoDBCert, rotate: 6, top: '15%', left: '35%' },
    { title: "AcWoC '25 Winner", img: acwocCert, rotate: -3, top: '45%', left: '10%' },
    { title: "SSOC Top Contributor", img: ssocCert, rotate: 4, top: '25%', left: '65%' },
    { title: "Hack Hazards Finalist", img: hackHazardsCert, rotate: -6, top: '65%', left: '30%' },
    { title: "Unstop Codefest Finalists", img: codefestCert, rotate: 8, top: '60%', left: '75%' },
    { title: "SIH 2025 Internal Finalist", img: null, rotate: -4, top: '25%', left: '80%', desc: "National Round - Nominated" },
    { title: "John Hopkins VIT Health Hack", img: null, rotate: 5, top: '10%', left: '5%', desc: "Finalist (Top 30)" },
    { title: "GenAI Hackathon Winner", img: mlMumbaiCert, rotate: -5, top: '50%', left: '45%' },
];

const DesktopScatteredGallery = ({ onClose }) => {
    return (
        <div style={{ position: 'relative', height: '800px', width: '100%', marginTop: '1rem' }}>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute', top: 0, right: 0, zIndex: 1000,
                    background: '#fff', border: '1px solid #eee', borderRadius: '50%', padding: '10px',
                    cursor: 'pointer'
                }}
            >
                <X size={24} />
            </button>
            {certificates.map((cert, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        rotate: cert.rotate,
                        top: cert.top,
                        left: cert.left
                    }}
                    transition={{
                        type: 'spring',
                        delay: i * 0.1,
                        duration: 0.6
                    }}
                    whileHover={{
                        scale: 1.4,
                        zIndex: 100,
                        rotate: 0,
                        transition: { duration: 0.3 }
                    }}
                    style={{
                        position: 'absolute',
                        width: '280px',
                        cursor: 'pointer',
                        background: '#fff',
                        padding: '10px',
                        borderRadius: '12px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        minHeight: cert.img ? 'auto' : '180px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {cert.img ? (
                        <>
                            <img
                                src={cert.img}
                                alt={cert.title}
                                style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
                            />
                            <p style={{
                                textAlign: 'center', margin: '8px 0 0',
                                fontSize: '0.85rem', fontWeight: 600, color: '#444'
                            }}>
                                {cert.title}
                            </p>
                        </>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <Award size={48} color="#FFD700" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 0.5rem', color: '#333' }}>
                                {cert.title}
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                                {cert.desc || "Achievement"}
                            </p>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

const MobileScatteredGallery = ({ onClose }) => {
    return (
        <div style={{ position: 'relative', width: '100%', marginTop: '2rem', paddingBottom: '2rem' }}>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute', top: -20, right: 0, zIndex: 1000,
                    background: '#fff', border: '1px solid #eee', borderRadius: '50%', padding: '10px',
                    cursor: 'pointer'
                }}
            >
                <X size={24} />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                {certificates.map((cert, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1.05
                        }}
                        viewport={{ margin: "-10% 0px -10% 0px" }}
                        transition={{ duration: 0.5 }}
                        style={{
                            width: '100%',
                            maxWidth: '350px',
                            background: '#fff',
                            padding: '10px',
                            borderRadius: '16px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            minHeight: cert.img ? 'auto' : '150px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        {cert.img ? (
                            <>
                                <img
                                    src={cert.img}
                                    alt={cert.title}
                                    style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
                                />
                                <p style={{
                                    textAlign: 'center', margin: '12px 0 0',
                                    fontSize: '1rem', fontWeight: 700, color: '#333'
                                }}>
                                    {cert.title}
                                </p>
                            </>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                                <Award size={40} color="#FFD700" style={{ marginBottom: '0.5rem' }} />
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.5rem', color: '#333' }}>
                                    {cert.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
                                    {cert.desc || "Achievement"}
                                </p>
                            </div>
                        )}
                    </motion.div>
                ))}
                <div style={{ height: '50px' }} /> {/* Spacer */}
            </div>
        </div>
    );
};

export default function Achievements() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="container" style={{
            overflow: 'visible',
            padding: '2rem 0',
            marginBottom: '4rem'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: isOpen ? '1rem' : '2rem'
            }}>
                <Award size={48} color="#FFD700" strokeWidth={2.5} />
                <h2 style={{
                    fontSize: '4rem',
                    fontWeight: 900,
                    margin: 0,
                    letterSpacing: '-2px',
                    background: 'linear-gradient(to bottom, #FFD700, #FDB931)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0px 2px 0px rgba(0,0,0,0.1)',
                    filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))'
                }}>Achievements</h2>
            </div>

            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.div
                        key="button"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            marginTop: '2rem'
                        }}
                    >
                        {/* Neo-Brutalism Gold Button */}
                        <motion.button
                            onClick={() => setIsOpen(true)}
                            whileHover={{ scale: 0.98, x: 4, y: 4, boxShadow: '0px 0px 0px 0px #000' }}
                            whileTap={{ scale: 0.95, x: 6, y: 6, boxShadow: '0px 0px 0px 0px #000' }}
                            initial={{ x: 0, y: 0, boxShadow: '6px 6px 0px 0px #000' }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.2rem 3rem',
                                fontSize: '1.4rem',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                background: '#FFD700',
                                color: '#000',
                                border: '3px solid #000',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0,
                                width: '100%', height: '100%',
                                background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)',
                                transform: 'translateX(-100%)',
                                animation: 'shimmer 2.5s infinite'
                            }} />
                            <style>{`
                                @keyframes shimmer {
                                    0% { transform: translateX(-150%); }
                                    100% { transform: translateX(150%); }
                                }
                            `}</style>

                            Check out my Wins

                            <div style={{
                                background: '#000',
                                borderRadius: '50%',
                                padding: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <ArrowRight size={20} color="#FFD700" strokeWidth={3} />
                            </div>
                        </motion.button>

                        <p style={{ marginTop: '1.5rem', color: '#666', maxWidth: '400px', fontSize: '1rem', textAlign: 'center' }}>
                            A collection of hackathon victories and recognitions from my journey.
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="gallery"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Responsive switching */}
                        <div className="desktop-only">
                            <DesktopScatteredGallery onClose={() => setIsOpen(false)} />
                        </div>
                        <div className="mobile-only">
                            <MobileScatteredGallery onClose={() => setIsOpen(false)} />
                        </div>

                        <style>{`
                           .desktop-only { display: block; }
                           .mobile-only { display: none; }
                           @media (max-width: 768px) {
                               .desktop-only { display: none; }
                               .mobile-only { display: block; }
                           }
                       `}</style>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
