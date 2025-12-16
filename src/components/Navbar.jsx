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
            <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                padding: '12px 24px',
                borderRadius: '24px',
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
        </nav>
    );
}
