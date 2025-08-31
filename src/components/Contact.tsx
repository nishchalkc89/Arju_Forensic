import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Fingerprint, Dna, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arjubhusal3@gmail.com',
      href: 'mailto:arjubhusal3@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9319579388',
      href: 'tel:+919319579388'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sharda University, India',
      href: '#'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Floating forensic icons background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 text-accent/10 floating-animation">
          <Fingerprint size={120} />
        </div>
        <div className="absolute bottom-32 left-10 text-accent/10 floating-animation" style={{ animationDelay: '2s' }}>
          <Search size={100} />
        </div>
        <div className="absolute top-1/2 right-1/4 text-accent/10 floating-animation" style={{ animationDelay: '4s' }}>
          <Dna size={90} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss forensic science opportunities, research collaborations, or professional connections
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className={`lg:col-span-1 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <Card className="forensic-card border-accent/20 h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Contact Information
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Feel free to reach out for any inquiries or collaborations
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <contact.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{contact.label}</h4>
                        {contact.href !== '#' ? (
                          <a
                            href={contact.href}
                            className="text-muted-foreground hover:text-accent transition-colors text-sm break-all"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="pt-6 border-t border-border">
                    <h4 className="font-medium text-foreground mb-3">Areas of Interest</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Digital Forensics Research
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Crime Scene Investigation
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Forensic Photography
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        Academic Collaborations
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-2 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <Card className="forensic-card border-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Send a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    I'll respond to your message as soon as possible
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-accent/30 focus:border-accent"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-accent/30 focus:border-accent"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, research, or how we can collaborate..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[120px] border-accent/30 focus:border-accent resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="forensic-button w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Card className="forensic-card border-accent/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Let's Collaborate on Forensic Science
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you're interested in research partnerships, internship opportunities, 
                  or discussing the latest developments in forensic science, I'm always open to 
                  meaningful conversations with fellow professionals and academics.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View CV/Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;