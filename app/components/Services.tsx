"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Páginas web profesionales",
    description: "Sitios completos, multi-sección, con diseño moderno y optimización SEO. Perfectos para empresas, negocios y marcas personales.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    title: "Landing pages",
    description: "Páginas de aterrizaje de alta conversión para campañas, productos o servicios. Diseñadas para captar clientes y generar resultados.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    color: "#FF6B35",
    bg: "rgba(255,107,53,0.08)",
    border: "rgba(255,107,53,0.2)",
  },
  {
    title: "Sitios informativos y corporativos",
    description: "Presencia web sólida para tu empresa u organización. Secciones de servicios, equipo, cobertura, testimonios y contacto.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" />
        <path d="M4 21V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
      </svg>
    ),
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    title: "Portafolios personales",
    description: "Muestra tu trabajo, habilidades y proyectos con un sitio elegante y profesional que te diferencie de la competencia.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    title: "Catálogos digitales",
    description: "Presenta tus productos o servicios en línea de forma visual, organizada y accesible desde cualquier dispositivo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    title: "Integración con WhatsApp, redes y formularios",
    description: "Conecta tu sitio con WhatsApp, redes sociales, formularios de contacto y otras herramientas para captar clientes fácilmente.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "#25D366",
    bg: "rgba(37,211,102,0.08)",
    border: "rgba(37,211,102,0.2)",
  },
  {
    title: "Automatización con IA (ManyChat, Make, n8n)",
    description: "Diseño flujos de automatización que conectan WhatsApp, ManyChat, Make y n8n con tu CRM (Pipedrive, Monday.com) para responder y capturar leads sin intervención manual.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M9 7.5L15 16.5" strokeLinecap="round" />
      </svg>
    ),
    color: "#8B3DFF",
    bg: "rgba(139,61,255,0.08)",
    border: "rgba(139,61,255,0.2)",
  },
  {
    title: "CRM y gestión de leads con IA",
    description: "Implemento y personalizo CRMs (Pipedrive, Monday.com, a medida) con pipelines, reportes y asistentes de IA para calificar y dar seguimiento a leads automáticamente.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l1.545 4.635L18 8l-4.455 1.365L12 14l-1.545-4.635L6 8l4.455-1.365L12 2z" fill="currentColor" stroke="none" />
        <path d="M4 14h16l-6 8v-6l-4 1z" />
      </svg>
    ),
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.08)",
    border: "rgba(20,184,166,0.2)",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: "100px 0 120px", position: "relative", overflow: "hidden" }}
    >
      {/* Background orbs */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%)",
          top: "0%",
          right: "0%",
          zIndex: 0,
        }}
      />
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          bottom: "10%",
          left: "-5%",
          zIndex: 0,
        }}
      />

      <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

        {/* Header: label + title + mascot */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Servicios</span>
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
                margin: "0 0 16px",
              }}
            >
              ¿Qué puedo{" "}
              <span className="gradient-text-orange">hacer por ti?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: "#64748B",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: 520,
                margin: 0,
              }}
            >
              Ofrezco soluciones web completas bajo la marca{" "}
              <strong style={{ color: "#FF6B35" }}>NEXA WEB</strong> — desde el diseño hasta
              el lanzamiento. Todo pensado para que tu negocio destaque en línea.
            </motion.p>
          </div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ flexShrink: 0, position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                inset: "10%",
                background: "radial-gradient(circle, rgba(255,107,53,0.2) 0%, rgba(59,130,246,0.1) 60%, transparent 80%)",
                filter: "blur(30px)",
                zIndex: 0,
              }}
            />
            <div className="animate-float-delayed" style={{ position: "relative", zIndex: 1 }}>
              <Image
                src="/portafolio.png"
                alt="NEXA WEB — servicios de desarrollo web"
                width={260}
                height={260}
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-hover"
              style={{
                borderRadius: 20,
                padding: "28px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${service.color}80, transparent)`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 120,
                  background: `linear-gradient(135deg, ${service.color}06, transparent)`,
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: service.bg,
                    border: `1px solid ${service.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: service.color,
                    marginBottom: 18,
                    boxShadow: `0 0 20px ${service.color}18`,
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#F1F5F9",
                    letterSpacing: "-0.01em",
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#64748B",
                    fontSize: "0.85rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: 60 }}
        >
          <p style={{ color: "#475569", fontSize: "0.95rem", marginBottom: 20 }}>
            ¿Listo para llevar tu negocio al mundo digital?
          </p>
          <Link
            href="/contacto"
            className="btn-primary"
            style={{ fontSize: "0.95rem", padding: "12px 32px", textDecoration: "none" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Cotizar mi proyecto
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
