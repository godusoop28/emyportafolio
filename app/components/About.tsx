"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "2+", label: "Años de experiencia", color: "#FF6B35" },
  { value: "30+", label: "Tecnologías dominadas", color: "#3B82F6" },
  { value: "15+", label: "Proyectos entregados", color: "#8B5CF6" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "120px 0 80px", position: "relative", overflow: "hidden" }}
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

            <p style={{ color: "#64748B", lineHeight: 1.8, fontSize: "1rem", margin: 0 }}>
              También diseño{" "}
              <strong style={{ color: "#94A3B8" }}>automatizaciones con IA</strong> que conectan
              WhatsApp, ManyChat, Make y n8n con CRMs como Pipedrive y Monday.com, para captar y
              dar seguimiento a clientes sin trabajo manual.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: 4 }}>
              {[
                "Web Apps",
                "APIs REST",
                "Móvil",
                "Bases de datos",
                "Backend",
                "Automatización",
                "IA",
                "Freelance",
              ].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Mascot + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}
          >
            {/* Mascot image */}
            <div style={{ position: "relative", width: "100%" }}>
              {/* Glow behind mascot */}
              <div
                style={{
                  position: "absolute",
                  inset: "15%",
                  background: "radial-gradient(circle, rgba(255,107,53,0.18) 0%, rgba(59,130,246,0.12) 60%, transparent 80%)",
                  filter: "blur(32px)",
                  zIndex: 0,
                  borderRadius: "50%",
                }}
              />
              <div
                className="animate-float"
                style={{ position: "relative", zIndex: 1, maxWidth: 320, margin: "0 auto" }}
              >
                <Image
                  src="/alzando-manos.png"
                  alt="NEXA WEB mascota — saludando"
                  width={320}
                  height={320}
                  style={{ objectFit: "contain", width: "100%", height: "auto" }}
                />
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, width: "100%" }}>
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
