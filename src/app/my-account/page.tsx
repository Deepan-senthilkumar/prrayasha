import AccountShell from "@/components/AccountShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export default function MyAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Account"
        title="My Account"
        description="Your dashboard now feels fully connected to the main storefront, with the same calm palette, rounded surfaces, and polished spacing."
        accent="Orders, saved pieces, addresses, and profile details now live inside a consistent boutique account experience."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "My Account" }]} />
          <AccountShell activeHref="/my-account" title="Account Overview" description="A single boutique shell now supports every customer account route.">
            <div className="stats-grid">
              <div className="mini-stat"><strong>12</strong><span>Orders</span></div>
              <div className="mini-stat"><strong>4</strong><span>Wishlist Items</span></div>
              <div className="mini-stat"><strong>2</strong><span>Saved Addresses</span></div>
            </div>
          </AccountShell>
        </div>
      </section>
    </>
  );
}
