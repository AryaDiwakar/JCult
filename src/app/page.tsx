'use client';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import Hero from '@/components/section/Hero';
import Stats from '@/components/section/Stats';

export default function Home() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <div>
          <Hero 
            videoSrc="/business.mp4"
            title="Innovation Starts Here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <section className="py-6 md:py-8 lg:py-16 bg-main">
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
        </section>

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 flex flex-col items-start mb-4 md:mb-6 lg:mb-0">
                <h3 className="text-xs md:text-sm font-bold text-primary mb-3 md:mb-4 lg:mb-8">Who We Are</h3>
              </div>
              <div className="flex-2 md:pl-8 lg:pl-16 md:border-l-2 border-secondary">
                <p className="text-base md:text-lg lg:text-2xl text-main mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <button className="btn-primary text-xs md:text-sm px-4 md:px-6 lg:px-8 py-3">Explore Who We Are</button>
              </div>
            </div>
          </div>
        </section>

        <div>
          <Stats 
            stats={[
              {
                number: "25+",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vero officiis similique quis cupiditate consectetur, ullam consequatur autem accusantium dolore quibusdam totam earum debitis odit soluta, hic officia sapiente recusandae!"
              },
              {
                number: "500+",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque laborum ipsa veritatis sequi sed, earum nihil qui magnam, eligendi ipsum nobis quidem possimus tenetur cupiditate culpa provident, error ea."
              },
              {
                number: "100+",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad repellat id accusantium necessitatibus neque illo cumque obcaecati aliquam voluptatum a et, distinctio quae eligendi maiores delectus provident deleniti soluta?"
              }
            ]}
          />
        </div>

        <section className="bg-primary text-white py-6 md:py-8 lg:py-16 relative overflow-visible">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-8">Innovation Drives Us</h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-main text-primary px-3 md:px-4 py-3 text-sm md:text-base">Explore What We Do</button>
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
        
        <section className="bg-main" style={{ paddingTop: '80px', paddingBottom: '1.5rem' }}>
          <div className="container-responsive py-6 md:py-8 lg:py-16">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">
                  Our Vision
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

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <Stats 
            stats={[
              {
                number: "25+",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad vero officiis similique quis cupiditate consectetur, ullam consequatur autem accusantium dolore quibusdam totam earum debitis odit soluta, hic officia sapiente recusandae!"
              },
              {
                number: "500+",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque laborum ipsa veritatis sequi sed, earum nihil qui magnam, eligendi ipsum nobis quidem possimus tenetur cupiditate culpa provident, error ea."
              },
              {
                number: "100+",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad repellat id accusantium necessitatibus neque illo cumque obcaecati aliquam voluptatum a et, distinctio quae eligendi maiores delectus provident deleniti soluta?"
              }
            ]}
            />
          </div>
        </section>

        <section className="py-6 md:py-8 lg:py-16">
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-start mb-6 md:mb-8">
              <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-8 text-primary">Work with Exceptional Talent</h2>
              </div>
              <div className="flex-1 md:pl-8 lg:pl-16">
                <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 leading-relaxed text-main">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="btn-primary px-4 md:px-6 py-3 text-sm md:text-base">Explore Career Possibilities</button>
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
      </main>
    </div>
  );
}
