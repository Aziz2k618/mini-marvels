import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import products from "../../data/products";


import "./Navbar.css";

function Navbar() {
  
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = products.filter((product) => {
  const query = searchQuery.toLowerCase().trim();

  if (!query) return false;

  return (
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );
  });

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
            onClick={() => setIsSearchOpen(!isSearchOpen)}
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
      {isSearchOpen && (
        <div className="search-panel">

          <div className="search-panel-inner">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />

            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              ✕
            </button>
          </div>

          {searchQuery.trim() && (
            <div className="search-results">
             {searchResults.length > 0 ? (
              <>
                {searchResults.slice(0, 4).map((product) => (
                  <Link
                    key={product.id}
                    to={product.link}
                    className="search-result"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div>
                      <span>{product.category}</span>
                      <h3>{product.name}</h3>
                      <p>Rs. {product.price}</p>
                    </div>
                  </Link>
                ))}

                {searchResults.length > 0 && (
                  <Link
                    to={`/shop?search=${encodeURIComponent(searchQuery)}`}
                    className="search-see-more"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    See more results →
                  </Link>
                )}
              </>
            ) : (
              <p className="search-no-results">
                No products found. Try another search.
              </p>
            )}
            </div>
          )}

        </div>
      )}
    </header>
  );
}

export default Navbar;