import { ChevronDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1OOWWywTfDkgpRMo5m5WdcaZwXZ6LIEen/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div 
          className="absolute inset-0 opacity-80 bg-gradient-to-br from-primary via-secondary to-accent animate-pulse"
          style={{
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Mouse interactive layer */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2), transparent 40%)`
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-ping" style={{animationDelay: '0.5s'}}></div>
        
        {/* Small floating dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-md border border-border rounded-full text-sm text-muted-foreground mb-8 animate-bounce">
            <Sparkles size={16} className="mr-2 animate-spin text-primary" />
            Welcome to my digital space
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-foreground mb-4">Hello, I'm</span>
            <span 
              className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse"
            >
              Aditya Maddila
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Full Stack Developer & Data Analyst passionate about creating 
            <span className="text-primary font-semibold animate-pulse"> innovative web solutions</span> and turning 
            <span className="text-accent font-semibold animate-pulse"> data into actionable insights</span>.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={scrollToProjects} 
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={downloadResume} 
              className="group relative px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-2xl hover:shadow-primary/25"
            >
              <span className="relative z-10">Download Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="https://github.com/AdityaMaddila" 
              className="group p-4 bg-card/50 backdrop-blur-sm border border-border rounded-full transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-primary/25"
            >
              <Github size={24} className="text-foreground group-hover:text-primary-foreground group-hover:animate-spin" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/aditya-maddila-full-stack-developer/" 
              className="group p-4 bg-card/50 backdrop-blur-sm border border-border rounded-full transition-all duration-300 hover:bg-secondary hover:border-secondary hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-secondary/25"
            >
              <Linkedin size={24} className="text-foreground group-hover:text-secondary-foreground group-hover:animate-bounce" />
            </a>
            
            <a 
              href="mailto:adityamvs202@gmail.com" 
              className="group p-4 bg-card/50 backdrop-blur-sm border border-border rounded-full transition-all duration-300 hover:bg-accent hover:border-accent hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-accent/25"
            >
              <Mail size={24} className="text-foreground group-hover:text-accent-foreground group-hover:animate-pulse" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>


    </section>
  );
};

export default Hero;