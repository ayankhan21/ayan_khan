import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: 'var(--nav-height)',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid var(--secondary-bg)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}></a>

                {/* Desktop Menu */}
                <ul style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} style={{ fontSize: '1rem', fontWeight: 500, transition: 'color 0.3s' }} className="nav-link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'var(--text-color)', cursor: 'pointer', display: 'none' }} className="mobile-toggle">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: 'var(--nav-height)',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'var(--secondary-bg)',
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--secondary-bg)'
                }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={toggleMenu} style={{ fontSize: '1.1rem' }}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        .nav-link:hover { color: var(--accent-color); }
      `}</style>
        </nav>
    );
};

export default Navbar;
