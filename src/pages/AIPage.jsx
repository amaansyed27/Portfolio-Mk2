import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectAI from '../components/ProjectAI';
import ScorpionDetails from '../components/ScorpionDetails';
import EdenticDetails from '../components/EdenticDetails';
import KlipifyDetails from '../components/KlipifyDetails';
import FreshLogicDetails from '../components/FreshLogicDetails';
import ForesightDetails from '../components/ForesightDetails';
import SentinelDetails from '../components/SentinelDetails';

export default function AIPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div style={{ paddingBottom: '0px' }}>
            <ProjectAI onSelect={setSelectedProject} />

            <AnimatePresence>
                {selectedProject === 'freshlogic' && (
                    <FreshLogicDetails onClose={() => setSelectedProject(null)} />
                )}
                {selectedProject === 'scorpion' && (
                    <ScorpionDetails onClose={() => setSelectedProject(null)} />
                )}
                {selectedProject === 'edentic' && (
                    <EdenticDetails onClose={() => setSelectedProject(null)} />
                )}
                {selectedProject === 'klipify' && (
                    <KlipifyDetails onClose={() => setSelectedProject(null)} />
                )}
                {selectedProject === 'foresight' && (
                    <ForesightDetails onClose={() => setSelectedProject(null)} />
                )}
                {selectedProject === 'sentinel' && (
                    <SentinelDetails onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}
