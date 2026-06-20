import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  
  // Scroll tracking specifically for the footer element
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  // Parallax and fade reveals for the massive center logo
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);

  const year = 2026;

  const services = [
    'Data Analysis',
    'Dashboard Design',
    'SQL Reporting',
    'Web Development',
  ];

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative w-full min-h-[50vh] bg-[#111111] text-[#F4F4F4] py-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden border-t border-neutral-800/20"
    >
      {/* Top Section: 3-Column Grid */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-16 relative z-10">
        {/* Left Column: Services list */}
        <div className="flex flex-col text-left space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-[#D4D4D4]/50 uppercase">
            Services
          </span>
          <ul className="space-y-2">
            {services.map((service) => (
              <li
                key={service}
                className="font-mono text-xs uppercase tracking-wider text-[#D4D4D4] hover:text-[#FF2A2A] transition-colors cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Column: Learning & View link */}
        <div className="flex flex-col text-left md:items-center md:text-center space-y-3">
          <span className="text-[10px] font-mono tracking-widest text-[#D4D4D4]/50 uppercase">
            Experience
          </span>
          <div className="font-mono text-xs text-[#D4D4D4]">
            2+ Years of Learning
          </div>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative inline-block text-xs font-mono uppercase tracking-widest text-[#F4F4F4] group w-max py-1"
          >
            View Projects
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FF2A2A] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>

        {/* Right Column: Status & Year */}
        <div className="flex flex-col text-left md:items-end space-y-3">
          <span className="text-[10px] font-mono tracking-widest text-[#D4D4D4]/50 uppercase">
            Status
          </span>
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs text-[#D4D4D4]">Open to Opportunities</span>
          </div>
          <div className="font-mono text-xs text-white/40">GMT+05:30 — {year}</div>
        </div>
      </div>

      {/* Center Hero: Massive Slowly Revealing Text with Glow */}
      <div className="w-full flex items-center justify-center my-12 overflow-hidden select-none">
        <motion.h2
          style={{ y, opacity, scale }}
          className="text-6xl sm:text-[11vw] font-display font-black tracking-tighter text-[#F4F4F4] leading-none lowercase text-center cursor-default transition-all duration-700 hover:text-[#FF2A2A] hover:drop-shadow-[0_0_40px_rgba(255,42,42,0.8)]"
        >
          mayurpawar
        </motion.h2>
      </div>

      {/* Bottom Section: 3-Column Grid */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pt-12 border-t border-neutral-800/60 relative z-10 text-neutral-400 text-xs">
        {/* Bottom Left: Contact metadata */}
        <div className="flex flex-col text-left space-y-2">
          <div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#F4F4F4] hover:text-[#FF2A2A] transition-colors"
            >
              Contact
            </a>
          </div>
          <div>
            &copy; {year} Mayur Pawar
          </div>
          <div className="text-[10px] opacity-50">
            Built with React.js
          </div>
        </div>

        {/* Bottom Center: Email Address with hover line */}
        <div className="flex items-center md:justify-center">
          <a
            href="mailto:mayurpa789@gmail.com"
            className="relative py-2 text-sm font-semibold text-[#F4F4F4] hover:text-white tracking-wide group"
          >
            mayurpa789@gmail.com
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#FF2A2A] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>

        {/* Bottom Right: LinkedIn link */}
        <div className="flex items-center md:justify-end">
          <a
            href="https://linkedin.com/in/mayur-pawar-02a170293"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors font-mono tracking-wider text-xs"
          >
            linkedin.com/in/mayur-pawar-02a170293
          </a>
        </div>
      </div>
    </footer>
  );
}
