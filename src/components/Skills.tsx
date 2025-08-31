import { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Database, 
  Camera, 
  Search, 
  Brain, 
  Users, 
  FileText, 
  Shield,
  BarChart,
  Microscope,
  Palette,
  Layers,
  Image,
  Map
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars one by one
          setTimeout(() => {
            technicalSkills.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, index]));
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: 'Python Programming', level: 75, icon: Code, color: 'from-blue-500 to-blue-600' },
    { name: 'MATLAB', level: 80, icon: BarChart, color: 'from-orange-500 to-orange-600' },
    { name: 'SQL Database', level: 70, icon: Database, color: 'from-green-500 to-green-600' },
    { name: 'Statistical Analysis', level: 85, icon: BarChart, color: 'from-purple-500 to-purple-600' },
    { name: 'MS Office Suite', level: 90, icon: FileText, color: 'from-blue-600 to-blue-700' },
    { name: 'EnCase Forensics', level: 65, icon: Search, color: 'from-red-500 to-red-600' },
    { name: 'FTK Imager', level: 70, icon: Shield, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Autopsy Digital Forensics', level: 68, icon: Microscope, color: 'from-teal-500 to-teal-600' }
  ];

  const softSkills = [
    {
      name: 'Analytical Thinking',
      description: 'Critical analysis of evidence and data interpretation',
      icon: Brain,
      level: 'Expert'
    },
    {
      name: 'Report Writing',
      description: 'Comprehensive forensic documentation and communication',
      icon: FileText,
      level: 'Advanced'
    },
    {
      name: 'Ethical Decision Making',
      description: 'Maintaining integrity in forensic investigations',
      icon: Shield,
      level: 'Expert'
    },
    {
      name: 'Team Collaboration',
      description: 'Working effectively with law enforcement and legal teams',
      icon: Users,
      level: 'Advanced'
    }
  ];

  const creativeTools = [
    { name: 'Adobe Photoshop', category: 'Photo Editing', proficiency: 80, icon: Image },
    { name: 'Adobe Creative Suite', category: 'Design', proficiency: 75, icon: Layers },
    { name: 'Canva', category: 'Graphic Design', proficiency: 85, icon: Palette },
    { name: 'Evidence Mapping Software', category: 'Forensic Documentation', proficiency: 70, icon: Map }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technical proficiency and soft skills essential for modern forensic science
            </p>
          </div>

          {/* Technical Skills */}
          <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="forensic-card border-accent/20 hover:border-accent/40"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mr-4">
                        <skill.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="skill-bar">
                      <div
                        className={`skill-fill transition-all duration-1000 ease-out ${
                          animatedSkills.has(index) ? 'w-full' : 'w-0'
                        }`}
                        style={{ 
                          width: animatedSkills.has(index) ? `${skill.level}%` : '0%',
                          background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent-dark)))`
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`mb-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Core Competencies
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <Card
                  key={index}
                  className={`forensic-card border-accent/20 hover:border-accent/40 text-center group transform transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ animationDelay: `${700 + index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <skill.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-accent transition-colors">
                      {skill.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {skill.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      <span className="text-xs font-medium text-accent">{skill.level}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Creative Tools */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Creative & Design Tools
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {creativeTools.map((tool, index) => (
                <Card
                  key={index}
                  className="forensic-card border-accent/20 hover:border-accent/40 text-center"
                >
                  <CardContent className="p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mx-auto mb-3">
                      <tool.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-1 text-sm">
                      {tool.name}
                    </h5>
                    <p className="text-xs text-muted-foreground mb-3">
                      {tool.category}
                    </p>
                    <div className="skill-bar h-2">
                      <div
                        className="skill-fill h-2"
                        style={{ 
                          width: isVisible ? `${tool.proficiency}%` : '0%',
                          transitionDelay: `${800 + index * 100}ms`
                        }}
                      />
                    </div>
                    <span className="text-xs text-accent font-medium">
                      {tool.proficiency}%
                    </span>
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

export default Skills;