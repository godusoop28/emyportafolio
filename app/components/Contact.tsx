"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const contactLinks = [
  {
    label: "Email",
    value: "emy.rodriguezc28@gmail.com",
    display: "emy.rodriguezc28\n@gmail.com",
    href: "mailto:emy.rodriguezc28@gmail.com?subject=Proyecto%20-%20NEXA%20WEB&body=Hola%20Emiliano%2C%20me%20interesa%20trabajar%20contigo...",
    color: "#FF6B35",
    gradient: "linear-gradient(135deg, #FF6B35, #FF8C42)",
    glow: "rgba(255,107,53,0.3)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    status: null,
  },
  {
    label: "WhatsApp",
    value: "+52 777 195 2315",
    display: "+52 777 195 2315",
    href: "https://wa.me/527771952315",
    color: "#25D366",
    gradient: "linear-gradient(135deg, #25D366, #128C7E)",
    glow: "rgba(37,211,102,0.3)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
    status: "En línea",
  },
  {
    label: "Facebook",
    value: "NEXA WEB",
    display: "NEXA WEB",
    href: "https://www.facebook.com/profile.php?id=61575966960497",
    color: "#1877F2",
    gradient: "linear-gradient(135deg, #1877F2, #0C5FCA)",
    glow: "rgba(24,119,242,0.3)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    status: null,
  },
  {
    label: "GitHub",
    value: "zeldahw12-dev",
    display: "zeldahw12-dev",
    href: "https://github.com/zeldahw12-dev",
    color: "#E5E5E5",
    gradient: "linear-gradient(135deg, #333, #555)",
    glow: "rgba(229,229,229,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    status: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "100px 0 120px", position: "relative", overflow: "hidden" }}
    >
      {/* Background */}
      <div
        className="orb"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%)",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          bottom: "0%",
          right: "0%",
          zIndex: 0,
        }}
      />

      <div
        className="max-w-5xl mx-auto px-6"
        style={{ position: "relative", zIndex: 1 }}
      >

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", justifyContent: "center" }}
              className="md:justify-start"
            >
              <span className="section-label">Contacto</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#F1F5F9",
                margin: "0 0 16px",
                lineHeight: 1.1,
              }}
            >
              Hagamos algo{" "}
              <span className="gradient-text-orange">increíble</span>
              <br />
              <span style={{ color: "#475569", fontSize: "0.75em" }}>juntos.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "1rem",
                color: "#64748B",
                maxWidth: 440,
                lineHeight: 1.7,
                margin: "0 auto",
              }}
              className="md:mx-0"
            >
              Estoy disponible para proyectos freelance, oportunidades laborales o simplemente
              conversar sobre tecnología. No dudes en escribirme.
            </motion.p>
          </div>

          {/* Contact mascot */}
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
                background: "radial-gradient(circle, rgba(255,107,53,0.2) 0%, rgba(59,130,246,0.12) 60%, transparent 80%)",
                filter: "blur(30px)",
                zIndex: 0,
              }}
            />
            <div className="animate-float" style={{ position: "relative", zIndex: 1 }}>
              <Image
                src="/contacto.png"
                alt="NEXA WEB — contáctanos"
                width={260}
                height={260}
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Contact cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
            marginBottom: 48,
          }}
        >
          {contactLinks.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card glass-card-hover"
              style={{
                borderRadius: 20,
                padding: "28px 24px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: contact.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 20px ${contact.glow}`,
                  flexShrink: 0,
                }}
              >
                {contact.icon}
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#475569", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                  {contact.label}
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#94A3B8", lineHeight: 1.4, whiteSpace: "pre-line" }}>
                  {contact.display}
                </div>
                {contact.status && (
                  <div style={{ fontSize: "0.72rem", color: "#4ade80", marginTop: 4, fontWeight: 600 }}>
                    ● {contact.status}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: "center" }}
        >
          <a
            href="mailto:emy.rodriguezc28@gmail.com?subject=Proyecto%20-%20NEXA%20WEB&body=Hola%20Emiliano%2C%20me%20interesa%20trabajar%20contigo..."
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "14px 36px", borderRadius: 14, textDecoration: "none" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Enviar mensaje
          </a>
        </motion.div>

      </div>
    </section>
  );
}
