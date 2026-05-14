import React from 'react';
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
    },
    {
        role: "Personal Project",
        company: "Concurrent Event Streaming Platform (mini-Kafka)",
        description: [
            "Built a Kafka-inspired distributed event streaming system in Java + gPRC streams to understand real-world concurrency and partitioning models.",
            "Achieved 100k+ events/min with in-memory append-only partition logs, tuned thread pools, and gRPC streaming (sub-5ms p50 latency).",
            "Implemented consumer groups with independent offset tracking, partition-parallel fetch pipelines.",
            "Delivered a real-time monitoring UI (React + Server Sent Events) showing producer rate, per-partition throughput, and consumer lag.",
            "Containerized services with Docker and provided one-command demo scripts for reproducible local runs."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
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
                                borderLeft: '2px solid var(--accent-color)',
                                paddingLeft: '2rem',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                left: '-9px',
                                top: 0,
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--accent-color)'
                            }}></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                            <p style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontWeight: 500 }}>
                                {exp.company} {exp.company && exp.period && ' | '}{exp.period}
                            </p>
                            <ul style={{ color: '#94a3b8', paddingLeft: '1.5rem', margin: 0 }}>
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
