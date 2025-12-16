import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Optional if using their css, but I added my own classes in index.css

export default function SmoothScroll({ children, onGameTrigger }) {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        // RAF Loop
        let rafId;
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Scroll Listener for Overscroll
        const handleScroll = (e) => {
            // Check if scrolled past bottom by a threshold (e.g., 150px)
            // lenis.limit is the max scroll value
            // lenis.scroll is the current scroll value
            if (e.animatedScroll > lenis.limit + 100) {
                if (onGameTrigger) onGameTrigger();
            }
        };

        lenis.on('scroll', handleScroll);

        // Cleanup
        return () => {
            lenis.destroy();
            lenis.off('scroll', handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, [onGameTrigger]);

    return (
        <div style={{ width: '100%', minHeight: '100vh' }}>
            {children}
        </div>
    );
}
