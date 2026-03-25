type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  accent?: string;
};

export default function PageHero({ eyebrow, title, description, accent }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-shell">
        <div className="page-hero-grid">
          <div className="page-hero-copy">
            {eyebrow ? <p className="page-hero-eyebrow">{eyebrow}</p> : null}
            <h1 className="page-hero-title">{title}</h1>
            <p className="page-hero-description">{description}</p>
          </div>
          <div className="page-hero-aside">
            <div className="page-hero-badge">Prrayasha Edit</div>
            <p>{accent ?? "Curated drapes, festive silhouettes, and a boutique service rhythm that stays consistent across every page."}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
