import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-primary-foreground/80">
                © 2025 All rights reserved
              </p>
            </div>

            {/* Center - Name */}
            <div className="text-center mb-4 md:mb-0">
              <span className="text-xl font-bold">
                Arju Bhusal
              </span>
              <p className="text-sm text-primary-foreground/70">
                Forensic Science Student
              </p>
            </div>

            {/* Right side - Made by */}
            <div className="text-center md:text-right">
              <p className="text-sm text-primary-foreground/80">
                Made by{' '}
                <a
                  href="https://www.nishchalkc.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light transition-colors duration-200 font-medium inline-flex items-center gap-1"
                >
                  Nishchal Kc
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Bottom border with subtle pattern */}
          <div className="mt-6 pt-6 border-t border-primary-foreground/20">
            <div className="text-center">
              <p className="text-xs text-primary-foreground/60">
                Forensic Science • Digital Investigation • Evidence Analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;