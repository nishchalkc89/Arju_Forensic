import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
