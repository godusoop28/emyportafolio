"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          style={{
            background: scrolled
              ? "rgba(6, 6, 17, 0.88)"
              : "transparent",
            backdropFilter: scrolled ? "blur(24px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.05)"
              : "1px solid transparent",
            transition: "all 0.4s ease",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="flex items-center gap-2 group"
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: "white",
                  letterSpacing: "-0.02em",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 0 20px rgba(255,107,53,0.3)",
                }}
                className="group-hover:scale-110"
              >
                ER
              </div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#F1F5F9",
                  letterSpacing: "-0.02em",
                }}
              >
                Emiliano<span style={{ color: "#FF6B35" }}>.</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#94A3B8",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F1F5F9";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#94A3B8";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary"
                style={{ padding: "8px 20px", fontSize: "0.82rem", borderRadius: 10 }}
              >
                Contrátame
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#F1F5F9",
                  borderRadius: 2,
                  transformOrigin: "center",
                  transition: "background 0.2s ease",
                }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#F1F5F9",
                  borderRadius: 2,
                }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#F1F5F9",
                  borderRadius: 2,
                  transformOrigin: "center",
                }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 mobile-overlay"
            style={{ paddingTop: 80 }}
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center h-full gap-2 pb-20"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#94A3B8",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "12px 32px",
                    borderRadius: 12,
                    transition: "color 0.2s ease",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FF6B35";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
                onClick={() => handleNavClick("#contact")}
                className="btn-primary"
                style={{ marginTop: 16, fontSize: "0.95rem", padding: "12px 36px" }}
              >
                Contrátame
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
