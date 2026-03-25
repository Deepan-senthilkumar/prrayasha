import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { categoryTree, products } from "@/lib/storefront-data";

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Browse every collection through the same rich, home-page-inspired lens"
        description="From heirloom sarees to occasionwear and festive edits, the full catalog now carries the same boutique balance of softness, clarity, and detail."
        accent="Use this page as your central edit for drapes, silhouettes, and gifting-ready selections across the Prrayasha collection."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
          <div className="category-chip-row">
            {categoryTree.map((category) => (
              <a key={category.href} href={category.href} className="category-chip">
                {category.label}
              </a>
            ))}
          </div>
          <div className="product-grid-layout">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
