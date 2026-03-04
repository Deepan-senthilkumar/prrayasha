"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <div className="hero" style={{ cursor: "pointer" }}>
            <div className="hero-media">
                <Image
                    src="/special_collection_bg_v2.jpg"
                    alt="Prrayasha Premium Collection"
                    fill
                    priority
                    className="hero-image"
                />
            </div>

            {/* 
              We keep an invisible content layer for SEO purposes,
              containing the keywords from the banner.
            */}
            <div className="hero-content" style={{ display: "none" }}>
                <h1>Prrayasha Collections</h1>
                <h2>Discover the New Premium Collection</h2>
                <p>Elegance | Quality | Style</p>
                <p>New Arrivals - Shop Now</p>
                <span>www.prrayashacollections.com</span>
            </div>
        </div>
    );
}
