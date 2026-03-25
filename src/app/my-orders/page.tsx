import AccountShell from "@/components/AccountShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export default function MyOrdersPage() {
  return (
    <>
      <PageHero
        eyebrow="Account"
        title="My Orders"
        description="Order history now follows the same home-page-inspired styling, making post-purchase tracking feel more premium and easier to scan."
        accent="Customer service pages should feel as intentional as the storefront itself, and the orders area now reflects that."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "My Orders" }]} />
          <AccountShell activeHref="/my-orders" title="Recent Orders" description="These account routes now share one polished structure and one visual language.">
            <div className="list-stack">
              <div className="list-card"><strong>PRR-24031</strong><span>Delivered · Rs. 12,499</span></div>
              <div className="list-card"><strong>PRR-24018</strong><span>Processing · Rs. 8,990</span></div>
            </div>
          </AccountShell>
        </div>
      </section>
    </>
  );
}
