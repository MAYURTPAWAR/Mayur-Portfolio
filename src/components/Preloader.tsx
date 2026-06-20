import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    // 1.6s for water fill animation + 0.4s pause before shutter opens
    const timer = setTimeout(() => {
      onComplete();
    }, 2100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="preloader"
      className="fixed inset-0 w-full h-full bg-[#ff2a2a] z-[100000] flex items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { 
          duration: 0.8, 
          ease: [0.85, 0, 0.15, 1] // Custom shutter opening bezier curve
        }
      }}
    >
      <motion.div 
        className="relative select-none text-center px-4"
        exit={{ 
          scale: 0.8, 
          opacity: 0,
          transition: { duration: 0.5, ease: 'easeInOut' }
        }}
      >
        {/* Base Layer: Dark transparent text */}
        <span 
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-black/15 select-none"
        >
          Mayur.
        </span>

        {/* Foreground Layer: Animating white text using clip-path */}
        <motion.span
          className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-white select-none pointer-events-none px-4"
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ 
            duration: 1.6, 
            ease: [0.4, 0, 0.2, 1], // Smooth easing
            delay: 0.2 
          }}
        >
          Mayur.
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
