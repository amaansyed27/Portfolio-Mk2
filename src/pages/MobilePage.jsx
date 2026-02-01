import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectMobile from '../components/ProjectMobile';
import FlexHeroDetails from '../components/FlexHeroDetails';
import EcoBridgeDetails from '../components/EcoBridgeDetails';
import SomaDetails from '../components/SomaDetails';

export default function MobilePage() {
    const [selectedProject, setSelectedProject] = useState(null);
    console.log("MobilePage render, selected:", selectedProject);

    return (
        <div style={{ paddingBottom: '0px' }}>
            <ProjectMobile onSelect={setSelectedProject} />

            <AnimatePresence>
                {selectedProject === 'flexhero' && (
                    <FlexHeroDetails onClose={() => setSelectedProject(null)} />
                )}
                {selectedProject === 'ecobridge' && (
                    <EcoBridgeDetails onClose={() => setSelectedProject(null)} />
                )}
                {selectedProject === 'soma' && (
                    <SomaDetails onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </div >
    );
}
