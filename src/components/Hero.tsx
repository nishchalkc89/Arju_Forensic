import { useState, useEffect } from 'react';
import { Mail, Linkedin, ExternalLink, Microscope, Fingerprint, Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';
import arjuPhoto from '@/assets/arju-photo.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'text-blue-600'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: '#',
      color: 'text-accent'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:arjubhusal3@gmail.com',
      color: 'text-red-500'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with forensic pattern */}
      <div className="absolute inset-0 bg-forensic-hero">
        <div className="absolute inset-0 forensic-pattern opacity-30"></div>
        
        {/* Floating forensic icons */}
        <div className="absolute top-20 left-10 text-accent/20 floating-animation">
          <Microscope size={60} />
        </div>
        <div className="absolute top-40 right-20 text-accent/20 floating-animation" style={{ animationDelay: '2s' }}>
          <Fingerprint size={80} />
        </div>
        <div className="absolute bottom-32 left-20 text-accent/20 floating-animation" style={{ animationDelay: '4s' }}>
          <Dna size={70} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`text-center lg:text-left transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-primary-foreground block">Arju</span>
                <span className="text-gradient block">Bhusal</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed">
                Forensic Science Student
              </p>
              
              <p className="text-lg text-primary-foreground/75 mb-8 max-w-2xl">
                Research Enthusiast | Digital Forensics Learner
              </p>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                {socialLinks.map((link, index) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="lg"
                    className={`forensic-button border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transform transition-all duration-300 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="w-5 h-5 mr-2" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>

              <div className="text-primary-foreground/60 text-sm">
                B.Sc. Forensic Science • Sharda University
              </div>
            </div>

            {/* Photo */}
            <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative">
                <div className="floating-animation">
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-dark rounded-3xl rotate-6 shadow-glow"></div>
                    <div className="relative bg-card rounded-3xl overflow-hidden shadow-forensic border-4 border-primary-foreground/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                      <img
                        src={arjuPhoto}
                        alt="Arju Bhusal - Forensic Science Student"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;