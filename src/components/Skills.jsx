import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["TypeScript", "JavaScript", "Java"]
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Redux", "React Query", "Zod", "Tailwind CSS", "Material UI", "Shadcn UI", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Node.js (Express.js, NestJS)", "Spring Boot", "REST APIs", "WebSockets", "Server-Sent Events (SSE)", "gRPC"]
    },
    {
        title: "Databases & Caching",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Cloudflare D1"]
    },
    {
        title: "Version Control & Tools",
        skills: ["Git", "Docker", "Kubernetes", "Sentry (Logging)"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "CI/CD (GitHub Actions, Docker Compose)"]
    },
    {
        title: "Hosting & Deployment",
        skills: ["Cloudflare (Workers)", "Vercel", "Netlify"]
    }
];

const Skills = () => {
    return (
        <section id="skills" style={{ backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Skills
                </motion.h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillCategories.map((category, index) => (
                        <SkillCard key={category.title} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ category, index }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                backgroundColor: 'var(--card-bg)',
                                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid var(--card-border)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow)'
            }}
        >
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--accent-rgb),0.12), transparent 40%)`,
                    transition: 'opacity 0.15s ease',
                    zIndex: 1
                }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    marginBottom: '1.5rem',
                    color: 'var(--text-color)',
                    borderBottom: '1px solid var(--card-border)',
                    paddingBottom: '0.5rem'
                }}>
                    {category.title}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {category.skills.map((skill) => (
                        <span
                            key={skill}
                            style={{
                                backgroundColor: 'var(--chip-bg)',
                                color: 'var(--muted)',
                                padding: '0.5rem 1rem',
                                borderRadius: '9999px',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                border: '1px solid var(--card-border)'
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
