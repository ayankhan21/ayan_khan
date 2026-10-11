import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import profileImage from '../assets/Profile.webp';

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
                        <h2 style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            textAlign: 'left',
                            marginBottom: '0.5rem',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            background: 'var(--gradient-text)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Ayan Khan
                        </h2>
                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            color: 'var(--muted-2)',
                            marginBottom: '2rem',
                            fontWeight: 400,
                            textAlign: 'left'
                        }}>
                            Building scalable systems.
                        </h3>
                        <p style={{
                            maxWidth: '600px',
                            fontSize: '1.1rem',
                            color: 'var(--muted)',
                            marginBottom: '3rem',
                            lineHeight: 1.8
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
                                    borderRadius: '50%',
                                    border: '2px solid var(--card-border)',
                                    color: 'var(--text-color)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    textDecoration: 'none'
                                }}
                            >
                                <FileText size={24} strokeWidth={1.5} />
                                <span className="resume-tooltip" style={{
                                    position: 'absolute',
                                    bottom: '-35px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                    color: '#fff',
                                    padding: '0.5rem 0.75rem',
                                    borderRadius: '6px',
                                    fontSize: '0.875rem',
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
                                borderRadius: '20px',
                                objectFit: 'cover',
                                boxShadow: 'var(--card-shadow)'
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
        
        @container (max-width: 700px) {
          .hero-content {
            flex-direction: column-reverse !important;
            text-align: center;
            justify-content: center;
          }
          .hero-content > div {
            flex: 0 0 auto !important;
            width: 100%;
          }
          .hero-content h2, .hero-content h3 {
            text-align: center !important;
          }
          .hero-content p {
            margin: 0 auto 3rem;
          }
          .hero-content > div > div {
            justify-content: center !important;
          }
          .hero-content img {
            width: 100% !important;
            max-width: 400px !important;
            height: auto !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
