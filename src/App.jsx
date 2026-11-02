import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Strengths from './components/Strengths';
import Contact from './components/Contact';
import BackgroundPattern from './components/BackgroundPattern';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <BackgroundPattern />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
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
      </div>
    </div>
  );
}

export default App;
