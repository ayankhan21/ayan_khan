import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ backgroundColor: 'var(--secondary-bg)', textAlign: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="label" style={{ marginBottom: '0.75rem' }}>
                        <span className="tag">Index</span> / Contact
                    </p>
                    <h2 style={{ marginBottom: '1rem' }}>Get In <span className="outline-text">Touch</span></h2>
                    <p style={{
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        fontSize: '1.2rem',
                        color: 'var(--muted)'
                    }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="contact-buttons" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="mailto:ayankhanxyz00@gmail.com?subject=Saying%20hello" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={20} /> Say Hello
                        </a>
                        <a href="https://github.com/ayankhan21" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Github size={20} /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/ayan-khan-9bb78b187/" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Linkedin size={20} /> LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .device-glass[data-compact] .contact-buttons {
                    flex-direction: column !important;
                }
            `}</style>
        </section>
    );
};

export default Contact;
