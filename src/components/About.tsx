import { Download, MapPin, Calendar, GraduationCap } from 'lucide-react';
import profilePic from '@/assets/profile-pic.png';
const downloadResume = () => {window.open('https://drive.google.com/file/d/1OOWWywTfDkgpRMo5m5WdcaZwXZ6LIEen/view?usp=sharing', '_blank');};

const About = () => {
  return (
    
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Passionate developer creating innovative solutions through technology
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
                <img 
                  src={profilePic}
                  alt="Alex Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-glow-pulse">
                <GraduationCap size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 order-2 lg:order-2">
            <div className="card-portfolio p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                I am a dedicated Full Stack Developer with expertise in modern web technologies and a passion for creating efficient, scalable solutions. My experience spans across frontend frameworks, backend development, and database management—basically, I speak fluent JavaScript and occasionally argue with CSS (and usually win).
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                With strong problem-solving skills and attention to detail, I specialize in transforming complex requirements into intuitive applications. I'm committed to writing clean, maintainable code that future-me won't curse at, and staying current with emerging technologies (yes, I survived the React hooks transition).
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-card/50 rounded-xl border border-card-border">
                <MapPin className="text-primary flex-shrink-0" size={18} />
                <span className="text-xs sm:text-sm">Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-card/50 rounded-xl border border-card-border">
                <Calendar className="text-primary flex-shrink-0" size={18} />
                <span className="text-xs sm:text-sm">Available for opportunities</span>
              </div>
            </div>

            {/* Education */}
            <div className="card-portfolio p-4 sm:p-5 md:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-3 text-primary">Education</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-1">
                  <p className="font-medium text-sm sm:text-base leading-tight">
                    B.Tech in Computer Science and Engineering (AI & ML)
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    St. Martin's Engineering College, Hyderabad • 2025
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm sm:text-base leading-tight">
                    B.Sc in Data Science and Programming
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Indian Institute of Technology, Madras • 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="flex justify-center sm:justify-start">
              <button className="btn-hero w-full sm:w-auto min-w-[200px] flex items-center justify-center px-6 py-3 text-sm sm:text-base" onClick={downloadResume}>
                <Download size={18} className="mr-2 flex-shrink-0" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;