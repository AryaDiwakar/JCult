'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import SimpleCarousel from '@/components/section/SimpleCarousel';
import ArticleCarousel from '@/components/section/ArticleCarousel';
import QuoteCarousel from '@/components/section/QuoteCarousel';
import ExpandableStats from '@/components/section/ExpandableStats';

export default function CivicLeadership() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary flex flex-col md:flex-row min-h-[60vh] md:min-h-[80vh] ml-0 md:ml-4 lg:ml-8">
            <div className="flex-1 px-4 md:px-8 py-6 md:py-8 lg:py-16">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4">
                    Civic Leadership
                  </h1>
                </div>
                <div className="mt-auto">
                  <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative h-64 md:h-auto">
              <video 
                className="absolute top-0 right-0 w-full h-full md:h-[calc(100%+6rem)] object-cover"
                autoPlay 
                muted 
                loop
              >
                <source src="/business.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
        
        {/* 5xl title in left with space in right */}
        <section className="py-8 md:py-16">
          <div className="container-responsive">
            <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-primary">
              Our Impact
            </h2>
          </div>
        </section>
        
        {/* Two columns with title, paragraph and gray left border */}
        <section className="py-8 md:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-2 border-secondary pl-6">
                <h3 className="text-xl font-bold text-main mb-4">
                  Lorem Ipsum
                </h3>
                <p className="text-[20px] leading-[28px] opacity-75 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="border-l-2 border-secondary pl-6">
                <h3 className="text-xl font-bold text-main mb-4">
                  Lorem Ipsum
                </h3>
                <p className="text-[20px] leading-[28px] opacity-75 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <ExpandableStats 
          title="Our Impact"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          stats={[
            {
              title: "Communities Served",
              number: "150+",
              shortPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              expandedPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
              title: "Lives Impacted",
              number: "50K+",
              shortPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              expandedPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
              title: "Programs Launched",
              number: "200+",
              shortPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              expandedPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
              title: "Partner Organizations",
              number: "75+",
              shortPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              expandedPara: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          ]}
        />
        
        {/* Title in left with space in right */}
        <section className="py-8 md:py-16">
          <div className="container-responsive">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Success Stories
            </h2>
          </div>
        </section>
        
        {/* Carousel with 5 slides - image left, title/paragraph right */}
        <section className="py-8 md:py-16 bg-tertiary">
          <div className="container-responsive">
            <SimpleCarousel items={[
              {
                image: "/images/office.webp",
                title: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                image: "/images/office-collage.jpg",
                title: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                image: "/images/office.webp",
                title: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                image: "/images/office-collage.jpg",
                title: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                image: "/images/office.webp",
                title: "Lorem Ipsum",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            ]} />
          </div>
        </section>
        
        {/* Title left with paragraph right */}
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-primary">
                  Our Approach
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-[20px] leading-[28px] opacity-75 text-main">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blue background with complex layout */}
        <section className="bg-primary py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-white mb-4 md:mb-6">
                  Leadership in Action
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-[20px] leading-[28px] opacity-75 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="relative">
                <video className="w-72 md:w-96 h-44 md:h-56 object-cover" muted>
                  <source src="/business.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] md:border-l-[8px] border-l-primary border-y-[4px] md:border-y-[6px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="border-l-2 border-white/30 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Lorem Ipsum</h3>
                <p className="text-[20px] leading-[28px] opacity-75 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="border-l-2 border-white/30 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Lorem Ipsum</h3>
                <p className="text-[20px] leading-[28px] opacity-75 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="border-l-2 border-white/30 pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Lorem Ipsum</h3>
                <p className="text-[20px] leading-[28px] opacity-75 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          
            <QuoteCarousel quotes={[
            {
              image: "/images/office.webp",
              quote: "Our civic leadership initiatives have transformed communities and created lasting positive change for thousands of families.",
              author: "Maria Rodriguez, Community Director"
            },
            {
              image: "/images/office-collage.jpg",
              quote: "Through strategic partnerships and dedicated commitment, we've built bridges that connect opportunity with need.",
              author: "David Chen, Partnership Lead"
            },
            {
              image: "/images/office.webp",
              quote: "Every program we launch is designed with sustainability in mind, ensuring communities can thrive independently.",
              author: "Sarah Johnson, Program Manager"
            }
            ]} />
          </div>
        </section>
        
        {/* Two column with quoted paragraph */}
        <section className="px-4 md:px-8 py-8 md:py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <blockquote className="text-xl md:text-2xl text-primary font-medium italic mb-4">
                "True leadership is about creating opportunities for others to succeed and making a positive impact that extends far beyond our organization."
              </blockquote>
              <p className="text-gray-600">— Sarah Chen, CEO</p>
            </div>
            <div>
              <blockquote className="text-xl md:text-2xl text-primary font-medium italic mb-4">
                "Our commitment to civic leadership drives us to be responsible corporate citizens and agents of positive change."
              </blockquote>
              <p className="text-gray-600">— Michael Rodriguez, CTO</p>
            </div>
          </div>
        </section>
        
        {/* Left title with paragraph and button */}
        <section className="flex flex-col md:flex-row items-start px-4 md:px-8 py-8 md:py-16 bg-tertiary">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-primary">
              Get Involved
            </h2>
          </div>
          <div className="flex-1 md:pl-16">
            <p className="text-[20px] leading-[28px] opacity-75 text-main mb-6">
              Join us in making a difference. Whether through volunteering, partnerships, or community initiatives, there are many ways to contribute to positive change in our communities.
            </p>
            <button className="btn-primary px-8 py-4 text-lg">
              Learn How to Help
            </button>
          </div>
        </section>
        
        {/* Article Carousel showing 3 in view with navigation */}
        <section className="px-4 md:px-8 py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <ArticleCarousel articles={[
              {
                title: "Education Programs",
                image: "/images/office.webp",
                link: "#"
              },
              {
                title: "Community Health",
                image: "/images/office-collage.jpg",
                link: "#"
              },
              {
                title: "Environmental Impact",
                image: "/images/office.webp",
                link: "#"
              },
              {
                title: "Youth Development",
                image: "/images/office-collage.jpg",
                link: "#"
              },
              {
                title: "Economic Empowerment",
                image: "/images/office.webp",
                link: "#"
              },
              {
                title: "Digital Literacy",
                image: "/images/office-collage.jpg",
                link: "#"
              }
            ]} />
          </div>
        </section>
      </main>
    </div>
  );
}