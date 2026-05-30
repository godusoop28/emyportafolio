"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "40px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(255,107,53,0.2), rgba(59,130,246,0.2), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {/* Logo + copy */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", position: "relative" }}>
              <div style={{ position: "relative", height: 32, width: 100 }}>
                <Image
                  src="/logo.png"
                  alt="NEXA WEB"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center", filter: "opacity(0.8)" }}
                />
              </div>
            </Link>
            <span style={{ fontSize: "0.78rem", color: "#475569", fontWeight: 500 }}>
              © {currentYear} Emiliano Rodríguez. Hecho con Next.js + TailwindCSS.
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 8,
              color: "#475569",
              fontSize: "0.78rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FF6B35";
              e.currentTarget.style.borderColor = "rgba(255,107,53,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#475569";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            Volver arriba
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
