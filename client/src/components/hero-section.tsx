import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Twitter, Globe, ChevronDown } from 'lucide-react';
// Update the import path below if the file exists elsewhere, for example:
import TypingAnimation from "./ui/typing-animation";
// Or create the file at ./ui/typing-animation.tsx if it does not exist.

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="gradient-text">Tanisha Sharma</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-light"
            >
              <TypingAnimation text = "Software Developer & Masters Student "/>
            </motion.p>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Shipping code, training models, chasing innovation—masters student ready to make an impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-3 border border-cyan-400 text-base font-medium rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300"
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <a href="https://github.com/TanishaSharma01" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/tanisha-sharma-465aa71b6/" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-purple-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </motion.div>
    </section>
  );
}
