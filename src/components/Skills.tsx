import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState(null);

  // Add CSS animations dynamically
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-6px) rotate(0.5deg); }
        66% { transform: translateY(3px) rotate(-0.5deg); }
      }
      
      .animate-float {
        animation: float 5s ease-in-out infinite;
      }
      
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      .gradient-text {
        background: linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6);
        background-size: 200% 200%;
        animation: gradient-shift 4s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .slide-in-up {
        animation: slideInUp 0.6s ease-out forwards;
      }

      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.4), 0 0 40px rgba(59, 130, 246, 0.2); }
      }

      .pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillCategories = {
    "Languages": {
      icon: "💻",
      color: "from-purple-600 to-blue-600",
      accentColor: "purple",
      description: "Core programming languages",
      skills: [
        { name: "JavaScript", symbol: "🟨", proficiency: 85 },
        { name: "Python", symbol: "🐍", proficiency: 80 },
        { name: "Java", symbol: "☕", proficiency: 85 }
      ]
    },
    "Frontend": {
      icon: "🎨",
      color: "from-blue-600 to-cyan-600",
      accentColor: "blue",
      description: "User interface & experience",
      skills: [
        { name: "React", symbol: "⚛️", proficiency: 90 },
        { name: "Next.js", symbol: "▲", proficiency: 85 },
        { name: "Tailwind CSS", symbol: "🎨", proficiency: 92 }
      ]
    },
    "Backend": {
      icon: "🔧",
      color: "from-green-600 to-emerald-600",
      accentColor: "green",
      description: "Server-side development",
      skills: [
        { name: "Node.js", symbol: "🟢", proficiency: 85 },
        { name: "Spring Boot", symbol: "🍃", proficiency: 75 },
        { name: "FastAPI", symbol: "⚡", proficiency: 70 }
      ]
    },
    "Database": {
      icon: "🗄️",
      color: "from-indigo-600 to-purple-600",
      accentColor: "indigo",
      description: "Data storage & management",
      skills: [
        { name: "PostgreSQL", symbol: "🐘", proficiency: 88 },
        { name: "MongoDB", symbol: "🍃", proficiency: 85 },
        { name: "MySQL", symbol: "🐬", proficiency: 82 },
      ]
    },
    "Cloud & DevOps": {
      icon: "☁️",
      color: "from-orange-600 to-amber-600",
      accentColor: "orange",
      description: "Deployment & infrastructure",
      skills: [
        { name: "AWS", symbol: "☁️", proficiency: 70 },
        { name: "Docker", symbol: "🐳", proficiency:75 },
        { name: "Vercel", symbol: "▲", proficiency: 90 }
      ]
    },
    "Data Science": {
      icon: "🧠",
      color: "from-pink-600 to-rose-600",
      accentColor: "pink",
      description: "Machine learning & analytics",
      skills: [
        { name: "TensorFlow", symbol: "🧠", proficiency: 80 },
        { name: "Pandas", symbol: "🐼", proficiency: 92 },
        { name: "NumPy", symbol: "🔢", proficiency: 90 },
      ]
    },
    "Tools": {
      icon: "🛠️",
      color: "from-violet-600 to-purple-600",
      accentColor: "violet",
      description: "Development & design tools",
      skills: [
        { name: "GitHub", symbol: "🐙", proficiency: 92 },
        { name: "VS Code", symbol: "💻", proficiency: 95 },
        { name: "Figma", symbol: "🎭", proficiency: 85 },
        { name: "Postman", symbol: "📮", proficiency: 88 },
        { name: "Power BI", symbol: "📈", proficiency: 88 },
        { name: "Excel", symbol: "📗", proficiency: 90 }
      ]
    }
  };

  const getFloatingStyle = (index) => {
    const x = Math.cos(index * 137.5) * (mousePosition.x * 0.003);
    const y = Math.sin(index * 137.5) * (mousePosition.y * 0.003);
    
    return {
      transform: `translate(${x}px, ${y}px)`,
      animationDelay: `${index * 0.1}s`
    };
  };

  const getAccentColors = (accentColor) => {
    const colors = {
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", hover: "hover:border-purple-400/60" },
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", hover: "hover:border-blue-400/60" },
      green: { bg: "bg-green-500/10", border: "border-green-500/30", hover: "hover:border-green-400/60" },
      indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", hover: "hover:border-indigo-400/60" },
      orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", hover: "hover:border-orange-400/60" },
      pink: { bg: "bg-pink-500/10", border: "border-pink-500/30", hover: "hover:border-pink-400/60" },
      violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", hover: "hover:border-violet-400/60" }
    };
    return colors[accentColor] || colors.blue;
  };

  return (
    <section id="skills" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-gray-700/50">
            <span className="text-2xl">🚀</span>
            <span className="text-gray-300 text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            My <span className="gradient-text">Tech Stack</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of technologies, frameworks, and tools I use to build exceptional digital experiences
          </p>
          <p className="text-sm text-muted-foreground/70 mt-3 italic">
            💡 Tap on the Skills section below to see my technical expertise come alive
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {Object.entries(skillCategories).map(([categoryName, categoryData], categoryIndex) => {
            const accent = getAccentColors(categoryData.accentColor);
            
            return (
              <div 
                key={categoryName}
                className={`group relative slide-in-up ${accent.bg} backdrop-blur-sm rounded-3xl p-8 border ${accent.border} ${accent.hover} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
                style={{ 
                  animationDelay: `${categoryIndex * 0.15}s`
                }}
                onMouseEnter={() => setActiveCategory(categoryName)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${categoryData.color} shadow-lg`}>
                      <span className="text-3xl">{categoryData.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{categoryName}</h3>
                      <p className="text-gray-400 text-sm">{categoryData.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{categoryData.skills.length}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Skills</div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {categoryData.skills.map((skill, skillIndex) => {
                    const globalIndex = categoryIndex * 10 + skillIndex;
                    const isActive = activeCategory === categoryName;
                    
                    return (
                      <div
                        key={skill.name}
                        className={`relative bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600/80 transition-all duration-300 cursor-pointer hover:scale-105 animate-float group/skill ${isActive ? 'pulse-glow' : ''}`}
                        style={{
                          ...getFloatingStyle(globalIndex),
                          animationDuration: `${4 + (globalIndex % 2)}s`
                        }}
                      >
                        {/* Skill Content */}
                        <div className="text-center space-y-3">
                          {/* Symbol */}
                          <div className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">
                            {skill.symbol}
                          </div>
                          
                          {/* Name */}
                          <div>
                            <h4 className="font-semibold text-white text-sm group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:from-blue-400 group-hover/skill:to-purple-400 transition-all duration-300">
                              {skill.name}
                            </h4>
                          </div>

                          {/* Proficiency Bar */}
                          <div className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500">Proficiency</span>
                              <span className="text-xs text-gray-400 font-medium">{skill.proficiency}%</span>
                            </div>
                            <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                              <div 
                                className={`h-1.5 rounded-full bg-gradient-to-r ${categoryData.color} transition-all duration-1000 ease-out`}
                                style={{ 
                                  width: isActive ? `${skill.proficiency}%` : '0%',
                                  transitionDelay: `${skillIndex * 0.1}s`
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Hover Effect Particles */}
                        <div className="absolute inset-0 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                          <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                          <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Category Stats */}
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Category Focus</span>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryData.color}`}></div>
                      <span className="text-gray-300 capitalize">{categoryData.accentColor}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-1">5+</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-1">20+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-1">3+</div>
            <div className="text-gray-400 text-sm">Years Hands-on Experience</div>
          </div>
          <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-1">∞</div>
            <div className="text-gray-400 text-sm">Learning</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 italic text-lg mb-4">
            "The best way to predict the future is to implement it."
          </p>
          <p className="text-sm text-gray-500">
            Hover over categories to see proficiency levels animate ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;