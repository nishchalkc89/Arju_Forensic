import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, Trophy, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

  const achievements = [
    {
      icon: Award,
      title: 'Merit Scholarship',
      description: 'Academic excellence recognition'
    },
    {
      icon: Star,
      title: 'Student of the Year',
      description: 'Outstanding performance award'
    },
    {
      icon: Trophy,
      title: 'Volleyball Champion',
      description: 'Sports excellence achievement'
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Consistent high performance'
    }
  ];

  const education = [
    {
      year: '2022 - Present',
      degree: 'B.Sc. Forensic Science',
      institution: 'Sharda University',
      status: 'Current'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate forensic science student dedicated to uncovering truth through scientific investigation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="space-y-6">
                <div className="forensic-card">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Forensic Science Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Currently pursuing B.Sc. Forensic Science at Sharda University, I am passionate about applying 
                    scientific methods to solve complex criminal investigations. My focus areas include digital 
                    forensics, evidence analysis, and crime scene investigation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Through hands-on laboratory work and theoretical studies, I've developed expertise in fingerprint 
                    analysis, digital evidence recovery, and forensic photography. I believe in the power of science 
                    to deliver justice and contribute to a safer society.
                  </p>
                </div>

                {/* Education Timeline */}
                <div className="forensic-card">
                  <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <GraduationCap className="w-6 h-6 text-accent mr-2" />
                    Education
                  </h4>
                  {education.map((edu, index) => (
                    <div key={index} className="timeline-item last:border-l-0 last:pb-0">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <span className="text-sm font-medium text-accent">{edu.year}</span>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {edu.status}
                        </span>
                      </div>
                      <h5 className="font-semibold text-foreground">{edu.degree}</h5>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <h4 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className={`forensic-card border-accent/20 hover:border-accent/40 transform transition-all duration-500 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ animationDelay: `${600 + index * 150}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                        <achievement.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h5 className="font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">2+</div>
                  <div className="text-sm text-muted-foreground">Years Study</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">8+</div>
                  <div className="text-sm text-muted-foreground">Lab Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;