import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/storefront-data";

export default function WishlistPage() {
  return (
    <>
      <PageHero
        eyebrow="Wishlist"
        title="Saved favourites, presented with the same richness as the main collection pages"
        description="Wishlist items now live inside the same home-page-inspired design system, making it easier to revisit and compare your favourite finds."
        accent="The saved-pieces flow now feels like part of the boutique browsing experience rather than a separate utility page."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Wishlist" }]} />
          <div className="product-grid-layout">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
