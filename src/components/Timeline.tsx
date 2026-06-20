import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number>(0);

  // Monitor scroll progress across the entire timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Transform scroll progress to animate the SVG dasharray pathLength
  const pathLength = useTransform(scrollYProgress, [0.05, 0.9], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.8) {
        setActiveCard(4);
      } else if (latest > 0.55) {
        setActiveCard(3);
      } else if (latest > 0.3) {
        setActiveCard(2);
      } else if (latest > 0.05) {
        setActiveCard(1);
      } else {
        setActiveCard(0);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const steps = [
    {
      id: 1,
      num: '01',
      title: 'B.Tech Computer Engineering',
      subtitle: 'JSPM University, Pune | 2023 – 2026',
      desc: 'Pursuing undergraduate degree in Computer Engineering, developing foundations in software engineering, system design, and database architectures.',
      rotation: 'rotate-[3deg]',
      position: 'right',
    },
    {
      id: 2,
      num: '02',
      title: 'Data Analyst Intern',
      subtitle: 'Aroma Brand Solutions, Pune | May 2025 – July 2025',
      desc: 'Analyzed 10,000+ business records, built interactive Power BI dashboards, and automated pipelines reducing manual data reporting effort by 30%.',
      rotation: 'rotate-[-3deg]',
      position: 'left',
    },
    {
      id: 3,
      num: '03',
      title: 'Full Stack Developer Intern',
      subtitle: 'SevenMentor Pvt. Ltd., Pune | Oct 2025 – Mar 2026',
      desc: 'Built 5+ production-ready React.js components, integrated REST APIs with backend MySQL databases, and improved rendering latency.',
      rotation: 'rotate-[3deg]',
      position: 'right',
    },
    {
      id: 4,
      num: '04',
      title: 'Diploma — Computer Technology',
      subtitle: 'K.K. Wagh Polytechnic, Nashik | 2020 – 2023',
      desc: 'Completed technical diploma, covering core fundamentals of coding, algorithms, database query languages, and responsive design systems.',
      rotation: 'rotate-[-3deg]',
      position: 'left',
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative bg-white text-neutral-900 py-28 px-6 md:px-12 grid-pattern overflow-hidden flex flex-col items-center"
    >
      {/* Header Container */}
      <div className="max-w-4xl w-full text-center flex flex-col items-center mb-24 relative z-10">
        <span className="px-4 py-1.5 bg-[#FF2A2A]/10 text-[#FF2A2A] rounded-full font-mono text-xs uppercase font-bold tracking-wider mb-6">
          My Journey
        </span>

        <div className="relative inline-block max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-tight mb-6 text-black">
            Experience & Education
          </h2>
          {/* Hand-drawn sketch arrow (SVG) */}
          <div className="absolute -right-16 -top-12 hidden lg:block text-[#FF2A2A] select-none">
            <svg
              width="70"
              height="70"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform rotate-[15deg]"
            >
              {/* Loop arrow path */}
              <path d="M15,80 C35,60 30,30 65,30 C75,30 85,40 75,55 C65,70 45,55 55,40 C60,35 75,30 85,25" />
              {/* Arrow tip */}
              <path d="M78,18 L88,24 L82,34" />
            </svg>
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Giant Vertical S-Path SVG (Desktop only) */}
        <div className="absolute inset-0 w-full h-full hidden md:block pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1600"
            preserveAspectRatio="none"
          >
            {/* Background dashed guide line */}
            <path
              d="M 500 0 C 150 300, 850 500, 500 800 C 150 1100, 850 1300, 500 1600"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            {/* Animated path */}
            <motion.path
              d="M 500 0 C 150 300, 850 500, 500 800 C 150 1100, 850 1300, 500 1600"
              fill="none"
              stroke="#FF2A2A"
              strokeWidth="4"
              strokeDasharray="8 8"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* Straight dashed timeline line (Mobile only) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-neutral-200 md:hidden pointer-events-none" />

        {/* Timeline Cards */}
        <div className="w-full space-y-16 md:space-y-32 relative z-10">
          {steps.map((step) => {
            const isLeft = step.position === 'left';
            const isActive = activeCard >= step.id;

            return (
              <div
                key={step.id}
                className="grid grid-cols-1 md:grid-cols-12 items-center w-full"
              >
                {/* Desktop Left Position Card */}
                <div
                  className={`col-span-1 md:col-span-5 flex justify-center md:justify-end ${
                    isLeft ? 'md:order-1' : 'md:order-3 invisible md:h-0 overflow-hidden'
                  }`}
                >
                  {isLeft && (
                    <TimelineCard
                      step={step}
                      isActive={isActive}
                      id={step.id}
                    />
                  )}
                </div>

                {/* Timeline Center Point Indicator */}
                <div className="col-span-1 md:col-span-2 flex justify-center items-center md:order-2 my-4 md:my-0">
                  <motion.div
                    className={`w-6 h-6 rounded-full border-4 flex items-center justify-center transition-all duration-500 z-10 ${
                      isActive
                        ? 'bg-[#FF2A2A] border-white shadow-[0_0_15px_#ff2a2a]'
                        : 'bg-white border-neutral-300'
                    }`}
                  >
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </motion.div>
                </div>

                {/* Desktop Right Position Card */}
                <div
                  className={`col-span-1 md:col-span-5 flex justify-center md:justify-start ${
                    !isLeft ? 'md:order-3' : 'md:order-1 invisible md:h-0 overflow-hidden'
                  }`}
                >
                  {!isLeft && (
                    <TimelineCard
                      step={step}
                      isActive={isActive}
                      id={step.id}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom handwritten text */}
      <div className="mt-28 text-center relative z-10">
        <motion.span
          className="font-handwritten text-4xl md:text-5xl text-[#FF2A2A] rotate-[-3deg] inline-block font-bold select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Always Growing!
        </motion.span>
      </div>
    </section>
  );
}

interface TimelineCardProps {
  step: {
    num: string;
    title: string;
    subtitle?: string;
    desc: string;
    rotation: string;
  };
  isActive: boolean;
  id: number;
}

function TimelineCard({ step, isActive, id }: TimelineCardProps) {
  const isEven = id % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-md rounded-[2rem] p-8 transition-all duration-500 cursor-default select-none ${
        isActive
          ? `bg-[#FF2A2A] text-white shadow-[0_20px_50px_rgba(255,42,42,0.45)] ${step.rotation}`
          : `bg-white text-neutral-900 border border-neutral-100 shadow-xl hover:${step.rotation}`
      } hover:scale-105`}
    >
      {/* Hole punch at top */}
      <div
        className={`w-6 h-6 rounded-full absolute top-4 left-1/2 -translate-x-1/2 transition-colors duration-500 ${
          isActive ? 'bg-black/40 shadow-inner' : 'bg-neutral-100 shadow-inner'
        }`}
      />

      {/* Content */}
      <div className="flex flex-col text-center mt-4 space-y-3">
        <span
          className={`font-serif italic text-6xl select-none leading-none ${
            isActive ? 'text-white/20' : 'text-[#FF2A2A]/20'
          }`}
        >
          {step.num}
        </span>
        <h3 className="text-xl md:text-2xl font-display font-extrabold tracking-tight">
          {step.title}
        </h3>
        {step.subtitle && (
          <span
            className={`text-xs font-mono font-bold tracking-wider ${
              isActive ? 'text-white/80' : 'text-neutral-500'
            }`}
          >
            {step.subtitle}
          </span>
        )}
        <p
          className={`text-sm leading-relaxed ${
            isActive ? 'text-white/90' : 'text-neutral-600'
          }`}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}
