import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link 
              to="/" 
              className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Timar Tizazu Amha
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              UI/UX Designer crafting beautiful digital experiences
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Timar Tizazu Amha. All rights reserved.
            </p>
            <Link 
              to="/" 
              className="text-primary hover:text-primary-glow text-sm transition-colors mt-2 inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;