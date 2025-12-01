'use client';

import FadeUp from '@/components/animation/FadeUp';
import ImageReveal from '@/components/animation/ImageReveal';
import LuxuryButton from '@/components/animation/LuxuryButton';
import Link from 'next/link';

export default function Career() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mb-6 md:mb-8">
          <img 
            src="/images/office.webp"
            alt="Career opportunities"
            className="absolute inset-0 w-full h-full object-cover ml-4 md:ml-8"
          />
          
          <div className="absolute inset-0 bg-black/30 ml-4 md:ml-8"></div>
          
          <div className="absolute top-4 md:top-6 lg:top-8 left-0 right-0 z-10">
            <div className="container-responsive">
              <h1 className="text-gold max-w-[250px] md:max-w-[400px] lg:max-w-[600px] text-2xl md:text-4xl lg:text-[64px] font-[400] leading-tight md:leading-snug lg:leading-[70px] font-lora">
                Career
              </h1>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 z-10 ml-4 mr-4 md:ml-8 md:mr-8">
            <div className="bg-primary px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
              <div className="container-responsive flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                <p className="text-white text-sm md:text-base lg:text-lg font-raleway leading-relaxed max-w-[250px] md:max-w-[400px] lg:max-w-[500px]">
                  Join our team of exceptional professionals and shape the future of finance. We offer challenging opportunities and a culture of excellence.
                </p>
                <a href="/career/open-opportunities">
                  
                <LuxuryButton variant="gold">
                  View Open Positions
                </LuxuryButton>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Image Left, Title & Para Right */}
        <FadeUp>
          <section className="py-6 md:py-8 lg:py-16">
            <div className="container-responsive">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-1 mb-6 md:mb-0">
                  <ImageReveal 
                    src="/images/office.webp"
                    alt="Our workplace"
                    className="w-full h-64 md:h-80 lg:h-96"
                  />
                </div>
                <div className="flex-1 md:pl-8 lg:pl-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-lora font-bold text-primary mb-4 md:mb-6">
                    Build Your Career With Us
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl font-raleway text-main leading-relaxed opacity-75">
                    We believe in nurturing talent and providing opportunities for growth. Our team members work on challenging projects that shape the future of financial markets.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Two Columns with Border, Title, Para, Link */}
        <FadeUp delay={100}>
          <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
            <div className="container-responsive">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="border-l-2 border-gold pl-4 md:pl-6">
                  <h3 className="text-xl md:text-2xl font-lora font-bold text-primary mb-4">
                    Internship
                  </h3>
                  <p className="text-base md:text-lg font-raleway text-main leading-relaxed mb-4 opacity-75">
                    Gain hands-on experience and work alongside industry experts. Our internship programs offer real-world projects and mentorship opportunities.
                  </p>
                  <Link href="/career/open-opportunities?experience=Internship" className="text-primary hover:text-gold font-raleway font-semibold hover:underline inline-flex items-center">
                    View Internships
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="border-l-2 border-gold pl-4 md:pl-6">
                  <h3 className="text-xl md:text-2xl font-lora font-bold text-primary mb-4">
                    Full Time
                  </h3>
                  <p className="text-base md:text-lg font-raleway text-main leading-relaxed mb-4 opacity-75">
                    Join our team of exceptional professionals. We offer challenging roles across trading, technology, research, and operations with competitive benefits.
                  </p>
                  <Link href="/career/open-opportunities?experience=Experienced Professionals,Graduates" className="text-primary hover:text-gold font-raleway font-semibold hover:underline inline-flex items-center">
                    View Full Time Roles
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>
      </main>
    </div>
  );
}