import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function ExperienceSection() {
  const workExperience = [
    {
      title: 'Software Developer, Propulsion Team',
      company: 'ANU Rocketry',
      period: '2025 - Present',
      description: 'Enhanced remote rocket test stand control system featuring React frontend and Python backend on Raspberry Pi for safe 1km+ wireless operations.',
      technologies: ['Python', 'React', 'Raspberry Pi'],
      color: 'border-cyan-500',
      dotColor: 'bg-cyan-500',
    },
    {
      title: 'Associate Engineer',
      company: 'Nagarro',
      period: '2023 - 2025',
      description: 'Designed scalable microservices architecture using Java Spring Boot, API Gateway, Eureka Server with 30% scalability and 40% reliability improvements.',
      technologies: ['Java', 'Spring Boot', 'AWS'],
      color: 'border-purple-500',
      dotColor: 'bg-purple-500',
    },
    {
      title: 'Subject Matter Expert',
      company: 'Chegg India',
      period: '2021 - 2022',
      description: 'Provided high-quality solutions to complex computer science questions, improving content accuracy and student comprehension through detailed explanations and examples.',
      technologies: ['Java', 'Algorithms', 'Formal Language and Automata Theory'],
      color: 'border-green-500',
      dotColor: 'bg-green-500',
    },
  ];

  const education = [
    {
      degree: 'Master of Computing',
      school: 'Australian National University',
      period: '2025 - Present',
      description: 'Specializing in Machine Learning. Studied Computer Vision, Structured Programming, Software Construction, Design Patterns, and Human-Computer Interaction for comprehensive computing expertise.',
      achievements: ['GPA: 6.00/7.00', 'Distinction'],
      color: 'border-cyan-500',
      dotColor: 'bg-cyan-500',
    },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Guru Nanak Dev University, Amritsar',
      period: '2019 - 2023',
      description: 'Comprehensive study of software development principles, algorithms, and data structures. Published research in machine learning for breast cancer detection using neural networks.',
      achievements: ['GPA: 8.57'],
      color: 'border-green-500',
      dotColor: 'bg-green-500',
    },
  ];

  const certifications = [
    { name: 'Silver League, Cloud Skills Boost', company:' Google Cloud' },
    { name: 'Deep Learning Specialization', company:' Coursera'},
    { name: 'ML Summer School', company:' Amazon' },
    { name: 'GCP Cloud Facilitator Program', company:' Google' }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My journey through professional development and academic achievements
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold mb-8 text-purple-400 flex items-center"
            >
              <Briefcase className="mr-3 h-6 w-6" />
              Work Experience
            </motion.h3>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative pl-8 border-l-2 ${job.color}`}
                >
                  <div className={`absolute w-4 h-4 ${job.dotColor} rounded-full -left-2 top-0`} />
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-slate-100">{job.title}</h4>
                      <span className="text-sm text-slate-400">{job.period}</span>
                    </div>
                    <p className="text-cyan-400 font-medium mb-3">{job.company}</p>
                    <p className="text-slate-300 mb-3 leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded text-xs ${
                            techIndex === 0 ? 'bg-purple-500/20 text-purple-400' :
                            techIndex === 1 ? 'bg-cyan-500/20 text-cyan-400' :
                            'bg-green-500/20 text-green-400'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold mb-8 text-cyan-400 flex items-center"
            >
              <GraduationCap className="mr-3 h-6 w-6" />
              Education
            </motion.h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative pl-8 border-l-2 ${edu.color}`}
                >
                  <div className={`absolute w-4 h-4 ${edu.dotColor} rounded-full -left-2 top-0`} />
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-slate-100">{edu.degree}</h4>
                      <span className="text-sm text-slate-400">{edu.period}</span>
                    </div>
                    <p className="text-green-400 font-medium mb-3">{edu.school}</p>
                    <p className="text-slate-300 mb-3 leading-relaxed">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className={`px-2 py-1 rounded text-xs ${
                            achIndex === 0 ? 'bg-cyan-500/20 text-cyan-400' : 'bg-green-500/20 text-green-400'
                          }`}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <h4 className="text-lg font-semibold text-amber-400 mb-4 flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Certifications
                </h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-slate-300">{cert.name}</span>
                      <span className="text-sm text-amber-400">{cert.company}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
