import { CategoryInfo } from '@/types/product';

export const categories: Record<string, CategoryInfo> = {
  necklaces: {
    name: 'necklaces',
    title: 'Necklaces',
    description: 'Graceful necklaces that cascade like ocean waves, capturing the eternal dance of light upon water.',
    heroImage: '/images/categories/necklaces-hero.jpg',
    story: `Each necklace tells a story of the ocean's eternal embrace, where pearls and precious stones reflect the ethereal beauty of light dancing on water. Our collection celebrates the fluid grace of waves, the mysterious depths of the sea, and the luminous treasures hidden within.`,
    count: 20, // Will be updated based on actual products
  },
  bracelets: {
    name: 'bracelets',
    title: 'Bracelets',
    description: 'Delicate bracelets inspired by the gentle ripples that kiss the shore with whispered secrets.',
    heroImage: '/images/categories/bracelets-hero.jpg',
    story: `Our bracelets embody the gentle caress of ocean waves, each piece flowing with the rhythm of tides. Like circles of light upon the water's surface, they represent the endless cycle of renewal and the perfect harmony between earth and sea.`,
    count: 12,
  },
  rings: {
    name: 'rings',
    title: 'Rings',
    description: 'Enchanting rings that capture droplets of starlight reflected in tranquil lagoons.',
    heroImage: '/images/categories/rings-hero.jpg',
    story: `Each ring holds the concentrated essence of oceanic wonder – a perfect circle representing the unity of elements. Like pools of light caught in coastal caves, these pieces reflect the intimate moments where sky meets sea in eternal union.`,
    count: 12,
  },
  earrings: {
    name: 'earrings',
    title: 'Earrings',
    description: 'Ethereal earrings that sway like seaweed in underwater gardens touched by celestial light.',
    heroImage: '/images/categories/earrings-hero.jpg',
    story: `Our earrings dance with the fluid motion of underwater currents, catching and reflecting light like suspended dewdrops in an oceanic dream. Each pair whispers of hidden grottos where mermaids gather pearls kissed by moonbeams.`,
    count: 10,
  },
};

export const getCategoryByName = (name: string): CategoryInfo | null => {
  return categories[name] || null;
};

export const getAllCategories = (): CategoryInfo[] => {
  return Object.values(categories);
};