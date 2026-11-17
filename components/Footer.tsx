
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              O&apos;LUMI<span>.</span>
            </a>

            <p>
              Thoughtful skincare. Beautiful rituals. A little glow for every
              day.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-links">
            <h3>EXPLORE</h3>

            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#ingredients">Ingredients</a>
            <a href="#story">Our Story</a>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>SAY HELLO</h3>

            <a
              href="mailto:hello@olumi.com"
              className="footer-email"
            >
              hello@olumi.com
              <ArrowUpRight size={15} />
            </a>

            {/* Social Media */}
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
© 2026 O&apos;LUMI. All rights reserved.          </p>

          <p>
            Made with care. Made for your everyday ritual.
          </p>
        </div>

      </div>
    </footer>
  );
}
