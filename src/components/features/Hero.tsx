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
    <section className="relative h-[480px] md:h-[530px] lg:h-[780px] xl:h-[880px] overflow-hidden">
      {/* Background Grey */}
      <div className="absolute inset-0 bg-grey ml-4 md:ml-8"></div>
      
      {/* Title - aligned with navbar - Fade from left */}
      <div className="absolute top-6 md:top-6 lg:top-16 left-0 right-0 z-20">
        <div className="container-responsive">
          <h1 className={`text-white max-w-[340px] md:max-w-[500px] lg:max-w-[600px] lg:pt-10 xl:pt-28 text-hero-title leading-[1.1] md:leading-snug lg:leading-[70px] font-brand pl-2 transition-all duration-1000 drop-shadow-lg ${
            loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            {title}
          </h1>
        </div>
      </div>
      
      {/* Green background with text - Fade from left with delay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 ml-4 mr-4 md:ml-8 md:mr-8">
        <div className={`relative py-4 md:py-6 lg:py-14 transition-all duration-1000 delay-500 ${
          loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          {/* Glassy background layer */}
          <div className="absolute inset-0" style={{
            background: 'rgba(27, 94, 32, 0.7)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}></div>
          
          {/* Text content layer */}
          <div className="container-responsive relative z-10">
            <p className={`text-white lg:max-w-[600px] text-hero-subtitle leading-relaxed transition-all duration-1000 delay-1000 ${
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
