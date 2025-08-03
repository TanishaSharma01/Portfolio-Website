import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Breast Cancer Detection using Meta Learning and ANN',
      description: 'Advanced hybrid model integrating meta-learning, neural networks, and ensemble approaches for exceptional 99%+ performance.',
      image: 'https://images.unsplash.com/photo-1631563020241-09beac7791b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Tensorflow', 'Meta Learning', 'ANN', 'Python'],
      colors: ['bg-purple-500/20 text-purple-400', 'bg-cyan-500/20 text-cyan-400', 'bg-green-500/20 text-green-400', 'bg-amber-500/20 text-amber-400'],
      document: 'https://drive.google.com/file/d/1cE2tbwN9Q_0xS-5MXlJhm8_Yu2A4wBl4/view?usp=sharing',
    },
    {
      title: 'AI Plant Care Assistant',
      description: 'AI-powered plant care system with image recognition (CLIP), semantic search (SBERT + FAISS), and conversational AI (Ollama) for plant identification, care recommendations, and problem diagnosis through natural language processing.',
      image: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Ollama', 'Fast API', 'Python'],
      colors: ['bg-purple-500/20 text-purple-400', 'bg-cyan-500/20 text-cyan-400', 'bg-green-500/20 text-green-400'],
      github: 'https://github.com/TanishaSharma01/AI-Plant-Care-Assistant',
    },
    {
      title: 'Remote Rocket Test Stand Control System',
      description: 'Full-stack wireless control system enabling safe rocket engine testing from 1km distance with real-time monitoring, automated sequences, and safety interlocks.',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Python', 'Raspberry Pi'],
      colors: ['bg-cyan-500/20 text-cyan-400', 'bg-green-500/20 text-green-400', 'bg-amber-500/20 text-amber-400'],
      github: 'https://github.com/ANU-Rocketry/control-panel',
    },
    {
      title: 'MAGIC Gamma Telescope Classification',
      description: 'Developed 88% accurate binary classification system for gamma ray detection using MAGIC telescope dataset (19K instances), implementing 5 ML algorithms with neural network optimization.',
      image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Jupyter Notebook', 'TensorFlow', 'Python'],
      colors: ['bg-amber-500/20 text-amber-400', 'bg-pink-500/20 text-pink-400', 'bg-red-500/20 text-red-400'],
      github: 'https://github.com/TanishaSharma01/MAGIC-Telescope',
    },
    {
      title: 'Banking Application',
      description: 'Distributed banking application using Spring Boot microservices architecture with customer management, account operations (deposits/withdrawals), service discovery (Eureka), API gateway, and centralized configuration management.',
      image: 'https://images.unsplash.com/photo-1462045504115-6c1d931f07d1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Java 17', 'SpringBoot', 'MySQL'],
      colors: ['bg-red-500/20 text-red-400', 'bg-purple-500/20 text-purple-400', 'bg-cyan-500/20 text-cyan-400'],
      github: 'https://github.com/TanishaSharma01/Banking-App',
    },
    {
      title: 'Product Community Website',
      description: 'Full-stack e-commerce platform with user authentication, product browsing, and review system enabling customers to view products and submit feedback for community-driven product evaluation.',
      image: 'https://images.unsplash.com/photo-1558202257-f0ce3681fd5c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Java 17', 'Angular', 'MySQL'],
      colors: ['bg-amber-500/20 text-amber-400', 'bg-pink-500/20 text-pink-400', 'bg-green-500/20 text-green-400'],
      github: 'https://github.com/TanishaSharma01/Product-Community-Website',
    },
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Projects & <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Showcasing my latest work and contributions to the tech community
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="project-card bg-slate-820/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  style={project.title === 'AI Plant Care Assistant' ? { objectPosition: 'center -30px' } : {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${project.colors[techIndex]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.document ? project.document : project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {project.document ? (
                      <FileText className="h-4 w-4 mr-2" />
                    ) : (
                      <Github className="h-4 w-4 mr-2" />
                    )}
                    {project.document ? 'PDF' : 'Code'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
