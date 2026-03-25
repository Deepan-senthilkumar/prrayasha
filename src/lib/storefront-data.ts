export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type CategoryNode = {
  label: string;
  href: string;
  slug: string;
  image: string;
  description: string;
  children?: CategoryNode[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryPath: string[];
  description: string;
  price: number;
  regularPrice?: number;
  image: string;
  gallery?: string[];
  rating: number;
  badge?: string;
  colors?: string[];
  sizes?: string[];
  fabric?: string;
  details?: string[];
  featured?: boolean;
  newArrival?: boolean;
};

export type Testimonial = {
  name: string;
  quote: string;
  role: string;
};

export type PolicyContent = {
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

export const siteNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Collections",
    href: "/shop",
    children: [
      { label: "Sarees", href: "/category/sarees" },
      { label: "Women", href: "/category/women" },
      { label: "Mens", href: "/category/mens" },
      { label: "Kids", href: "/category/kids" },
    ],
  },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export const categoryTree: CategoryNode[] = [
  {
    label: "Sarees",
    href: "/category/sarees",
    slug: "sarees",
    image: "/images/RSM2604.jpeg",
    description: "Pure silks, bridal drapes, and heirloom weaves.",
    children: [
      {
        label: "Kanchipuram Silk",
        href: "/category/sarees/kanchipuram-silk",
        slug: "kanchipuram-silk",
        image: "/images/RSM2625.jpeg",
        description: "Rich zari borders and ceremonial colour stories.",
      },
      {
        label: "Soft Silk",
        href: "/category/sarees/soft-silk",
        slug: "soft-silk",
        image: "/images/RSM2608.jpeg",
        description: "Fluid drape with festive shine and lighter weight.",
      },
      {
        label: "Wedding Edit",
        href: "/category/sarees/wedding-edit",
        slug: "wedding-edit",
        image: "/images/RSM2615.jpeg",
        description: "Statement sarees for muhurtham and reception looks.",
      },
    ],
  },
  {
    label: "Women",
    href: "/category/women",
    slug: "women",
    image: "/images/LAWS2607.jpeg",
    description: "Curated ethnic wear for celebrations and everyday grace.",
    children: [
      {
        label: "Anarkalis",
        href: "/category/women/anarkalis",
        slug: "anarkalis",
        image: "/images/LAWS2605.jpeg",
        description: "Flowing silhouettes with elevated festive detailing.",
      },
      {
        label: "Kurtis",
        href: "/category/women/kurtis",
        slug: "kurtis",
        image: "/images/LAK2614.jpeg",
        description: "Polished occasion kurtis in soft jewel tones.",
      },
    ],
  },
  {
    label: "Mens",
    href: "/category/mens",
    slug: "mens",
    image: "/images/CNS2407.jpg",
    description: "Traditional sets and tailored festive essentials.",
    children: [
      {
        label: "Kurtas",
        href: "/category/mens/kurtas",
        slug: "kurtas",
        image: "/images/1674.jpeg",
        description: "Wedding-ready kurtas in muted ceremonial shades.",
      },
    ],
  },
  {
    label: "Kids",
    href: "/category/kids",
    slug: "kids",
    image: "/images/1670.jpeg",
    description: "Playful ethnic edits for little celebrations.",
    children: [
      {
        label: "Pattu Pavadai",
        href: "/category/kids/pattu-pavadai",
        slug: "pattu-pavadai",
        image: "/images/RWS2602.jpeg",
        description: "Classic festivewear for birthdays and family events.",
      },
    ],
  },
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "emerald-kanchipuram-heirloom",
    name: "Emerald Kanchipuram Heirloom",
    category: "Sarees",
    categoryPath: ["sarees", "kanchipuram-silk"],
    description:
      "A deep emerald silk saree with temple zari borders and a rich ceremonial fall.",
    price: 12499,
    regularPrice: 14899,
    image: "/images/RSM2625.jpeg",
    gallery: ["/images/RSM2625.jpeg", "/images/RSM2604.jpeg", "/images/RSM2608.jpeg"],
    rating: 4.9,
    badge: "Best Seller",
    colors: ["Emerald", "Maroon", "Antique Gold"],
    sizes: ["Free Size"],
    fabric: "Pure Kanchipuram Silk",
    details: [
      "Handpicked bridal-grade zari finish",
      "Comes with matching blouse piece",
      "Ideal for weddings, receptions, and gifting",
    ],
    featured: true,
  },
  {
    id: "p2",
    slug: "rose-soft-silk-celebration",
    name: "Rose Soft Silk Celebration",
    category: "Sarees",
    categoryPath: ["sarees", "soft-silk"],
    description:
      "A luminous rose-toned soft silk saree designed for elegant festive dressing.",
    price: 8990,
    regularPrice: 10450,
    image: "/images/RSM2608.jpeg",
    gallery: ["/images/RSM2608.jpeg", "/images/RSM2606.jpeg", "/images/RSM2603.jpeg"],
    rating: 4.8,
    badge: "New",
    colors: ["Rose Pink", "Plum", "Champagne"],
    sizes: ["Free Size"],
    fabric: "Soft Silk Blend",
    details: [
      "Lightweight festive drape",
      "Soft sheen with woven pallu",
      "Perfect for day weddings and poojas",
    ],
    featured: true,
    newArrival: true,
  },
  {
    id: "p3",
    slug: "scarlet-wedding-zari-edit",
    name: "Scarlet Wedding Zari Edit",
    category: "Sarees",
    categoryPath: ["sarees", "wedding-edit"],
    description:
      "A striking scarlet bridal drape with heritage motifs and celebration-ready structure.",
    price: 15990,
    regularPrice: 17990,
    image: "/images/RSM2615.jpeg",
    gallery: ["/images/RSM2615.jpeg", "/images/RSM2602.jpeg", "/images/RSM2601.jpeg"],
    rating: 5,
    badge: "Bridal",
    colors: ["Scarlet", "Rust Red", "Gold"],
    sizes: ["Free Size"],
    fabric: "Wedding Silk",
    details: [
      "Heavy pallu and border detailing",
      "Structured bridal drape",
      "Pairs beautifully with antique jewelry",
    ],
    featured: true,
  },
  {
    id: "p4",
    slug: "lavender-anarkali-grace",
    name: "Lavender Anarkali Grace",
    category: "Women",
    categoryPath: ["women", "anarkalis"],
    description:
      "A flowing lavender anarkali with statement sleeves and soft festive shimmer.",
    price: 5290,
    regularPrice: 6490,
    image: "/images/LAWS2605.jpeg",
    gallery: ["/images/LAWS2605.jpeg", "/images/LAWS2601.jpeg", "/images/LAWS2607.jpeg"],
    rating: 4.7,
    colors: ["Lavender", "Mauve", "Ivory"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Silk Blend",
    details: [
      "Comfortable structured bodice",
      "Comes with dupatta styling option",
      "Designed for intimate festive gatherings",
    ],
    featured: true,
  },
  {
    id: "p5",
    slug: "ivory-kurti-signature",
    name: "Ivory Kurti Signature",
    category: "Women",
    categoryPath: ["women", "kurtis"],
    description:
      "An understated ivory kurti with polished embroidery for elevated daywear.",
    price: 3390,
    regularPrice: 4290,
    image: "/images/LAK2614.jpeg",
    gallery: ["/images/LAK2614.jpeg", "/images/LAK2618.jpeg", "/images/LAK2617.jpeg"],
    rating: 4.6,
    colors: ["Ivory", "Sand", "Blush"],
    sizes: ["S", "M", "L", "XL"],
    fabric: "Raw Silk Blend",
    details: [
      "Elegant straight silhouette",
      "Light embroidery detailing",
      "Easy transition from brunch to occasion wear",
    ],
  },
  {
    id: "p6",
    slug: "maroon-festive-kurta-set",
    name: "Maroon Festive Kurta Set",
    category: "Mens",
    categoryPath: ["mens", "kurtas"],
    description:
      "A refined maroon kurta set with a polished fit for engagement and festive evenings.",
    price: 4890,
    regularPrice: 5790,
    image: "/images/CNS2407.jpg",
    gallery: ["/images/CNS2407.jpg", "/images/1674.jpeg", "/images/1670.jpeg"],
    rating: 4.5,
    colors: ["Maroon", "Coffee Brown", "Olive"],
    sizes: ["M", "L", "XL", "XXL"],
    fabric: "Silk Cotton",
    details: [
      "Tailored ceremonial fit",
      "Subtle woven texture",
      "Ideal for sangeet and family functions",
    ],
  },
  {
    id: "p7",
    slug: "sunlit-pattu-pavadai",
    name: "Sunlit Pattu Pavadai",
    category: "Kids",
    categoryPath: ["kids", "pattu-pavadai"],
    description:
      "A vibrant traditional set for little celebrations with an easy festive finish.",
    price: 2690,
    regularPrice: 3290,
    image: "/images/RWS2602.jpeg",
    gallery: ["/images/RWS2602.jpeg", "/images/1000087919.jpg", "/images/image.png"],
    rating: 4.8,
    colors: ["Sun Yellow", "Pink", "Royal Blue"],
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    fabric: "Pattu Silk Blend",
    details: [
      "Comfort-led festive set",
      "Bright woven border details",
      "Great for birthdays and family events",
    ],
  },
  {
    id: "p8",
    slug: "midnight-soft-silk-drape",
    name: "Midnight Soft Silk Drape",
    category: "Sarees",
    categoryPath: ["sarees", "soft-silk"],
    description:
      "A midnight navy saree with a refined contrast border for evening occasionwear.",
    price: 9490,
    image: "/images/RSM2604.jpeg",
    gallery: ["/images/RSM2604.jpeg", "/images/RSM2609.jpeg", "/images/RSM2602.jpeg"],
    rating: 4.7,
    colors: ["Navy", "Wine", "Graphite"],
    sizes: ["Free Size"],
    fabric: "Soft Silk",
    details: [
      "Dramatic evening palette",
      "Comfortable all-event drape",
      "Subtle zari accents",
    ],
    newArrival: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Harini V",
    role: "Bride, Chennai",
    quote:
      "The collection feels premium and thoughtful. It has the richness of a silk house, but the experience now feels modern and calm.",
  },
  {
    name: "Nivetha S",
    role: "Boutique Shopper",
    quote:
      "I loved how easy it was to move from categories to product pages. The whole site now carries one visual identity without losing the heritage feel.",
  },
  {
    name: "Pranav R",
    role: "Festive Buyer",
    quote:
      "The redesigned pages feel more complete. Every section looks connected, and the product storytelling is much clearer.",
  },
];

export const accountLinks = [
  { label: "Dashboard", href: "/my-account" },
  { label: "My Orders", href: "/my-orders" },
  { label: "My Profile", href: "/my-profile" },
  { label: "Addresses", href: "/my-addresses" },
  { label: "My Reviews", href: "/my-reviews" },
  { label: "Wishlist", href: "/wishlist" },
];

export const policies: Record<string, PolicyContent> = {
  "privacy-policy": {
    title: "Privacy Policy",
    intro: "Your information is used only to support ordering, delivery, and service communication.",
    sections: [
      {
        heading: "What We Collect",
        body: [
          "We collect your name, phone number, shipping address, and email when you place an order or contact us.",
          "We may also collect browsing behavior inside the storefront to improve page experience and merchandising.",
        ],
      },
      {
        heading: "How We Use It",
        body: [
          "We use your information to process purchases, coordinate deliveries, and answer support requests.",
          "We never sell customer data, and we keep communication limited to relevant service updates and occasional collection announcements.",
        ],
      },
    ],
  },
  "terms-conditions": {
    title: "Terms & Conditions",
    intro: "Using this storefront means you agree to our ordering, shipping, and service terms.",
    sections: [
      {
        heading: "Orders",
        body: [
          "Orders are confirmed only after payment is completed and stock is verified.",
          "Product colors may vary slightly based on screen rendering and natural fabric photography.",
        ],
      },
      {
        heading: "Availability",
        body: [
          "Handcrafted collections may occasionally go out of stock without prior notice.",
          "If an item becomes unavailable after purchase, the order will be refunded or replaced after customer approval.",
        ],
      },
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    intro: "We aim to dispatch ready products quickly while keeping packaging premium and secure.",
    sections: [
      {
        heading: "Dispatch Timeline",
        body: [
          "Ready-to-ship products are typically dispatched within 2 to 4 working days.",
          "Made-to-order and embellished pieces may take longer depending on finishing requirements.",
        ],
      },
      {
        heading: "Delivery Windows",
        body: [
          "Domestic orders usually arrive within 5 to 7 working days after dispatch.",
          "Delivery timelines can vary during peak festive periods or due to courier delays.",
        ],
      },
    ],
  },
  "exchange-policy": {
    title: "Exchange Policy",
    intro: "We support exchange requests for eligible products when the item is unused and returned promptly.",
    sections: [
      {
        heading: "Eligibility",
        body: [
          "Exchange requests must be raised within 48 hours of delivery.",
          "Products should remain unworn, unwashed, and returned with original tags and packaging.",
        ],
      },
      {
        heading: "Exclusions",
        body: [
          "Customized blouses, altered pieces, and clearance items are not eligible for exchange.",
          "Minor colour variation from photography is not considered a defect.",
        ],
      },
    ],
  },
  "fabric-care": {
    title: "Fabric Care",
    intro: "Silks and occasionwear retain their finish best when handled gently and stored carefully.",
    sections: [
      {
        heading: "Storage",
        body: [
          "Store silks folded in a breathable fabric bag away from direct sunlight.",
          "Refold sarees occasionally to prevent stress on zari borders.",
        ],
      },
      {
        heading: "Cleaning",
        body: [
          "Dry clean premium silk garments and avoid harsh detergents or direct perfume contact.",
          "Always air garments after use before storing them back in the wardrobe.",
        ],
      },
    ],
  },
  cancellation: {
    title: "Cancellation Policy",
    intro: "Order cancellations are supported before dispatch and subject to payment gateway confirmation.",
    sections: [
      {
        heading: "Before Dispatch",
        body: [
          "Orders may be cancelled before dispatch by contacting support with your order reference.",
          "Refunds are initiated to the original payment method after cancellation is confirmed.",
        ],
      },
      {
        heading: "After Dispatch",
        body: [
          "Orders already shipped cannot be cancelled, but eligible items may qualify for exchange support.",
          "Any refund processing timeline depends on the payment provider and bank turnaround time.",
        ],
      },
    ],
  },
};

export function findCategoryBySlugPath(slugs: string[]): CategoryNode | undefined {
  const [first, second] = slugs;
  const root = categoryTree.find((category) => category.slug === first);

  if (!root) {
    return undefined;
  }

  if (!second) {
    return root;
  }

  return root.children?.find((child) => child.slug === second);
}

export function getProductsByPath(slugs: string[]) {
  if (slugs.length === 0) {
    return products;
  }

  return products.filter((product) =>
    slugs.every((slug, index) => product.categoryPath[index] === slug),
  );
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function searchProducts(query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return products;
  }

  return products.filter((product) =>
    [product.name, product.category, product.description, product.fabric]
      .filter(Boolean)
      .some((value) => value?.toLowerCase().includes(normalized)),
  );
}
