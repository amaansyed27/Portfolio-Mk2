import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Hero from '../components/Hero';
import Mascot from '../components/Mascot';
import CardStack from '../components/CardStack';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';
import ProjectGateway from '../components/ProjectGateway';

export default function Home() {
    return (
        <div>
            <Mascot />
            <Hero />
            <CardStack />

            {/* Gateway Section: 3D Portals */}
            <ProjectGateway />

            <Skills />
            <Experience />
            <Achievements />
            <Footer />
        </div>
    );
}


