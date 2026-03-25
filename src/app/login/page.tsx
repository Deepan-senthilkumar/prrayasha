"use client";

import { useState } from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <>
      <PageHero
        eyebrow="Account"
        title="Sign in or create your account in the same calm boutique setting"
        description="Your account journey now feels fully part of the storefront, with softer surfaces, cleaner forms, and the same design language seen on the home page."
        accent="A polished account entry point makes it easier to return to saved pieces, order updates, and future festive purchases."
      />
      <section className="store-page-section">
        <div className="store-page-shell">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Login" }]} />
          <div className="auth-card">
            <div className="auth-toggle-row">
              <button
                type="button"
                className={`auth-toggle${mode === "login" ? " active" : ""}`}
                onClick={() => setMode("login")}
              >
                Login
              </button>
              <button
                type="button"
                className={`auth-toggle${mode === "register" ? " active" : ""}`}
                onClick={() => setMode("register")}
              >
                Register
              </button>
            </div>

            {mode === "login" ? (
              <form className="store-form-card compact">
                <label>
                  Email Address
                  <input type="email" placeholder="Enter your email" />
                </label>
                <label>
                  Password
                  <input type="password" placeholder="Enter your password" />
                </label>
                <button type="button" className="store-cta">
                  Login
                </button>
              </form>
            ) : (
              <form className="store-form-card compact">
                <label>
                  Full Name
                  <input type="text" placeholder="Enter your full name" />
                </label>
                <label>
                  Email Address
                  <input type="email" placeholder="Enter your email" />
                </label>
                <label>
                  Phone Number
                  <input type="tel" placeholder="Enter your phone number" />
                </label>
                <label>
                  Password
                  <input type="password" placeholder="Create a password" />
                </label>
                <button type="button" className="store-cta">
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
