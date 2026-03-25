"use client";

import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="slim-footer"
            style={{
                position: "relative",
                backgroundColor: "#36533f",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                color: "white",
                borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            <div style={{ padding: "1rem 2rem" }}>
                <div
                    className="section-container"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "2rem",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flex: "1" }}>
                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                background: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                                padding: "4px",
                            }}
                        >
                            <Image src="/logo.jpg" alt="Prrayasha Logo" width={60} height={60} />
                        </div>
                        <div>
                            <h4 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "4px", letterSpacing: "0.05em" }}>
                                Prrayasha Collections
                            </h4>
                            <p style={{ fontSize: "11px", maxWidth: "350px", lineHeight: "1.4" }}>
                                Provident Cosmo City, DR Abdul Kalam Road, <br></br>Pudhupakkam Village, Chengalpet 603103
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            flex: "1 , 1 , 250px",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "",
                            justifyContent: "flex-start",
                            gap: "0.35rem",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "rgba(255,255,255,0.92)",
                                letterSpacing: "0.02em",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.4rem",
                            }}
                        >
                            <Phone size={14} />
                            +91 91590 24967
                        </p>
                        <p
                            style={{
                                fontSize: "12px",
                                fontWeight: "500",
                                color: "rgba(255,255,255,0.85)",
                                letterSpacing: "0.02em",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.4rem",
                            }}
                        >
                            <Mail size={14} />
                            prayashacollections@gmail.com
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "1.5rem", flex: "1", justifyContent: "flex-end", alignItems: "center" }}>
                        <a href="#" style={{ transition: "opacity 0.3s" }} className="hover:opacity-70">
                            <Facebook size={20} />
                        </a>
                        <a href="#" style={{ transition: "opacity 0.3s" }} className="hover:opacity-70">
                            <Instagram size={20} />
                        </a>
                        <a href="#" style={{ transition: "opacity 0.3s" }} className="hover:opacity-70">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                    padding: "0.8rem 1rem",
                }}
            >
                <div
                    className="section-container"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                    }}
                >
                    <p style={{ fontSize: "12px", fontWeight: "500", color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em" }}>
                        &copy; Prrayasha Collections {currentYear}. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-end", fontSize: "11px", color: "rgba(255,255,255,0.75)" }}>
                        <Link href="/privacy-policy">Privacy</Link>
                        <Link href="/shipping-policy">Shipping</Link>
                        <Link href="/exchange-policy">Exchange</Link>
                        <Link href="/terms-conditions">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
