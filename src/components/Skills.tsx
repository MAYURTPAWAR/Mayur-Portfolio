import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: 'Data Analysis',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statistical Analysis', 'EDA', 'ETL'],
    },
    {
      id: 2,
      title: 'BI & Reporting',
      skills: ['Power BI', 'Tableau', 'Microsoft Excel', 'Power Query', 'Google Sheets', 'Data Storytelling', 'Data Modeling'],
    },
    {
      id: 3,
      title: 'Databases',
      skills: ['MySQL', 'SQL Joins', 'Aggregations', 'Window Functions', 'Relational Database Design'],
    },
    {
      id: 4,
      title: 'Web Development',
      skills: ['React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'Git', 'GitHub'],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } 
    }
  };

  return (
    <section
      id="skills"
      className="relative bg-white text-neutral-900 py-24 px-6 md:px-12 grid-pattern overflow-hidden flex flex-col items-center"
    >
      {/* Section Header */}
      <div className="max-w-4xl w-full text-center flex flex-col items-center mb-16 relative z-10">
        <span className="px-4 py-1.5 bg-[#FF2A2A]/10 text-[#FF2A2A] rounded-full font-mono text-xs uppercase font-bold tracking-wider mb-6">
          What I Know
        </span>
        <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-black">
          Skills & Technologies
        </h2>
      </div>

      {/* Grid Layout (2 cols desktop, 1 col mobile) */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-neutral-100 rounded-3xl p-8 shadow-md hover:border-[#FF2A2A]/35 hover:shadow-[0_15px_30px_rgba(255,42,42,0.1)] transition-all duration-300 flex flex-col justify-between group cursor-default"
          >
            <div>
              {/* Category Title */}
              <h3 className="text-xl font-display font-bold text-[#FF2A2A] mb-6 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-xs font-mono text-neutral-300 group-hover:text-[#FF2A2A]/40 transition-colors">
                  0{category.id}
                </span>
              </h3>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono font-medium bg-neutral-900 text-white px-3 py-1.5 rounded-full hover:bg-[#FF2A2A] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
