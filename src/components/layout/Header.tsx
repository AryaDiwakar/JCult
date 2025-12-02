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
      setIsVisible(currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const tabContent = {
    'Who We Are': ['Our Culture','Executive Leadership','Our Global Base'],
    'What We Do': ['Asset Management'],
    'News': ['Featured In'],
    'Career': ['Open Opportunities']
  };

  return (
    <header 
      className={`w-full fixed left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'top-0' : '-top-32'
      } ${isScrolled ? 'border-b border-white/10' : ''}`}
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: isScrolled ? '1px solid #E0E0E0' : 'none'
      }}
      onClick={() => setHoveredTab(null)}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 lg:h-[120px] overflow-hidden">
        <div className="flex justify-between items-center h-full">
          {/* Brand Logo */}
          <div className="flex-shrink-0" style={{ animation: hasLoaded ? 'slideUpContent 0.5s ease-out' : 'none' }}>
            <Link href="/">
              <Image 
                src="/Final Logos/Transparent/Base Logo/Primary/Transparent Primary.svg" 
                alt="JCULT" 
                width={120} 
                height={32}
                className="w-24 sm:w-28 lg:w-32 h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" style={{ animation: hasLoaded ? 'slideUpContent 0.5s ease-out' : 'none' }}>
            <Link 
              href="/who-we-are" 
              className="text-charcoal py-2 text-sm font-medium transition-colors duration-200 no-underline"
              style={{ color: usePathname()?.startsWith('/who-we-are') ? '#127749' : '#000' }}
              onMouseEnter={(e) => { setHoveredTab('Who We Are'); e.currentTarget.style.color = '#127749'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#000'; }}
            >
              Who We Are
            </Link>
            <Link 
              href="/what-we-do" 
              className="text-charcoal py-2 text-sm font-medium transition-colors duration-200 no-underline"
              style={{ color: usePathname()?.startsWith('/what-we-do') ? '#127749' : '#000' }}
              onMouseEnter={(e) => { setHoveredTab('What We Do'); e.currentTarget.style.color = '#127749'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#000'; }}
            >
              What We Do
            </Link>
            <Link 
              href="/news" 
              className="text-charcoal py-2 text-sm font-medium transition-colors duration-200 no-underline"
              style={{ color: usePathname()?.startsWith('/news') ? '#127749' : '#000' }}
              onMouseEnter={(e) => { setHoveredTab('News'); e.currentTarget.style.color = '#127749'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#000'; }}
            >
              News
            </Link>
            <Link 
              href="/career" 
              className="text-charcoal py-2 text-sm font-medium transition-colors duration-200 no-underline"
              style={{ color: usePathname()?.startsWith('/career') ? '#127749' : '#000' }}
              onMouseEnter={(e) => { setHoveredTab('Career'); e.currentTarget.style.color = '#127749'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#000'; }}
            >
              Career
            </Link>
          </nav>

          {/* Desktop Contact Us */}
          <div className="hidden lg:block" onMouseEnter={() => setHoveredTab(null)} style={{ animation: hasLoaded ? 'slideUpContent 0.5s ease-out' : 'none' }}>
            <Link 
              href="/contact" 
              className="px-6 py-2.5 text-sm font-medium transition-all duration-200 inline-block border-1 border-primary text-white"
              style={{
                backgroundColor: '#1B5E20'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = '#1B5E20';
                e.currentTarget.style.color = '#1B5E20';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1B5E20';
                e.currentTarget.style.borderColor = '#1B5E20';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-gold focus:outline-none p-2"
              aria-label="Toggle menu"
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
      
      {/* Overlay */}
      {hoveredTab && (
        <div 
          className="hidden lg:block fixed inset-0 bg-black/30 z-0"
          style={{ top: isScrolled ? '96px' : '120px' }}
          onClick={() => setHoveredTab(null)}
        />
      )}
      
      {/* Desktop Dropdown */}
      {hoveredTab && (
        <div 
          className="hidden lg:block fixed left-0 right-0 bg-main shadow-lg z-10"
          style={{ 
            top: isScrolled ? '96px' : '120px',
            height: '300px',
            animation: 'fadeInFromTop 0.3s ease-out'
          }}
          onMouseEnter={() => setHoveredTab(hoveredTab)}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <div className="h-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex gap-4">
              <div className="flex-shrink-0 flex flex-col items-start pt-8 w-84">
                <h2 className="text-3xl font-bold text-charcoal mb-6">{hoveredTab}</h2>
                <Link
                  href={`/${hoveredTab?.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 text-sm font-medium transition-all duration-200 inline-block border border-primary bg-primary text-white"
                  onClick={() => setHoveredTab(null)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1B5E20';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1B5E20';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  Learn More
                </Link>
              </div>
              
              <div className="w-px bg-tertiary"></div>
              
              <div className="flex-1 bg-tertiary p-6 h-full relative">
                <button
                  onClick={() => setHoveredTab(null)}
                  className="absolute top-4 right-4 text-charcoal transition-colors duration-200"
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#127749'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#000'; }}
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="space-y-4">
                  {tabContent[hoveredTab as keyof typeof tabContent]?.map((item, index) => {
                    const slug = item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    const basePath = hoveredTab?.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link 
                        key={`${hoveredTab}-${index}`} 
                        href={`/${basePath}/${slug}`}
                        className="block text-charcoal text-lg transition-colors duration-200 no-underline"
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#127749'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#000'; }}
                        style={{ 
                          animation: `slideInFromLeft 0.3s ease-out ${index * 0.1}s both`,
                          opacity: 0
                        }}
                        onClick={() => setHoveredTab(null)}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-main z-50" style={{ animation: 'fadeIn 0.2s ease-out' }}>
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-charcoal hover:text-gold p-2"
                aria-label="Close menu"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6 flex-1 overflow-y-auto">
              {Object.keys(tabContent).map((tab) => (
                <div key={tab}>
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/${tab.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-xl sm:text-2xl font-medium text-charcoal hover:text-gold transition-colors duration-200 flex-1"
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
                      className="ml-2 p-2"
                      aria-label={`Toggle ${tab} submenu`}
                    >
                      <svg 
                        className={`h-5 w-5 text-charcoal transform transition-transform duration-200 ${
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
                    <div className="mt-3 ml-4 space-y-2" style={{ animation: 'slideDown 0.2s ease-out' }}>
                      {tabContent[tab as keyof typeof tabContent]?.map((item, index) => {
                        const slug = item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                        const basePath = tab.toLowerCase().replace(/\s+/g, '-');
                        return (
                          <Link 
                            key={index} 
                            href={`/${basePath}/${slug}`} 
                            className="block text-base sm:text-lg text-charcoal hover:text-gold transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-tertiary">
              <Link 
                href="/contact" 
                className="block text-center bg-primary hover:bg-gold text-white hover:text-charcoal px-6 py-3 text-sm font-medium transition-all duration-200 border-2 border-primary hover:border-gold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}