import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="/" className="navbar-logo">
          <span className="logo-mark">M</span>

          <span className="logo-text">
            Mini <strong>Marvels</strong>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="/" className="active">Home</a>
          <a href="/shop">Shop</a>
          <a href="/stationery">Stationery</a>
          <a href="/toys">Toys</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">

          <button className="search-button" aria-label="Search">
            🔍
          </button>

          <a href="#" className="whatsapp-button">
            Order on WhatsApp
          </a>

          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;