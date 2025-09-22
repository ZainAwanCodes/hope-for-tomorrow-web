import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'fade-up-delay';
  delay?: number;
  className?: string;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Initially hide the element
    element.style.opacity = '0';
    element.style.transform = getInitialTransform(animation);
    element.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translate3d(0, 0, 0) scale(1)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [animation, delay, threshold]);

  const getInitialTransform = (animationType: string): string => {
    switch (animationType) {
      case 'fade-up':
      case 'fade-up-delay':
        return 'translate3d(0, 30px, 0)';
      case 'slide-left':
        return 'translate3d(-50px, 0, 0)';
      case 'slide-right':
        return 'translate3d(50px, 0, 0)';
      case 'scale-in':
        return 'translate3d(0, 0, 0) scale(0.9)';
      case 'fade-in':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
};

// Hook for counter animations
export const useCountUp = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const [count, setCount] = React.useState(start);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let startTime: number;
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              
              const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentCount = Math.floor(easeOutExpo * (end - start) + start);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [end, duration, start]);

  return { count, ref: elementRef };
};

export default ScrollAnimation;