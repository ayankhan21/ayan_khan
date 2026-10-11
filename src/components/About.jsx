import { motion } from 'framer-motion';
import { Bike, Utensils, Dumbbell, Trophy } from 'lucide-react';

const beyondCode = [
    { icon: Trophy, title: 'Badminton', text: 'Fast rallies, zero screens. My favourite way to switch off.' },
    { icon: Bike, title: 'Riding', text: 'Long rides to clear my head and find the next good view.' },
    { icon: Utensils, title: 'Food', text: 'I like eating well, and I will happily plan a day around a meal.' },
    { icon: Dumbbell, title: 'Working out & football', text: 'Staying active keeps me sharp when I am back at the keyboard.' }
];

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    More Than a Developer
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}
                >
                    <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                        I'm a software engineer, but the thing I enjoy most is building small tools that
                        fix my own problems, whether that's automating a chore, keeping myself accountable, or
                        explaining something I wish someone had explained to me.
                    </p>
                    <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                        I love learning about planetary-scale systems, the ones that quietly move the world, and I'd
                        love to work on large-scale applications of my own.
                    </p>
                    <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.9 }}>
                        I like trying new platforms, so my side projects end up all over the place: Cloudflare, Vercel,
                        Netlify and more. If something is quick to ship and easy to share, I'll put it out there.
                    </p>
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', color: 'var(--muted-2)', fontWeight: 400, marginBottom: '2rem' }}
                >
                    When I'm not building software
                </motion.h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {beyondCode.map(({ icon: Icon, title, text }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, borderColor: 'rgba(var(--accent-rgb),0.6)' }}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                border: '1px solid var(--card-border)',
                                borderRadius: '1rem',
                                padding: '1.75rem',
                                boxShadow: 'var(--card-shadow)'
                            }}
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                                transition={{ duration: 0.5 }}
                                style={{ display: 'inline-block', marginBottom: '1rem' }}
                            >
                                <Icon size={32} strokeWidth={1.5} />
                            </motion.div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
                            <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
