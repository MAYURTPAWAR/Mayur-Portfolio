import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  // Lock scroll when preloader is mounting/active, unlock when it completes
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      // Force scroll to top on refresh to start fresh
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <>
      {/* 1. Preloader Overlay */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* 2. Main Website Wrapper */}
      <div className="relative min-h-screen bg-[#111111] text-[#F4F4F4] w-full selection:bg-[#FF2A2A] selection:text-white">
        {/* Navigation bar */}
        <Navbar />

        {/* Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Certifications />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
