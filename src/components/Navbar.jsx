import "./Navbar.css";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#works" },
];

export function Navbar({ variant = "default" }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const heroPassed = () => {
      const vh = window.innerHeight;
      setActive(window.scrollY > vh * 0.7);
      setScrolled(window.scrollY > vh * 0.1); // Triggers frosted background sooner on scroll
    };
    heroPassed();
    window.addEventListener("scroll", heroPassed, { passive: true });
    return () => window.removeEventListener("scroll", heroPassed);
  }, []);

  const isHero = variant === "hero";

  return (
    <nav className={`navbar ${isHero ? "navbar-hero" : ""} ${isHero || active ? "active" : ""} ${scrolled ? "scrolled" : ""}`}>
      <div className="shell nav-inner">
        <a href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>
          ISR<span className="logo-dot">.</span>
        </a>

        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          <span className="nav-menu-label">Navigate / 0{links.length + 1}</span>
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              <span className="nav-link-number">0{index + 1}</span>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-pill" onClick={() => setMenuOpen(false)}>Let&rsquo;s Talk</a>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span /><span />
        </button>
      </div>
    </nav>
  );
}