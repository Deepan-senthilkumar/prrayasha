"use client";

import Image from "next/image";

const categoryList = [
    { name: "3 Piece kurti Set", image: "/images/RSM2609.jpeg" },
    { name: "2 Piece Kurti Set", image: "/images/RSM2608.jpeg" },
    { name: "Chiffon Collections", image: "/images/RSM2606.jpeg" },
    { name: "Coord-Sets", image: "/images/RSM2612.jpeg" }
];

export default function Categories() {
    return (
        <section className="category-circles-section">
            <div className="section-container">
                <div className="brand-styles-header" style={{ marginBottom: '3rem' }}>
                    <h2 className="brand-styles-title">Our Brand Prrayasha</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="category-circles-container">
                    {categoryList.map((cat, index) => (
                        <div key={index} className="category-circle-item">
                            <div className="circle-image-wrapper">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <button className="category-pill-btn">
                                {cat.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
