import React from 'react';
import { Users, Globe, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="mb-6">
              About <span className="text-gradient">Hope for Tomorrow</span>
            </h2>
            
            <p className="text-lg mb-6">
              Founded in 2018, Hope for Tomorrow emerged from a simple belief: 
              every person deserves compassion, support, and the opportunity to thrive. 
              What started as a small community initiative has grown into a movement 
              that touches thousands of lives across the globe.
            </p>
            
            <p className="mb-8">
              We believe in the power of collective action and the strength that comes 
              from communities working together. Our approach is rooted in dignity, 
              sustainability, and the understanding that lasting change happens when 
              we empower individuals and communities to become self-sufficient.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Community-Centered</h4>
                  <p className="text-sm text-muted-foreground">We work with communities, not for them</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Global Impact</h4>
                  <p className="text-sm text-muted-foreground">Reaching communities across 5 continents</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Proven Results</h4>
                  <p className="text-sm text-muted-foreground">95% of our programs achieve their goals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="card-elevated">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Our Vision</h3>
                </div>
                
                <blockquote className="text-center text-lg text-muted-foreground italic mb-6">
                  "A world where every person has access to the resources, 
                  opportunities, and support they need to build a better future 
                  for themselves and their communities."
                </blockquote>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">2018</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">25K+</div>
                    <div className="text-sm text-muted-foreground">Lives Changed</div>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Transparent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;