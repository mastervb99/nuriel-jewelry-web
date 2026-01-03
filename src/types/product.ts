export type Category = 'necklaces' | 'bracelets' | 'rings' | 'earrings';

export interface ProductImage {
  main: string;        // Primary high-quality image
  thumbnail: string;   // Optimized for grid view
  gallery: string[];   // Additional angles/views
}

export interface EtherealStory {
  story: string;       // Mystical product narrative
  inspiration: string; // Ocean/light theme connection
  elements?: string;   // Materials and their meanings
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  images: ProductImage;
  description: string;
  materials: string[];
  price?: {
    amount: number;
    currency: string;
    display: string;  // e.g., "$129"
  };
  shopifyUrl?: string;    // Direct link to Shopify product
  shopifyHandle?: string; // Product handle for Shopify
  featured: boolean;      // Homepage showcase
  ethereal: EtherealStory;
  metadata: {
    createdAt: string;
    updatedAt: string;
    source: string;      // Original filename or source
    quality: 'high' | 'medium' | 'low';
    dimensions?: {
      width: number;
      height: number;
    };
  };
}

export interface CategoryInfo {
  name: string;
  title: string;
  description: string;
  heroImage: string;
  story: string;
  count: number;
}

export interface FeaturedCollection {
  title: string;
  description: string;
  products: Product[];
  theme: 'ocean' | 'light' | 'mystical' | 'pearl';
}

// Helper types for Shopify integration
export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  images: ShopifyImage[];
  variants: ShopifyVariant[];
}

export interface ShopifyImage {
  id: string;
  src: string;
  alt: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: string;
  available: boolean;
}