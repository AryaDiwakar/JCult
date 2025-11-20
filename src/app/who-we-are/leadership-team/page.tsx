'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function LeadershipTeam() {
  const teamMembers = [
    { name: "Sarah Chen", title: "Chief Executive Officer", image: "/images/office.webp" },
    { name: "Michael Rodriguez", title: "Chief Technology Officer", image: "/images/office-collage.jpg" },
    { name: "Emily Watson", title: "Chief Financial Officer", image: "/images/office.webp" },
    { name: "David Kim", title: "Chief Operating Officer", image: "/images/office-collage.jpg" },
    { name: "Lisa Thompson", title: "Chief Marketing Officer", image: "/images/office.webp" },
    { name: "James Wilson", title: "Chief Human Resources Officer", image: "/images/office-collage.jpg" },
  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <section className="relative overflow-visible ml-4 md:ml-8 mb-16">
          <div className="bg-primary min-h-[60vh] flex items-start px-4 md:px-8 py-8 md:py-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Leadership Team
            </h1>
          </div>
        </section>
        
        <section className="py-6 md:py-8 lg:py-16 bg-main">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">
                  Our Leaders
                </h2>
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg text-main leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-6 md:py-8 lg:py-16 bg-main">
          <div className="container-responsive">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-8 md:mb-10 lg:mb-12">
              Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="border-l-2 border-secondary pl-4 md:pl-6">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-main mb-3 md:mb-4">
                    {member.title}
                  </p>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-6 md:py-8 lg:py-16 bg-main">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-4 md:mb-6 lg:mb-0">
                <img 
                  src="/images/office.webp"
                  alt="Join our team"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
                  Join Our Leadership
                </h2>
                <button className="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  Explore Opportunities
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}