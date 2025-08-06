import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-card-border">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-muted-foreground">
              © 2025 Aditya Maddila. Made with{' '}
              <Heart size={16} className="inline text-red-500 animate-pulse" />{' '}
              using React & Tailwind CSS
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary/20 hover:bg-primary rounded-full transition-all duration-300 hover:scale-110 hover:shadow-glow group"
          >
            <ArrowUp size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;