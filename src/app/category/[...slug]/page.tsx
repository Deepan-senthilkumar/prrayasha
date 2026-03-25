import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { findCategoryBySlugPath, getProductsByPath } from "@/lib/storefront-data";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const category = findCategoryBySlugPath(slug);

  if (!category) {
    notFound();
  }

  const items = getProductsByPath(slug);

  return (
    <>
      <PageHero
        eyebrow="Collections"
        title={category.label}
        description={category.description}
        accent="Each collection page now carries the same layered boutique feel as the home page, with softer surfaces and clearer discovery paths."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: category.label },
            ]}
          />
          {category.children?.length ? (
            <div className="category-chip-row">
              {category.children.map((child) => (
                <a key={child.href} href={child.href} className="category-chip">
                  {child.label}
                </a>
              ))}
            </div>
          ) : null}
          <div className="product-grid-layout">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
