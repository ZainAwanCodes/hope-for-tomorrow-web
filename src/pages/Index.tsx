import React from 'react';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MissionSection from '@/components/sections/MissionSection';
import ImpactSection from '@/components/sections/ImpactSection';
import StoriesSection from '@/components/sections/StoriesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/ui/footer';
import FloatingCTA from '@/components/ui/floating-cta';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ImpactSection />
        <StoriesSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
