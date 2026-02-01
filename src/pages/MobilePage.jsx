import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectMobile from '../components/ProjectMobile';
import FlexHeroDetails from '../components/FlexHeroDetails';

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
            </AnimatePresence>
        </div>
    );
}
