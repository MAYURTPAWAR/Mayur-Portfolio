import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Staggered entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2.2, // Let the preloader finish first
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const exploreBtnVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15, delay: 2.6 } as any,
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      {/* Decorative Cinematic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF2A2A]/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-black pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-none text-white"
            >
              Hi, I'm <span className="text-white">Mayur Pawar</span> <br />
              <span className="text-stroke-white text-transparent tracking-tighter block mt-2">
                Data Analyst & Web Developer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base sm:text-lg text-white/70 font-sans leading-relaxed"
            >
              Turning raw data into actionable insights. Skilled in Python,
              SQL, Power BI, Tableau, and React.js — bridging data analysis and modern
              web development.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-black/30 border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Circular animated glassmorphism button */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center lg:items-end">
            <motion.div
              variants={exploreBtnVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center space-y-4"
            >
              <button
                id="explore-btn"
                onClick={scrollToAbout}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/25 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:border-[#FF2A2A] hover:shadow-[0_0_30px_#ff2a2a] group focus:outline-none"
                aria-label="Explore Portfolio"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                  <ArrowRight size={32} className="text-white transform rotate-90 group-hover:text-[#FF2A2A] transition-colors duration-300" />
                </motion.div>
                <span className="text-xs font-mono font-bold tracking-widest text-white mt-2 group-hover:text-[#FF2A2A] transition-colors duration-300">
                  EXPLORE
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bouncing Scroll Indicator (Desktop only) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors focus:outline-none cursor-pointer group"
          aria-label="Scroll Down"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase select-none">
            Scroll
          </span>
          <div className="p-1.5 rounded-full border border-white/20 group-hover:border-white/50 group-hover:bg-white/5 transition-all">
            <ChevronDown
              size={18}
              className="animate-bounce"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
