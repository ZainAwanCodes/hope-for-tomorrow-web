import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, MapPin, Clock } from 'lucide-react';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      value: 25420,
      label: 'Lives Changed',
      suffix: '+',
      description: 'People directly impacted by our programs'
    },
    {
      icon: MapPin,
      value: 127,
      label: 'Communities',
      suffix: '',
      description: 'Active projects across the globe'
    },
    {
      icon: TrendingUp,
      value: 2400000,
      label: 'Meals Served',
      suffix: '+',
      description: 'Nutritious meals provided to families'
    },
    {
      icon: Clock,
      value: 850,
      label: 'Volunteers',
      suffix: '+',
      description: 'Dedicated people making a difference'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const CounterAnimation = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const startTime = Date.now();
      const endValue = value;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * endValue);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [isVisible, value, duration]);

    return (
      <span>
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">
            Our <span className="text-gradient">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every number tells a story of hope, resilience, and positive change. 
            Together, we're building a better tomorrow for communities worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={index}
                className="card-elevated text-center group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-4xl font-bold text-foreground mb-2 animate-counter">
                  <CounterAnimation 
                    value={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + (index * 200)}
                  />
                </div>
                
                <div className="text-lg font-semibold text-primary mb-2">
                  {stat.label}
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Stories Preview */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Real Impact, Real Stories
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Clean Water Projects</h4>
                  <p className="text-muted-foreground">
                    Our water initiatives have provided clean, safe drinking water to over 
                    15,000 people in rural communities across Africa and Asia.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Education Programs</h4>
                  <p className="text-muted-foreground">
                    We've built 23 schools and provided scholarships to over 3,200 
                    children who previously had no access to quality education.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Healthcare Support</h4>
                  <p className="text-muted-foreground">
                    Our mobile health clinics have provided essential medical care 
                    to over 8,500 people in underserved areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="card-elevated bg-gradient-to-br from-card to-primary/5">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🌍</div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">Global Reach</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Africa</span>
                    <span className="font-semibold text-foreground">45 projects</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Asia</span>
                    <span className="font-semibold text-foreground">38 projects</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '63%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Latin America</span>
                    <span className="font-semibold text-foreground">32 projects</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '53%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Other Regions</span>
                    <span className="font-semibold text-foreground">12 projects</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary-light h-2 rounded-full" style={{ width: '20%' }}></div>
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

export default ImpactSection;