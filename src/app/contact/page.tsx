'use client';

import FadeUp from '@/components/animation/FadeUp';
import FadeLeft from '@/components/animation/FadeLeft';

export default function Contact() {
  return (
    <div className="min-h-screen bg-main">
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-responsive">
            <FadeUp>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-signifier font-bold text-primary mb-6">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-main opacity-75 max-w-2xl mb-16">
                We'd love to hear from you. Reach out to us for inquiries, partnerships, or career opportunities.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <FadeLeft>
                <div className="space-y-8">
                  <div className="border-l-2 border-primary pl-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                    <a href="mailto:jculttrader.inquiry@gmail.com" className="text-lg text-main hover:text-primary transition">
                      jculttrader.inquiry@gmail.com
                    </a>
                  </div>

                  <div className="border-l-2 border-primary pl-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Location</h3>
                    <p className="text-lg text-main">
                      DSO-IFZA, IFZA Properties<br />
                      Dubai Silicon Oasis<br />
                      Dubai, Dubayy (AE-DU)<br />
                      UAE
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-6">
                    <h3 className="text-xl font-bold text-primary mb-2">Career Inquiries</h3>
                    <a href="/career" className="text-lg text-primary hover:text-gold transition inline-flex items-center">
                      View Open Positions
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </FadeLeft>

              <FadeLeft delay={200}>
                <div className="bg-gray-50 p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-main mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-main border-2 border-transparent focus:border-primary outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-main mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-main border-2 border-transparent focus:border-primary outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-main mb-2">Message</label>
                      <textarea 
                        rows={5}
                        className="w-full px-4 py-3 bg-main border-2 border-transparent focus:border-primary outline-none transition resize-none"
                        placeholder="Your message"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-primary text-white px-6 py-3 border-2 border-primary hover:bg-gold hover:border-gold hover:text-charcoal transition font-medium"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </FadeLeft>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}