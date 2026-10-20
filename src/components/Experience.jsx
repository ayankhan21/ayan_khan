import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software Engineer",
        company: "Vericap (Formerly EnverX)",
        period: "January 2024 - Present",
        description: [
            "Independently implemented 50+ REST API endpoints across core platform workflows — including project management, checklists, and authentication — owning the full stack from query design to service and controller logic in NestJS and TypeORM. ",
            "Reduced project catalogue latency by 35% (1000ms → 650ms) across 35+ endpoints by parallelizing sequential DB calls with Promise.all and introducing Redis caching with write-through invalidation for read-heavy sections — cache expiry aligned to investor link validity window.",
            "Integrated AWS SNS, SES, and Lambda to power core platform communication and document workflows — built a reusable email service over SES with console-managed templates, and offloaded zip file generation for document downloads to Lambda to keep response times fast.",
            "Built the investor-facing project catalogue — an auth-gated one-pager with a custom permission engine that parsed nested JSON link permissions to conditionally render 12 sections as visible, hidden, or access-requested. ",
            "Migrated frontend to a Turborepo monorepo with shared component packages — enabling UI components to be built once and consumed across both admin and user apps.",
            "Reduced initial JS bundle size from 1MB+ to under 600kb across multiple routes by auditing Turborepo build output, removing unused dependencies, eliminating dead code, and lazy loading heavy modules."
        ]
    },
    {
        role: "Frontend Intern",
        company: "EnverX",
        period: "August 2023 – December 2023",
        description: [
            "Integrated frontend with RESTful APIs, enabling smooth data exchange between client and server.",
            "Developed and maintained 15+ reusable UI components using React, Redux, Formik, and Bootstrap.",
            "Refactored performance and reduced page load times by ~35% for core features like Wallet and Transactions.",
            "Applied clean code and modular design principles across 20+ files, contributing to a 25% reduction in reported UI bugs."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <p className="label" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
                    <span className="tag">Index</span> / Experience
                </p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Experience
                </motion.h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{
                                marginBottom: '3rem',
                                padding: '1.75rem 2rem',
                                background: 'var(--card-bg)',
                                border: 'var(--ink-border)',
                                boxShadow: 'var(--hard-shadow)',
                                position: 'relative'
                            }}
                        >
                            <span className="tag" style={{
                                position: 'absolute',
                                top: '-0.9rem',
                                left: '1.25rem',
                                background: 'var(--accent-color)',
                                color: 'var(--btn-text)',
                                border: 'var(--ink-border)'
                            }}>{String(index + 1).padStart(2, '0')}</span>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, textTransform: 'uppercase', fontSize: '2rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                            <p className="label" style={{ display: 'inline-block', background: 'var(--accent-2)', border: 'var(--ink-border)', padding: '0.25rem 0.6rem', marginBottom: '1rem' }}>
                                {exp.company} {exp.company && exp.period && ' / '}{exp.period}
                            </p>
                            <ul style={{ color: 'var(--muted)', paddingLeft: '1.5rem', margin: 0 }}>
                                {exp.description.map((point, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
