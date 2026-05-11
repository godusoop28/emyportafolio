"use client";

import { motion } from "framer-motion";

const floatingBadges = [
  { label: "React", color: "#61DAFB", bg: "rgba(97,218,251,0.1)", delay: 0 },
  { label: "Next.js", color: "#E5E5E5", bg: "rgba(255,255,255,0.07)", delay: 0.8 },
  { label: "Spring Boot", color: "#6DB33F", bg: "rgba(109,179,63,0.1)", delay: 1.4 },
  { label: "React Native", color: "#61DAFB", bg: "rgba(97,218,251,0.07)", delay: 2 },
  { label: "Java", color: "#FF8C42", bg: "rgba(255,140,66,0.1)", delay: 0.4 },
  { label: "MySQL", color: "#4479A1", bg: "rgba(68,121,161,0.1)", delay: 1.2 },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
        paddingBottom: 60,
      }}
    >
      {/* Background orbs */}
      <div
        className="orb"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
          top: "10%",
          right: "-15%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          bottom: "5%",
          left: "-10%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          top: "40%",
          left: "30%",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          mask: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          WebkitMask: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
          zIndex: 0,
        }}
      />

      <div
        className="max-w-6xl mx-auto px-6 w-full"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="flex flex-col items-center text-center gap-8">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="available-badge">
              <span className="available-dot" />
              Disponible para proyectos
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              style={{
                fontSize: "clamp(2.8rem, 8vw, 6rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#F1F5F9",
                margin: 0,
              }}
            >
              Emiliano
              <br />
              <span className="gradient-text-orange">Rodríguez</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 560 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 20px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 50,
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#94A3B8",
                letterSpacing: "0.02em",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FF6B35, #3B82F6)",
                }}
              />
              Desarrollador de Software Multiplataforma
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#64748B",
              maxWidth: 500,
              lineHeight: 1.6,
              fontWeight: 400,
              margin: 0,
            }}
          >
            Construyo{" "}
            <span style={{ color: "#94A3B8", fontWeight: 600 }}>
              experiencias digitales modernas
            </span>{" "}
            — web, móvil y backend — escalables y de alto impacto.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}
          >
            <button onClick={scrollToProjects} className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              Ver proyectos
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Hablemos
            </button>
          </motion.div>

          {/* Tech badges row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent: "center",
              maxWidth: 540,
              marginTop: 8,
            }}
          >
            {floatingBadges.map((badge) => (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + badge.delay * 0.15, duration: 0.4 }}
                style={{
                  padding: "5px 12px",
                  background: badge.bg,
                  border: `1px solid ${badge.color}22`,
                  borderRadius: 8,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: badge.color,
                  backdropFilter: "blur(10px)",
                  letterSpacing: "0.02em",
                }}
              >
                {badge.label}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "#475569",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{
            width: 20,
            height: 32,
            border: "1.5px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              background: "linear-gradient(to bottom, #FF6B35, transparent)",
              borderRadius: 2,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
