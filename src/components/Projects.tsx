import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Analytics Dashboard",
      description: "A comprehensive dashboard for analyzing e-commerce data with real-time insights, sales forecasting, and customer behavior analysis.",
      tech: ["React", "Python", "PostgreSQL", "Chart.js", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Full Stack"
    },
    {
      title: "Social Media Sentiment Analyzer",
      description: "Machine learning application that analyzes social media posts to determine sentiment trends and provide actionable insights for brands.",
      tech: ["Python", "TensorFlow", "Flask", "MongoDB", "NLP"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Data Science"
    },
    {
      title: "Task Management App",
      description: "A modern, collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend"
    },
    {
      title: "Stock Price Prediction Model",
      description: "Machine learning model that predicts stock prices using historical data, technical indicators, and sentiment analysis from news articles.",
      tech: ["Python", "PyTorch", "Pandas", "Streamlit", "Yahoo Finance API"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Data Science"
    },
    {
      title: "Restaurant Booking System",
      description: "Full-stack restaurant booking system with user authentication, table management, and real-time availability tracking.",
      tech: ["React", "Node.js", "Express", "MySQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Full Stack"
    },
    {
      title: "Weather Data Visualization",
      description: "Interactive weather data visualization tool that displays historical weather patterns, climate trends, and forecast predictions.",
      tech: ["D3.js", "Vue.js", "Python", "OpenWeather API", "MongoDB"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Data Visualization"
    }
  ];

  const categories = ["All", "Full Stack", "Data Science", "Frontend", "Data Visualization"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning full-stack development, data science, and machine learning
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-card border border-card-border text-foreground hover:bg-primary/20 hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="card-portfolio group hover:scale-[1.02]"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demo}
                      className="p-2 bg-primary rounded-full text-white hover:bg-primary-glow transition-colors duration-300"
                    >
                      <Eye size={16} />
                    </a>
                    <a 
                      href={project.github}
                      className="p-2 bg-card border border-card-border rounded-full text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-3 py-1 bg-card border border-card-border rounded-full hover:bg-primary/20 hover:border-primary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 pt-4">
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <button className="btn-outline">
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

// useState import needed
import { useState } from 'react';

export default Projects;