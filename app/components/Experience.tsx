"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    type: "work",
    title: "Desarrollo Web — FS Therapy",
    company: "Autónomo",
    period: "Dic 2024 — Actualidad",
    description:
      "Diseño y desarrollo del sitio web profesional del fisioterapeuta Fernando Delgado. Página multi-sección con servicios, especialidades y contacto. Desarrollado con Next.js, diseño responsivo y optimización SEO.",
    tags: ["Next.js", "React", "TailwindCSS", "SEO"],
    color: "#3B82F6",
    icon: "🌐",
    url: "https://www.fstherapyfernandodelgado.com/",
  },
  {
    type: "work",
    title: "Desarrollo Web — Proyecto Resiliente",
    company: "Estadía Profesional",
    period: "Mayo 2025 — Sep 2025",
    description:
      "Desarrollo de API REST con Spring Boot y MySQL. Integración con frontend en React (Vite). Implementación de sistema de roles, interfaces administrativas y despliegue exitoso en producción.",
    tags: ["React", "Vite", "Spring Boot", "MySQL", "Roles & Auth"],
    color: "#10B981",
    icon: "🌐",
    url: "https://www.proyectoresiliente.org/",
  },
  {
    type: "work",
    title: "Desarrollo de Apps Web",
    company: "Autónomo",
    period: "Dic 2024 — Actualidad",
    description:
      "Desarrollo de aplicaciones web modernas utilizando React, Next.js, Node.js y Vite. Enfocado en rendimiento, buenas prácticas y experiencia de usuario.",
    tags: ["React", "Next.js", "Node.js", "Vite"],
    color: "#FF6B35",
    icon: "💻",
  },
  {
    type: "education",
    title: "TSU en Tecnologías de la Información",
    company: "Universidad Tecnológica Emiliano Zapata (UTEZ)",
    period: "2021 — 2026",
    description:
      "Área: Desarrollo de Software Multiplataforma. Formación integral en programación, bases de datos, redes, metodologías ágiles y desarrollo de software para múltiples plataformas.",
    tags: ["Java", "C#", "Bases de Datos", "Redes", "Software Engineering"],
    color: "#8B5CF6",
    icon: "🎓",
  },
];

const certifications = [
  { name: "Spring Boot — Udemy", icon: "🌱", color: "#6DB33F" },
  { name: "Java — Udemy", icon: "☕", color: "#FF8C42" },
  { name: "Hackathón Código Alebrije", icon: "🏆", color: "#F59E0B" },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "100px 0 120px", position: "relative", overflow: "hidden" }}
    >
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          top: "20%",
          left: "5%",
          zIndex: 0,
        }}
      />

      <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

        {/* Header with mascot */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-14">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Trayectoria</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#F1F5F9",
                margin: "0 0 12px",
              }}
            >
              Estudios &{" "}
              <span className="gradient-text-mixed">experiencia</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 480, margin: 0 }}
            >
              Mi formación académica, experiencia profesional y certificaciones que respaldan mi
              trabajo como desarrollador.
            </motion.p>
          </div>

          {/* Mascot estudios */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ flexShrink: 0, position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                inset: "10%",
                background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(59,130,246,0.1) 60%, transparent 80%)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
            />
            <div className="animate-float-delayed" style={{ position: "relative", zIndex: 1 }}>
              <Image
                src="/estudios.png"
                alt="NEXA WEB — estudios y formación"
                width={220}
                height={220}
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Timeline */}
          <div className="md:col-span-2">
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: 19,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: "linear-gradient(to bottom, #FF6B35, #3B82F6, #8B5CF6, transparent)",
                  borderRadius: 2,
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      display: "flex",
                      gap: 20,
                      paddingBottom: i < experiences.length - 1 ? 36 : 0,
                    }}
                  >
                    {/* Dot */}
                    <div style={{ flexShrink: 0 }}>
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: `${exp.color}18`,
                          border: `2px solid ${exp.color}50`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1rem",
                          position: "relative",
                          zIndex: 1,
                          boxShadow: `0 0 12px ${exp.color}25`,
                        }}
                      >
                        {exp.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="glass-card"
                      style={{
                        borderRadius: 16,
                        padding: "20px 24px",
                        flex: 1,
                        borderColor: `${exp.color}18`,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 3,
                          background: `linear-gradient(to right, ${exp.color}, transparent)`,
                        }}
                      />

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                          gap: 8,
                          marginBottom: 8,
                        }}
                      >
                        <div>
                          <h3
                            style={{
                              fontSize: "0.95rem",
                              fontWeight: 700,
                              color: "#F1F5F9",
                              margin: "0 0 2px",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {exp.title}
                          </h3>
                          <div
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              color: exp.color,
                              opacity: 0.9,
                            }}
                          >
                            {exp.company}
                          </div>
                        </div>
                        <span
                          style={{
                            padding: "3px 10px",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 20,
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            color: "#64748B",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <p
                        style={{
                          color: "#64748B",
                          fontSize: "0.85rem",
                          lineHeight: 1.7,
                          margin: "12px 0",
                        }}
                      >
                        {exp.description}
                      </p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: "3px 8px",
                              background: `${exp.color}10`,
                              border: `1px solid ${exp.color}20`,
                              borderRadius: 5,
                              fontSize: "0.68rem",
                              fontWeight: 600,
                              color: exp.color,
                              opacity: 0.9,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            marginTop: 14,
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: exp.color,
                            textDecoration: "none",
                            opacity: 0.8,
                            transition: "opacity 0.2s ease",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.8"; }}
                        >
                          Ver proyecto
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#475569",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Formación continua
            </h3>

            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="glass-card"
                style={{
                  borderRadius: 14,
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  transition: "border-color 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {cert.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#94A3B8",
                    lineHeight: 1.3,
                  }}
                >
                  {cert.name}
                </span>
              </div>
            ))}

            {/* Info card */}
            <div
              className="glass-card"
              style={{
                borderRadius: 14,
                padding: "20px",
                marginTop: 8,
                background: "linear-gradient(135deg, rgba(255,107,53,0.06), rgba(59,130,246,0.06))",
                borderColor: "rgba(255,107,53,0.12)",
              }}
            >
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginBottom: 8, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}>
                Información
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "Edad", value: "22 años" },
                  { label: "Ciudad", value: "Cuernavaca, Mor." },
                  { label: "Cédula", value: "15597124" },
                  { label: "Disponibilidad", value: "Inmediata" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.78rem", color: "#475569", fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontSize: "0.78rem", color: "#94A3B8", fontWeight: 600 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
