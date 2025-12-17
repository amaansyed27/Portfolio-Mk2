import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Hero from '../components/Hero';
import Mascot from '../components/Mascot';
import CardStack from '../components/CardStack';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';
import AIMascot from '../components/AIMascot';

const EntryCard = ({ title, desc, color, children, href }) => (
    <Link href={href}>
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="entry-card"
            style={{
                background: color,
                borderRadius: '24px',
                height: '400px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem'
            }}
        >
            <div style={{ zIndex: 10 }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'rgba(0,0,0,0.6)' }}>{desc}</p>
            </div>

            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '70%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                {children}
            </div>
        </motion.div>
    </Link>
);

export default function Home() {
    return (
        <div>
            <Mascot />
            <Hero />
            <CardStack />

            {/* Gateway Section */}
            <section className="container section">
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Explore Work</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <EntryCard title="Mobile Apps" desc="Flutter & React Native" color="#E3F2FD" href="/mobile">
                        {/* Simple Phone Graphic */}
                        <div style={{ width: '140px', height: '240px', background: '#fff', border: '8px solid #333', borderRadius: '20px 20px 0 0', borderBottom: 0, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                    </EntryCard>

                    <EntryCard title="Web Platforms" desc="React, Next.js, Figma" color="#F3E5F5" href="/web">
                        {/* Simple Browser Graphic */}
                        <div style={{ width: '220px', height: '180px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px 8px 0 0', borderBottom: 0, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            <div style={{ height: '24px', background: '#eee', borderBottom: '1px solid #ddd', borderRadius: '8px 8px 0 0', display: 'flex', gap: '4px', alignItems: 'center', paddingLeft: '8px' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f56' }} />
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd2e' }} />
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f' }} />
                            </div>
                        </div>
                    </EntryCard>

                    <EntryCard title="AI & Agents" desc="LLMs, Python, RAG" color="#E8F5E9" href="/ai">
                        <div style={{ marginBottom: '-20px' }}>
                            <AIMascot size={180} />
                        </div>
                    </EntryCard>

                </div>
            </section>

            <Skills />
            <Experience />
            <Achievements />
            <Footer />
        </div>
    );
}
