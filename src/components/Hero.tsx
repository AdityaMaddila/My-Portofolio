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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient background */}
        <div 
          className="absolute inset-0 opacity-60 bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradientShift 8s ease infinite'
          }}
        />
        
        {/* Mouse interactive layer */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 211, 238, 0.4), rgba(168, 85, 247, 0.3), transparent 40%)`
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-cyan-400/30 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl animate-ping" style={{animationDelay: '1s'}}></div>
        
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
            <div className="w-2 h-2 bg-cyan-400/40 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm text-gray-300 mb-8 hover:bg-white/15 transition-all duration-300 invisible">
  <Sparkles size={16} className="mr-2 text-cyan-400" />
  Welcome to my digital space
</div>
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            <span className="block text-white mb-4">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Aditya Maddila
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Full Stack Developer & Data Analyst passionate about creating 
            <span className="text-cyan-400 font-semibold"> innovative web solutions</span> and turning 
            <span className="text-purple-400 font-semibold"> data into actionable insights</span>.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={scrollToProjects} 
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={downloadResume} 
              className="group relative px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              <span className="relative z-10">Download Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="https://github.com/AdityaMaddila" 
              className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <Github size={28} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/aditya-maddila-full-stack-developer/" 
              className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-blue-400/50 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/25"
            >
              <Linkedin size={28} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            
            <a 
              href="mailto:adityamvs202@gmail.com" 
              className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-purple-400/50 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/25"
            >
              <Mail size={28} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 p-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 animate-bounce group"
        >
          <div className="p-2 rounded-full border border-gray-600 group-hover:border-cyan-400 transition-colors duration-300">
            <ChevronDown size={28} />
          </div>
        </button>
      </div>

    </section>
  );
};

export default Hero;