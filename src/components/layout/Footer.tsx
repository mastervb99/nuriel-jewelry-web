import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    categories: [
      { name: 'Necklaces', href: '/categories/necklaces' },
      { name: 'Bracelets', href: '/categories/bracelets' },
      { name: 'Rings', href: '/categories/rings' },
      { name: 'Earrings', href: '/categories/earrings' },
    ],
    company: [
      { name: 'About Nuriel', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="relative mt-20">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-pearl-100 transform -translate-y-6">
        <svg
          className="absolute bottom-0 w-full h-6"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z"
            fill="url(#wave-gradient)"
            className="wave"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(232, 244, 248)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="rgb(74, 144, 164)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(232, 244, 248)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="glass backdrop-blur-lg pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pearl-600 to-ocean-deep bg-clip-text text-transparent">
                  Nuriel
                </h3>
                <span className="text-sm text-pearl-600 italic">
                  Where Light Meets Ocean
                </span>
              </div>
              <p className="text-mystical mb-6 max-w-md leading-relaxed">
                Discover ethereal jewelry collections inspired by the mystical dance of light across ocean waves.
                Each piece captures the essence of natural beauty and timeless elegance.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons - placeholder for future implementation */}
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-xs text-pearl-600">IG</span>
                </div>
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-xs text-pearl-600">FB</span>
                </div>
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-xs text-pearl-600">TW</span>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-pearl-700 mb-4">Collections</h4>
              <ul className="space-y-2">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-mystical hover:text-pearl-800 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-pearl-700 mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-mystical hover:text-pearl-800 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-pearl-200 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-mystical">
                © {currentYear} Nuriel Jewelry. All rights reserved.
              </p>
              <p className="text-sm text-mystical mt-2 md:mt-0">
                Crafted with ✨ where light meets ocean
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}