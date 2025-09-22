import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Community members helping each other, showing hope and compassion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-white mb-6 font-bold">
            Building <span className="text-accent-light">Hope</span> for a Better Tomorrow
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Together, we can transform lives, strengthen communities, and create lasting positive change 
            for those who need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-hero group">
              Donate Now
              <Heart className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </button>
            
            <button className="flex items-center text-white hover:text-accent-light transition-colors px-6 py-3 rounded-full border-2 border-white/30 hover:border-accent-light/50 backdrop-blur-sm">
              Learn Our Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">25K+</div>
              <div className="text-sm text-white/80">Lives Changed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80">Communities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;