import { motion } from 'framer-motion';

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Sales Data Dashboard',
      category: 'Excel, Power BI, Power Query',
      desc: 'Interactive Power BI dashboard analyzing regional sales trends across 6+ regions. Cleaned 5,000+ rows using Power Query, identified top-performing products and sales reps through KPI metrics and slicer-based filtering.',
      tags: ['Power BI', 'Excel', 'Data Cleaning'],
    },
    {
      id: 2,
      title: 'Customer Churn Analysis',
      category: 'Python, Pandas, Seaborn, Matplotlib',
      desc: 'EDA and statistical analysis on 7,000+ row customer dataset to identify churn factors. Used correlation matrices and boxplots to uncover behavioral patterns and visualized churn distributions to support retention strategy.',
      tags: ['Python', 'Pandas', 'Seaborn', 'EDA'],
    },
    {
      id: 3,
      title: 'SQL Sales Query Reporting',
      category: 'MySQL, SQL Joins, Window Functions',
      desc: 'Complex SQL queries generating sales and customer reports from normalized databases. Applied JOINs, GROUP BY, and window functions to derive 12 months of monthly revenue trends and regional performance metrics.',
      tags: ['MySQL', 'SQL', 'Reporting'],
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#111111] text-white py-24 px-6 md:px-12 dark-grid-pattern overflow-hidden flex flex-col items-center"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF2A2A]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FF2A2A]/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl w-full text-center flex flex-col items-center mb-20 relative z-10">
        <span className="px-4 py-1.5 bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 text-[#FF2A2A] rounded-full font-mono text-xs uppercase font-bold tracking-wider mb-6">
          My Work
        </span>
        <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight mb-6">
          Featured Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projectList.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
            className="group flex flex-col bg-neutral-900/60 border border-white/5 rounded-3xl p-6 backdrop-blur-md transition-all duration-300 hover:border-[#FF2A2A]/40 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] relative overflow-hidden"
          >
            {/* Category tag */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono tracking-widest text-[#FF2A2A] font-bold uppercase bg-[#FF2A2A]/10 px-3 py-1 rounded-full max-w-[80%] truncate">
                {project.category}
              </span>
              <span className="text-xs font-mono text-white/30">
                0{project.id}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-display font-bold tracking-tight text-white mb-3 group-hover:text-[#FF2A2A] transition-colors duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/60 leading-relaxed mb-6 flex-grow">
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono bg-white/5 text-white/80 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link Anchor with red outline / hover fill */}
            <div className="pt-4 border-t border-white/5">
              <button
                onClick={(e) => e.preventDefault()}
                className="w-full py-2.5 px-4 rounded-xl border border-[#FF2A2A] text-sm font-semibold text-[#FF2A2A] hover:bg-[#FF2A2A] hover:text-white transition-all duration-300 active:scale-95 text-center cursor-pointer"
              >
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
