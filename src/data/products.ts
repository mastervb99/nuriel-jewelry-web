import { Product, FeaturedCollection } from '@/types/product';

// Products matching actual Shopify inventory
export const sampleProducts: Product[] = [
  // NECKLACES
  {
    id: 'fairy-blush-triple-strand-pearl-necklace',
    name: 'Fairy Blush Triple-Strand Pearl Necklace',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/pearl-cascade.jpg',
      thumbnail: '/images/products/necklaces/pearl-cascade.jpg',
      gallery: ['/images/products/necklaces/pearl-cascade.jpg'],
    },
    description: 'A delicate triple-strand baroque pearl necklace with a romantic blush pink hue.',
    materials: ['Baroque pearls', 'Sterling silver clasp'],
    shopifyHandle: 'fairy-blush-triple-strand-pearl-necklace',
    featured: true,
    ethereal: {
      story: 'This triple-strand design captures the essence of fairy-tale romance with its soft blush tones.',
      inspiration: 'Inspired by delicate fairy wings and morning rose petals.',
      elements: 'Each baroque pearl is unique, creating natural organic beauty.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N23/MOD-未命名拍摄7003.jpg',
      quality: 'high',
    },
  },
  {
    id: 'grand-baroque-lapis-lazuli-bead-necklace',
    name: 'Grand Baroque Lapis Lazuli Bead Necklace',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/ocean-dreams.jpg',
      thumbnail: '/images/products/necklaces/ocean-dreams.jpg',
      gallery: ['/images/products/necklaces/ocean-dreams.jpg'],
    },
    description: 'An elegant baroque pearl necklace featuring stunning lapis lazuli beads for a rich, regal look.',
    materials: ['Baroque pearls', 'Lapis lazuli beads', 'Gold-filled findings'],
    shopifyHandle: 'grand-baroque-lapis-lazuli-bead-necklace',
    featured: true,
    ethereal: {
      story: 'The deep blue lapis lazuli stones complement the organic beauty of baroque pearls.',
      inspiration: 'Inspired by royal jewelry and ancient treasures.',
      elements: 'Each lapis lazuli bead carries the wisdom of ancient skies.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N23/MOD-未命名拍摄7004.jpg',
      quality: 'high',
    },
  },
  {
    id: 'large-baroque-bead-necklace',
    name: 'Large Baroque Bead Necklace',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/celestial-tides.jpg',
      thumbnail: '/images/products/necklaces/celestial-tides.jpg',
      gallery: ['/images/products/necklaces/celestial-tides.jpg'],
    },
    description: 'A statement piece featuring large baroque pearls in their natural, organic shape.',
    materials: ['Large baroque pearls', 'Sterling silver clasp'],
    shopifyHandle: 'france-choker-baroque-pearl-necklace',
    featured: true,
    ethereal: {
      story: 'Each large baroque pearl tells its own unique story of oceanic beauty.',
      inspiration: 'Inspired by the natural sculptures created by time and tide.',
      elements: 'Large pearls showcase the raw beauty of nature\'s artistry.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N14/MOD-未命名拍摄6941.jpg',
      quality: 'high',
    },
  },
  {
    id: 'keshi-baroque-pearl-necklace',
    name: 'Keshi Baroque Pearl Necklace',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/moonlight-waves.jpg',
      thumbnail: '/images/products/necklaces/moonlight-waves.jpg',
      gallery: ['/images/products/necklaces/moonlight-waves.jpg'],
    },
    description: 'Delicate keshi baroque pearls create an elegant and understated necklace.',
    materials: ['Keshi baroque pearls', 'Gold-filled clasp'],
    shopifyHandle: 'blush-fairy-heart-pearl-necklace-copy',
    featured: false,
    ethereal: {
      story: 'Keshi pearls form naturally without a nucleus, creating unique organic shapes.',
      inspiration: 'The spontaneous beauty of nature\'s perfect imperfections.',
      elements: 'Each keshi pearl is a testament to the ocean\'s creative power.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N15/MOD-未命名拍摄6959.jpg',
      quality: 'high',
    },
  },
  {
    id: 'muse-pearl-necklace',
    name: 'Muse Pearl Necklace',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/ethereal-flow.jpg',
      thumbnail: '/images/products/necklaces/ethereal-flow.jpg',
      gallery: ['/images/products/necklaces/ethereal-flow.jpg'],
    },
    description: 'An artistic arrangement of baroque pearls that inspires creativity and elegance.',
    materials: ['Baroque pearls', 'Sterling silver findings'],
    shopifyHandle: 'france-choker-baroque-pearl-necklace-copy',
    featured: false,
    ethereal: {
      story: 'Designed to inspire the muse within, this piece embodies artistic expression.',
      inspiration: 'The creative flow of inspiration and artistic vision.',
      elements: 'Pearls arranged in harmonious artistic composition.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N15/MOD-未命名拍摄6958.jpg',
      quality: 'high',
    },
  },

  // BRACELETS
  {
    id: 'roman-holiday-charm-bracelet',
    name: 'Roman Holiday Charm Bracelet',
    category: 'bracelets',
    images: {
      main: '/images/products/bracelets/tidal-embrace.jpg',
      thumbnail: '/images/products/bracelets/tidal-embrace.jpg',
      gallery: ['/images/products/bracelets/tidal-embrace.jpg'],
    },
    description: 'A charming bracelet inspired by the romance of Italian holidays with baroque pearl accents.',
    materials: ['Baroque pearls', 'Gold-filled charms', 'Adjustable chain'],
    shopifyHandle: 'roman-holiday-charm-bracelet',
    featured: true,
    ethereal: {
      story: 'Captures the romance and adventure of a Roman holiday in wearable form.',
      inspiration: 'The timeless elegance of Italian artistry and romance.',
      elements: 'Charms and pearls create a story of travel and love.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'B1/tidal-embrace-original.jpg',
      quality: 'high',
    },
  },
  {
    id: 'grand-baroque-bead-bracelet',
    name: 'Grand Baroque Bead Bracelet',
    category: 'bracelets',
    images: {
      main: '/images/products/bracelets/golden-currents.jpg',
      thumbnail: '/images/products/bracelets/golden-currents.jpg',
      gallery: ['/images/products/bracelets/golden-currents.jpg'],
    },
    description: 'Bold baroque pearls create a statement bracelet for special occasions.',
    materials: ['Large baroque pearls', 'Sterling silver clasp'],
    shopifyHandle: 'roman-holiday-charm-bracelet-copy',
    featured: true,
    ethereal: {
      story: 'Grand baroque pearls showcase nature\'s bold artistry on your wrist.',
      inspiration: 'The power and beauty of ocean treasures.',
      elements: 'Each large pearl is a unique sculpture of natural beauty.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'B2/baroque-flow.jpg',
      quality: 'high',
    },
  },
  {
    id: 'double-layer-fine-pearl-bracelet',
    name: 'Double-Layer Fine Pearl Bracelet',
    category: 'bracelets',
    images: {
      main: '/images/products/bracelets/pearl-whispers.jpg',
      thumbnail: '/images/products/bracelets/pearl-whispers.jpg',
      gallery: ['/images/products/bracelets/pearl-whispers.jpg'],
    },
    description: 'Delicate double-layer design with fine baroque pearls for everyday elegance.',
    materials: ['Fine baroque pearls', 'Gold-filled wire'],
    shopifyHandle: 'double-layer-fine-pearl-bracelet',
    featured: false,
    ethereal: {
      story: 'Two layers of delicate pearls create gentle movement and light.',
      inspiration: 'The layered beauty of ocean waves and gentle tides.',
      elements: 'Double strands enhance the natural luster of each pearl.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'B3/double-layer.jpg',
      quality: 'high',
    },
  },
  {
    id: 'floral-petal-bracelet',
    name: 'Floral Petal Bracelet',
    category: 'bracelets',
    images: {
      main: '/images/products/bracelets/ocean-breeze.jpg',
      thumbnail: '/images/products/bracelets/ocean-breeze.jpg',
      gallery: ['/images/products/bracelets/ocean-breeze.jpg'],
    },
    description: 'Pearl bracelet with floral-inspired design elements and organic pearl shapes.',
    materials: ['Baroque pearls', 'Sterling silver petals'],
    shopifyHandle: 'muse-pearl-necklace-copy',
    featured: false,
    ethereal: {
      story: 'Floral elements combine with baroque pearls to create garden-inspired beauty.',
      inspiration: 'The delicate petals of ocean flowers and sea blooms.',
      elements: 'Silver petals frame the organic beauty of baroque pearls.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'B4/floral-design.jpg',
      quality: 'high',
    },
  },
  {
    id: 'wave-dancer-bracelet',
    name: 'Wave Dancer Bracelet',
    category: 'bracelets',
    images: {
      main: '/images/products/bracelets/wave-dancer.jpg',
      thumbnail: '/images/products/bracelets/wave-dancer.jpg',
      gallery: ['/images/products/bracelets/wave-dancer.jpg'],
    },
    description: 'Flowing baroque pearls that move like ocean waves on your wrist.',
    materials: ['Baroque pearls', 'Flexible gold-filled wire'],
    shopifyHandle: 'wave-dancer-baroque-bracelet',
    featured: false,
    ethereal: {
      story: 'Pearls that dance and flow like gentle ocean waves.',
      inspiration: 'The rhythmic movement of tides and coastal waters.',
      elements: 'Flexible design allows pearls to move naturally with your gestures.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'B5/wave-movement.jpg',
      quality: 'high',
    },
  },

  // RINGS
  {
    id: 'baroque-pearl-arrow-ring',
    name: 'Baroque Pearl Arrow Ring',
    category: 'rings',
    images: {
      main: '/images/products/rings/aurora-pool.jpg',
      thumbnail: '/images/products/rings/aurora-pool.jpg',
      gallery: ['/images/products/rings/aurora-pool.jpg'],
    },
    description: 'A striking ring featuring a baroque pearl in an arrow-inspired setting.',
    materials: ['Baroque pearl', 'Sterling silver setting'],
    shopifyHandle: 'pedal-baroque-pearl-ring-copy',
    featured: true,
    ethereal: {
      story: 'The arrow design points toward new adventures and possibilities.',
      inspiration: 'Directional energy and the power of intention.',
      elements: 'Baroque pearl centerpiece with contemporary arrow design.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'R1/aurora-pool-original.jpg',
      quality: 'high',
    },
  },
  {
    id: 'petal-baroque-pearl-ring',
    name: 'Petal Baroque Pearl Ring',
    category: 'rings',
    images: {
      main: '/images/products/rings/moonstone-circle.jpg',
      thumbnail: '/images/products/rings/moonstone-circle.jpg',
      gallery: ['/images/products/rings/moonstone-circle.jpg'],
    },
    description: 'Delicate petal setting showcases the natural beauty of a baroque pearl.',
    materials: ['Baroque pearl', 'Gold-filled petal setting'],
    shopifyHandle: 'metal-baroque-pearl-earring-copy-1',
    featured: false,
    ethereal: {
      story: 'Petal-inspired setting cradles the pearl like a flower holds morning dew.',
      inspiration: 'The gentle protection of flower petals around precious centers.',
      elements: 'Organic pearl nestled in artistic metalwork petals.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'R2/petal-setting.jpg',
      quality: 'high',
    },
  },
  {
    id: 'ocean-embrace-ring',
    name: 'Ocean Embrace Ring',
    category: 'rings',
    images: {
      main: '/images/products/rings/ocean-embrace.jpg',
      thumbnail: '/images/products/rings/ocean-embrace.jpg',
      gallery: ['/images/products/rings/ocean-embrace.jpg'],
    },
    description: 'A baroque pearl ring that captures the embrace of ocean waves.',
    materials: ['Baroque pearl', 'Wave-inspired sterling silver band'],
    shopifyHandle: 'ocean-embrace-baroque-ring',
    featured: false,
    ethereal: {
      story: 'The band flows like water around the pearl, creating an eternal embrace.',
      inspiration: 'The way ocean waves gently hold treasures from the deep.',
      elements: 'Fluid metalwork embraces the organic pearl form.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'R3/ocean-band.jpg',
      quality: 'high',
    },
  },
  {
    id: 'pearl-dreams-ring',
    name: 'Pearl Dreams Ring',
    category: 'rings',
    images: {
      main: '/images/products/rings/pearl-dreams.jpg',
      thumbnail: '/images/products/rings/pearl-dreams.jpg',
      gallery: ['/images/products/rings/pearl-dreams.jpg'],
    },
    description: 'A dreamy baroque pearl ring perfect for special occasions.',
    materials: ['Lustrous baroque pearl', 'Polished sterling silver'],
    shopifyHandle: 'pearl-dreams-baroque-ring',
    featured: false,
    ethereal: {
      story: 'This ring holds the dreams and wishes of ocean depths.',
      inspiration: 'The mysterious beauty of pearls formed in hidden ocean caves.',
      elements: 'Classic setting allows the pearl\'s natural beauty to shine.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'R4/classic-pearl.jpg',
      quality: 'high',
    },
  },
  {
    id: 'starlight-band-ring',
    name: 'Starlight Band Ring',
    category: 'rings',
    images: {
      main: '/images/products/rings/starlight-band.jpg',
      thumbnail: '/images/products/rings/starlight-band.jpg',
      gallery: ['/images/products/rings/starlight-band.jpg'],
    },
    description: 'Elegant band with small baroque pearls that sparkle like starlight.',
    materials: ['Small baroque pearls', 'Gold-filled band'],
    shopifyHandle: 'starlight-baroque-band',
    featured: false,
    ethereal: {
      story: 'Small pearls arranged like stars across a golden sky.',
      inspiration: 'The constellation of stars reflected on calm water.',
      elements: 'Multiple small pearls create a celestial pattern.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'R5/star-pattern.jpg',
      quality: 'high',
    },
  },

  // EARRINGS
  {
    id: 'roman-holiday-pearl-double-earring',
    name: 'Roman Holiday Pearl Double Earring',
    category: 'earrings',
    images: {
      main: '/images/products/earrings/seafoam-whispers.jpg',
      thumbnail: '/images/products/earrings/seafoam-whispers.jpg',
      gallery: ['/images/products/earrings/seafoam-whispers.jpg'],
    },
    description: 'Elegant double-drop earrings inspired by Roman architecture and romance.',
    materials: ['Baroque pearls', 'Gold-filled findings'],
    shopifyHandle: 'roman-holiday-pearl-double-earring-copy',
    featured: true,
    ethereal: {
      story: 'Double pearls cascade like Roman fountains in eternal romance.',
      inspiration: 'The flowing water features of ancient Roman gardens.',
      elements: 'Two pearls create movement and classical elegance.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'E1/seafoam-whispers-original.jpg',
      quality: 'high',
    },
  },
  {
    id: 'flower-baroque-pearl-earring',
    name: 'Flower Baroque Pearl Earring',
    category: 'earrings',
    images: {
      main: '/images/products/earrings/crystal-drops.jpg',
      thumbnail: '/images/products/earrings/crystal-drops.jpg',
      gallery: ['/images/products/earrings/crystal-drops.jpg'],
    },
    description: 'Floral-inspired earrings featuring baroque pearls in blooming designs.',
    materials: ['Baroque pearls', 'Sterling silver flower elements'],
    shopifyHandle: 'whisker-baroque-pearl-earring-copy',
    featured: true,
    ethereal: {
      story: 'Pearls bloom like flowers in an eternal garden of beauty.',
      inspiration: 'The delicate beauty of flowers kissed by morning dew.',
      elements: 'Floral metalwork frames the natural pearl centers.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'E2/flower-design.jpg',
      quality: 'high',
    },
  },
  {
    id: 'long-petal-baroque-pearl-earring',
    name: 'Long Petal Baroque Pearl Earring',
    category: 'earrings',
    images: {
      main: '/images/products/earrings/luminous-pearls.jpg',
      thumbnail: '/images/products/earrings/luminous-pearls.jpg',
      gallery: ['/images/products/earrings/luminous-pearls.jpg'],
    },
    description: 'Elongated petal design with baroque pearls for dramatic elegance.',
    materials: ['Baroque pearls', 'Gold-filled petal drops'],
    shopifyHandle: 'long-pedal-baroque-pearl-earring-copy',
    featured: false,
    ethereal: {
      story: 'Long petals carry pearls like precious seeds of the sea.',
      inspiration: 'Falling flower petals caught in gentle ocean breeze.',
      elements: 'Extended design creates graceful movement and length.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'E3/long-drops.jpg',
      quality: 'high',
    },
  },
  {
    id: 'metal-baroque-pearl-earring',
    name: 'Metal Baroque Pearl Earring',
    category: 'earrings',
    images: {
      main: '/images/products/earrings/golden-tides.jpg',
      thumbnail: '/images/products/earrings/golden-tides.jpg',
      gallery: ['/images/products/earrings/golden-tides.jpg'],
    },
    description: 'Contemporary metal design showcasing the organic beauty of baroque pearls.',
    materials: ['Baroque pearls', 'Brushed metal settings'],
    shopifyHandle: 'metal-baroque-pearl-earring-copy-1',
    featured: false,
    ethereal: {
      story: 'Modern metal artistry frames the timeless beauty of ocean pearls.',
      inspiration: 'The meeting of contemporary design with ancient treasures.',
      elements: 'Geometric metal contrasts with organic pearl forms.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'E4/metal-contemporary.jpg',
      quality: 'high',
    },
  },
  {
    id: 'wave-dancers-earring',
    name: 'Wave Dancers Earring',
    category: 'earrings',
    images: {
      main: '/images/products/earrings/wave-dancers.jpg',
      thumbnail: '/images/products/earrings/wave-dancers.jpg',
      gallery: ['/images/products/earrings/wave-dancers.jpg'],
    },
    description: 'Flowing earrings that move like ocean waves with every gesture.',
    materials: ['Baroque pearls', 'Flowing chain elements'],
    shopifyHandle: 'wave-dancers-baroque-earrings',
    featured: false,
    ethereal: {
      story: 'These earrings dance with the rhythm of ocean waves and sea breezes.',
      inspiration: 'The graceful movement of water in all its flowing forms.',
      elements: 'Articulated design creates natural movement and flow.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'E5/wave-movement.jpg',
      quality: 'high',
    },
  },
];

export const featuredCollections: FeaturedCollection[] = [
  {
    title: 'Baroque Pearl Collection',
    description: 'Our signature collection celebrating the unique beauty of baroque pearls.',
    theme: 'pearl',
    products: sampleProducts.filter(p => p.featured && ['necklaces', 'bracelets'].includes(p.category)),
  },
  {
    title: 'Elegant Accents',
    description: 'Rings and earrings that perfectly complement any baroque pearl ensemble.',
    theme: 'light',
    products: sampleProducts.filter(p => p.featured && ['rings', 'earrings'].includes(p.category)),
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return sampleProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return sampleProducts.filter(product => product.featured);
};

export const getProductById = (id: string): Product | null => {
  return sampleProducts.find(product => product.id === id) || null;
};

// Helper function to generate Shopify URLs
export const getShopifyUrl = (product: Product): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'nurieljewelry.myshopify.com';
  return `https://${baseUrl}/products/${product.shopifyHandle}`;
};