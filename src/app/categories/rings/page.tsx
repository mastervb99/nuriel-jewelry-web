import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import { getAllCategories } from '@/data/categories';

export default function RingsPage() {
  const products = getProductsByCategory('rings');
  const categories = getAllCategories();
  const categoryInfo = categories.find(cat => cat.name === 'rings');

  return (
    <div className="min-h-screen pt-20">
      {/* Category Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-mystical mb-6">
              {categoryInfo?.title || 'Rings'}
            </h1>
            <p className="text-mystical text-xl max-w-3xl mx-auto leading-relaxed">
              {categoryInfo?.description || 'Mystical rings that hold the secrets of deep waters and the light of distant stars.'}
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
              Circles of Celestial Mystery
            </h2>
            <div className="space-y-4 text-mystical leading-relaxed">
              <p>
                Each ring in our collection is a perfect circle—an ancient symbol of eternity, wholeness, and the endless
                cycle of tides. These pieces capture the essence of celestial pools where starlight gathers, creating
                windows to other realms within precious stones and lustrous metals.
              </p>
              <p>
                From opals that hold captured aurora to diamonds that mirror distant starlight, every ring becomes
                a personal talisman—a circle of power that connects the wearer to the vast mysteries of ocean and sky.
                Wear them as symbols of your own infinite potential and connection to the cosmic dance.
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
                  <div className="aspect-jewelry bg-gradient-to-br from-light-aurora to-pearl-100 rounded-lg mb-6 relative overflow-hidden">
                    {/* Actual product image */}
                    <Image
                      src={product.images.main}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />

                    {/* Featured badge */}
                    {product.featured && (
                      <div className="absolute top-3 right-3 bg-ocean-blue text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}

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

                    {/* Materials */}
                    {product.materials && (
                      <div className="flex flex-wrap gap-2">
                        {product.materials.map((material, index) => (
                          <span
                            key={index}
                            className="text-xs bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Ethereal story preview */}
                    {product.ethereal && (
                      <div className="glass p-4 rounded-xl">
                        <p className="text-xs text-pearl-600 italic leading-relaxed">
                          "{product.ethereal.elements}"
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
              <div className="text-6xl mb-4">💍</div>
              <h3 className="text-xl font-semibold text-pearl-800 mb-2">Collection Coming Soon</h3>
              <p className="text-mystical">
                Our master jewelers are crafting rings that capture starlight in stone.
                Return soon to discover circles of celestial beauty.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ring Sizing Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-pearl-800 mb-4">Ring Sizing Guide</h2>
              <p className="text-mystical">
                Ensure your perfect fit with our mystical sizing wisdom
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pearl-700">How to Measure</h3>
                <div className="space-y-2 text-sm text-mystical">
                  <p>• Use string or paper to wrap around finger</p>
                  <p>• Mark where the material overlaps</p>
                  <p>• Measure the length with a ruler</p>
                  <p>• Compare with our size chart</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pearl-700">Sizing Tips</h3>
                <div className="space-y-2 text-sm text-mystical">
                  <p>• Measure at room temperature</p>
                  <p>• Consider knuckle size for comfort</p>
                  <p>• Account for seasonal finger changes</p>
                  <p>• Contact us for custom sizing</p>
                </div>
              </div>
            </div>
          </div>
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
              Complete your oceanic ensemble with complementary pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories
              .filter(cat => cat.name !== 'rings')
              .map((category) => (
                <Link key={category.name} href={`/categories/${category.name}`}>
                  <div className="product-card group text-center">
                    <div className="text-4xl mb-4">
                      {category.name === 'necklaces' && '📿'}
                      {category.name === 'bracelets' && '💫'}
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