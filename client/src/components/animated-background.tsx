import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const matrixRainRef = useRef<HTMLDivElement>(null);
  const particleSystemRef = useRef<HTMLDivElement>(null);
  const starfieldRef = useRef<HTMLDivElement>(null);
  const neuralNetworkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Matrix rain effect
    const matrixContainer = matrixRainRef.current;
    if (!matrixContainer) return;

    const chars = '01abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]()';
    
    const createMatrixChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDelay = Math.random() * 2 + 's';
      char.style.animationDuration = (Math.random() * 3 + 5) + 's';
      matrixContainer.appendChild(char);
      
      setTimeout(() => {
        char.remove();
      }, 8000);
    };

    // Decrease rain frequency
    const matrixInterval = setInterval(createMatrixChar, 300);

    // Particle system with burst on click
    const particleContainer = particleSystemRef.current;
    function createParticle(extra?: {x?: number, y?: number, color?: string, size?: number, opacity?: number}) {
      if (!particleContainer) return;
      const colorList = [
        '#a78bfa', '#06b6d4', '#f59e42', '#22d3ee', '#f472b6', '#facc15', '#4ade80', '#f87171',
        '#f472b6', '#fbbf24', '#38bdf8', '#f43f5e', '#34d399', '#e879f9', '#fde68a', '#818cf8', '#fca5a5', '#bef264'
      ];
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = (extra?.x !== undefined ? extra.x : Math.random() * 100) + '%';
      particle.style.top = (extra?.y !== undefined ? extra.y : Math.random() * 100) + '%';
      particle.style.animationDelay = Math.random() * 2 + 's';
      particle.style.animationDuration = (Math.random() * 12 + 16) + 's';
      // Colorful bubble/particle
      const color = extra?.color || colorList[Math.floor(Math.random() * colorList.length)];
      const size = extra?.size || (Math.random() * 4 + 2); // 2px to 6px
      const opacity = extra?.opacity || (Math.random() * 0.4 + 0.3); // 0.3 to 0.7
      particle.style.background = `radial-gradient(circle at 60% 40%, ${color} 60%, #fff0 100%)`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.opacity = `${opacity}`;
      particle.animate([
        { filter: 'blur(0px)' },
        { filter: 'blur(2px)' },
        { filter: 'blur(0px)' },
      ], {
        duration: 2000 + Math.random() * 2000,
        iterations: Infinity,
      });
      particleContainer.appendChild(particle);
      setTimeout(() => {
        particle.remove();
      }, 8000);
    }

    // Increase particle count and make them smaller
    const particleInterval = setInterval(() => createParticle({ size: Math.random() * 4 + 2 }), 100);

    // Particle burst on click
    const handleBurst = (e: MouseEvent) => {
      if (!particleContainer) return;
      const rect = particleContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      for (let i = 0; i < 20; i++) {
        createParticle({ x: x + (Math.random() - 0.5) * 10, y: y + (Math.random() - 0.5) * 10 });
      }
    };
    particleContainer?.addEventListener('click', handleBurst);

    return () => {
      clearInterval(matrixInterval);
      clearInterval(particleInterval);
      particleContainer?.removeEventListener('click', handleBurst);
    };
  }, []);

  useEffect(() => {
    // Starfield effect with twinkle and parallax
    const starfield = starfieldRef.current;
    if (!starfield) return;

    const colorList = [
      '#fff', '#e0e7ef', '#a78bfa', '#06b6d4', '#f59e42', '#22d3ee', '#f472b6', '#facc15', '#4ade80', '#f87171'
    ];
    const stars: HTMLDivElement[] = [];
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (Math.random() * 2 + 2) + 's';
      // Twinkle effect
      const color = colorList[Math.floor(Math.random() * colorList.length)];
      star.style.background = color;
      star.animate([
        { opacity: 0.7 },
        { opacity: 1 },
        { opacity: 0.7 },
      ], {
        duration: 2000 + Math.random() * 2000,
        iterations: Infinity,
      });
      starfield.appendChild(star);
      stars.push(star);
    };

    for (let i = 0; i < 50; i++) {
      createStar();
    }

    // Parallax effect for stars
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      stars.forEach((star, i) => {
        const depth = (i % 5) + 1;
        const x = (mouseX - 0.5) * depth * 10;
        const y = (mouseY - 0.5) * depth * 10;
        star.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Neural network effect
    const neuralNetwork = neuralNetworkRef.current;
    if (neuralNetwork) {
      const createNeuralLine = () => {
        const line = document.createElement('div');
        line.className = 'neural-line';
        line.style.left = Math.random() * 100 + '%';
        line.style.top = Math.random() * 100 + '%';
        line.style.width = Math.random() * 200 + 100 + 'px';
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = Math.random() * 2 + 's';
        neuralNetwork.appendChild(line);
      };

      for (let i = 0; i < 20; i++) {
        createNeuralLine();
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Interactive background elements that respond to mouse movement
    const floatingShapes = document.querySelectorAll('.floating-shape');
    
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 50;
        const y = (mouseY - 0.5) * speed * 50;
        
        (shape as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="matrix-rain" ref={matrixRainRef} />
      <div className="particle-system" ref={particleSystemRef} />
      <div className="starfield" ref={starfieldRef} />
      <div className="neural-network" ref={neuralNetworkRef} />
      {/* Floating shapes */}
      <div 
        className="floating-shape w-20 h-20 opacity-30" 
        style={{
          top: '10%', 
          left: '10%', 
          animationDelay: '0s',
          background: 'linear-gradient(45deg, #0f172a 60%, #334155 100%)'
        }} 
      />
      <div 
        className="floating-shape w-16 h-16 opacity-30" 
        style={{
          top: '20%', 
          right: '15%', 
          animationDelay: '1s',
          background: 'linear-gradient(45deg, #1e293b 60%, #334155 100%)'
        }} 
      />
      <div 
        className="floating-shape w-12 h-12 opacity-30" 
        style={{
          bottom: '30%', 
          left: '20%', 
          animationDelay: '2s',
          background: 'linear-gradient(45deg, #334155 60%, #0f172a 100%)'
        }} 
      />
      <div 
        className="floating-shape w-24 h-24 opacity-30" 
        style={{
          bottom: '10%', 
          right: '10%', 
          animationDelay: '0.5s',
          background: 'linear-gradient(45deg, #0f172a 60%, #1e293b 100%)'
        }} 
      />
    </>
  );
}
