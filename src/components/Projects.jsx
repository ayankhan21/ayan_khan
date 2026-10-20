import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Concurrent Event Streaming Platform (mini-Kafka)',
        tagline: 'A Kafka-inspired distributed event streaming system.',
        tags: ['Java', 'gRPC', 'React', 'Server-Sent Events', 'Docker'],
        why: 'I built it in Java with gRPC streams to understand real-world concurrency and partitioning models.',
        decisions: [
            'Use in-memory append-only partition logs, tuned thread pools and gRPC streaming, reaching 100k+ events/min with sub-5ms p50 latency.',
            'Implement consumer groups with independent offset tracking and partition-parallel fetch pipelines.',
            'Build a real-time monitoring UI (React + Server-Sent Events) showing producer rate, per-partition throughput and consumer lag.',
            'Containerize the services with Docker and provide one-command demo scripts for reproducible local runs.'
        ],
        links: []
    },
    {
        title: 'ClipBridge',
        tagline: 'Copy on my iPhone, paste on my Windows machine, all over the local network.',
        tags: ['TypeScript', 'Node.js', 'Fastify', 'HTTP/TCP', 'iOS Shortcuts', 'Windows'],
        why: 'I wanted to move whatever I copied on my iPhone to my Windows machine without routing it through cloud services or third-party storage.',
        decisions: [
            'Trigger an iOS Shortcut with Back Tap, which detects the clipboard content and sends it over the LAN to a Fastify server running on Windows.',
            'Write text and images straight to the Windows clipboard, and save PDFs and other files locally.',
            'Use HTTP over TCP for reliable transfer, and handle raw binary payloads.',
            'Authenticate every request with a shared secret token.',
            'Keep the architecture intentionally minimal: no database, no cloud backend, no user accounts.'
        ],
        links: [
            { label: 'Code', href: 'https://github.com/ayankhan21/clipbridge', icon: Github }
        ]
    },
    {
        title: 'SQL Visualizer',
        tagline: 'Watch a SQL query execute, step by step.',
        tags: ['Google AI Studio', 'Cloudflare Workers', 'SQL'],
        why: "My cousin wanted help understanding SQL. I wrote down everything he wanted plus a few of my own ideas, and built a tool I wish I'd had in college.",
        decisions: [
            'Animate each stage of execution so rows physically move into the result section.',
            'Let users pause, rewind and revisit any stage until it clicks.',
            'Ship prebuilt examples from beginner to intermediate, and allow custom queries on the existing tables.',
            'Cap the number of DOM elements for now to keep it smooth, with plans to lift the limit.',
            'Reuse an existing Cloudflare Worker to host it instead of setting up new infrastructure.'
        ],
        next: 'Importing your own .sql files and removing the DOM element limits.',
        links: [
            { label: 'Live demo', href: 'https://lnkd.in/g5J7MS9M', icon: ExternalLink },
            { label: 'Code', href: 'https://lnkd.in/gw6Jfbxt', icon: Github }
        ]
    },
    {
        title: 'Load Tester',
        tagline: 'An evolving lab where I learn how systems behave at load and scale.',
        tags: ['k6', 'Load testing', 'Caching', 'Replication'],
        why: "At work I don't see real scale or load, because it's an invite-only product. So I took the initiative to learn it myself, through trial and error.",
        decisions: [
            'Write seed scripts to populate realistic amounts of data, so tests run against something that looks like production.',
            "Use Grafana's k6 to fire concurrent load at the system and watch how it holds up.",
            'Test caching, replication and other optimization strategies, and measure what actually helps.',
            'Keep it evolving: try a strategy, break things, learn why, and iterate.'
        ],
        links: [
            { label: 'Code', href: 'https://github.com/ayankhan21/Load-tester', icon: Github }
        ]
    },
    {
        title: 'Interview Prep Kanban',
        tagline: 'A personal board that keeps me accountable.',
        tags: ['Kanban', 'LLM', 'Cloudflare Workers', 'Cloudflare D1'],
        why: 'I wanted something that kept me in interview-prep mode without relying on willpower alone.',
        decisions: [
            'Pre-plan an itinerary for every single day, so there is never a "what should I do today?" moment.',
            'Add LLM support to help me work through the plan and stay on track.'
        ],
        links: []
    },
    {
        title: 'Life-Automation Scripts',
        tagline: 'Bash scripts that remove small daily frictions.',
        tags: ['Bash', 'Automation'],
        why: 'I keep experimenting with bash scripts to make my life a little easier.',
        decisions: [
            'A workday launcher that opens all my work apps and starts my local server in one go.',
            'A script that runs every day and collects my work commits into a log, so I can see what I have been building at work.'
        ],
        links: []
    }
];

const ProjectCard = ({ project, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ x: 3, y: 3, boxShadow: '3px 3px 0 var(--text-color)' }}
            style={{
                backgroundColor: 'var(--card-bg)',
                border: 'var(--ink-border)',
                borderRadius: 0,
                boxShadow: 'var(--hard-shadow)',
                overflow: 'hidden'
            }}
        >
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    font: 'inherit',
                    textAlign: 'left',
                    padding: '1.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <div>
                    <p className="label" style={{ marginBottom: '0.5rem' }}>
                        <span className="tag">{String(index + 1).padStart(2, '0')}</span>
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, textTransform: 'uppercase', fontSize: '1.9rem', marginBottom: '0.25rem' }}>{project.title}</h3>
                    <p style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>{project.tagline}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {project.tags.map((tag, i) => (
                            <span key={tag} className="label" style={{
                                color: 'var(--text-color)',
                                padding: '0.2rem 0.6rem',
                                border: 'var(--ink-border)',
                                backgroundColor: i % 2 ? 'var(--accent-2)' : 'var(--bg-color)'
                            }}>{tag}</span>
                        ))}
                    </div>
                </div>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={28} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ padding: '0 1.75rem 1.75rem', borderTop: 'var(--ink-border)' }}>
                            <h4 style={{ margin: '1.5rem 0 0.5rem', color: 'var(--text-color)' }}>Why I built it</h4>
                            <p style={{ color: 'var(--muted)' }}>{project.why}</p>

                            <h4 style={{ margin: '1.5rem 0 0.5rem', color: 'var(--text-color)' }}>Decisions I took</h4>
                            <ul style={{ color: 'var(--muted)', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                                {project.decisions.map((d) => (
                                    <li key={d} style={{ marginBottom: '0.4rem' }}>{d}</li>
                                ))}
                            </ul>

                            {project.next && (
                                <>
                                    <h4 style={{ margin: '1.5rem 0 0.5rem', color: 'var(--text-color)' }}>What's next</h4>
                                    <p style={{ color: 'var(--muted)' }}>{project.next}</p>
                                </>
                            )}

                            {project.links.length > 0 && (
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                                    {project.links.map(({ label, href, icon: Icon }) => (
                                        <a key={label} href={href} target="_blank" rel="noreferrer" className="btn"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Icon size={18} /> {label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <p className="label" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
                    <span className="tag">Index</span> / Projects
                </p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>
                <p style={{ textAlign: 'center', color: 'var(--muted-2)', marginTop: '-2rem', marginBottom: '3rem' }}>
                    Small things I build to solve my own problems. Click one to see why and how.
                </p>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
