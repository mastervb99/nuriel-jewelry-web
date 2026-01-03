import React from 'react';
import Link from 'next/link';
import { getFeaturedProducts, featuredCollections } from '@/data/products';
import { getAllCategories } from '@/data/categories';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-pearl-50 via-pearl-100 to-ocean-200"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 glass rounded-full float opacity-30"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 glass rounded-full float opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 glass rounded-full float opacity-25"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="heading-mystical">
                <span className="block">Nuriel</span>
                <span className="block text-2xl md:text-3xl font-normal bg-gradient-to-r from-ocean-blue to-pearl-600 bg-clip-text text-transparent">
                  Where Light Meets Ocean
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-mystical max-w-3xl mx-auto leading-relaxed">
                Discover ethereal jewelry collections inspired by the mystical dance of light across ocean waves.
                Each piece captures the essence of natural beauty and timeless elegance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/categories/necklaces" className="btn-mystical">
                Explore Collections
              </Link>
              <Link href="/about" className="btn-light">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-pearl-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pearl-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pearl-600 to-ocean-deep bg-clip-text text-transparent mb-4">
              Featured Collections
            </h2>
            <p className="text-mystical text-xl max-w-2xl mx-auto">
              Handpicked pieces that embody the eternal dance between celestial light and oceanic depths
            </p>
          </div>

          <div className="featured-grid">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <div key={product.id} className="product-card group">
                <div className="aspect-jewelry bg-gradient-to-br from-pearl-100 to-ocean-100 rounded-lg mb-4 relative overflow-hidden">
                  {/* Placeholder for product image */}
                  <div className="absolute inset-0 flex items-center justify-center text-pearl-500">
                    <div className="text-center">
                      <div className="text-4xl mb-2">✨</div>
                      <div className="text-sm font-medium">{product.name}</div>
                    </div>
                  </div>
                  <div className="image-overlay"></div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-pearl-800">{product.name}</h3>
                  <p className="text-mystical text-sm line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-ocean-deep">
                      {product.price?.display}
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-sm font-medium text-pearl-600 hover:text-ocean-deep transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-ocean-blue to-pearl-800 bg-clip-text text-transparent mb-4">
              Explore Our Collections
            </h2>
            <p className="text-mystical text-xl max-w-2xl mx-auto">
              Each category tells a unique story of oceanic wonder and celestial beauty
            </p>
          </div>

          <div className="jewelry-grid">
            {categories.map((category, index) => (
              <Link key={category.name} href={`/categories/${category.name}`}>
                <div className="product-card group h-full">
                  <div className="aspect-square bg-gradient-to-br from-pearl-100 to-light-aurora rounded-lg mb-4 relative overflow-hidden">
                    {/* Category icon based on type */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl text-pearl-400">
                      {category.name === 'necklaces' && '📿'}
                      {category.name === 'bracelets' && '💫'}
                      {category.name === 'rings' && '💍'}
                      {category.name === 'earrings' && '✨'}
                    </div>
                    <div className="image-overlay">
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm font-medium">{category.count} pieces</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-pearl-800">{category.title}</h3>
                    <p className="text-mystical text-sm">{category.description}</p>
                    <div className="text-sm font-medium text-ocean-blue group-hover:text-ocean-deep transition-colors">
                      Explore Collection →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pearl-600 to-ocean-deep bg-clip-text text-transparent">
              The Nuriel Story
            </h2>
            <p className="text-mystical text-lg leading-relaxed mb-8">
              Like the legendary mermaid Ariel drawn to the surface by light, Nuriel jewelry emerges from the mystical
              depths where 'Nur' (light) meets the eternal ocean. Each piece is crafted to capture that magical moment
              when sunbeams pierce the water's surface, creating a symphony of light and liquid grace.
            </p>
            <p className="text-mystical leading-relaxed mb-8">
              Our artisans work with the same reverence that tides show the shore, understanding that true beauty
              lies not in dominating nature, but in harmonizing with its eternal rhythms. Every necklace flows
              like gentle currents, every ring holds the mystery of deep waters, and every piece whispers the
              ancient secrets shared between moonlight and waves.
            </p>
            <Link href="/about" className="btn-mystical">
              Discover Our Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
