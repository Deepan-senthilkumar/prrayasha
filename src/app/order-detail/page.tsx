import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export default function OrderDetailPage() {
  return (
    <>
      <PageHero
        eyebrow="Orders"
        title="Order Detail"
        description="Order status, delivery notes, and purchase details now sit inside the same boutique visual language used throughout the storefront."
        accent="Even utility pages now echo the warmth, spacing, and calm confidence established on the home page."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Order Detail" }]} />
          <div className="summary-card">
            <h2>PRR-24031</h2>
            <p>Delivered on March 18, 2026</p>
            <p>Emerald Kanchipuram Heirloom · Rs. 12,499</p>
          </div>
        </div>
      </section>
    </>
  );
}
