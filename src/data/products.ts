import { Product, FeaturedCollection } from '@/types/product';

// Real products with Pearl project images
export const sampleProducts: Product[] = [
  // Necklaces
  {
    id: 'n1-pearl-cascade',
    name: 'Pearl Cascade',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/pearl-cascade.jpg',
      thumbnail: '/images/products/necklaces/pearl-cascade.jpg',
      gallery: ['/images/products/necklaces/pearl-cascade.jpg'],
    },
    description: 'A graceful cascade of lustrous pearls that flow like moonlit water down a mountain stream.',
    materials: ['Freshwater pearls', 'Sterling silver', '14k gold accents'],
    price: { amount: 289, currency: 'USD', display: '$289' },
    shopifyHandle: 'pearl-cascade-necklace',
    featured: true,
    ethereal: {
      story: 'Born from the marriage of moonlight and tide, this necklace embodies the eternal flow of celestial energy through oceanic depths.',
      inspiration: 'Inspired by the cascading waterfalls that meet the sea at hidden coastal sanctuaries.',
      elements: 'Each pearl holds the memory of ocean storms weathered and calm seas embraced.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N23/MOD-未命名拍摄7003.jpg',
      quality: 'high',
      dimensions: { width: 4470, height: 5591 },
    },
  },
  {
    id: 'n2-ocean-dreams',
    name: 'Ocean Dreams',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/ocean-dreams.jpg',
      thumbnail: '/images/products/necklaces/ocean-dreams.jpg',
      gallery: ['/images/products/necklaces/ocean-dreams.jpg'],
    },
    description: 'An ethereal necklace that captures the essence of dreams born in the depths of cerulean waters.',
    materials: ['Sea glass', 'White gold', 'Aquamarine stones'],
    price: { amount: 345, currency: 'USD', display: '$345' },
    shopifyHandle: 'ocean-dreams-necklace',
    featured: true,
    ethereal: {
      story: 'This piece was born from visions of underwater kingdoms where mermaids weave dreams from ocean foam.',
      inspiration: 'The deep azure of twilight seas where stars first touch the water.',
      elements: 'Sea glass carries whispers of distant shores while aquamarine holds the ocean\'s soul.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N23/MOD-未命名拍摄7004.jpg',
      quality: 'high',
    },
  },
  {
    id: 'n3-moonlight-waves',
    name: 'Moonlight Waves',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/moonlight-waves.jpg',
      thumbnail: '/images/products/necklaces/moonlight-waves.jpg',
      gallery: ['/images/products/necklaces/moonlight-waves.jpg'],
    },
    description: 'Delicate waves of silver and pearl that mirror the moon\'s gentle caress upon still waters.',
    materials: ['Moonstone', 'Sterling silver', 'Cultured pearls'],
    price: { amount: 225, currency: 'USD', display: '$225' },
    shopifyHandle: 'moonlight-waves-necklace',
    featured: false,
    ethereal: {
      story: 'Crafted during the full moon when its silver light dances most freely upon the ocean\'s surface.',
      inspiration: 'The sacred moment when lunar tides reach their highest crescendo.',
      elements: 'Moonstone captures celestial energy while pearls echo the moon\'s reflection.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N15/MOD-未命名拍摄6959.jpg',
      quality: 'high',
    },
  },
  {
    id: 'n4-ethereal-flow',
    name: 'Ethereal Flow',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/ethereal-flow.jpg',
      thumbnail: '/images/products/necklaces/ethereal-flow.jpg',
      gallery: ['/images/products/necklaces/ethereal-flow.jpg'],
    },
    description: 'A flowing design that embodies the eternal movement of ocean currents and celestial winds.',
    materials: ['Rose gold', 'Pink pearls', 'Rose quartz'],
    price: { amount: 395, currency: 'USD', display: '$395' },
    shopifyHandle: 'ethereal-flow-necklace',
    featured: false,
    ethereal: {
      story: 'This piece captures the gentle flow of divine energy as it moves through water and light.',
      inspiration: 'The soft blush of dawn as it kisses the ocean at the horizon.',
      elements: 'Rose gold reflects the warmth of first light while pink pearls hold love\'s essence.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N15/MOD-未命名拍摄6958.jpg',
      quality: 'high',
    },
  },
  {
    id: 'n5-celestial-tides',
    name: 'Celestial Tides',
    category: 'necklaces',
    images: {
      main: '/images/products/necklaces/celestial-tides.jpg',
      thumbnail: '/images/products/necklaces/celestial-tides.jpg',
      gallery: ['/images/products/necklaces/celestial-tides.jpg'],
    },
    description: 'A magnificent piece celebrating the cosmic dance between celestial bodies and ocean tides.',
    materials: ['White gold', 'Diamonds', 'Sapphires', 'Tahitian pearls'],
    price: { amount: 675, currency: 'USD', display: '$675' },
    shopifyHandle: 'celestial-tides-necklace',
    featured: true,
    ethereal: {
      story: 'Born when the planets aligned over deep ocean waters, channeling cosmic energy into earthly beauty.',
      inspiration: 'The mystical pull of celestial bodies upon the endless seas.',
      elements: 'Diamonds mirror starlight while sapphires hold the depth of cosmic oceans.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'N14/MOD-未命名拍摄6941.jpg',
      quality: 'high',
    },
  },

  // Bracelets
  {
    id: 'b1-tidal-embrace',
    name: 'Tidal Embrace',
    category: 'bracelets',
    images: {
      main: '/images/products/bracelets/tidal-embrace-main.jpg',
      thumbnail: '/images/products/bracelets/tidal-embrace-thumb.jpg',
      gallery: [
        '/images/products/bracelets/tidal-embrace-detail1.jpg',
      ],
    },
    description: 'A delicate bracelet that flows with the rhythm of ocean tides, adorned with sea-kissed stones.',
    materials: ['Sea glass', 'Rose gold', 'Tahitian pearl accents'],
    price: {
      amount: 189,
      currency: 'USD',
      display: '$189',
    },
    shopifyHandle: 'tidal-embrace-bracelet',
    featured: true,
    ethereal: {
      story: 'Crafted to honor the ancient dance between moon and sea, this bracelet pulses with tidal energy.',
      inspiration: 'Each stone was chosen for its journey through countless tides, polished by time and salt.',
      elements: 'The rose gold captures sunset reflections while sea glass holds the memory of storms.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'B1/tidal-embrace-original.jpg',
      quality: 'high',
    },
  },
  {
    id: 'r1-aurora-pool',
    name: 'Aurora Pool',
    category: 'rings',
    images: {
      main: '/images/products/rings/aurora-pool-main.jpg',
      thumbnail: '/images/products/rings/aurora-pool-thumb.jpg',
      gallery: [
        '/images/products/rings/aurora-pool-detail1.jpg',
        '/images/products/rings/aurora-pool-detail2.jpg',
      ],
    },
    description: 'A mesmerizing ring featuring an opal that captures the essence of northern lights dancing on water.',
    materials: ['Australian opal', 'White gold', 'Diamond accents'],
    price: {
      amount: 445,
      currency: 'USD',
      display: '$445',
    },
    shopifyHandle: 'aurora-pool-ring',
    featured: true,
    ethereal: {
      story: 'Within this opal lies the captured essence of aurora borealis reflecting in a pristine mountain pool.',
      inspiration: 'The mystical moment when celestial lights kiss the surface of still waters.',
      elements: 'The opal shifts like captured starlight while diamonds echo distant stars.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'R1/aurora-pool-original.jpg',
      quality: 'high',
    },
  },
  {
    id: 'e1-seafoam-whispers',
    name: 'Seafoam Whispers',
    category: 'earrings',
    images: {
      main: '/images/products/earrings/seafoam-whispers-main.jpg',
      thumbnail: '/images/products/earrings/seafoam-whispers-thumb.jpg',
      gallery: [
        '/images/products/earrings/seafoam-whispers-detail1.jpg',
      ],
    },
    description: 'Ethereal drop earrings that capture the delicate beauty of seafoam touched by morning light.',
    materials: ['Moonstone', 'Sterling silver', 'Cultured pearls'],
    price: {
      amount: 225,
      currency: 'USD',
      display: '$225',
    },
    shopifyHandle: 'seafoam-whispers-earrings',
    featured: true,
    ethereal: {
      story: 'These earrings hold the whispered secrets of waves as they gently kiss the shore.',
      inspiration: 'Born from the fleeting moment when seafoam catches the first rays of dawn.',
      elements: 'Moonstone carries the mystery of tides while pearls echo the ocean\'s heartbeat.',
    },
    metadata: {
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      source: 'E1/seafoam-whispers-original.jpg',
      quality: 'high',
    },
  },
];

export const featuredCollections: FeaturedCollection[] = [
  {
    title: 'Ocean\'s Embrace',
    description: 'Our signature collection celebrating the eternal dance of water and light.',
    theme: 'ocean',
    products: sampleProducts.filter(p => p.featured && ['necklaces', 'bracelets'].includes(p.category)),
  },
  {
    title: 'Celestial Reflections',
    description: 'Pieces that capture the magic of starlight on tranquil waters.',
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
  const baseUrl = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'nuriel-jewelry.myshopify.com';
  return `https://${baseUrl}/products/${product.shopifyHandle}`;
};