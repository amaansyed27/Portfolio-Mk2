import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectWeb from '../components/ProjectWeb';
import GeminiDetails from '../components/GeminiDetails';
import DataweaveDetails from '../components/DataweaveDetails';
import CodeGuardianDetails from '../components/CodeGuardianDetails';

export default function WebPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div style={{ paddingBottom: '100px', position: 'relative' }}>
            {/* The Deck View - Only visible when nothing selected */}
            <AnimatePresence>
                {!selectedProject && (
                    <ProjectWeb onSelect={setSelectedProject} />
                )}
            </AnimatePresence>

            {/* Detailed View - Overlays everything */}
            <AnimatePresence>
                {selectedProject === 'gemini' && (
                    <GeminiDetails onClose={() => setSelectedProject(null)} />
                )}
                {selectedProject === 'dataweave' && (
                    <DataweaveDetails onClose={() => setSelectedProject(null)} />
                )}
                {selectedProject === 'codeguardian' && (
                    <CodeGuardianDetails onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>

            {/* Additional Content (Optional - Hide when detailed view is open) */}

        </div>
    );
}
