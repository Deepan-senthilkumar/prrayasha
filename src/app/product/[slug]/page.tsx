import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import { getProductBySlug, products } from "@/lib/storefront-data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, 4);

  return (
    <section className="store-page-section product-page-section">
      <div className="store-page-shell">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop", href: "/shop" },
            { label: product.category },
            { label: product.name },
          ]}
        />

        <div className="product-detail-layout">
          <div className="product-gallery-card">
            <div className="product-main-image">
              <Image src={product.image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="product-thumb-row">
              {(product.gallery ?? [product.image]).map((image) => (
                <div key={image} className="product-thumb">
                  <Image src={image} alt={product.name} fill sizes="120px" />
                </div>
              ))}
            </div>
          </div>

          <article className="product-content-card">
            <p className="section-kicker">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="product-rating-line">Rating {product.rating} / 5</p>
            <p className="product-price-line">
              <strong>Rs. {product.price.toLocaleString("en-IN")}</strong>
              {product.regularPrice ? <span>Rs. {product.regularPrice.toLocaleString("en-IN")}</span> : null}
            </p>
            <p className="product-body">{product.description}</p>

            <div className="detail-pill-group">
              {(product.colors ?? []).map((color) => (
                <span key={color} className="detail-pill">{color}</span>
              ))}
            </div>

            <div className="detail-copy-block">
              <h2>Product Details</h2>
              <p>{product.fabric}</p>
              <ul className="store-list">
                {(product.details ?? []).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="product-actions-row">
              <a href="/cart" className="store-cta">Add to Cart</a>
              <a href="/wishlist" className="store-cta store-cta-secondary">Wishlist</a>
            </div>
          </article>
        </div>

        {related.length ? (
          <div className="related-block">
            <div className="section-heading-row">
              <div>
                <p className="section-kicker">You May Also Like</p>
                <h2>Related collections</h2>
              </div>
            </div>
            <div className="product-grid-layout">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
