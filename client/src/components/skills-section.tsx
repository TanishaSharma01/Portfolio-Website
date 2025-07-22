import { motion } from 'framer-motion';
import { Code, Laptop, Server, Database, Wrench, Settings, Brain } from 'lucide-react';
import AnimatedProgress from './ui/animated-progress';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-purple-400',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Javascript', level: 75 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Laptop,
      color: 'text-cyan-400',
      skills: [
        'Angular', 'React.js', 'Vue.js', 'Sass/SCSS', 'Tailwind CSS', 'Bootstrap'
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-400',
      skills: [
        'Java', 'Python', 'Node.js', 'Express.js', 'Spring Boot', 'REST Apis'
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'text-amber-400',
      skills: [
        'MongoDB', 'PostgreSQL', 'MySQL', 'AWS', 'Google Cloud', 'Azure'
      ],
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      color: 'text-pink-400',
      skills: [
        'Git/GitHub', 'Postman', 'Swagger', 'SonarQube','Docker', 'MLflow'
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      icon: Settings,
      color: 'text-red-400',
      skills: [
        'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'CI/CD', 'Prometheus', 'Grafana', 'GitOps'
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-400 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon className={`h-6 w-6 ${category.color} mr-3`} />
                <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
              </div>
              
              {category.title === 'Programming Languages' ? (
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) =>
                    typeof skill === 'object' && 'level' in skill && 'name' in skill ? (
                      <AnimatedProgress
                        key={skillIndex}
                        value={skill.level}
                        label={skill.name}
                        color={category.color}
                        delay={index * 200 + skillIndex * 100}
                      />
                    ) : null
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + skillIndex * 0.1 }}
                      className="flex items-center text-slate-300"
                    >
                      <div className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} mr-3`} />
                      <span>{typeof skill === 'string' ? skill : (skill.name ?? '')}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
