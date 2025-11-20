'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import dynamic from 'next/dynamic';

const OfficeMap = dynamic(() => import('@/components/map/OfficeMap'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">Loading map...</div>
});

export default function OfficeLocations() {
  const locations = [
    { name: "New York", lat: 40.7128, lng: -74.0060, address: "123 Wall Street, New York, NY 10005" },
    { name: "London", lat: 51.5074, lng: -0.1278, address: "456 Canary Wharf, London E14 5AB, UK" },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503, address: "789 Shibuya, Tokyo 150-0002, Japan" },
    { name: "Singapore", lat: 1.3521, lng: 103.8198, address: "321 Marina Bay, Singapore 018956" },
  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-visible ml-4 md:ml-8 mb-16">
          <div className="bg-primary min-h-[60vh] flex items-start px-4 md:px-8 py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Office Locations
            </h1>
          </div>
        </section>
        
        {/* Title left with paragraph right */}
        <section className="flex flex-col md:flex-row items-start px-4 md:px-8 py-8 md:py-16">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Global Presence
            </h2>
          </div>
          <div className="flex-1 md:pl-16">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
        
        {/* Interactive Map */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <OfficeMap locations={locations} />
          </div>
        </section>
        
        {/* Title left with paragraph right */}
        <section className="flex flex-col md:flex-row items-start px-4 md:px-8 py-8 md:py-16">
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Why These Locations
            </h2>
          </div>
          <div className="flex-1 md:pl-16">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
        
        {/* Full width image with margins */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <img 
              src="/images/office-collage.jpg"
              alt="Our global offices"
              className="w-full h-48 md:h-64 lg:h-96 object-cover"
            />
          </div>
        </section>
        
        {/* Cards similar to culture route end */}
        <section className="py-6 md:py-8 lg:py-16 bg-tertiary">
          <div className="container-responsive">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-8 md:mb-10 lg:mb-12">
              Explore Our Offices
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="border-l border-secondary pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-main mb-3 md:mb-4">
                  Lorem Ipsum
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:translate-x-2 transition-transform text-sm md:text-base">
                  Virtual Tour
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img 
                  src="/images/office.webp"
                  alt="Office location"
                  className="w-full h-40 md:h-48 object-cover mt-4 md:mt-6"
                />
              </div>
              
              <div className="border-l border-secondary pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-main mb-3 md:mb-4">
                  Lorem Ipsum
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:translate-x-2 transition-transform text-sm md:text-base">
                  Learn More
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img 
                  src="/images/office-collage.jpg"
                  alt="Office location"
                  className="w-full h-40 md:h-48 object-cover mt-4 md:mt-6"
                />
              </div>
              
              <div className="border-l border-secondary pl-4 md:pl-6">
                <h3 className="text-lg md:text-xl font-bold text-main mb-3 md:mb-4">
                  Lorem Ipsum
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed mb-4 md:mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:translate-x-2 transition-transform text-sm md:text-base">
                  Contact Us
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <img 
                  src="/images/office.webp"
                  alt="Office location"
                  className="w-full h-40 md:h-48 object-cover mt-4 md:mt-6"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}