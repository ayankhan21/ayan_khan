import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Strengths from './components/Strengths';
import Contact from './components/Contact';
import BackgroundPattern from './components/BackgroundPattern';
import DeviceFrame from './components/DeviceFrame';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="App" style={{ position: 'relative' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--accent-rgb),0.1), transparent 40%)`
        }}
      />
      <DeviceFrame backdrop={<BackgroundPattern />}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          {/* <Strengths /> */}
          <Contact />
        </main>
        <footer style={{
          textAlign: 'center',
          padding: '2rem',
          color: 'var(--muted-2)',
          fontSize: '0.9rem',
          borderTop: '1px solid var(--card-border)'
        }}>
          <p>Designed & Built by Ayan Khan</p>
        </footer>
      </DeviceFrame>
    </div>
  );
}

export default App;
