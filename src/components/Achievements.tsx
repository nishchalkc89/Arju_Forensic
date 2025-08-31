import { useState, useEffect, useRef } from 'react';
import { Users, Award, Trophy, Star, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import arjuPhoto from '../assets/forensic.jpg';   
import arjuPhoto1 from '../assets/arju.jpg';
import arjuPhoto2 from '../assets/award.jpg';


const Achievements = () => {
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
      
    title: 'Forensic Society Workshop',
    description: 'Active participation in advanced forensic investigation workshops and seminars',
    category: 'Academic',
    icon: Users,
    image: arjuPhoto, 
    date: '2024'
    },
    {
      title: 'Nepalese Cultural Programme',
    description: 'Organized and participated in cultural events promoting Nepalese heritage',
    category: 'Cultural',
    icon: Star,
    image: arjuPhoto1, 
    date: '2024'
    },
    {
      title: 'Best Dressed Award',
    description: 'Recognition for outstanding presentation and professional appearance',
    category: 'Recognition',
    icon: Award,
    image: arjuPhoto2,  
    date: '2024'
    },
    {
      title: 'Photography Competition',
      description: 'Excellence in forensic photography and evidence documentation',
      category: 'Competition',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
      date: '2024'
    },
    {
      title: 'Research Excellence',
      description: 'Outstanding performance in forensic science research projects',
      category: 'Academic',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      date: '2024'
    },
    {
      title: 'Community Service',
      description: 'Volunteer work in forensic awareness and community education programs',
      category: 'Service',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop',
      date: '2024'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Cultural':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Recognition':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Competition':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Service':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section ref={sectionRef} id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Achievements & Activities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Co-curricular activities, recognitions, and contributions to the forensic science community
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`forensic-card border-accent/20 hover:border-accent/40 group overflow-hidden transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(achievement.category)}`}>
                      {achievement.category}
                    </span>
                  </div>
                  
                  {/* Date */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/90 text-foreground border border-border">
                      {achievement.date}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm">
                      <achievement.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Stats */}
          <div className={`mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Card className="forensic-card border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                  Impact & Involvement
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Workshop Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Cultural Events</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">8+</div>
                    <div className="text-sm text-muted-foreground">Awards & Recognition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Community Projects</div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Philosophy:</strong> Excellence in academics combined with active participation 
                    in cultural and community activities shapes a well-rounded forensic science professional.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;