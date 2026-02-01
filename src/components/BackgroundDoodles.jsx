import { motion } from 'framer-motion';

const Doodle = ({ type, style, delay }) => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 0.4,
            transition: {
                pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        }
    };

    let path = "";
    if (type === 'spring') {
        path = "M10 80 Q 25 10, 40 80 T 70 80 T 100 80 T 130 80";
    } else if (type === 'loop') {
        path = "M10 50 Q 50 5, 80 50 T 150 50";
    } else if (type === 'zigzag') {
        path = "M10 50 L 30 20 L 50 80 L 70 20 L 90 80";
    } else if (type === 'wave') {
        path = "M10 50 Q 30 20, 50 50 T 90 50 T 130 50";
    } else if (type === 'circle') {
        // rough circle
        path = "M40 10 A 30 30 0 1 0 40 70 A 30 30 0 1 0 40 10 M35 30 L 45 30 M 40 25 L 40 35";
    }

    return (
        <motion.svg
            width="150"
            height="100"
            viewBox="0 0 150 100"
            initial="hidden"
            animate="visible"
            style={{ position: 'absolute', overflow: 'visible', ...style }}
        >
            <motion.path
                d={path}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                variants={draw}
            />
        </motion.svg>
    );
};

export default function BackgroundDoodles({ color = "#000" }) {
    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            {/* Top Left - Spring */}
            <Doodle type="spring" style={{ top: '10%', left: '5%', color: color, transform: 'rotate(-20deg) scale(1.2)' }} delay={0.5} />

            {/* Top Right - Loop */}
            <Doodle type="loop" style={{ top: '15%', right: '10%', color: color, transform: 'rotate(10deg)' }} delay={0.8} />

            {/* Center Left - ZigZag */}
            <Doodle type="zigzag" style={{ top: '45%', left: '8%', color: color, transform: 'rotate(45deg) scale(0.8)' }} delay={1.2} />

            {/* Bottom Right - Wave */}
            <Doodle type="wave" style={{ bottom: '20%', right: '5%', color: color, transform: 'rotate(-10deg) scale(1.5)' }} delay={1.5} />

            {/* Bottom Left - Circle Concept */}
            <Doodle type="circle" style={{ bottom: '10%', left: '20%', color: color, transform: 'rotate(15deg) scale(0.9)' }} delay={1.8} />

            {/* Extra faint one center */}
            <Doodle type="spring" style={{ top: '60%', left: '50%', color: color, opacity: 0.2, transform: 'rotate(90deg) scale(2)' }} delay={2.0} />
        </div>
    );
}
