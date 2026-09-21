import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <span className="footer-logo-mark">M</span>
            <span>
              Mini <strong>Marvels</strong>
            </span>
          </a>

          <p>
            Fun toys, creative stationery, and little essentials
            made for big imaginations.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/stationery">Stationery</a>
            <a href="/toys">Toys</a>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div className="footer-column">
            <h3>Get in Touch</h3>
            <a href="https://wa.me/923001234567">
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
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
