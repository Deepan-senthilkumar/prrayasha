import AccountShell from "@/components/AccountShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export default function MyProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Account"
        title="My Profile"
        description="Profile details now sit inside the same boutique account shell, so even simple updates feel part of a polished brand experience."
        accent="From sign-in to saved addresses, the account journey now feels visually connected to the home page."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "My Profile" }]} />
          <AccountShell activeHref="/my-profile" title="Profile Details" description="Everything here now follows the same rounded, editorial account styling.">
            <form className="store-form-card compact">
              <label>
                Full Name
                <input type="text" defaultValue="Prrayasha Customer" />
              </label>
              <label>
                Email Address
                <input type="email" defaultValue="curated@prrayasha.in" />
              </label>
            </form>
          </AccountShell>
        </div>
      </section>
    </>
  );
}
