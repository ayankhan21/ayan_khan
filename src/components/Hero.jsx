import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import profileImage from '../assets/image.avif';

const Hero = () => {
    return (
        <section id="hero" style={{ paddingTop: 'var(--nav-height)' }}>
            <div className="container" style={{ maxWidth: '1600px' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    gap: '4rem',
                    minHeight: '75cqh'
                }} className="hero-content">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ flex: '0 1 600px' }}
                    >
                        <p className="label" style={{ marginBottom: '1.25rem' }}>
                            <span className="tag">Index</span> / Software Engineer Portfolio
                        </p>
                        <h2 style={{
                            fontSize: 'clamp(4rem, 12cqw, 9rem)',
                            textAlign: 'left',
                            marginBottom: '0.5rem',
                            lineHeight: 0.9
                        }}>
                            Ayan<br />
                            <span className="outline-text">Khan</span>
                        </h2>
                        <h3 className="label" style={{
                            fontSize: 'clamp(0.8rem, 1.4vw, 1rem)',
                            color: 'var(--text-color)',
                            margin: '1.5rem 0 2rem',
                            textAlign: 'left',
                            display: 'inline-block',
                            padding: '0.4rem 0.8rem',
                            background: 'var(--accent-2)',
                            border: 'var(--ink-border)'
                        }}>
                            Building scalable systems.
                        </h3>
                        <p style={{
                            maxWidth: '600px',
                            fontSize: '1.1rem',
                            color: 'var(--text-color)',
                            marginBottom: '3rem',
                            lineHeight: 1.8,
                            padding: '1.25rem 1.5rem',
                            background: 'var(--bg-color)',
                            border: 'var(--ink-border)',
                            boxShadow: 'var(--hard-shadow)'
                        }}>
                            I'm a software engineer specializing in designing and building robust backend scalable systems. Currently, I'm focused on creating performant, data-intensive APIs and reliable infrastructure. When I'm not architecting servers, I'm usually riding, working out, or playing badminton or football.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <a href="#contact" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Get In Touch <ArrowRight size={20} />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1LC5nwMY5otLTs7b_yLng64sj913Z5wfg/view?usp=drive_link"
                                download
                                className="resume-btn"
                                style={{
                                    position: 'relative',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: 0,
                                    border: 'var(--ink-border)',
                                    background: 'var(--bg-color)',
                                    color: 'var(--text-color)',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                            >
                                <FileText size={24} strokeWidth={1.5} />
                                <span className="resume-tooltip" style={{
                                    position: 'absolute',
                                    bottom: '-35px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--text-color)',
                                    color: 'var(--bg-color)',
                                    padding: '0.4rem 0.6rem',
                                    borderRadius: 0,
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.7rem',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap',
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    transition: 'opacity 0.3s ease'
                                }}>
                                    View Resume
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ flex: '0 1 auto', display: 'flex', justifyContent: 'center' }}
                    >
                        <img
                            src={profileImage}
                            alt="Ayan Khan"
                            style={{
                                width: 'min(900px, 58cqh)',
                                maxWidth: '100%',
                                height: 'auto',
                                aspectRatio: '3 / 4',
                                borderRadius: 0,
                                objectFit: 'cover',
                                border: 'var(--ink-border)',
                                boxShadow: 'var(--hard-shadow)'
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            <style>{`
        .resume-btn:hover {
          border-color: var(--accent-color) !important;
          background-color: rgba(var(--accent-rgb), 0.1) !important;
        }
        
        .resume-btn:hover .resume-tooltip {
          opacity: 1 !important;
        }
        
        .device-glass[data-compact] .hero-content {
          flex-direction: column-reverse !important;
          text-align: center;
          justify-content: center;
        }
        .device-glass[data-compact] .hero-content > div {
          flex: 0 0 auto !important;
          width: 100%;
        }
        .device-glass[data-compact] .hero-content h2,
        .device-glass[data-compact] .hero-content h3 {
          text-align: center !important;
        }
        .device-glass[data-compact] .hero-content p {
          margin: 0 auto 3rem;
        }
        .device-glass[data-compact] .hero-content > div > div {
          justify-content: center !important;
        }
        .device-glass[data-compact] .hero-content img {
          width: 100% !important;
          max-width: 400px !important;
          height: auto !important;
        }
      `}</style>
        </section>
    );
};

export default Hero;
