"use client";

import Image from "next/image";
import { ArrowUpRight, ShoppingBag, Eye, Heart } from "lucide-react";

interface ProductCardProps {
    price: string;
    discount: string;
    name: string;
    category: string;
    image: string;
    variants?: string[];
}

export const ProductCard = ({ price, discount, name, category, image, variants }: ProductCardProps) => (
    <div className="product-card">
        {(price || discount) && (
            <div className="price-tag">
                {price && <span className="price">{price}</span>}
                {discount && <span className="discount-badge">{discount}</span>}
            </div>
        )}

        <div className="product-image-container">
            <Image
                src={image}
                alt={name}
                fill
                className="product-image"
            />

            {variants && variants.length > 0 && (
                <div className="variants-overlay">
                    <p style={{ fontSize: '10px', fontWeight: '900', color: '#000', marginBottom: '8px', textTransform: 'uppercase' }}>Available Variants</p>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', justifyContent: 'center' }}>
                        {variants.map(v => (
                            <span key={v} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #36533f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', background: 'white', color: '#1a1210' }}>
                                {v}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons Row */}
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <button className="product-action-btn">
                            <ShoppingBag size={14} />
                        </button>
                        <button className="product-action-btn">
                            <Eye size={14} />
                        </button>
                        <button className="product-action-btn">
                            <Heart size={14} />
                        </button>
                    </div>
                </div>
            )}
        </div>

        <div className="product-info">
            <h4>{name}</h4>
            <p className="product-category">{category}</p>
        </div>
    </div>
);

const PromoCard = ({ image, title }: { image: string; title: string }) => (
    <div className="promo-card">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        <div className="promo-overlay"></div>
        <div className="promo-content">
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem', maxWidth: '200px' }}>{title}</h3>
            <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.5)', padding: '0.5rem 1.5rem', borderRadius: '100px', color: 'white', textTransform: 'uppercase', fontSize: '11px', fontWeight: '700' }}>
                Shop Now <ArrowUpRight size={16} />
            </button>
        </div>
    </div>
);

export default function ProductSection() {
    const products = [
        {
            price: "₹699.00",
            discount: "New",
            name: "Long Anarkali With Shawl LAWS2608",
            category: "ANARKALI SET",
            image: "/images/RSM2606.jpeg",
            variants: ["M", "L"]
        },
        {
            price: "₹699.00",
            discount: "New",
            name: "Long Anarkali With Shawl LAWS2607",
            category: "ANARKALI SET",
            image: "/images/RSM2608.jpeg",
            variants: ["M", "L", "2XL"]
        },
        {
            price: "₹699.00",
            discount: "New",
            name: "Long Anarkali With Shawl LAWS2605",
            category: "ANARKALI SET",
            image: "/images/RSM2609.jpeg",
            variants: ["M"]
        },
        {
            price: "₹550.00",
            discount: "Sale",
            name: "Long Anarkali LA2618",
            category: "ANARKALI",
            image: "/images/RSM2612.jpeg",
            variants: ["L", "2XL"]
        },
        {
            price: "₹550.00",
            discount: "Sale",
            name: "Long Anarkali LA2617",
            category: "ANARKALI",
            image: "/images/RSM2625.jpeg",
            variants: ["M", "L"]
        },
        {
            price: "₹550.00",
            discount: "Sale",
            name: "Long Anarkali LA2614",
            category: "ANARKALI",
            image: "/images/RSM2626.jpeg",
            variants: ["M", "L"]
        }
    ];

    return (
        <section className="product-section">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-title">
                        <h2>Shop Every Day</h2>
                    </div>
                    <button style={{ border: '2px solid #1a1210', padding: '0.75rem 2rem', borderRadius: '100px', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        More Collection <ArrowUpRight size={16} />
                    </button>
                </div>

                <div className="product-grid">
                    <PromoCard image="/images/style%201.jpg" title="Trending Now Only This Weekend!" />
                    {products.slice(0, 3).map((p, i) => <ProductCard key={i} {...p} />)}
                </div>

                <div className="product-grid">
                    <PromoCard image="/images/style%203.jpg" title="Exclusive Seasonal Deals" />
                    {products.slice(3, 6).map((p, i) => <ProductCard key={i + 3} {...p} />)}
                </div>
            </div>
        </section>
    );
}

