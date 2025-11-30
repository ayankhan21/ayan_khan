import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import profileImage from '../assets/Snapseed.webp';

const Hero = () => {
    return (
        <section id="hero" style={{ paddingTop: 'var(--nav-height)' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '4rem',
                    minHeight: '80vh'
                }} className="hero-content">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ flex: 1 }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            textAlign: 'left',
                            marginBottom: '1rem',
                            fontFamily: '"Nabla", system-ui',
                            fontOpticalSizing: 'auto',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontVariationSettings: '"EDPT" 100, "EHLT" 0',
                            color: '#ffffff',
                            textShadow: `
                2px 2px 0px #1a1a1a,
                4px 4px 0px #2a2a2a,
                6px 6px 0px #3a3a3a,
                8px 8px 0px #4a4a4a,
                10px 10px 15px rgba(0,0,0,0.5)
              `
                        }}>
                            Ayan Khan
                        </h2>
                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            color: '#888',
                            marginBottom: '2rem',
                            fontWeight: 400,
                            textAlign: 'left'
                        }}>
                            Building digital experiences.
                        </h3>
                        <p style={{
                            maxWidth: '600px',
                            fontSize: '1.1rem',
                            color: '#aaa',
                            marginBottom: '3rem',
                            lineHeight: 1.8
                        }}>
                            I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products. When I'm not coding, I'm usually riding, working out, or playing badminton or football.
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
                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                    color: '#fff',
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
                        style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                    >
                        <img
                            src={profileImage}
                            alt="Ayan Khan"
                            style={{
                                width: '450px',
                                height: '450px',
                                borderRadius: '20px',
                                objectFit: 'contain',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
                                filter: 'grayscale(90%)'
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            <style>{`
        .resume-btn:hover {
          border-color: rgba(255, 255, 255, 0.6) !important;
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        .resume-btn:hover .resume-tooltip {
          opacity: 1 !important;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse !important;
            text-align: center;
            justify-content: center;
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
            width: 300px !important;
            height: 300px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
