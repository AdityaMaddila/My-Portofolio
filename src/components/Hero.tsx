import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Hello, I'm</span>
            <span className="gradient-text">Aditya Maddila</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full Stack Developer & Data Analyst passionate about creating innovative web solutions and turning data into actionable insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-hero">
              View My Work
            </button>
            <button className="btn-outline">
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/AdityaMaddila" 
              className="p-3 bg-card/50 border border-card-border rounded-full hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-maddila-full-stack-developer/" 
              className="p-3 bg-card/50 border border-card-border rounded-full hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:adityamvs202@gmail.com" 
              className="p-3 bg-card/50 border border-card-border rounded-full hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;