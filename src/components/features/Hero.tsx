'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  description: string;
}

export default function Hero({ videoSrc, imageSrc, title, description }: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mb-6 md:mb-8">
      {/* Background Grey */}
      <div className="absolute inset-0 bg-grey ml-4 md:ml-8"></div>
      
      {/* Title - aligned with navbar - Fade from left */}
      <div className="absolute top-4 md:top-6 lg:top-12 left-0 right-0 z-10">
        <div className="container-responsive">
          <h1 className={`text-white max-w-[250px] md:max-w-[500px] lg:max-w-[700px] text-[20px] md:text-[48px] lg:text-[64px] font-[500] leading-tight md:leading-snug lg:leading-[70px] font-primary pl-4 md:pl-8 lg:pl-16 transition-all duration-1000 drop-shadow-lg ${
            loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            {title}
          </h1>
        </div>
      </div>
      
      {/* Green background with text - Fade from left with delay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 ml-4 mr-4 md:ml-8 md:mr-8">
        <div className={`bg-primary px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8 transition-all duration-1000 delay-500 ${
          loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`} style={{
          background: 'rgba(27, 94, 32, 0.7)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div className="container-responsive">
            <p className={`text-white text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-1000 delay-1000 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
