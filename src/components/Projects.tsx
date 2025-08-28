import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
const viewMoreProjects = () => {
  window.open('https://github.com/AdityaMaddila?tab=repositories', '_blank'); 
}
const Projects = () => {
  const projects = [
    {
      title: "TAM Event Website",
      description: "A comprehensive website for the TAM event showcasing event details, registration system, and participant management with modern UI/UX design.",
      tech: ["React", "JavaScript", "CSS", "HTML", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://www.smectam.in/",
      category: "Website"
    },
    {
      title: "Pocket Mate",
      description: "A modern personal finance management application to track expenses, manage budgets, and analyze spending patterns with intuitive dashboard.",
      tech: ["React", "JavaScript", "Chart.js", "LocalStorage", "CSS"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://pocket-mate-zss8-nine.vercel.app/",
      category: "Website"
    },
    {
      title: "Email Generator App",
      description: "A full-stack web application that simplifies the process of writing professional emails through dynamic form inputs and templated generation logic. Features multiple email categories, personalized content generation, and responsive design for all devices.",
      tech: ["React.js", "Spring Boot", "OpenAI API", "Java", "RESTful APIs"],
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: null,
      category: "Website"
    },

    {
      title: "Remote Work Productivity Analyzer",
      description: "A Python-based desktop application with Tkinter GUI that leverages Machine Learning and Deep Learning models to analyze and predict employee productivity in remote work settings. Features multiple ML models, real-time predictions, and comprehensive performance visualization.",
      tech: ["Python", "Tkinter", "Keras", "Scikit-learn", "Pandas", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      github: "https://github.com/AdityaMaddila/BlinkIt_dashboard",
      demo: null,
      category: "Machine Learning"
    },
    {
  title: "AI-based Muscle Activation from EMG Data",
  description: "A data science project analyzing sEMG signals to detect muscle activation patterns. Includes preprocessing of normal vs. abnormal EMG recordings, feature engineering, and training/evaluation of a CatBoost-based classifier in a Jupyter Notebook workflow.",
  tech: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "CatBoost", "Matplotlib"],
  image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop",
  github: "https://github.com/AdityaMaddila/AI-based-Muscle-Activation-from-EMG-Data",
  demo: null,
  category: "Machine Learning"
},

      {
      title: "BlinkIt Data Dashboard",
      description: "Comprehensive Power BI dashboard analyzing BlinkIt's sales performance, customer insights, and business metrics with interactive visualizations.",
      tech: ["Power BI", "DAX", "Data Analysis", "SQL", "Business Intelligence"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com",
      demo: "https://app.powerbi.com/reportEmbed?reportId=f77555b9-8f62-4309-a635-b2f1bc752cd6&autoAuth=true&ctid=58b5c22a-754a-473f-b49e-851be7fe0e20",
      category: "Dashboard"
    }
  ];

  const categories = ["All", "Website", "Machine Learning", "Dashboard"];
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
            A showcase of my recent work spanning web development, machine learning, and data visualization
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
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary rounded-full text-white hover:bg-primary-glow transition-colors duration-300"
                      >
                        <Eye size={16} />
                      </a>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
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
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
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
          <button className="btn-outline" onClick={viewMoreProjects}>
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;