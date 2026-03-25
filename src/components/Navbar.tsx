"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, User, Heart, Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

import { categoryTree, siteNav } from "@/lib/storefront-data";

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

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

            <div className="logo-bar">
                <div className="logo-bar-inner">
                    <div className="logo-side-icons">
                        <a href="#" aria-label="Instagram" className="header-icon-link"><Instagram size={16} /></a>
                        <a href="#" aria-label="Facebook" className="header-icon-link"><Facebook size={16} /></a>
                        <a href="#" aria-label="Twitter" className="header-icon-link"><Twitter size={16} /></a>
                    </div>

                    <Link href="/" className="logo-container" style={{ width: 'auto', height: 'auto', display: 'flex', flexDirection: 'column' }}>
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
                    </Link>

                    <div className="logo-action-icons">
                        <Link href="/my-account" aria-label="Account" className="header-icon-link"><User size={16} /></Link>
                        <Link href="/wishlist" aria-label="Wishlist" className="header-icon-link"><Heart size={16} /></Link>
                        <Link href="/cart" aria-label="Cart" className="header-icon-link"><ShoppingBag size={16} /></Link>
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
                    {siteNav.map((item) =>
                        item.children ? (
                    <div key={item.href} className="nav-item nav-dropdown">
                        <button className="nav-link nav-link-button" type="button">
                            {item.label.toUpperCase()}
                        </button>
                        <div className="dropdown-menu">
                            <Link href={item.href} className="dropdown-link">
                                Shop All
                            </Link>
                            {categoryTree.map((category) => (
                                <Link key={category.href} href={category.href} className="dropdown-link">
                                    {category.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                        ) : (
                            <Link key={item.href} href={item.href} className="nav-link">
                                {item.label.toUpperCase()}
                            </Link>
                        ),
                    )}
                </div>
            </div>
        </nav>
    );
}
