import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Visit, call, or send us a message"
        description="Reach out for styling help, order assistance, gifting support, or store visit guidance through a contact page that now matches the warmth of the home experience."
        accent="The same boutique tone now extends to service pages, so support feels intentional and polished instead of separate from the storefront."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="contact-grid-modern">
            <article className="story-card story-card-feature">
              <h2>Prrayasha Collections</h2>
              <p>Provident Cosmo City, DR Abdul Kalam Road, Pudhupakkam Village, Chengalpet 603103</p>
              <div className="contact-lines">
                <p>Phone: +91 91590 24967</p>
                <p>Email: prayashacollections@gmail.com</p>
                <p>Timings: 10:00 AM to 8:00 PM, every day</p>
              </div>
            </article>

            <form className="store-form-card">
              <label>
                Full Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email Address
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea rows={6} placeholder="Tell us what you are looking for" />
              </label>
              <button type="button" className="store-cta">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
