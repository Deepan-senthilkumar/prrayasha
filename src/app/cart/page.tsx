import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import { products } from "@/lib/storefront-data";

export default function CartPage() {
  const items = products.slice(0, 2);
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <PageHero
        eyebrow="Cart"
        title="Review your selected pieces in a cart experience styled to match the storefront"
        description="The cart now carries the same warm neutrals, measured spacing, and calm purchase flow established on the home page."
        accent="From product discovery to checkout, the journey now feels continuous instead of splitting into a generic utility screen."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
          <div className="cart-layout">
            <div className="cart-items-card">
              {items.map((item) => (
                <article key={item.id} className="cart-item-row">
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.category}</p>
                  </div>
                  <span>Qty 1</span>
                  <strong>Rs. {item.price.toLocaleString("en-IN")}</strong>
                </article>
              ))}
            </div>
            <aside className="summary-card">
              <h2>Order Summary</h2>
              <div className="summary-line">
                <span>Subtotal</span>
                <strong>Rs. {subtotal.toLocaleString("en-IN")}</strong>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <strong>Free</strong>
              </div>
              <div className="summary-line">
                <span>Packaging</span>
                <strong>Boutique Gift Wrap</strong>
              </div>
              <a href="/checkout" className="store-cta">
                Proceed to Checkout
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
