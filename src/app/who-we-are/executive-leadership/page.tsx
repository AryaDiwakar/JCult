'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export default function LeadershipTeam() {
  const teamMembers = [
    { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
    { name: "Jeyanandh Dhivaharan", title: "Founder, CEO", image: "/images/office.webp" },
  ];

  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <section className="relative overflow-visible mb-8 md:mb-16">
          <div className="bg-primary min-h-[60vh] md:min-h-[70vh] flex items-start px-4 md:px-8 pt-12 md:pt-16 lg:pt-20 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-lora font-bold text-white">
              Executive Leadership
            </h1>
          </div>
        </section>
        
        <section className="py-6 md:py-8 lg:py-16 bg-main">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-lora font-bold leading-tight text-primary">
                  Defining Strategic Direction
                </h2>
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-base md:text-lg lg:text-xl font-raleway leading-relaxed opacity-75 text-main">
                  Our executive leadership establishes the firm’s overarching mandate. They are responsible
                  for synthesizing our ambition into a clear, actionable strategy, providing the governance
                  required to align our exceptional talent with the firm's long-term trajectory.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-6 md:py-8 lg:py-16 bg-main">
          <div className="container-responsive">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-lora font-bold leading-tight text-primary mb-8 md:mb-10 lg:mb-12">
              Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="border-l-2 border-secondary pl-4 md:pl-6">
                  <h3 className="text-lg md:text-xl font-lora font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base font-raleway text-main mb-3 md:mb-4">
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
        
        {/* <section className="py-6 md:py-8 lg:py-16 bg-main">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-1/2 mb-4 md:mb-6 lg:mb-0">
                <img 
                  src="/images/office.webp"
                  alt="Join our team"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
              
              <div className="flex-1 md:pl-8 lg:pl-16">
                <h2 className="text-[48px] leading-[53px] font-signifier font-bold text-primary mb-4 md:mb-6">
                  Driving Ideas Into Real Impact  
                </h2>
                <button className="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  Explore What We Do
                </button>
              </div>
            </div>
          </div>
        </section> */}

         <section className="pt-6 md:pt-8 lg:pt-16">
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-1 mb-6 md:mb-0">
              <img 
                src="/images/office.webp"
                alt="Join our team"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="flex-1 md:pl-8 lg:pl-16 container-responsive">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-lora font-bold leading-tight text-primary mb-4 md:mb-6">
                Driving Ideas Into Real Impact 
              </h2>
              <button className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-raleway">
                 Explore What We Do
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}