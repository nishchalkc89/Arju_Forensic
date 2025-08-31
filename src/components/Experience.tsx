import { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Search, Camera, FileText, Fingerprint } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const experiences = [
    {
      title: 'Forensic Science Intern',
      company: 'NFSL Nepal',
      location: 'Nepal',
      period: 'June - July 2025',
      type: 'Internship',
      status: 'Upcoming',
      description: 'Comprehensive internship program focusing on practical forensic science applications and evidence analysis.',
      responsibilities: [
        'Evidence collection and preservation techniques',
        'Fingerprint analysis and classification',
        'Chain of custody documentation and procedures',
        'Crime scene photography and documentation',
        'Laboratory analysis and report writing'
      ],
      skills: ['Evidence Analysis', 'Fingerprint Analysis', 'Crime Scene Investigation', 'Documentation', 'Laboratory Techniques']
    }
  ];

  const projects = [
    {
      title: 'Digital Forensics Recovery Project',
      description: 'Advanced digital evidence recovery using industry-standard forensic tools',
      tools: ['EnCase', 'FTK Imager', 'Autopsy'],
      category: 'Digital Forensics',
      icon: Search
    },
    {
      title: 'Forensic Photography Analysis',
      description: 'Evidence mapping and photographic documentation techniques',
      tools: ['Adobe Photoshop', 'Evidence Mapping Software'],
      category: 'Photography',
      icon: Camera
    },
    {
      title: 'Crime Scene Documentation',
      description: 'Comprehensive crime scene analysis and documentation protocols',
      tools: ['Documentation Software', 'Measurement Tools'],
      category: 'Investigation',
      icon: FileText
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Experience & Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical experience in forensic science through internships and specialized projects
            </p>
          </div>

          {/* Experience Timeline */}
          <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Professional Experience
            </h3>
            
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="timeline-item">
                    <Card className="forensic-card ml-6">
                      <CardHeader>
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl text-foreground mb-2">
                              {exp.title}
                            </CardTitle>
                            <div className="flex flex-wrap items-center gap-2 text-muted-foreground mb-2">
                              <span className="font-semibold">{exp.company}</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="outline" className="border-accent text-accent">
                                <Calendar className="w-3 h-3 mr-1" />
                                {exp.period}
                              </Badge>
                              <Badge variant="secondary">
                                {exp.type}
                              </Badge>
                              <Badge variant="outline" className="border-primary text-primary">
                                {exp.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-foreground mb-2">Key Responsibilities:</h5>
                          <ul className="space-y-1">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-2">Skills Developed:</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="border-accent/50 text-accent text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Key Projects
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`forensic-card border-accent/20 hover:border-accent/40 group transform transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ animationDelay: `${700 + index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                        <project.icon className="w-6 h-6 text-accent" />
                      </div>
                      <Badge variant="outline" className="border-primary/50 text-primary text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div>
                      <h6 className="font-medium text-foreground text-sm mb-2">Tools Used:</h6>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;