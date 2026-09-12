export type CollectionKey = "bestsellers" | "new-arrivals" | "summer";

export type Collection = {
  key: CollectionKey;
  label: string;
  tagline: string;
};

export const collections: Collection[] = [
  {
    key: "bestsellers",
    label: "Bestsellers",
    tagline: "The fragrances everyone keeps coming back to",
  },
  {
    key: "new-arrivals",
    label: "New Arrivals",
    tagline: "Fresh from the NIFS lab — just launched",
  },
  {
    key: "summer",
    label: "For Summer",
    tagline: "Light, fresh picks made for warm days",
  },
];

export type Gender = "him" | "her" | "unisex";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  family: string;
  gender: Gender;
  description: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  badge?: "Bestseller" | "New";
  sizes: string[];
  wear: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  collections: CollectionKey[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "magnificent",
    name: "Magnificent",
    tagline: "Bold. Warm. Unforgettable.",
    family: "Woody Amber",
    gender: "him",
    description:
      "A rich woody amber built for presence — saffron and bergamot open into smoky amberwood and vetiver. Made to last from boardroom to after-hours.",
    price: 849,
    mrp: 1499,
    rating: 4.8,
    reviews: 1214,
    badge: "Bestseller",
    sizes: ["50 ml"],
    wear: "10–12 hours",
    notes: {
      top: ["Saffron", "Bergamot"],
      heart: ["Amberwood", "Cedar"],
      base: ["Vetiver", "Musk", "Tonka"],
    },
    collections: ["bestsellers"],
    image: "/products/magnificient.jpeg",
  },
  {
    slug: "wanderlust",
    name: "Wanderlust",
    tagline: "Pack light. Smell incredible.",
    family: "Fresh Aquatic",
    gender: "unisex",
    description:
      "Sea breeze in a bottle — marine notes, crisp apple and lavender over clean white musk. The one you reach for without thinking.",
    price: 799,
    mrp: 1399,
    rating: 4.7,
    reviews: 968,
    badge: "Bestseller",
    sizes: ["50 ml"],
    wear: "8–10 hours",
    notes: {
      top: ["Marine Accord", "Green Apple"],
      heart: ["Lavender", "Geranium"],
      base: ["White Musk", "Ambergris"],
    },
    collections: ["bestsellers", "new-arrivals", "summer"],
    image: "/products/wanderlust.PNG",
  },
  {
    slug: "morning-drift",
    name: "Morning Drift",
    tagline: "Your 7 AM in a bottle",
    family: "Citrus Fresh",
    gender: "unisex",
    description:
      "Sparkling citrus with a cool minty edge — Sicilian lemon, mandarin and mint over soft cedar. Fresh laundry, first coffee, open windows.",
    price: 749,
    mrp: 1299,
    rating: 4.6,
    reviews: 412,
    badge: "New",
    sizes: ["50 ml"],
    wear: "6–8 hours",
    notes: {
      top: ["Sicilian Lemon", "Mandarin", "Mint"],
      heart: ["Neroli", "Green Tea"],
      base: ["Cedar", "White Musk"],
    },
    collections: ["new-arrivals", "summer"],
    image: "/products/morning_drift.jpeg",
  },
  {
    slug: "blush-bloom",
    name: "Blush Bloom",
    tagline: "Soft petals, sharp memory",
    family: "Floral",
    gender: "her",
    description:
      "A modern floral that never turns heavy — rose, peony and lychee over sandalwood. Feminine, clean, and quietly addictive.",
    price: 799,
    mrp: 1399,
    rating: 4.8,
    reviews: 1053,
    badge: "Bestseller",
    sizes: ["50 ml"],
    wear: "8–10 hours",
    notes: {
      top: ["Lychee", "Pink Pepper"],
      heart: ["Rose", "Peony"],
      base: ["Sandalwood", "Musk"],
    },
    collections: ["bestsellers", "summer"],
    image: "/products/blush_bloom.jpeg",
  },
  {
    slug: "promise-him",
    name: "Promise Him",
    tagline: "The gift he won't stop wearing",
    family: "Spicy Woody",
    gender: "him",
    description:
      "Cardamom and black pepper over leather and oakwood — a confident, spicy signature that reads expensive and wears all day.",
    price: 849,
    mrp: 1499,
    rating: 4.7,
    reviews: 634,
    sizes: ["50 ml"],
    wear: "10 hours",
    notes: {
      top: ["Cardamom", "Black Pepper"],
      heart: ["Leather", "Cinnamon"],
      base: ["Oakwood", "Amber"],
    },
    collections: ["new-arrivals"],
    image: "/products/promise_him1.jpeg",
  },
  {
    slug: "vanilla-goddess",
    name: "Vanilla Goddess",
    tagline: "Warm. Sweet. Divine.",
    family: "Vanilla Gourmand",
    gender: "her",
    description:
      "Bourbon vanilla whipped with caramel and jasmine — a gourmand that stays elegant, never sugary. Compliments guaranteed.",
    price: 899,
    mrp: 1599,
    rating: 4.9,
    reviews: 1387,
    badge: "Bestseller",
    sizes: ["50 ml"],
    wear: "12 hours",
    notes: {
      top: ["Caramel", "Bergamot"],
      heart: ["Bourbon Vanilla", "Jasmine"],
      base: ["Tonka", "Sandalwood", "Musk"],
    },
    collections: ["bestsellers"],
    image: "/products/vanilla_goddes.PNG",
  },
  {
    slug: "fascinating-jewel",
    name: "Fascinating Jewel",
    tagline: "Wear it like jewellery",
    family: "Fruity Floral",
    gender: "her",
    description:
      "Blackcurrant and pear sparkle over orange blossom and patchouli — bright on arrival, magnetic by evening.",
    price: 829,
    mrp: 1449,
    rating: 4.6,
    reviews: 289,
    badge: "New",
    sizes: ["50 ml"],
    wear: "8 hours",
    notes: {
      top: ["Blackcurrant", "Pear"],
      heart: ["Orange Blossom", "Jasmine"],
      base: ["Patchouli", "Vanilla"],
    },
    collections: ["new-arrivals", "summer"],
    image: "/products/fascinating_jewel.PNG",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getByCollection(key: CollectionKey): Product[] {
  return products.filter((p) => p.collections.includes(key));
}

export function getByGender(gender: Gender): Product[] {
  return products.filter(
    (p) => p.gender === gender || p.gender === "unisex",
  );
}

export function getRelated(product: Product, count = 3): Product[] {
  const scored = products
    .filter((p) => p.slug !== product.slug)
    .map((p) => ({
      p,
      score:
        p.collections.filter((c) => product.collections.includes(c)).length +
        (p.gender === product.gender ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.p);
}

export function formatPrice(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function discountPercent(product: Product): number {
  return Math.round(((product.mrp - product.price) / product.mrp) * 100);
}
