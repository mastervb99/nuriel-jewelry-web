'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Necklaces', href: '/categories/necklaces' },
    { name: 'Bracelets', href: '/categories/bracelets' },
    { name: 'Rings', href: '/categories/rings' },
    { name: 'Earrings', href: '/categories/earrings' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pearl-600 to-ocean-deep bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Nuriel Jewelry
            </div>
            <div className="hidden sm:block text-sm text-pearl-600 italic">
              Where Light Meets Ocean
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass hover:scale-105 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute w-6 h-0.5 bg-pearl-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-pearl-600 top-3 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-pearl-600 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass mx-4 mb-4 rounded-2xl p-4 backdrop-blur-lg">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`nav-link py-2 text-center transition-all duration-300 ${
                  index !== navigationItems.length - 1 ? 'border-b border-pearl-200' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}