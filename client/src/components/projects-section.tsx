import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      colors: ['bg-purple-500/20 text-purple-400', 'bg-cyan-500/20 text-cyan-400', 'bg-green-500/20 text-green-400'],
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['Vue.js', 'Express', 'Socket.io'],
      colors: ['bg-cyan-500/20 text-cyan-400', 'bg-green-500/20 text-green-400', 'bg-amber-500/20 text-amber-400'],
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive data visualization dashboard with real-time analytics, custom charts, and comprehensive reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['D3.js', 'Python', 'Flask'],
      colors: ['bg-amber-500/20 text-amber-400', 'bg-pink-500/20 text-pink-400', 'bg-red-500/20 text-red-400'],
    },
    {
      title: 'Mobile Social App',
      description: 'Cross-platform mobile application for social networking with real-time messaging, photo sharing, and location-based features.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['React Native', 'Firebase', 'Redux'],
      colors: ['bg-purple-500/20 text-purple-400', 'bg-cyan-500/20 text-cyan-400', 'bg-green-500/20 text-green-400'],
    },
    {
      title: 'Code Editor Extension',
      description: 'VS Code extension for enhanced productivity with custom themes, snippets, and intelligent code completion features.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['TypeScript', 'VS Code API', 'Node.js'],
      colors: ['bg-red-500/20 text-red-400', 'bg-purple-500/20 text-purple-400', 'bg-cyan-500/20 text-cyan-400'],
    },
    {
      title: 'ML Model Deployment',
      description: 'Machine learning model deployment platform with automated training, version control, and real-time inference capabilities.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      technologies: ['TensorFlow', 'Docker', 'Kubernetes'],
      colors: ['bg-amber-500/20 text-amber-400', 'bg-pink-500/20 text-pink-400', 'bg-green-500/20 text-green-400'],
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
              className="project-card bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
                    href="#"
                    className="flex items-center text-purple-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-cyan-400 hover:text-green-400 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
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
