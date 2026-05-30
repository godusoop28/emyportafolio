"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Estudios", href: "/estudios" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
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
              ? "rgba(6, 6, 17, 0.92)"
              : "rgba(6, 6, 17, 0.5)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid rgba(255,255,255,0.03)",
            transition: "all 0.4s ease",
          }}
        >
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div
                style={{
                  position: "relative",
                  height: 38,
                  width: 130,
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  filter: "drop-shadow(0 0 12px rgba(255,107,53,0.25))",
                }}
                className="group-hover:scale-105"
              >
                <Image
                  src="/logo.png"
                  alt="NEXA WEB"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: "0.85rem",
                    fontWeight: isActive(link.href) ? 600 : 500,
                    color: isActive(link.href) ? "#FF6B35" : "#94A3B8",
                    background: isActive(link.href)
                      ? "rgba(255,107,53,0.08)"
                      : "transparent",
                    border: isActive(link.href)
                      ? "1px solid rgba(255,107,53,0.15)"
                      : "1px solid transparent",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.href)) {
                      e.currentTarget.style.color = "#F1F5F9";
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href)) {
                      e.currentTarget.style.color = "#94A3B8";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contacto"
                className="btn-primary"
                style={{ padding: "8px 20px", fontSize: "0.82rem", borderRadius: 10, textDecoration: "none" }}
              >
                Contrátame
              </Link>
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
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: isActive(link.href) ? 700 : 600,
                      color: isActive(link.href) ? "#FF6B35" : "#94A3B8",
                      display: "block",
                      padding: "12px 32px",
                      borderRadius: 12,
                      textDecoration: "none",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
                style={{ marginTop: 16 }}
              >
                <Link
                  href="/contacto"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary"
                  style={{ fontSize: "0.95rem", padding: "12px 36px", textDecoration: "none" }}
                >
                  Contrátame
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
