import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/data/products';
import { getAllCategories } from '@/data/categories';

export default function EarringsPage() {
  const products = getProductsByCategory('earrings');
  const categories = getAllCategories();
  const categoryInfo = categories.find(cat => cat.name === 'earrings');

  return (
    <div className="min-h-screen pt-20">
      {/* Category Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-mystical mb-6">
              {categoryInfo?.title || 'Earrings'}
            </h1>
            <p className="text-mystical text-xl max-w-3xl mx-auto leading-relaxed">
              {categoryInfo?.description || 'Ethereal earrings that catch light like dewdrops and whisper the secrets of dawn.'}
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
              Whispers of Dawn & Sea
            </h2>
            <div className="space-y-4 text-mystical leading-relaxed">
              <p>
                Like morning dewdrops catching first light, our earrings capture those fleeting moments when sea meets sky
                in perfect harmony. Each pair tells the story of waves gently kissing the shore, of seafoam touched by
                golden sunrise, and of pearls born in ocean depths where mermaids dream.
              </p>
              <p>
                These delicate treasures frame your face with the same grace that moonlight frames the ocean's surface.
                Whether they dance with your movement like gentle currents or rest as still as calm waters,
                each pair becomes part of your own oceanic story.
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
                  <div className="aspect-jewelry bg-gradient-to-br from-light-aurora via-pearl-100 to-light-rose rounded-lg mb-6 relative overflow-hidden">
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
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-light-golden to-light-rose text-white text-xs px-2 py-1 rounded-full">
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

                    {/* Materials with special styling for earrings */}
                    {product.materials && (
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-pearl-700 uppercase tracking-wide">Materials</div>
                        <div className="flex flex-wrap gap-1">
                          {product.materials.map((material, index) => (
                            <span
                              key={index}
                              className="text-xs bg-light-aurora text-ocean-700 px-2 py-1 rounded-full"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Ethereal story preview */}
                    {product.ethereal && (
                      <div className="glass p-4 rounded-xl">
                        <div className="text-xs font-medium text-pearl-700 mb-1">Inspiration</div>
                        <p className="text-xs text-pearl-600 italic leading-relaxed">
                          {product.ethereal.inspiration}
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
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-pearl-800 mb-2">Collection Coming Soon</h3>
              <p className="text-mystical">
                Our artisans are crafting earrings that capture the whisper of sea breeze.
                Return soon to discover light made wearable.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Earring Care Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-pearl-800 mb-4">Caring for Your Earrings</h2>
              <p className="text-mystical">
                Preserve their oceanic beauty with gentle, mindful care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pearl-700">Daily Care</h3>
                <div className="space-y-2 text-sm text-mystical">
                  <p>• Remove before swimming or showering</p>
                  <p>• Store in soft pouches or jewelry box</p>
                  <p>• Clean gently with soft, damp cloth</p>
                  <p>• Avoid harsh chemicals and perfumes</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pearl-700">Pearl Care</h3>
                <div className="space-y-2 text-sm text-mystical">
                  <p>• Wipe pearls after each wear</p>
                  <p>• Use only pearl-safe cleaners</p>
                  <p>• Store separately from other jewelry</p>
                  <p>• Professional cleaning annually</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-light-aurora rounded-lg">
              <p className="text-sm text-ocean-700 text-center italic">
                "Like the ocean that cradles them, treat your earrings with gentle reverence and they will maintain
                their luminous beauty for generations to come."
              </p>
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
              Complete your ethereal look with matching oceanic pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories
              .filter(cat => cat.name !== 'earrings')
              .map((category) => (
                <Link key={category.name} href={`/categories/${category.name}`}>
                  <div className="product-card group text-center">
                    <div className="text-4xl mb-4">
                      {category.name === 'necklaces' && '📿'}
                      {category.name === 'bracelets' && '💫'}
                      {category.name === 'rings' && '💍'}
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