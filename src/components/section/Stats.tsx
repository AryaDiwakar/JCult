'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  number: string;
  description: string;
  subtitle?: string;
}

interface StatsProps {
  stats: StatItem[];
  title?: string;
  className?: string;
}

export default function Stats({ stats, title, className = "" }: StatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`py-6 md:py-8 lg:py-16 mb-6 md:mb-8 ${className}`}>
      <div className="container-responsive">
        {title && (
          <div className="flex flex-col md:flex-row mb-6 md:mb-8 lg:mb-16">
            <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">{title}</h2>
            </div>
          </div>
        )}
        <div className="md:ml-32 lg:ml-48 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item relative pl-3 md:pl-4 lg:pl-6 overflow-hidden">
              {/* Animated border line for each stat */}
              <div className="absolute left-0 top-0 w-0.5 bg-gold transition-all duration-1000 ease-out" 
                   style={{ height: isVisible ? '100%' : '0%', transitionDelay: `${index * 200}ms` }}>
              </div>
              <div className={`text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-5 lg:mb-10 font-signifier transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
              }`} style={{ transitionDelay: `${500 + index * 200}ms` }}>
                {stat.number}
              </div>
              <p className={`text-secondary text-xs md:text-sm lg:text-base mb-2 md:mb-3 lg:mb-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
              }`} style={{ transitionDelay: `${700 + index * 200}ms` }}>
                {stat.description}
              </p>
              <p className={`text-secondary opacity-75 text-xs md:text-sm lg:text-base transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
              }`} style={{ transitionDelay: `${900 + index * 200}ms` }}>
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}