import React from 'react';
import { Droplet, GraduationCap, Home, Heart, Utensils, TreePine } from 'lucide-react';

const MissionSection = () => {
  const missions = [
    {
      icon: Droplet,
      title: 'Clean Water Access',
      description: 'Providing sustainable clean water solutions to communities in need, ensuring health and dignity for all.',
      color: 'secondary'
    },
    {
      icon: GraduationCap,
      title: 'Education Programs',
      description: 'Empowering children and adults through quality education and skill development opportunities.',
      color: 'primary'
    },
    {
      icon: Home,
      title: 'Shelter & Housing',
      description: 'Building safe, sustainable homes and shelters for families displaced by crisis or poverty.',
      color: 'accent'
    },
    {
      icon: Utensils,
      title: 'Food Security',
      description: 'Fighting hunger through nutrition programs, food distribution, and sustainable farming initiatives.',
      color: 'secondary'
    },
    {
      icon: Heart,
      title: 'Healthcare Support',
      description: 'Delivering essential medical care and health education to underserved communities worldwide.',
      color: 'primary'
    },
    {
      icon: TreePine,
      title: 'Environmental Action',
      description: 'Protecting our planet through reforestation, renewable energy, and environmental education.',
      color: 'accent'
    }
  ];

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">
            Our <span className="text-gradient">Mission Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We focus on six key areas that address the most pressing needs in communities 
            around the world, creating sustainable solutions that empower people to build 
            better futures for themselves and their families.
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => {
            const IconComponent = mission.icon;
            const colorClass = `text-${mission.color}`;
            const bgClass = `bg-${mission.color}/10`;
            
            return (
              <div 
                key={index}
                className="card-elevated group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${bgClass} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`w-8 h-8 ${colorClass}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {mission.title}
                </h3>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {mission.description}
                </p>
                
                <div className="mt-6 text-center">
                  <button className={`text-${mission.color} hover:text-${mission.color}-dark font-medium transition-colors`}>
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-elevated max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join us in our mission to create positive change in communities worldwide. 
              Every contribution, no matter the size, helps us build hope for tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Donate Now
              </button>
              <button className="btn-secondary-outline">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;