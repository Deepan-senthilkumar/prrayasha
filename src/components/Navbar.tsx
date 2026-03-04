"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, User, Heart, Menu, X, Instagram, Facebook, Twitter } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const collectionItems = ["Kurti Collection", "Night Wears", "Our Brand Prrayasha"];

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

            <div className="logo-bar">
                <div className="logo-bar-inner">
                    <div className="logo-side-icons">
                        <a href="#" aria-label="Instagram" className="header-icon-link"><Instagram size={16} /></a>
                        <a href="#" aria-label="Facebook" className="header-icon-link"><Facebook size={16} /></a>
                        <a href="#" aria-label="Twitter" className="header-icon-link"><Twitter size={16} /></a>
                    </div>

                    <a href="/" className="logo-container" style={{ width: 'auto', height: 'auto', display: 'flex', flexDirection: 'column' }}>
                        <span style={{
                            fontFamily: "'Aclonica Pro', 'Aclonica', sans-serif",
                            fontSize: '19px',
                            fontWeight: '500',
                            color: '#ffffff',
                            letterSpacing: '0.05em',
                            lineHeight: '1.2',
                            whiteSpace: 'nowrap'
                        }}>
                            <span className="logo-highlight">P</span>RRAYASHA <span className="logo-highlight">C</span>OLLECTIONS
                        </span>
                    </a>

                    <div className="logo-action-icons">
                        <a href="#" aria-label="Account" className="header-icon-link"><User size={16} /></a>
                        <a href="#" aria-label="Wishlist" className="header-icon-link"><Heart size={16} /></a>
                        <a href="#" aria-label="Cart" className="header-icon-link"><ShoppingBag size={16} /></a>
                    </div>
                </div>
            </div>

            <div className="navbar-container">
                <button
                    className="mobile-menu-btn"
                    type="button"
                    aria-label="Toggle navigation menu"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
                    <a href="#" className="nav-link">HOME</a>
                    <a href="#" className="nav-link">ABOUT</a>

                    <div className="nav-item nav-dropdown">
                        <button className="nav-link nav-link-button" type="button">
                            ALL COLLECTIONS
                        </button>
                        <div className="dropdown-menu">
                            {collectionItems.map((item) => (
                                <a key={item} href="#" className="dropdown-link">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <a href="#" className="nav-link">OUR BRAND</a>
                    <a href="#" className="nav-link">CONTACT</a>
                </div>
            </div>
        </nav>
    );
}
