import { useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import portraitSvg from '../assets/hero-potrait.svg';

export default function Portrait() {
    // Spring physics for the glitch/pixel shift effect
    const distortionScale = useSpring(0, { stiffness: 300, damping: 20 });

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                zIndex: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                // Pushing right to align with page edge as requested
            }}
        >
            {/* SVG Filter Definition */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="pixel-distort">
                        {/* 
                           baseFrequency 0.02 is blocky enough to feel digital/pixelated 
                           when applied to a dot grid.
                        */}
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.02"
                            numOctaves="1"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="0"
                            xChannelSelector="R"
                            yChannelSelector="G"
                            id="displacement-map"
                        />
                    </filter>
                </defs>
            </svg>

            <motion.div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                }}
            >
                {/* 
                    Layer 1: The Base Image (Grayscale/Tinted) 
                    The specific dot-matrix look is achieved by MASKING this image.
                */}
                <DistortedImage
                    src={portraitSvg}
                    distortionScale={distortionScale}
                />
            </motion.div>
        </div>
    );
}

const DistortedImage = ({ src, distortionScale }) => {
    return (
        <>
            {/* 
                We use a motion component to bind the SVG filter attribute 'scale'.
                However, direct attribute binding to 'feDisplacementMap' inside <defs> from Framer Motion 
                is tricky in React (requires 'motion.custom' or manual refs).
                
                Workaround: Use a CSS variable on the image itself, OR render the filter inline with the image
                so we can control it via standard props if it was an SVG element.
                
                Best robust way for DOM elements: Update the filter node directly via a prop-controlled component 
                or use the CSS filter property if possible (but displacementMap isn't a CSS filter).
                
                ACTUALLY: We can animate the 'scale' attribute of the feDisplacementMap directly 
                if we render the filter *inside* this component and use 'motion.feDisplacementMap'.
            */}

            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="interactive-distort" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="5" result="noise" />
                        <motion.feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale={distortionScale}
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            <motion.img
                src={src}
                alt=""
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    // The Magic: CSS Mask for Halftone Dots
                    maskImage: 'radial-gradient(circle, black 1.5px, transparent 2px)',
                    maskSize: '6px 6px', // Determines dot density
                    WebkitMaskImage: 'radial-gradient(circle, black 1.5px, transparent 2px)',
                    WebkitMaskSize: '6px 6px',

                    // Filter Application
                    filter: 'url(#interactive-distort) grayscale(100%) contrast(1.2) brightness(1.1)',

                    // Optional: Tint or Blend Mode if overlaid
                    // mixBlendMode: 'multiply' 
                }}
            />

            {/* Cyan/Blue Offset Layer to mimic comic print misalignment (Optional Polish) */}
            <motion.img
                src={src}
                alt=""
                style={{
                    position: 'absolute', top: 0, left: 0,
                    width: '100%', height: '100%',
                    objectFit: 'contain',
                    opacity: 0.4,
                    zIndex: -1,
                    // Slightly larger dots for interference pattern
                    maskImage: 'radial-gradient(circle, black 1.5px, transparent 2px)',
                    maskSize: '6px 6px',
                    WebkitMaskImage: 'radial-gradient(circle, black 1.5px, transparent 2px)',
                    WebkitMaskSize: '6px 6px',
                    filter: 'grayscale(100%) brightness(0.8) sepia(1) hue-rotate(180deg) saturate(3)', // Blue tint
                    transform: 'translate(4px, 4px)', // Static offset
                }}
            />
        </>
    );
};
