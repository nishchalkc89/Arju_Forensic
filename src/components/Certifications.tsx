import { useState, useEffect, useRef } from 'react';
import { Calendar, Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Forensic Photography Certification',
      issuer: 'National Institute',
      date: 'March 2024',
      status: 'Completed',
      description: 'Comprehensive certification in crime scene photography, evidence documentation, and photographic analysis techniques.',
      skills: ['Crime Scene Photography', 'Evidence Documentation', 'Photo Analysis', 'Digital Enhancement'],
      credentialId: 'FP-2024-03-156',
      category: 'Photography'
    },
    {
      title: 'How to Speak in Court',
      issuer: 'Legal Training Institute',
      date: 'April 2025',
      status: 'Scheduled',
      description: 'Professional development course focusing on expert witness testimony, courtroom procedures, and effective communication.',
      skills: ['Expert Testimony', 'Courtroom Procedures', 'Legal Communication', 'Professional Presentation'],
      credentialId: 'HSC-2025-04-289',
      category: 'Legal'
    },
    {
      title: 'Forensic Psychology',
      issuer: 'Udemy',
      date: 'June 2025',
      status: 'Enrolled',
      description: 'Advanced study of psychological principles in forensic investigations and criminal behavior analysis.',
      skills: ['Criminal Psychology', 'Behavioral Analysis', 'Interview Techniques', 'Case Assessment'],
      credentialId: 'FP-UD-2025-06-445',
      category: 'Psychology'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Enrolled':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Photography':
        return 'border-purple-200 text-purple-700 bg-purple-50';
      case 'Legal':
        return 'border-blue-200 text-blue-700 bg-blue-50';
      case 'Psychology':
        return 'border-green-200 text-green-700 bg-green-50';
      default:
        return 'border-accent/50 text-accent bg-accent/10';
    }
  };

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and specialized training in forensic science
            </p>
          </div>

          {/* Desktop View - Cards Grid */}
          <div className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`forensic-card border-accent/20 hover:border-accent/40 group h-full transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${500 + index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className={getCategoryColor(cert.category)}>
                        {cert.category}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(cert.status)}>
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg text-foreground group-hover:text-accent transition-colors leading-tight">
                    {cert.title}
                  </CardTitle>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{cert.issuer}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-foreground text-sm mb-2">Key Skills:</h5>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Credential ID: <span className="font-mono">{cert.credentialId}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile View - Slider */}
          <div className={`md:hidden transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              <Card className="forensic-card border-accent/20 min-h-[400px]">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className={getCategoryColor(certifications[currentSlide].category)}>
                        {certifications[currentSlide].category}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(certifications[currentSlide].status)}>
                        {certifications[currentSlide].status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg text-foreground leading-tight">
                    {certifications[currentSlide].title}
                  </CardTitle>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{certifications[currentSlide].issuer}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {certifications[currentSlide].date}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {certifications[currentSlide].description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-foreground text-sm mb-2">Key Skills:</h5>
                      <div className="flex flex-wrap gap-1">
                        {certifications[currentSlide].skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Credential ID: <span className="font-mono">{certifications[currentSlide].credentialId}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="border-accent/30 hover:border-accent hover:bg-accent/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {certifications.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-accent' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="border-accent/30 hover:border-accent hover:bg-accent/10"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <div className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground">Total Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">1</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">2</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;