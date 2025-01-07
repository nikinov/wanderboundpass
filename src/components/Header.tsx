"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsToursOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-semibold text-lg">
            WanderPass Bound
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/"
              className={`hover:text-accent transition-colors ${pathname === '/' ? 'text-accent' : ''}`}
            >
              Home
            </Link>
            
            <div ref={dropdownRef} className="relative">
              <button
                className={`flex items-center gap-1 hover:text-accent transition-colors ${isToursOpen ? 'text-accent' : ''}`}
                onClick={() => setIsToursOpen(!isToursOpen)}
                onMouseEnter={() => setIsToursOpen(true)}
              >
                Tours
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isToursOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-background border border-foreground/10 rounded-md shadow-lg"
                  onMouseLeave={() => setIsToursOpen(false)}
                >
                  <Link 
                    href="/tours/spring"
                    className="block px-4 py-2 hover:bg-accent/5 transition-colors"
                    onClick={() => setIsToursOpen(false)}
                  >
                    Spring Tours
                  </Link>
                  <Link 
                    href="/tours/fall"
                    className="block px-4 py-2 hover:bg-accent/5 transition-colors"
                    onClick={() => setIsToursOpen(false)}
                  >
                    Fall Tours
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/about"
              className={`hover:text-accent transition-colors ${pathname === '/about' ? 'text-accent' : ''}`}
            >
              About
            </Link>
            
            <Link 
              href="/contact"
              className={`hover:text-accent transition-colors ${pathname === '/contact' ? 'text-accent' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-accent/5 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-foreground/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-accent/5 transition-colors"
              >
                Home
              </Link>
              
              {/* Mobile Tours Dropdown */}
              <div>
                <button
                  onClick={() => setIsToursOpen(!isToursOpen)}
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-accent/5 transition-colors"
                >
                  Tours
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isToursOpen && (
                  <div className="pl-4">
                    <Link
                      href="/tours/spring"
                      className="block px-3 py-2 rounded-md hover:bg-accent/5 transition-colors"
                    >
                      Spring Tours
                    </Link>
                    <Link
                      href="/tours/fall"
                      className="block px-3 py-2 rounded-md hover:bg-accent/5 transition-colors"
                    >
                      Fall Tours
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-3 py-2 rounded-md hover:bg-accent/5 transition-colors"
              >
                About
              </Link>
              
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md hover:bg-accent/5 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 