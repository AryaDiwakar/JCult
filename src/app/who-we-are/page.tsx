'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/section/Hero';
import Accordion from '@/components/section/Accordian';

export default function WhoWeAre() {
  const regions = [
    {
      title: "Americas",
      cities: [
        {
          name: "Miami",
          locationTitle: "Global Headquarters",
          address: ["830 Brickell Plaza", "Miami, Florida 33131"],
          phone: "786-741-5389",
          buttonText: "Explore the Miami Office",
          image: "/images/miami.jpg",
        },
        {
          name: "Chicago",
          locationTitle: "Office",
          address: ["131 S Dearborn St", "Chicago, IL"],
          phone: "312-555-2200",
          buttonText: "Explore Chicago Office",
          image: "/images/chicago.jpg",
        },
        // add more cities...
      ]
    },

    {
      title: "Europe",
      cities: [
         {
          name: "Miami",
          locationTitle: "Global Headquarters",
          address: ["830 Brickell Plaza", "Miami, Florida 33131"],
          phone: "786-741-5389",
          buttonText: "Explore the Miami Office",
          image: "/images/miami.jpg",
        },
      ]
    },

    {
      title: "Asia-Pacific",
      cities: [
         {
          name: "Miami",
          locationTitle: "Global Headquarters",
          address: ["830 Brickell Plaza", "Miami, Florida 33131"],
          phone: "786-741-5389",
          buttonText: "Explore the Miami Office",
          image: "/images/miami.jpg",
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <Hero 
          imageSrc="images/office.webp"
          title="Who We Are"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 lg:mb-6">
                  Our Story
                </h2>
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16 space-y-4 md:space-y-6">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary">
                  Our Values
                </h2>
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg text-main mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="btn-primary px-4 md:px-6 lg:px-8 py-3 text-sm md:text-base">
                  Learn About Our Culture
                </button>
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