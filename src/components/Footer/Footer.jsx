import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark">M</span>

            <span>
              Mini <strong>Marvels</strong>
            </span>
          </Link>

          <p>
            Fun toys, creative stationery, and little essentials
            made for big imaginations.
          </p>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/shop?category=Stationery">
              Stationery
            </Link>
            <Link to="/shop?category=Toys">
              Toys
            </Link>
          </div>

          <div className="footer-column">
            <h3>Company</h3>

            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-column">
            <h3>Get in Touch</h3>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a href="mailto:hello@minimarvels.com">
              Email Us
            </a>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Mini Marvels. All rights reserved.</p>

        <div className="footer-bottom-links">
          <span>Privacy Policy</span>
          <span>Terms &amp; Conditions</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;