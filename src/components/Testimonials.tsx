"use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface TestimonialHeaderProps {
    label: string;
    title: string;
}

const SectionHeader = ({ label, title }: TestimonialHeaderProps) => (
    <div className="brand-styles-header">
        <span className="section-label" style={{ color: 'var(--primary)' }}>{label}</span>
        <h2 className="brand-styles-title testimonial-heading">{title}</h2>
        <div className="title-underline"></div>
    </div>
);

export default function Testimonials() {
    const reviews = [
        {
            text: "I have purchased lot of kurtis from Prayasha collections.very reasonable price .nice collections also. Jeni sister also very patience with the customers.i am very satisfied with Prayasha",
            author: "CSJ Deepa",
            detail: "Happy Client"
        },
        {
            text: "Very good fabric and reasonable price I am very satisfied to purchase prrayasha collection",
            author: "Jeyanthi RK",
            detail: "Happy Client"
        },
        {
            text: "Fashionable, comfortable, and elegant. This has become my go-to store for all my ethnic wear needs.",
            author: "Meera Reddy",
            detail: "Verified Buyer"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, [reviews.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="testimonials-section">
            <div className="testimonials-bg-layer" aria-hidden="true"></div>
            <div className="section-container">
                <SectionHeader
                    label="Our Community"
                    title="What Our Clients Say"
                />

                <div className="testimonial-slider-container">
                    <button className="slider-nav prev" onClick={prevSlide}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className="testimonial-slide">
                        <div className="testimonial-card slider-card">
                            <Quote className="quote-icon" size={40} />
                            <p className="testimonial-text slider-text">
                                {reviews[currentIndex].text}
                            </p>
                            <div className="testimonial-author">
                                <h4 className="author-name">{reviews[currentIndex].author}</h4>
                                <div className="stars author-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="author-info">{reviews[currentIndex].detail}</p>
                            </div>
                        </div>
                    </div>

                    <button className="slider-nav next" onClick={nextSlide}>
                        <ChevronRight size={24} />
                    </button>

                    <div className="slider-dots">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
