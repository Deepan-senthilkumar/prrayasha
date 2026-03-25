import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/storefront-data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="store-product-card">
      <Link href={`/product/${product.slug}`} className="store-product-media">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 25vw" />
        <span className="store-product-shine" />
        {product.badge ? <span className="store-product-badge">{product.badge}</span> : null}
      </Link>
      <div className="store-product-copy">
        <p className="store-product-category">{product.category}</p>
        <h3>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="store-product-text">{product.description}</p>
        <div className="store-product-footer">
          <div>
            <strong>Rs. {product.price.toLocaleString("en-IN")}</strong>
            {product.regularPrice ? (
              <span>Rs. {product.regularPrice.toLocaleString("en-IN")}</span>
            ) : null}
          </div>
          <Link href={`/product/${product.slug}`} className="store-cta store-cta-secondary">
            Explore
          </Link>
        </div>
      </div>
    </article>
  );
}
