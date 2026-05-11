"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Años de experiencia", color: "#FF6B35" },
  { value: "10+", label: "Tecnologías dominadas", color: "#3B82F6" },
  { value: "5+", label: "Proyectos entregados", color: "#8B5CF6" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          top: "20%",
          right: "0%",
          zIndex: 0,
        }}
      />

      <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Sobre mí</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#F1F5F9",
                margin: 0,
              }}
            >
              Construyo software{" "}
              <span className="gradient-text-orange">que importa</span>
            </h2>

            <p style={{ color: "#64748B", lineHeight: 1.8, fontSize: "1rem", margin: 0 }}>
              Soy un desarrollador de software de 22 años con sede en{" "}
              <strong style={{ color: "#94A3B8" }}>Cuernavaca, Morelos</strong>, especializado en
              el desarrollo de aplicaciones web y móviles de alto rendimiento.
            </p>

            <p style={{ color: "#64748B", lineHeight: 1.8, fontSize: "1rem", margin: 0 }}>
              Me enfoco en construir{" "}
              <strong style={{ color: "#94A3B8" }}>APIs REST robustas</strong> con Spring Boot,
              frontends modernos con{" "}
              <strong style={{ color: "#94A3B8" }}>React y Next.js</strong>, y aplicaciones
              móviles con <strong style={{ color: "#94A3B8" }}>React Native (Expo)</strong>. Mi
              meta es entregar soluciones escalables, limpias y con excelente experiencia de
              usuario.
            </p>

            <p style={{ color: "#64748B", lineHeight: 1.8, fontSize: "1rem", margin: 0 }}>
              Actualmente culminando mi{" "}
              <strong style={{ color: "#94A3B8" }}>TSU en Tecnologías de la Información</strong>{" "}
              en la UTEZ (2021-2026) y disponible para proyectos freelance. Con{" "}
              <strong style={{ color: "#94A3B8" }}>Cédula Profesional: 15597124</strong>.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: 4 }}>
              {[
                "Web Apps",
                "APIs REST",
                "Móvil",
                "Bases de datos",
                "Backend",
                "Freelance",
              ].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >

            {/* Main card */}
            <div
              className="glass-card"
              style={{
                borderRadius: 24,
                padding: 32,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
                  borderRadius: "50%",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    boxShadow: "0 0 20px rgba(255,107,53,0.3)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#F1F5F9",
                    margin: "0 0 8px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Full-Stack Developer
                </h3>
                <p
                  style={{
                    color: "#64748B",
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Desde el diseño de base de datos hasta la interfaz final — cubra todo el stack.
                </p>

                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 20,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  {["React", "Spring Boot", "MySQL", "Expo"].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "3px 10px",
                        background: "rgba(255,107,53,0.08)",
                        border: "1px solid rgba(255,107,53,0.15)",
                        borderRadius: 6,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#FF8C42",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{
                    borderRadius: 16,
                    padding: "18px 12px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}88)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#475569",
                      marginTop: 4,
                      lineHeight: 1.3,
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
