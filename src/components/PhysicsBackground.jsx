import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export default function PhysicsBackground() {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);

    useEffect(() => {
        const Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint,
            Composite = Matter.Composite,
            Runner = Matter.Runner;

        // Create engine
        const engine = Engine.create();
        engineRef.current = engine;

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: 'transparent',
                wireframes: false,
                pixelRatio: window.devicePixelRatio
            }
        });

        // Boundaries
        const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 60, window.innerWidth * 2, 120, {
            isStatic: true,
            render: { visible: false }
        });
        const wallLeft = Bodies.rectangle(-60, window.innerHeight / 2, 120, window.innerHeight * 2, {
            isStatic: true,
            render: { visible: false }
        });
        const wallRight = Bodies.rectangle(window.innerWidth + 60, window.innerHeight / 2, 120, window.innerHeight * 2, {
            isStatic: true,
            render: { visible: false }
        });

        // Shapes
        const shapes = [];
        const colors = ['#FF4D00', '#0055FF', '#FAFAFA', '#080808']; // Accent colors

        for (let i = 0; i < 40; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * -1000;
            const size = Math.random() * 30 + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];

            let body;
            const type = Math.random();

            if (type > 0.6) {
                body = Bodies.rectangle(x, y, size, size, {
                    chamfer: { radius: 4 },
                    render: {
                        fillStyle: color === '#FAFAFA' ? '#FAFAFA' : color,
                        strokeStyle: '#080808',
                        lineWidth: 2
                    }
                });
            } else {
                body = Bodies.circle(x, y, size / 1.5, {
                    render: {
                        fillStyle: color === '#FAFAFA' ? '#FAFAFA' : color,
                        strokeStyle: '#080808',
                        lineWidth: 2
                    }
                });
            }

            shapes.push(body);
        }

        World.add(engine.world, [ground, wallLeft, wallRight, ...shapes]);

        // Mouse Interaction
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        // Allow scrolling over canvas (disable mouse capture on wheel)
        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

        World.add(engine.world, mouseConstraint);
        render.mouse = mouse;

        // Run
        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        // Resize
        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
            Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight + 60 });
            Matter.Body.setPosition(wallRight, { x: window.innerWidth + 60, y: window.innerHeight / 2 });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            Render.stop(render);
            Runner.stop(runner);
            Composite.clear(engine.world);
            Engine.clear(engine);
            if (render.canvas) render.canvas.remove();
        };
    }, []);

    return <div ref={sceneRef} className="physics-bg" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -10, pointerEvents: 'all' }} />;
}
