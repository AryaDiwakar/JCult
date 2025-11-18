'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileExpandedTabs, setMobileExpandedTabs] = useState<string[]>([]);

  const tabContent = {
    'Who We Are': ['Our Culture','Leadership Team','Civic Leadership','Office Locations'],
    'What We Do': ['Commodities','Credit and Convertibles','Equities ','Fixed Income and Macro','Global Quantitative Strategies'],
    'News': ['In the Media','Policy Positions'],
    'Career': ['Investing ','Engineering ','Quantitative Research','Internships','Programs & Events ','Career Perspectives','Open Opportunities ']
  };

  return (
    <header className="w-full bg-tertiary relative z-50">
      <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80">
              JCULT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 relative" onMouseLeave={() => {
            setShowDropdown(false);
          }}>
            <Link 
              href="/who-we-are" 
              className="text-primary hover:underline px-1 py-2 text-sm font-medium"
              onMouseEnter={() => setHoveredTab('Who We Are')}
            >
              Who We Are
            </Link>
            <Link 
              href="/what-we-do" 
              className="text-primary hover:underline px-1 py-2 text-sm font-medium"
              onMouseEnter={() => setHoveredTab('What We Do')}
            >
              What We Do
            </Link>
            <Link 
              href="/news" 
              className="text-primary hover:underline px-1 py-2 text-sm font-medium"
              onMouseEnter={() => setHoveredTab('News')}
            >
              News
            </Link>
            <Link 
              href="/career" 
              className="text-primary hover:underline px-1 py-2 text-sm font-medium"
              onMouseEnter={() => setHoveredTab('Career')}
            >
              Career
            </Link>
          </nav>

          {/* Desktop Contact Us */}
          <div className="hidden md:block" onMouseEnter={() => setHoveredTab(null)}>
            <Link href="/contact" className="text-primary hover:underline px-3 py-2 text-sm font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
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

        {/* Desktop Dropdown */}
        {hoveredTab && (
          <div 
            className="hidden md:block fixed left-0 right-0 top-16 bottom-0 bg-tertiary shadow-lg z-30 animate-slide-down"
            onMouseEnter={() => setHoveredTab(hoveredTab)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-tertiary z-50">
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
                    <div 
                      className="flex items-center cursor-pointer"
                      onClick={() => {
                        if (mobileExpandedTabs.includes(tab)) {
                          setMobileExpandedTabs(mobileExpandedTabs.filter(t => t !== tab));
                        } else {
                          setMobileExpandedTabs([...mobileExpandedTabs, tab]);
                        }
                      }}
                    >
                      <span className="text-2xl font-medium text-primary hover:underline">{tab}</span>
                      <svg 
                        className={`h-5 w-5 text-primary transform transition-transform ml-2 ${
                          mobileExpandedTabs.includes(tab) ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
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