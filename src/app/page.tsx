'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/section/Hero';
import Stats from '@/components/section/Stats';
import NewsSection from '@/components/section/NewsSection';
import InvestmentTabs from '@/components/section/InvestmentTabs';

export default function Home() {
  return (
    <div className="min-h-screen bg-main">
      <main>
        <div className="pt-20">
          <Hero 
            videoSrc="/business.mp4"
            title="United, we convert aspiration into strategic execution"
            description="Built on the pursuit of identifying under-recognised market opportunities and empowering"
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

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 flex flex-col items-start mb-4 md:mb-6 lg:mb-0">
                <h3 className="text-xs md:text-sm text-primary mb-3 md:mb-4 lg:mb-8">Who We Are</h3>
              </div>
              <div className="flex-2 md:pl-4 lg:pl-8 md:border-l-2 border-grey-500">
                <p className="text-primary font-signifier text-[32px] font-[400] leading-[30px] mb-4 md:mb-6 lg:mb-8">
                  We aspire to establish an unprecedented legacy as the premier investment entity in
                  history. Our mandate is to rigorously discern optimal capital allocation strategies,
                  thereby delivering exceptional, sustainable value to an elite clientele of private
                  capital stewards and global investors.
                </p>
                <button className="bg-primary text-xs md:text-sm px-4 md:px-6 lg:px-8 py-4">Explore Who We Are</button>
              </div>
            </div>
          </div>
        </section>

        <div>
          <Stats 
            stats={[
              {
                number: "2025",
                description: "Date founded by Managing Director Jeyanandh Dhivaharan"
              },
              {
                number: "$10M",
                description: "Assets Under Management As of January 2026"
              },
              {
                number: "1000+",
                description: "Investor Trusts Us"
              }
            ]}
          />
        </div>

        <section className="bg-primary text-white py-6 md:py-8 lg:py-16 relative overflow-visible">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-[48px] leading-[53px] font-bold mb-3 md:mb-4 lg:mb-8 font-signifier">Pioneering the Future of Finance</h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="mb-4 md:mb-6 lg:mb-8 text-[20px] leading-[28px] opacity-75">
                  Innovation is the core of our competitive advantage. We tirelessly reimagine our approach
                  to the markets, systematically enhancing our trading models and execution capabilities to
                  generate outsized returns in an ever-changing landscape.
                </p>
                <button className="bg-main text-primary px-4 md:px-6 lg:px-8 py-4 text-sm md:text-base">Explore What We Do</button>
              </div>
            </div>
            <div className="flex justify-center relative z-10">
              <div className="relative" style={{ transform: 'translateY(60px)' }}>
                <video 
                  className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] h-48 md:h-72 lg:h-96 object-cover"
                  autoPlay 
                  muted 
                  loop
                  playsInline
                  controls={false}
                >
                  <source src="/business.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-main" style={{ paddingTop: '80px'}}>
          <div className="container-responsive py-6 md:py-8">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-primary">
                  The Meritocratic Code That Shapes Our Collective
                </h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-[20px] leading-[28px] opacity-75 text-main">
                  A culture where every perspective strengthens our purpose. From seasoned experts to
                  rising talent, each member fuels the intelligence that drives our performance. United, we
                  achieve what others consider out of reach.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container-responsive">
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
          </div>
        </section>

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-[48px] leading-[53px] font-signifier font-bold mb-3 md:mb-4 lg:mb-8 text-primary">Engage With Elite Talent</h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 leading-relaxed text-main opacity-75">
                  Here, the collective fuels your growth. People learn side by side, sharpening each other’s
                  skills and building extraordinary careers together.
                </p>
                <button className="bg-primary px-4 md:px-6 lg:px-8 py-4 text-sm md:text-base">Explore Career Possibilities</button>
              </div>
            </div>
            <div className="ml-0 md:ml-4 lg:ml-8">
              <img 
                src="/office.webp" 
                alt="Office" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        

        <NewsSection 
          title="Insights & Perspectives"
          description="Explore firm highlights, media coverage, and perspectives on what it means to join and
grow within our organization."
          items={[
            {
              category: "Press Release",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              href: "#",
              date: "Jan 15, 2024",
              source: "Bloomberg"
            },
            {
              category: "Company News",
              title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              href: "#",
              date: "Jan 10, 2024"
            },
            {
              category: "Industry Update",
              title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
              href: "#",
              date: "Jan 5, 2024",
              source: "Financial Times"
            },
            {
              category: "Announcement",
              title: "Duis aute irure dolor in reprehenderit in voluptate velit",
              href: "#",
              date: "Dec 28, 2023"
            }
          ]}
        />
      </main>
    </div>
  );
}
