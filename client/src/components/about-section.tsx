import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Coffee } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { value: '50+', label: 'Projects Completed', color: 'text-purple-400' },
    { value: '5+', label: 'Years Experience', color: 'text-cyan-400' },
    { value: '20+', label: 'Technologies', color: 'text-green-400' },
    { value: '100%', label: 'Client Satisfaction', color: 'text-amber-400' },
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg prose-invert">
              <p className="text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience in creating digital solutions that matter. My journey in software development began with a curiosity about how things work and has evolved into a deep expertise in modern web technologies.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                I specialize in building scalable applications using React, Node.js, and cloud technologies. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-purple-400">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <GraduationCap className="h-4 w-4" />
                <span>Computer Science, Stanford</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Coffee className="h-4 w-4" />
                <span>Coffee Enthusiast</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-400 transition-colors duration-300"
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
