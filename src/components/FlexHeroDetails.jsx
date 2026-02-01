import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, Activity, Smartphone, Heart, Zap, Layers, ChevronLeft, ChevronRight, Code } from 'lucide-react';

// --- SLIDES IMPORTS ---
import slide1 from '../assets/mobile/FlexHero/profile-view.png'; // Corrected filename
import slide2 from '../assets/mobile/FlexHero/create-workout.png';
import slide3 from '../assets/mobile/FlexHero/home.png';
import slide4 from '../assets/mobile/FlexHero/launch-splash.png';
import slide5 from '../assets/mobile/FlexHero/workouts.png';

const PRESENTATION_SLIDES = [slide1, slide2, slide3, slide4, slide5];

const ACCENT_COLOR = '#42a5f5'; // Light Blue

export default function FlexHeroDetails({ onClose }) {
    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % PRESENTATION_SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length);
    };

    // Mobile Check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useLayoutEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
            ref={scrollRef}
            style={{
                position: 'fixed', inset: 0, background: '#FAFAFA',
                zIndex: 99999, overflowY: 'auto', overflowX: 'hidden',
                WebkitOverflowScrolling: 'touch', display: 'block', boxSizing: 'border-box',
                transformOrigin: 'center center' // Zoom from center
            }}
        >
            {/* Close Button */}
            <motion.button
                onClick={onClose}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                style={{
                    position: 'fixed', top: '2rem', right: '2rem', width: '50px', height: '50px',
                    borderRadius: '50%', border: '1px solid #e5e5e5', background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                    zIndex: 10000, boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
            >
                <X size={24} color="#333" />
            </motion.button>

            {/* --- HERO SECTION --- */}
            <div style={{
                background: `#fff`,
                color: '#111',
                paddingTop: isMobile ? '80px' : '6rem',
                paddingBottom: '4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(#e3f2fd 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.8
                }} />

                <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', padding: isMobile ? '0 1.25rem' : '0 4rem', position: 'relative', zIndex: 2 }}>

                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem',
                                background: '#E3F2FD', padding: '8px 20px', borderRadius: '100px',
                                border: `1px solid ${ACCENT_COLOR}`, boxShadow: '0 4px 15px rgba(66, 165, 245, 0.15)'
                            }}
                        >
                            <Heart size={16} color={ACCENT_COLOR} />
                            <span style={{ fontSize: '0.9rem', color: '#1565C0', fontWeight: 700, letterSpacing: '0.5px' }}>
                                FITNESS COMPANION
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            style={{
                                fontSize: isMobile ? '2.5rem' : '4.5rem',
                                fontWeight: 800, margin: '0 0 1.5rem 0',
                                letterSpacing: '-1px', color: '#0D47A1', lineHeight: 1.1
                            }}
                        >
                            <span style={{ fontSize: isMobile ? '2rem' : '4rem', verticalAlign: 'middle', marginRight: '10px' }}>💪</span>
                            FlexHero.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            style={{
                                fontSize: isMobile ? '1.1rem' : '1.35rem',
                                color: '#555', maxWidth: '750px', margin: '0 auto',
                                lineHeight: 1.6
                            }}
                        >
                            A comprehensive fitness app that generates <b>personalized no-equipment workouts</b>. Built with <b>Flutter</b> to provide distinctive features like form guidance, progress tracking, and custom workout generation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                        >
                            <button
                                onClick={() => window.open('https://github.com/amaansyed27/FlexHero', '_blank')}
                                style={{
                                    padding: '12px 28px', borderRadius: '12px',
                                    background: '#1565C0', color: '#fff', border: 'none',
                                    fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    boxShadow: '0 10px 25px rgba(21, 101, 192, 0.25)',
                                    transition: 'transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <Github size={20} /> GitHub
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- CONTENT SECTION --- */}
            <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: isMobile ? '2rem 1.25rem' : '4rem 2rem' }}>

                {/* --- SLIDES CAROUSEL --- */}
                <div style={{ marginBottom: '6rem', position: 'relative', overflow: 'hidden', padding: '2rem 0' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '3rem', textAlign: 'center' }}>App Interface</h2>

                    <div style={{
                        position: 'relative',
                        height: isMobile ? '500px' : '600px', // Taller for portrait phone screenshots
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        perspective: '1000px'
                    }}>
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            style={{
                                position: 'absolute', left: isMobile ? '10px' : '25%', top: '50%', transform: 'translateY(-50%)',
                                zIndex: 30, width: '50px', height: '50px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                            }}
                        >
                            <ChevronLeft size={28} color="#333" />
                        </button>

                        <button
                            onClick={nextSlide}
                            style={{
                                position: 'absolute', right: isMobile ? '10px' : '25%', top: '50%', transform: 'translateY(-50%)',
                                zIndex: 30, width: '50px', height: '50px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(255,255,255,0.5)', backdropFilter: 'blur(4px)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                            }}
                        >
                            <ChevronRight size={28} color="#333" />
                        </button>

                        {/* Slides Container */}
                        <div style={{
                            position: 'relative', width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {PRESENTATION_SLIDES.map((slide, index) => {
                                const isActive = index === currentIndex;
                                const isPrev = index === (currentIndex - 1 + PRESENTATION_SLIDES.length) % PRESENTATION_SLIDES.length;
                                const isNext = index === (currentIndex + 1) % PRESENTATION_SLIDES.length;

                                if (!isActive && !isPrev && !isNext) return null;

                                let x = isMobile ? '100%' : '50%';
                                let scale = 0.8;
                                let opacity = 0;
                                let zIndex = 0;
                                let blur = '10px';

                                if (isActive) {
                                    x = '0%';
                                    scale = 1;
                                    opacity = 1;
                                    zIndex = 10;
                                    blur = '0px';
                                } else if (isPrev) {
                                    x = isMobile ? '-10%' : '-30%';
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 5;
                                    blur = '3px';
                                } else if (isNext) {
                                    x = isMobile ? '10%' : '30%';
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 5;
                                    blur = '3px';
                                }

                                return (
                                    <motion.div
                                        key={index}
                                        initial={false}
                                        animate={{ x, scale, opacity, filter: `blur(${blur})`, zIndex }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        style={{
                                            position: 'absolute',
                                            width: isMobile ? '80%' : '300px', // Phone width
                                            height: 'auto',
                                            aspectRatio: '9/19.5', // Typical phone aspect ratio
                                            borderRadius: '24px',
                                            overflow: 'hidden',
                                            boxShadow: isActive ? '0 20px 50px rgba(0,0,0,0.2)' : 'none',
                                            backgroundColor: '#111',
                                            border: '4px solid #333',
                                            left: 0, right: 0, margin: 'auto'
                                        }}
                                    >
                                        <img src={slide} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', marginBottom: '2.5rem', textAlign: 'center' }}>Key Features</h2>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '6rem' }}>
                    <FeatureCard
                        icon={<Activity size={24} color="#e91e63" />}
                        title="Smart Workout Logic"
                        desc="Algorithms that create balanced workouts based on your profile (level, goals, time) and target muscle groups."
                    />
                    <FeatureCard
                        icon={<Layers size={24} color="#29b6f6" />}
                        title="Personalized Profiles"
                        desc="Stores user fitness data (BMI, goals) to tailor every repetition and set recommendation."
                    />
                    <FeatureCard
                        icon={<Zap size={24} color="#ffb74d" />}
                        title="Dynamic Difficulty"
                        desc="Adjusts intensity (sets, reps, rest) based on Beginner, Intermediate, or Advanced levels."
                    />
                    <FeatureCard
                        icon={<Smartphone size={24} color="#66bb6a" />}
                        title="No Equipment Needed"
                        desc="A curated library of bodyweight exercises designed for home use with detailed form guidance."
                    />
                </div>

                {/* LOGIC / CODE SECTION */}
                <div style={{ background: '#263238', borderRadius: '24px', padding: '2rem', color: '#fff', marginBottom: '6rem', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                        <Code size={20} color="#80cbc4" />
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Algorithm: Workout Generation</h3>
                    </div>

                    <div style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.6, overflowX: 'auto', whiteSpace: 'pre' }}>
                        <span style={{ color: '#bdbdbd' }}>// Determine workout structure based on profile</span>{'\n'}
                        <span style={{ color: '#c792ea' }}>Workout</span> <span style={{ color: '#82b1ff' }}>generateCustomWorkout</span>(<span style={{ color: '#ffcb6b' }}>UserProfile</span> profile) {'{'}{'\n'}
                        {'  '}<span style={{ color: '#bdbdbd' }}>// 1. Filter exercises by difficulty and muscle group</span>{'\n'}
                        {'  '}<span style={{ color: '#c792ea' }}>var</span> pool = <span style={{ color: '#82b1ff' }}>_filterExercises</span>(profile.level, profile.goals);{'\n'}

                        {'\n'}
                        {'  '}<span style={{ color: '#bdbdbd' }}>// 2. Adjust volume (Sets x Reps)</span>{'\n'}
                        {'  '}<span style={{ color: '#c792ea' }}>int</span> sets = (profile.level == <span style={{ color: '#c3e88d' }}>'Advanced'</span>) ? <span style={{ color: '#f78c6c' }}>4</span> : <span style={{ color: '#f78c6c' }}>3</span>;{'\n'}
                        {'  '}<span style={{ color: '#c792ea' }}>int</span> reps = <span style={{ color: '#82b1ff' }}>calculateReps</span>(profile.intensity);{'\n'}

                        {'\n'}
                        {'  '}<span style={{ color: '#bdbdbd' }}>// 3. Construct Workout Object</span>{'\n'}
                        {'  '}<span style={{ color: '#c792ea' }}>return</span> <span style={{ color: '#c792ea' }}>Workout</span>({'\n'}
                        {'    '}warmup: <span style={{ color: '#82b1ff' }}>getWarmup</span>(5),{'\n'}
                        {'    '}exercises: pool.<span style={{ color: '#82b1ff' }}>map</span>(e ={'>'} <span style={{ color: '#c792ea' }}>WorkoutSet</span>(e, sets, reps)),{'\n'}
                        {'    '}cooldown: <span style={{ color: '#82b1ff' }}>getCooldown</span>(5){'\n'}
                        {'  '});{'\n'}
                        {'}'}
                    </div>
                </div>


                {/* Stack Info */}
                <div style={{ textAlign: 'center', padding: '4rem 0', borderTop: '1px solid #e0e0e0' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#333', marginBottom: '2rem' }}>Tech Stack</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', opacity: 0.7 }}>
                        <span style={{ fontWeight: 600 }}>Flutter (Dart)</span>
                        <span style={{ fontWeight: 600 }}>Provider State Mgmt</span>
                        <span style={{ fontWeight: 600 }}>SharedPreferences</span>
                        <span style={{ fontWeight: 600 }}>Custom Algorithms</span>
                        <span style={{ fontWeight: 600 }}>Android/iOS</span>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

// Simple Feature Card Component
function FeatureCard({ icon, title, desc }) {
    return (
        <div style={{
            background: '#fff', padding: '2rem', borderRadius: '20px',
            border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column', gap: '1rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.02)', transition: 'all 0.3s ease'
        }}>
            <div style={{ width: '50px', height: '50px', background: '#fafafa', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
            </div>
            <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#222', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.95rem' }}>{desc}</p>
            </div>
        </div>
    );
}
