'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const officeRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const statsRef = useRef(null);
  const innovationRef = useRef(null);
  const teamRef = useRef(null);
  const careerRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Scroll-triggered animations
    gsap.fromTo(officeRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: officeRef.current, start: "top 80%" } }
    );

    gsap.fromTo(whoWeAreRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: whoWeAreRef.current, start: "top 80%" } }
    );

    gsap.fromTo(".stat-item",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: statsRef.current, start: "top 80%" } }
    );

    gsap.fromTo(innovationRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: innovationRef.current, start: "top 80%" } }
    );

    gsap.fromTo(teamRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: teamRef.current, start: "top 80%" } }
    );

    gsap.fromTo(careerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: careerRef.current, start: "top 80%" } }
    );
  }, []);
  return (
    <div className="min-h-screen bg-tertiary">
      <Header />
      <main>
        <section className="relative h-[90vh] overflow-hidden mb-8" ref={heroRef}>
          <video 
            className="absolute top-0 left-2 md:left-8 right-0 h-full w-[calc(100%-8px)] md:w-[calc(100%-16px)] object-cover"
            autoPlay 
            muted 
            loop
          >
            <source src="/business.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute top-4 md:top-8 left-2 md:left-8 z-10 py-2 md:py-4 px-4 md:px-16">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white max-w-[300px] md:max-w-[400px]">
              Innovation Starts Here
            </h1>
          </div>
          
          <div className="absolute bottom-0 left-2 md:left-8 right-2 md:right-4 z-10">
            <div className="bg-primary bg-opacity-20 backdrop-blur-md px-4 md:px-16 py-4 md:py-8 border border-primary border-opacity-30">
              <p className="text-white text-sm md:text-lg leading-relaxed max-w-[400px] md:max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center min-h-[60vh] px-4 md:px-8 py-8 md:py-16" ref={officeRef}>
          <div className="flex-1 mb-8 md:mb-0">
            <img 
              src="/office-collage.jpg" 
              alt="Office Collage" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="flex-1 md:pl-16">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
              Our Workspace
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="btn-primary px-6 md:px-8 py-3">
              Learn More
            </button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-start px-4 md:px-8 py-8 md:py-16 mb-8" ref={whoWeAreRef}>
          <div className="flex-1 flex flex-col items-start mb-6 md:mb-0">
            <h3 className="text-sm font-bold text-primary mb-4 md:mb-8">Who We Are</h3>
          </div>
          <div className="flex-2 md:pl-16 md:pr-32 md:border-l-2 border-gray-200">
            <p className="text-lg md:text-2xl text-gray-700 mb-6 md:mb-8 md:pr-32 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <button className="bg-primary text-sm px-6 md:px-8 py-3">Explore Who We Are</button>
          </div>
        </section>

        <section className="px-4 md:px-8 py-8 md:py-16 mb-8" ref={statsRef}>
          <div className="md:ml-48 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="stat-item border-l-2 border-gray-200 pl-4 md:pl-6">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4 md:mb-8">25+</div>
              <p className="text-secondary text-sm md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vero officiis similique quis cupiditate consectetur, ullam consequatur autem accusantium dolore quibusdam totam earum debitis odit soluta, hic officia sapiente recusandae!</p>
            </div>
            <div className="stat-item border-l-2 border-gray-200 pl-4 md:pl-6">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4 md:mb-8">500+</div>
              <p className="text-gray-700 text-sm md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque laborum ipsa veritatis sequi sed, earum nihil qui magnam, eligendi ipsum nobis quidem possimus tenetur cupiditate culpa provident, error ea.</p>
            </div>
            <div className="stat-item border-l-2 border-gray-200 pl-4 md:pl-6">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4 md:mb-8">100+</div>
              <p className="text-gray-700 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad repellat id accusantium necessitatibus neque illo cumque obcaecati aliquam voluptatum a et, distinctio quae eligendi maiores delectus provident deleniti soluta?</p>
            </div>
          </div>
        </section>

        <section className="bg-primary text-tertiary relative mb-8" ref={innovationRef}>
          <div className="flex flex-col md:flex-row px-4 md:px-8 py-8 md:py-16">
            <div className="flex-1 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">Innovation Drives Us</h2>
            </div>
            <div className="flex-1 md:pl-16">
              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-tertiary text-gray-800 px-4 py-3">Explore What We Do</button>
            </div>
          </div>
          <div className="px-4 md:px-8 mb--16 z-2">
            <video 
              className="w-full h-48 md:h-128 object-cover"
              autoPlay 
              muted 
              loop
            >
              <source src="/business.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="px-4 md:px-8 py-8 md:py-16 mb-8" ref={teamRef}>
          <div className="flex flex-col md:flex-row mb-8 md:mb-16">
            <div className="flex-1 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold text-primary">A Team Where Every Mind Counts</h2>
            </div>
            <div className="flex-1 md:pl-16">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="md:ml-48 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="stat-item border-l-2 border-gray-200 pl-4 md:pl-6">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4 md:mb-8">25+</div>
              <p className="text-secondary text-sm md:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vero officiis similique quis cupiditate consectetur, ullam consequatur autem accusantium dolore quibusdam totam earum debitis odit soluta, hic officia sapiente recusandae!</p>
            </div>
            <div className="stat-item border-l-2 border-gray-200 pl-4 md:pl-6">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4 md:mb-8">500+</div>
              <p className="text-gray-700 text-sm md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque laborum ipsa veritatis sequi sed, earum nihil qui magnam, eligendi ipsum nobis quidem possimus tenetur cupiditate culpa provident, error ea.</p>
            </div>
            <div className="stat-item border-l-2 border-gray-200 pl-4 md:pl-6">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-4 md:mb-8">100+</div>
              <p className="text-gray-700 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad repellat id accusantium necessitatibus neque illo cumque obcaecati aliquam voluptatum a et, distinctio quae eligendi maiores delectus provident deleniti soluta?</p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 mb-8" ref={careerRef}>
          <div className="flex flex-col md:flex-row px-4 md:px-16 py-8 md:py-16">
            <div className="flex-1 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-primary md:w-[350px]">Work with Exceptional Talent</h2>
            </div>
            <div className="flex-1 md:pl-16">
              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-primary text-tertiary px-4 py-3">Explore Career Possibilites</button>
            </div>
          </div>
          <div className='pl-4 md:pl-16'>
          <img 
              src="/office.webp" 
              alt="Office Collage" 
              className="w-full h-auto object-cover"
              />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
