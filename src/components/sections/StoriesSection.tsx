import React from 'react';
import { Quote, MapPin, Calendar } from 'lucide-react';

const StoriesSection = () => {
  const stories = [
    {
      name: 'Maria Santos',
      location: 'Guatemala',
      date: '6 months ago',
      image: '👩‍🌾',
      story: 'Thanks to the clean water project in our village, my children no longer walk 3 hours to fetch water. Now they can go to school every day, and our whole community is healthier.',
      impact: 'Clean Water Access',
      category: 'water'
    },
    {
      name: 'David Ochieng',
      location: 'Kenya',
      date: '1 year ago',
      image: '👨‍🎓',
      story: 'The scholarship program changed my life completely. I became the first in my family to attend university, and now I\'m studying to become a doctor to help my community.',
      impact: 'Education Support',
      category: 'education'
    },
    {
      name: 'Amara Kone',
      location: 'Mali',
      date: '8 months ago',
      image: '👩‍⚕️',
      story: 'When the mobile clinic came to our remote village, they diagnosed my daughter\'s condition early. The treatment they provided saved her life. I\'m forever grateful.',
      impact: 'Healthcare Access',
      category: 'healthcare'
    },
    {
      name: 'Carlos Rodriguez',
      location: 'Honduras',
      date: '4 months ago',
      image: '👨‍🌾',
      story: 'The sustainable farming training helped me triple my crop yield. Now I can feed my family and sell surplus at the market. We\'re planning to build a new house!',
      impact: 'Food Security',
      category: 'food'
    },
    {
      name: 'Fatima Al-Zahra',
      location: 'Jordan',
      date: '3 months ago',
      image: '👩‍💼',
      story: 'The vocational training program taught me skills I never thought I could learn. Now I have my own small business and can support my three children independently.',
      impact: 'Skills Development',
      category: 'education'
    },
    {
      name: 'James Mwangi',
      location: 'Tanzania',
      date: '2 months ago',
      image: '👨‍🏫',
      story: 'Our new school building means children from five villages can now get a quality education. Seeing their faces light up when they learn something new makes every day worthwhile.',
      impact: 'Community Building',
      category: 'education'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'water': return 'border-secondary bg-secondary/5 text-secondary';
      case 'education': return 'border-primary bg-primary/5 text-primary';
      case 'healthcare': return 'border-accent bg-accent/5 text-accent';
      case 'food': return 'border-secondary-light bg-secondary-light/5 text-secondary-dark';
      default: return 'border-muted bg-muted/5 text-muted-foreground';
    }
  };

  return (
    <section id="stories" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">
            Stories of <span className="text-gradient">Hope</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind every statistic is a real person whose life has been transformed. 
            These are their stories of hope, resilience, and the power of community support.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="card-story group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{story.image}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{story.name}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {story.location}
                    </div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-primary/30 flex-shrink-0" />
              </div>

              {/* Story */}
              <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                "{story.story}"
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(story.category)}`}>
                  {story.impact}
                </span>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3 mr-1" />
                  {story.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card-elevated max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Be Part of the Next Success Story
            </h3>
            <p className="text-muted-foreground mb-6">
              Every donation, every volunteer hour, every act of kindness creates 
              ripples of positive change that transform entire communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Start Your Impact
              </button>
              <button className="btn-secondary-outline">
                Read More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;