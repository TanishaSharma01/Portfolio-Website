import Navigation from '../components/navigation';
import AnimatedBackground from '../components/animated-background';
import HeroSection from '../components/hero-section';
import AboutSection from '../components/about-section';
import SkillsSection from '../components/skills-section';
import ProjectsSection from '../components/projects-section';
import ExperienceSection from '../components/experience-section';
import ContactSection from '../components/contact-section';
import { Heart, Coffee } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-700 bg-slate-800/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400 flex items-center justify-center">
              &copy; 2025 Tanisha Sharma. Made with 
              <Heart className="text-red-400 mx-1 h-4 w-4" />
              and lots of 
              <Coffee className="text-amber-400 mx-1 h-4 w-4" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
