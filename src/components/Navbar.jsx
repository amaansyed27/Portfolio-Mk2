import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { Home, Smartphone, Monitor, Cpu, User } from 'lucide-react';

const NavItem = ({ icon: Icon, label, href }) => {
    const [location] = useLocation();
    const isActive = location === href;

    return (
        <Link href={href}>
            <motion.div
                whileHover={{ scale: 1.2, translateY: -10 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    padding: '0 12px',
                    position: 'relative',
                    color: isActive ? '#000' : '#888'
                }}
            >
                <div style={{
                    background: isActive ? 'rgba(0,0,0,0.05)' : 'transparent',
                    borderRadius: '12px',
                    padding: '8px'
                }}>
                    <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                {isActive && (
                    <motion.div
                        layoutId="nav-dot"
                        style={{ width: '4px', height: '4px', background: '#000', borderRadius: '50%', position: 'absolute', bottom: '-6px' }}
                    />
                )}
            </motion.div>
        </Link>
    );
};

export default function Navbar() {
    return (
        <nav style={{ position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }}>
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    y: [0, -8, 0], // Slightly more movement
                    boxShadow: [
                        '0 20px 40px rgba(0,0,0,0.1)',
                        '0 30px 60px rgba(0,0,0,0.2)',
                        '0 20px 40px rgba(0,0,0,0.1)'
                    ]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'relative',
                    maxWidth: '92vw', // Responsive Constraint
                    padding: '2px', // Space for border
                    borderRadius: '26px', // Outer radius
                    overflow: 'hidden', // Clip the spinning border
                    display: 'flex'
                }}
            >
                {/* Rotating Silver Border Background */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '-150%', left: '-50%', width: '200%', height: '400%', // Large enough to cover rotation
                        background: 'conic-gradient(from 0deg, transparent 0%, #C0C0C0 25%, #FFFFFF 50%, #C0C0C0 75%, transparent 100%)',
                        opacity: 0.8,
                        zIndex: 0
                    }}
                />

                {/* Main Content Container */}
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    background: 'rgba(255, 255, 255, 0.9)', // Higher opacity to hide backend
                    backdropFilter: 'blur(20px)',
                    padding: '10px 24px',
                    borderRadius: '24px', // Inner radius
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <NavItem icon={Home} label="Home" href="/" />
                    <div style={{ width: '1px', height: '24px', background: '#e5e5e5', margin: '0 8px' }} />
                    <NavItem icon={Smartphone} label="Mobile" href="/mobile" />
                    <NavItem icon={Monitor} label="Web" href="/web" />
                    <NavItem icon={Cpu} label="AI" href="/ai" />
                </div>
            </motion.div>
        </nav>
    );
}
