import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export default function CheckoutPage() {
  return (
    <>
      <PageHero
        eyebrow="Checkout"
        title="Checkout now feels as curated and refined as the rest of the storefront"
        description="Shipping details, final confirmation, and delivery assurance are now presented in the same boutique visual system used across the site."
        accent="The goal is a calmer final step, with fewer visual jumps between discovery, cart, and purchase."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Checkout" }]} />
          <div className="cart-layout">
            <form className="store-form-card">
              <label>
                Full Name
                <input type="text" placeholder="Shipping name" />
              </label>
              <label>
                Address
                <textarea rows={5} placeholder="Street, area, city, postal code" />
              </label>
              <label>
                Phone Number
                <input type="tel" placeholder="+91" />
              </label>
              <button type="button" className="store-cta">
                Place Order
              </button>
            </form>
            <aside className="summary-card">
              <h2>Delivery Promise</h2>
              <p>Premium packaging, careful dispatch, and a checkout surface designed to feel reassuring, polished, and easy to complete.</p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
