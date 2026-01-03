import React from 'react';
import Link from 'next/link';
import { getProductsByCategory } from '@/data/products';
import { getAllCategories } from '@/data/categories';

export default function NecklacesPage() {
  const products = getProductsByCategory('necklaces');
  const categories = getAllCategories();
  const categoryInfo = categories.find(cat => cat.name === 'necklaces');

  return (
    <div className="min-h-screen pt-20">
      {/* Category Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-mystical mb-6">
              {categoryInfo?.title || 'Necklaces'}
            </h1>
            <p className="text-mystical text-xl max-w-3xl mx-auto leading-relaxed">
              {categoryInfo?.description || 'Elegant necklaces that capture the flow of ocean currents and the shimmer of moonlight on water.'}
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center text-pearl-600">
                <span className="text-sm">
                  {products.length} piece{products.length !== 1 ? 's' : ''} in this collection
                </span>
              </div>
            </div>
          </div>

          {/* Category Story */}
          <div className="glass p-8 md:p-12 rounded-3xl mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-pearl-600 to-ocean-deep bg-clip-text text-transparent">
              The Story of Ocean Cascades
            </h2>
            <div className="space-y-4 text-mystical leading-relaxed">
              <p>
                Each necklace in our collection tells the story of water's eternal journey—from mountain springs to ocean depths,
                carrying whispers of ancient wisdom and the gentle caress of moonbeams. These pieces embody the flowing grace
                of tides and the luminous mystery of pearls born in ocean sanctuaries.
              </p>
              <p>
                Crafted with materials that echo the sea's treasures—lustrous pearls, flowing silver, and stones kissed by salt air—
                every necklace becomes a talisman of oceanic beauty, designed to rest close to the heart where dreams are born.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {products.length > 0 ? (
            <div className="jewelry-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card group">
                  <div className="aspect-jewelry bg-gradient-to-br from-pearl-100 to-ocean-100 rounded-lg mb-6 relative overflow-hidden">
                    {/* Actual product image */}
                    <img
                      src={product.images.main}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="image-overlay">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-pearl-800">{product.name}</h3>
                    <p className="text-mystical text-sm line-clamp-3">{product.description}</p>

                    {/* Ethereal story preview */}
                    {product.ethereal && (
                      <div className="glass p-4 rounded-xl">
                        <p className="text-xs text-pearl-600 italic leading-relaxed">
                          "{product.ethereal.story.substring(0, 120)}..."
                        </p>
                      </div>
                    )}

                    <div className="flex justify-center pt-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="text-sm font-medium text-pearl-600 hover:text-ocean-deep transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🌊</div>
              <h3 className="text-xl font-semibold text-pearl-800 mb-2">Collection Coming Soon</h3>
              <p className="text-mystical">
                Our artisans are carefully crafting new pieces for this collection.
                Check back soon for ethereal necklaces that capture ocean's grace.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Explore Other Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 glass backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-pearl-800 mb-4">
              Explore Other Collections
            </h2>
            <p className="text-mystical">
              Discover more treasures from the depths of oceanic beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories
              .filter(cat => cat.name !== 'necklaces')
              .map((category) => (
                <Link key={category.name} href={`/categories/${category.name}`}>
                  <div className="product-card group text-center">
                    <div className="text-4xl mb-4">
                      {category.name === 'bracelets' && '💫'}
                      {category.name === 'rings' && '💍'}
                      {category.name === 'earrings' && '✨'}
                    </div>
                    <h3 className="text-lg font-semibold text-pearl-800 mb-2">{category.title}</h3>
                    <p className="text-mystical text-sm mb-4">{category.description}</p>
                    <div className="text-sm font-medium text-ocean-blue group-hover:text-ocean-deep transition-colors">
                      View Collection →
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}