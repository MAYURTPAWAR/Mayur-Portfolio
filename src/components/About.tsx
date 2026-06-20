import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#FF2A2A] text-white py-24 px-6 md:px-12 overflow-hidden flex flex-col items-center"
    >
      {/* Floating Abstract Black Star Icons */}
      <motion.div
        className="absolute top-16 left-12 md:left-24 text-black select-none pointer-events-none"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-28 right-12 md:right-28 text-black select-none pointer-events-none"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-[45%] text-black/40 select-none pointer-events-none hidden lg:block"
        animate={{ scale: [1, 1.25, 1], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
        </svg>
      </motion.div>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Column: ID Badge hanging from lanyard */}
        <div className="lg:col-span-5 flex flex-col items-center relative pt-16">
          {/* Lanyard Line */}
          <div className="absolute top-0 w-2.5 h-20 bg-neutral-900 shadow-md z-20 rounded-b-md" />
          
          {/* Lanyard Clip Attachment */}
          <div className="absolute top-20 w-8 h-8 bg-zinc-400 border-2 border-zinc-500 rounded flex items-center justify-center shadow-lg z-20">
            {/* Metal Ring */}
            <div className="w-4 h-4 rounded-full border border-neutral-700 bg-zinc-300" />
          </div>

          {/* Badge Card Container */}
          <motion.div
            className="mt-26 bg-neutral-900 text-white rounded-2xl w-full max-w-[320px] p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-neutral-800 rotate-[-3deg] hover:rotate-[1deg] hover:-translate-y-4 transition-all duration-500 cursor-pointer group"
            whileHover={{ scale: 1.03 }}
          >
            {/* Hole Punch at Top */}
            <div className="w-12 h-3 bg-black mx-auto rounded-full mb-6 border border-neutral-800" />

            {/* Badge Header */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-mono tracking-widest text-[#FF2A2A] font-bold">
                MEMBER ID
              </span>
              <span className="text-[9px] font-mono text-white/50 tracking-wider">
                SYS_VER_4.0
              </span>
            </div>

            {/* Photo Inside Badge */}
            <div className="aspect-square w-full rounded-lg overflow-hidden bg-neutral-800 border-2 border-neutral-700 mb-6 relative group-hover:border-[#FF2A2A] transition-colors duration-300">
              <img
                src="/profile_photo.png"
                alt="Mayur Pawar profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* User Info */}
            <div className="text-center space-y-2">
              <h3 className="text-xl font-display font-bold tracking-tight text-white uppercase">
                MAYUR PAWAR
              </h3>
              <p className="text-xs font-mono text-[#FF2A2A] tracking-wider uppercase font-semibold">
                Data Analyst / Web Developer
              </p>
            </div>

            {/* Mock Barcode */}
            <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-col items-center space-y-2">
              <svg className="w-full h-8 text-white/80" fill="currentColor">
                <rect x="0" y="0" width="4" height="32" />
                <rect x="8" y="0" width="2" height="32" />
                <rect x="14" y="0" width="6" height="32" />
                <rect x="24" y="0" width="1" height="32" />
                <rect x="28" y="0" width="4" height="32" />
                <rect x="36" y="0" width="2" height="32" />
                <rect x="42" y="0" width="8" height="32" />
                <rect x="54" y="0" width="3" height="32" />
                <rect x="60" y="0" width="1" height="32" />
                <rect x="64" y="0" width="5" height="32" />
                <rect x="73" y="0" width="2" height="32" />
                <rect x="78" y="0" width="6" height="32" />
                <rect x="88" y="0" width="1" height="32" />
                <rect x="92" y="0" width="4" height="32" />
                <rect x="100" y="0" width="2" height="32" />
                <rect x="106" y="0" width="7" height="32" />
                <rect x="116" y="0" width="3" height="32" />
                <rect x="122" y="0" width="1" height="32" />
                <rect x="126" y="0" width="4" height="32" />
                <rect x="134" y="0" width="8" height="32" />
                <rect x="146" y="0" width="2" height="32" />
                <rect x="152" y="0" width="5" height="32" />
                <rect x="160" y="0" width="1" height="32" />
                <rect x="164" y="0" width="3" height="32" />
                <rect x="170" y="0" width="6" height="32" />
                <rect x="180" y="0" width="2" height="32" />
                <rect x="186" y="0" width="4" height="32" />
                <rect x="194" y="0" width="8" height="32" />
                <rect x="206" y="0" width="2" height="32" />
                <rect x="212" y="0" width="4" height="32" />
                <rect x="220" y="0" width="6" height="32" />
                <rect x="230" y="0" width="2" height="32" />
              </svg>
              <span className="text-[8px] font-mono text-white/30 tracking-widest">
                *MP-2026-DEV*
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-8 lg:pl-6">
          <h2 className="text-7xl sm:text-8xl font-display font-black tracking-tight text-black leading-none uppercase select-none animate-pulse">
            Hello!
          </h2>

          <div className="space-y-4 max-w-xl">
            <p className="text-lg md:text-xl font-medium text-white/95 leading-relaxed">
              I'm <strong className="text-black font-extrabold uppercase">MAYUR PAWAR</strong>, an Aspiring Data Analyst and Full Stack Developer from Pune, India. Currently pursuing B.Tech in Computer Engineering at JSPM University.
            </p>
            <p className="text-base text-white/80 leading-relaxed">
              I have interned as a Data Analyst at Aroma Brand Solutions and as a Full Stack Developer at SevenMentor Pvt. Ltd. I specialize in Python, SQL, Power BI, Tableau, and React.js — passionate about turning complex datasets into business decisions and building modern web applications.
            </p>
          </div>

          {/* Three Large Floating Tech Logos: Python, Power BI, React.js */}
          <div className="pt-8 flex items-center space-x-12">
            {/* Python SVG */}
            <motion.div
              className="w-16 h-16 text-black/35 hover:text-black transition-colors animate-float cursor-help"
              whileHover={{ scale: 1.2 }}
              title="Python"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
                <path d="M12 2c-3.9 0-4.1.2-4.1.2H5.6c-.6 0-1.1.5-1.1 1.1v2.3c0 .6.5 1.1 1.1 1.1h4.1V7.8H5.6c-.6 0-1.1.5-1.1 1.1v4.5c0 .6.5 1.1 1.1 1.1h1.5v-1.9c0-1.2 1-2.2 2.2-2.2h4.5c1.2 0 2.2-1 2.2-2.2V5.6c0-1.2-1-2.2-2.2-2.2H12V2zm0 20c3.9 0 4.1-.2 4.1-.2h2.3c.6 0 1.1-.5 1.1-1.1v-2.3c0-.6-.5-1.1-1.1-1.1h-4.1v-1.1h4.1c.6 0 1.1-.5 1.1-1.1v-4.5c0-.6-.5-1.1-1.1-1.1h-1.5v1.9c0 1.2-1 2.2-2.2 2.2h-4.5c-1.2 0-2.2 1-2.2 2.2v2.6c0 1.2 1 2.2 2.2 2.2h3.7V22z" />
                <circle cx="9" cy="5.5" r="0.75" fill="currentColor" />
                <circle cx="15" cy="18.5" r="0.75" fill="currentColor" />
              </svg>
            </motion.div>

            {/* Power BI SVG */}
            <motion.div
              className="w-16 h-16 text-black/35 hover:text-black transition-colors animate-float-slow cursor-help"
              whileHover={{ scale: 1.2 }}
              title="Power BI"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="14" width="4" height="6" rx="0.5" />
                <rect x="10" y="8" width="4" height="12" rx="0.5" />
                <rect x="17" y="3" width="4" height="17" rx="0.5" />
              </svg>
            </motion.div>

            {/* React.js SVG */}
            <motion.div
              className="w-16 h-16 text-black/35 hover:text-black transition-colors animate-float-delayed cursor-help"
              whileHover={{ scale: 1.2 }}
              title="React.js"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
                <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(30 50 50)" />
                <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(90 50 50)" />
                <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(150 50 50)" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ripped Paper Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[50px] text-white fill-current"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L20,30 L42,10 L64,42 L82,18 L104,50 L126,28 L148,62 L166,18 L188,48 L206,12 L228,54 L246,22 L268,64 L286,28 L308,72 L326,38 L348,82 L366,32 L388,62 L406,18 L428,52 L446,28 L468,72 L486,42 L508,82 L526,32 L548,64 L566,22 L588,54 L606,12 L628,46 L646,28 L668,62 L686,18 L704,52 L726,22 L748,72 L766,38 L788,82 L806,28 L828,62 L846,12 L868,54 L886,22 L908,64 L926,28 L948,72 L966,38 L988,82 L1006,32 L1028,62 L1046,18 L1068,52 L1086,28 L1108,72 L1126,42 L1148,82 L1166,32 L1188,64 L1206,22 L1228,54 L1246,12 L1268,46 L1286,28 L1308,62 L1326,18 L1344,52 L1366,22 L1384,72 L1406,38 L1428,82 L1440,24 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}
