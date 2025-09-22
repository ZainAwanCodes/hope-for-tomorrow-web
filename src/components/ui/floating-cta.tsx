import React, { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-500",
      isMinimized ? "w-14 h-14" : "w-auto"
    )}>
      {isMinimized ? (
        // Minimized state - just the heart icon
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-gradient-to-r from-accent to-accent-light text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Expand donation call-to-action"
        >
          <Heart className="w-6 h-6" />
        </button>
      ) : (
        // Expanded state - full CTA
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-sm animate-scale-in">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-foreground text-sm">Hope for Tomorrow</span>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-muted-foreground hover:text-foreground p-1"
              aria-label="Minimize donation call-to-action"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <h3 className="font-bold text-foreground mb-2">Make a Difference Today</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Your donation helps us bring hope to families and communities in need.
          </p>
          
          <div className="space-y-2">
            <button className="w-full bg-gradient-to-r from-accent to-accent-light text-white py-2.5 px-4 rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              Donate Now
            </button>
            <button className="w-full border border-secondary text-secondary py-2 px-4 rounded-lg font-medium hover:bg-secondary hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;