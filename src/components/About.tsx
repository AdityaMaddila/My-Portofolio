import { Download, MapPin, Calendar, GraduationCap } from 'lucide-react';
import profilePic from '@/assets/profile-pic.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong background in full-stack development and data analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
                <img 
                  src={profilePic}
                  alt="Alex Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-glow-pulse">
                <GraduationCap size={24} className="text-white" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="card-portfolio">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with 3+ years of experience in creating robust web applications 
                and analyzing complex datasets. I love turning ideas into reality through clean, efficient code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey started with a Computer Science degree, and I've since worked on projects ranging from 
                e-commerce platforms to data visualization dashboards. I'm always eager to learn new technologies 
                and tackle challenging problems.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-card/50 rounded-xl border border-card-border">
                <MapPin className="text-primary" size={20} />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-card/50 rounded-xl border border-card-border">
                <Calendar className="text-primary" size={20} />
                <span className="text-sm">Available for work</span>
              </div>
            </div>

            {/* Education */}
            <div className="card-portfolio">
              <h4 className="text-lg font-semibold mb-3 text-primary">Education</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-muted-foreground">University of California, Berkeley • 2020</p>
                </div>
                <div>
                  <p className="font-medium">Data Science Certification</p>
                  <p className="text-sm text-muted-foreground">Stanford Online • 2021</p>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <button className="btn-hero w-full md:w-auto">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;