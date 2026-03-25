import AccountShell from "@/components/AccountShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export default function MyAddressesPage() {
  return (
    <>
      <PageHero
        eyebrow="Account"
        title="My Addresses"
        description="Saved delivery locations now sit inside the same boutique account system, with cleaner hierarchy and more consistent spacing."
        accent="Address management is now part of a calmer, more cohesive account experience instead of feeling like a utility-only screen."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "My Addresses" }]} />
          <AccountShell activeHref="/my-addresses" title="Saved Addresses" description="A reusable account shell keeps all member pages visually aligned.">
            <div className="list-stack">
              <div className="list-card"><strong>Home</strong><span>Chengalpet, Tamil Nadu 603103</span></div>
              <div className="list-card"><strong>Office</strong><span>OMR, Chennai 600097</span></div>
            </div>
          </AccountShell>
        </div>
      </section>
    </>
  );
}
