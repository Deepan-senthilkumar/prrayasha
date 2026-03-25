import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A boutique house for festive dressing, heirloom silks, and elegant everyday celebration"
        description="Prrayasha brings together rich fabrics, soft editorial styling, and a warm in-store sensibility so every visit feels considered from discovery to checkout."
        accent="The home page introduced the tone: grounded greens, warm neutrals, and a polished boutique calm. These inner pages now continue that same language."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <div className="two-column-story">
            <article className="story-card story-card-feature">
              <p className="section-kicker">Heritage</p>
              <h2>Every collection is presented with the same softness, clarity, and ceremonial richness seen on the home page.</h2>
              <p>
                We built this storefront around the feeling of walking into a refined silk and occasionwear boutique:
                calm guidance, rich visuals, and enough detail to shop with confidence.
              </p>
              <p>
                From collection pages to customer care flows, the experience now stays visually connected,
                with rounded surfaces, editorial spacing, and a stronger sense of brand continuity.
              </p>
            </article>

            <article className="story-card">
              <p className="section-kicker">Signature Details</p>
              <ul className="store-list">
                <li>Curated product stories with warmer, boutique-led copy.</li>
                <li>Collection, product, cart, account, and support pages all share one design system.</li>
                <li>Rounded cards, layered hero surfaces, and home-page-inspired color balance throughout.</li>
                <li>A calmer browsing flow for discovery, gifting, and festive shopping.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
