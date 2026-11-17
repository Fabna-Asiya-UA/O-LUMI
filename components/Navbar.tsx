
"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          O&apos;LUMI<span>.</span>
        </a>

        <nav className="navbar-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            href="#shop"
            aria-label="Shop products"
            className="navbar-cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </a>

          <a href="#shop" className="navbar-shop-button">
            Shop now <ArrowUpRight size={14} />
          </a>

          <button
            className="navbar-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="navbar-mobile">
          <div className="navbar-mobile-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
