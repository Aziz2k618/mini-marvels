import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";


import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">M</span>

          <span className="logo-text">
            Mini <strong>Marvels</strong>
          </span>
        </Link>

        {/* Navigation */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <Link
            to="/shop"
            className={
              location.pathname === "/shop" && location.search === ""
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Shop
          </Link>

          <Link
            to="/shop?category=Stationery"
            className={
              location.pathname === "/shop" &&
              location.search === "?category=Stationery"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Stationery
          </Link>

          <Link
            to="/shop?category=Toys"
            className={
              location.pathname === "/shop" &&
              location.search === "?category=Toys"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Toys
          </Link>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          {/* Mobile CTA */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="mobile-whatsapp-button"
            onClick={closeMenu}
          >
            Shop on WhatsApp
          </a>

        </nav>

        {/* Actions */}
        <div className="navbar-actions">

          <button
            className="search-button"
            aria-label="Search"
          >
            🔍
          </button>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-button"
          >
            Shop on WhatsApp
          </a>

          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;