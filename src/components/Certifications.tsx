import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certificationsList = [
    {
      id: 1,
      title: 'Data Analysis with Python',
      issuer: 'freeCodeCamp',
    },
    {
      id: 2,
      title: 'Databases (SQL) for Developers',
      issuer: 'Oracle Dev GYM',
    },
    {
      id: 3,
      title: 'Data Analyst Intern',
      issuer: 'Simplilearn',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section
      id="certifications"
      className="relative bg-[#FF2A2A] text-white py-24 px-6 md:px-12 overflow-hidden flex flex-col items-center"
    >
      {/* Decorative pulse glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-black/5 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl w-full text-center flex flex-col items-center mb-16 relative z-10">
        <span className="px-4 py-1.5 bg-black/10 text-white rounded-full font-mono text-xs uppercase font-bold tracking-wider mb-6">
          Credentials
        </span>
        <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
          Certifications
        </h2>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {certificationsList.map((cert) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col items-center text-center bg-black/15 border border-white/20 backdrop-blur-md rounded-3xl p-8 transition-all duration-300 hover:bg-black/25 hover:border-white/40 cursor-default group"
          >
            {/* Medal Icon Wrapper */}
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#FF2A2A] transition-all duration-300 shadow-md">
              <Award size={32} className="text-white group-hover:text-[#FF2A2A] transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight">
              {cert.title}
            </h3>

            {/* Issuer */}
            <span className="text-sm font-mono text-red-200/90 font-medium uppercase tracking-wider">
              {cert.issuer}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
