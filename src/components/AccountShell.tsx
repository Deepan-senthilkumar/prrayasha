import Link from "next/link";
import { accountLinks } from "@/lib/storefront-data";

export default function AccountShell({
  activeHref,
  title,
  description,
  children,
}: {
  activeHref: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="account-shell">
      <aside className="account-sidebar-card">
        <div className="account-profile-chip">
          <span>P</span>
          <div>
            <strong>Prrayasha Customer</strong>
            <p>curated@prrayasha.in</p>
          </div>
        </div>
        <div className="account-sidebar-note">
          <p>Everything from orders to saved pieces now follows the same calm boutique styling as the home page.</p>
        </div>
        <nav className="account-nav-grid">
          {accountLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`account-nav-link${activeHref === link.href ? " active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="account-main-card">
        <div className="account-main-head">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
