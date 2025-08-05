import { Code2, Database, Globe, Wrench, BarChart3, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 80 }
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Backend Development",
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Django", level: 82 },
        { name: "FastAPI", level: 78 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 85 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Redis", level: 78 }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: [
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "SQL", level: 93 },
        { name: "Tableau", level: 80 }
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 78 },
        { name: "PyTorch", level: 75 },
        { name: "Jupyter", level: 90 },
        { name: "R", level: 70 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-8 h-8" />,
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Postman", level: 85 },
        { name: "Slack", level: 88 }
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="card-portfolio group hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4 group-hover:shadow-glow transition-all duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: 'slide-in-left 1s ease-out forwards'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "AWS Certified Developer",
              "Google Data Analytics Certificate", 
              "MongoDB Certified Developer"
            ].map((cert, index) => (
              <div 
                key={cert}
                className="card-portfolio text-center hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;