'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileExpandedTabs, setMobileExpandedTabs] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const tabContent = {
    'Who We Are': ['Our Culture','Executive Leadership','Our Global Base'],
    'What We Do': ['Asset Management'],
    'News': ['In the Media','Policy Positions'],
    'Career': ['Open Opportunities']
  };

  return (
    <header 
      className={`w-full fixed left-0 right-0 z-50 transition-all duration-500 ${
        hasLoaded ? (isVisible ? 'top-0 opacity-100' : '-top-24 opacity-0') : '-top-24 opacity-0'
      } ${isScrolled ? 'border-b border-white/10' : ''}`}
      style={{
        backgroundColor: '#000000'
      }}
      onClick={() => setHoveredTab(null)}
    >
      <div className={`container-responsive transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex-shrink-0 pl-2">
            <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
              <Image 
                src="/Final Logos/Transparent/Base Logo/Primary/Transparent Primary Single Line.png" 
                alt="JCULT" 
                width={120} 
                height={32}
                className="transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 relative" onMouseLeave={() => {
            setShowDropdown(false);
          }}>
            <Link 
              href="/who-we-are" 
              className={`text-white hover:text-[#d4af37] px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${usePathname()?.startsWith('/who-we-are') ? 'underline' : ''}`}
              onMouseEnter={() => setHoveredTab('Who We Are')}
            >
              Who We Are
            </Link>
            <Link 
              href="/what-we-do" 
              className={`text-white hover:text-[#d4af37] px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${usePathname()?.startsWith('/what-we-do') ? 'underline' : ''}`}
              onMouseEnter={() => setHoveredTab('What We Do')}
            >
              What We Do
            </Link>
            <Link 
              href="/news" 
              className={`text-white hover:text-[#d4af37] px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${usePathname()?.startsWith('/news') ? 'underline' : ''}`}
              onMouseEnter={() => setHoveredTab('News')}
            >
              News
            </Link>
            <Link 
              href="/career" 
              className={`text-white hover:text-[#d4af37] px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${usePathname()?.startsWith('/career') ? 'underline' : ''}`}
              onMouseEnter={() => setHoveredTab('Career')}
            >
              Career
            </Link>
          </nav>

          {/* Desktop Contact Us */}
          <div className="hidden lg:block" onMouseEnter={() => setHoveredTab(null)}>
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/80 text-white px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 inline-block"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-main focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

      </div>
      
      {/* Desktop Dropdown - Outside header container */}
      {hoveredTab && (
        <div 
          className="hidden lg:block fixed left-0 right-0 bg-tertiary shadow-lg animate-slide-down"
          style={{ position: 'fixed', top: '72px', bottom: '0', zIndex: 40 }}
          onMouseEnter={() => setHoveredTab(hoveredTab)}
          onMouseLeave={() => setHoveredTab(null)}
        >
            <div className="container-responsive py-8">
              {/* Close Button - Top Right */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setHoveredTab(null)}
                  className="text-secondary hover:text-primary"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex">
                {/* Tab Title - Left */}
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-primary">{hoveredTab}</h2>
                </div>
                
                {/* Subtitles - Center (aligned with nav) */}
                <div className="flex-1 space-y-3">
                  {tabContent[hoveredTab as keyof typeof tabContent]?.map((item, index) => {
                    const slug = item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    const basePath = hoveredTab?.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link 
                        key={`${hoveredTab}-${index}`} 
                        href={`/${basePath}/${slug}`}
                        className="block text-secondary hover:text-primary text-lg animate-slide-in"
                        style={{ '--delay': `${(index + 1) * 0.1}s` } as React.CSSProperties}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
                
                {/* Empty space - Right */}
                <div className="flex-1"></div>
              </div>
          </div>
        </div>
      )}
      
      <div className="container-responsive py-2">
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-tertiary z-50">
            <div className="flex flex-col h-full p-3">
              {/* Close Button - Top Right */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-secondary hover:text-primary"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Links - Below Close Button */}
              <div className="space-y-6 flex-1">
                {Object.keys(tabContent).map((tab) => (
                  <div key={tab}>
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/${tab.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-2xl font-medium text-primary hover:underline flex-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {tab}
                      </Link>
                      <button
                        onClick={() => {
                          if (mobileExpandedTabs.includes(tab)) {
                            setMobileExpandedTabs(mobileExpandedTabs.filter(t => t !== tab));
                          } else {
                            setMobileExpandedTabs([...mobileExpandedTabs, tab]);
                          }
                        }}
                        className="ml-2"
                      >
                        <svg 
                          className={`h-5 w-5 text-primary transform transition-transform ${
                            mobileExpandedTabs.includes(tab) ? 'rotate-180' : ''
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {mobileExpandedTabs.includes(tab) && (
                      <div className="mt-3 ml-4 space-y-2">
                        {tabContent[tab as keyof typeof tabContent]?.map((item, index) => {
                          const slug = item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                          const basePath = tab.toLowerCase().replace(/\s+/g, '-');
                          return (
                            <Link key={index} href={`/${basePath}/${slug}`} className="block text-lg text-secondary hover:text-primary">
                              {item}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Contact Us - Bottom Right */}
              <div className="flex justify-end">
                <Link href="/contact" className="text-primary hover:underline px-3 py-2 text-sm font-medium">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}