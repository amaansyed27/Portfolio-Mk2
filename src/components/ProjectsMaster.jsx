import ProjectMobile from './ProjectMobile';
import ProjectWeb from './ProjectWeb';
import ProjectAI from './ProjectAI';

export default function ProjectsMaster() {
    return (
        <div style={{ padding: '100px 0', background: '#fff' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '4rem' }}>Selected Works</h2>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Across Mobile, Web, and Intelligence.</p>
            </div>

            {/* Stack them sequentially for full scroll impact */}
            <ProjectMobile />
            <ProjectWeb />
            <ProjectAI />
        </div>
    );
}
