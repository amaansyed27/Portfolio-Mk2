import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SkillPill = ({ name }) => (
    <div style={{
        padding: '0.75rem 1.5rem',
        borderRadius: '50px',
        border: '1px solid #E5E5E5',
        background: '#FAFAFA',
        fontSize: '1rem',
        whiteSpace: 'nowrap',
        fontWeight: 500
    }}>
        {name}
    </div>
);

const Marquee = ({ skills, direction = 1 }) => {
    return (
        <div style={{ display: 'flex', overflow: 'hidden', padding: '1rem 0' }}>
            <motion.div
                initial={{ x: direction === 1 ? 0 : -1000 }}
                animate={{ x: direction === 1 ? -1000 : 0 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                style={{ display: 'flex', gap: '1rem' }}
            >
                {[...skills, ...skills, ...skills].map((skill, i) => ( // Repeat for seamless loop
                    <SkillPill key={i} name={skill} />
                ))}
            </motion.div>
        </div>
    );
};

export default function Skills() {
    const aiSkills = ["Python", "LangChain", "RAG Pipelines", "Vector Databases", "Prompt Engineering", "OpenAI API", "Gemini API", "AI Agents"];
    const devSkills = ["React", "Next.js", "Node.js", "Android Development", "Kotlin", "Flutter", "FastAPI", "Firebase", "Supabase"];
    const toolsSkills = ["n8n Automation", "Figma UI/UX", "GitHub Copilot", "DevOps", "Git", "System Architecture", "Kaizen Philosophy"];

    return (
        <section className="container section" style={{ overflow: 'hidden' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '3rem' }}>Technical Arsenal</h2>
            </div>

            <div style={{ opacity: 0.8 }}>
                <Marquee skills={aiSkills} direction={1} />
                <Marquee skills={devSkills} direction={-1} />
                <Marquee skills={toolsSkills} direction={1} />
            </div>
        </section>
    );
}
