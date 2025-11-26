'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/section/Hero';
import Accordion from '@/components/section/Accordian';
import FadeUp from '@/components/animation/FadeUp';
import ImageReveal from '@/components/animation/ImageReveal';
import LuxuryButton from '@/components/animation/LuxuryButton';

export default function WhoWeAre() {
  const regions = [
    {
      title: "United Arab Emirates",
      cities: [
        {
          name: "Dubai",
          address: ["DSO-IFZA, IFZA Properties", "Dubai Silicon Oasis","Dubai, Dubayy (AE-DU)","UAE"],
          phone: "jculttrader.inquiry@gmail.com",
          image: "/images/miami.jpg",
        },
      
        // add more cities...
      ]
    },

  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <Hero 
          imageSrc="images/office.webp"
          title="Who We Are"
          description="To empower our clients with expert financial guidance, innovative investment strategies, and transparent wealth management services that build lasting prosperity and financial security"
        />
        
        <FadeUp>
          <section className="py-6 md:py-8 lg:py-16">
            <div className="container-responsive">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                  <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-primary mb-3 md:mb-4 lg:mb-6">
                    Pursuing Edge. Rewriting Markets.
                  </h2>
                </div>
                
                <div className="flex-1 md:pl-8 lg:pl-16 space-y-4 md:space-y-6">
                  <p className="text-[20px] leading-[28px] opacity-75 text-main">
                    As a diversified investment firm, we are engineered for outperformance. We converge
world-class intellect with disciplined risk management to execute on high-conviction
insights. Our approach is precise: we direct capital toward its highest and best use, thereby
fueling economic innovation and delivering superior, risk-adjusted returns to our elite
clientele.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>
        
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-primary">
                  Bound by Culture. Driven by Purpose.
                </h2>
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-[20px] leading-[28px] opacity-75 text-main mb-4 md:mb-6 lg:mb-8">
                  We’ve crafted a culture that’s unmistakably ours—one that fuels how we work, how we
                  connect, and how we show up for the world around us. It’s the shared pulse that moves us
                  forward, together.
                </p>
                <LuxuryButton variant="primary">
                  Experience Our Culture
                </LuxuryButton>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-6 md:mb-0">
                <ImageReveal 
                  src="/images/office-collage.jpg"
                  alt="Our team"
                  className="w-full h-48 md:h-64 lg:h-80"
                />
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-primary mb-4 md:mb-6">
                  Rise. Lead. Elevate.
                </h2>
                <p className="text-[20px] leading-[28px] opacity-75 text-main mb-4 md:mb-6 lg:mb-8">
                  Most of our leaders grew from within—earning their place through grit and vision. Today,
                  they channel that same energy into building the leaders who will push us forward next.
                </p>
                <LuxuryButton variant="primary">
                  View Executive Leadership
                </LuxuryButton>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-primary">
                  Work Across Global Cities.
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-[20px] leading-[28px] opacity-75 text-main mb-4 md:mb-6 lg:mb-8">
                  Our base is one of the world’s most vibrant financial hubs—a place where opportunity,
                  culture, and ambition converge. It’s where we move fast, think big, and build with intention.
                  This city pushes us forward every day, giving us the energy, diversity, and edge to operate
                  on a global level.
                </p>
                <LuxuryButton variant="primary">
                  View Our Global Base
                </LuxuryButton>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <Accordion regions={regions} />
          </div>
        </section>
      </main>
    </div>
  );
}