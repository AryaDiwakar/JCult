'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/features/Hero';
import Stats from '@/components/features/Stats';
import NewsSection from '@/components/features/NewsSection';
import FadeUp from '@/components/animation/FadeUp';
import ImageReveal from '@/components/animation/ImageReveal';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { newsArticles } from '@/data/newsData';
import { useEffect, useRef, useState } from 'react';

function AnimatedTalentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-24 bg-tertiary">
      <div className="container-responsive">
        <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
          <div className={`flex-1 mb-4 md:mb-6 lg:mb-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-lora font-bold leading-tight mb-3 md:mb-4 lg:mb-8 text-primary">Engage With Elite Talent</h2>
          </div>
          <div className={`flex-1 md:pl-8 lg:pl-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-base md:text-lg lg:text-xl font-raleway mb-4 md:mb-6 lg:mb-8 leading-relaxed text-main opacity-75">
              Here, the collective fuels your growth. People learn side by side, sharpening each other's
              skills and building extraordinary careers together.
            </p>
            <a href="/career"><LuxuryButton variant="primary">Explore Career Possibilities</LuxuryButton></a>
          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="bg-grey w-full h-48 md:h-80 lg:h-96"></div>
        </div>
      </div>
    </section>
  );
}

function AnimatedMeritocraticSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-tertiary py-12 md:py-16 lg:py-24">
      <div className="container-responsive">
        <div className="flex flex-col md:flex-row items-start">
          <div className={`flex-1 mb-4 md:mb-6 lg:mb-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-lora font-bold leading-tight text-primary">
              The Meritocratic Code That Shapes Our Collective
            </h2>
          </div>
          <div className={`flex-1 md:pl-8 lg:pl-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <p className="text-base md:text-lg lg:text-xl font-raleway leading-relaxed opacity-75 text-main">
              A culture where every perspective strengthens our purpose. From seasoned experts to
              rising talent, each member fuels the intelligence that drives our performance. United, we
              achieve what others consider out of reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedGreenSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-primary py-12 md:py-16 lg:py-24" style={{ color: '#d6e0f6' }}>
      <div className="container-responsive">
        <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
          <div className={`flex-1 mb-4 md:mb-6 lg:mb-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4 lg:mb-8">Pioneering the Future of Finance</h2>
          </div>
          <div className={`flex-1 md:pl-8 lg:pl-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6 lg:mb-8">
              Innovation is the core of our competitive advantage. We tirelessly reimagine our approach
              to the markets, systematically enhancing our trading models and execution capabilities to
              generate outsized returns in an ever-changing landscape.
            </p>
            <a href="/what-we-do"><LuxuryButton variant="white">Explore What We Do</LuxuryButton></a>
          </div>
        </div>
      </div>
      <div className="container-responsive">
        <div className={`relative transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="bg-grey w-full h-48 md:h-80 lg:h-[400px]"></div>
        </div>
      </div>
    </section>
  );
}

function AnimatedSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-tertiary">
      <div className="container-responsive">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="flex-1 flex flex-col items-start mb-2 md:mb-4 lg:mb-0 md:pr-8 lg:pr-12 relative">
            <h3 className="text-[16px] lg:text-[18px] tracking-wider uppercase text-primary mb-3 md:mb-4 lg:mb-8">Who We Are</h3>
          </div>
          <div className="flex-3 pl-2 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[0.25px] bg-grey"></div>
            <p className="text-primary text-[24px] lg:text-[32px] font-primary leading-tight pl-4 lg:pl-8">
              We aspire to establish an unprecedented legacy as the premier investment entity in
              history. Our mandate is to rigorously discern optimal capital allocation strategies,
              thereby delivering exceptional, sustainable value to an elite clientele of private
              capital stewards and global investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );}


export default function Home() {
  return (
    <div className="min-h-screen bg-main">
      <main>
        <div className="pt-24">
          <Hero 
            title="United, we convert aspiration into strategic execution"
            description="Built on the pursuit of identifying under-recognised market opportunities and empowering
talented individuals to execute their boldest, highest-conviction ideas with precision."
          />
        </div>

        {/* <section className="py-6 md:py-8 lg:py-16 bg-main">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-8 lg:mb-0">
                <img 
                  src="/office-collage.jpg" 
                  alt="Office Collage" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary mb-3 md:mb-4 lg:mb-6">
                  Our Workspace
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-main mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btn-primary px-4 md:px-6 lg:px-8 py-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section> */}

        <AnimatedSection />

        <div>
          <Stats 
            stats={[
              {
                number: "2025",
                description: "Date founded by Managing Director Jeyanandh Dhivaharan"
              },
              {
                number: "$10M",
                description: "Assets Under Management",
                subtitle:"As of January 2026"
              },
              {
                number: "1000+",
                description: "Investor Trusts Us"
              }
            ]}
          />
        </div>

        <AnimatedGreenSection />
        
        <AnimatedMeritocraticSection />

        <section className="py-12 md:py-16 lg:py-24">
            <Stats 
            stats={[
              {
                number: "60%+",
                description: "Professionals with cross-market trading exposure",
                subtitle: "As of January 2026"
              },
              {
                number: "15+",
                description: "Years of Collective Expertise The combined market proficiency of our founding team, refined into a contemporary investment approach.",
                subtitle: "As of January 2026"
              },
              {
                number: "100%",
                description: "Capital Commitment Our conviction is unequivocal — the founding partners invest alongside the portfolio, fully aligned with its performance.",
                subtitle: "As of January 2026"
              }
            ]}
            />
        </section>

        {/* <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-lora font-bold leading-tight mb-3 md:mb-4 lg:mb-8 text-primary">Engage With Elite Talent</h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-base md:text-lg lg:text-xl font-raleway mb-4 md:mb-6 lg:mb-8 leading-relaxed text-main opacity-75">
                  Here, the collective fuels your growth. People learn side by side, sharpening each other’s
                  skills and building extraordinary careers together.
                </p>
                <LuxuryButton variant="primary">Explore Career Possibilities</LuxuryButton>
              </div>
            </div>
            <div className="ml-0 md:ml-4 lg:ml-8">
              <ImageReveal 
                src="/office.webp" 
                alt="Office" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section> */}

        <AnimatedTalentSection />

        <NewsSection 
          title="Insights & Perspectives"
          description="Explore firm highlights, media coverage, and perspectives on what it means to join and
grow within our organization."
          items={newsArticles.map(article => ({
            category: article.category,
            title: article.title,
            href: `/news/${article.id}`,
            date: article.date,
            source: article.source
          }))}
        />
      </main>
    </div>
  );
}
