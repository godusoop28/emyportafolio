"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "FS Therapy",
    subtitle: "Aplicación para fisioterapeutas",
    description:
      "Plataforma móvil y web para fisioterapeutas. Permite gestionar pacientes, sesiones, ejercicios personalizados y seguimiento de progreso. API REST construida con Spring Boot, base de datos MySQL y app móvil en React Native con Expo.",
    url: "https://www.fstherapyfernandodelgado.com/",
    tags: ["React Native", "Expo", "Spring Boot", "MySQL", "REST API"],
    accentColor: "#3B82F6",
    accentColorLight: "#60A5FA",
    gradientFrom: "#1E3A5F",
    gradientTo: "#0F2027",
    mockupType: "mobile" as const,
    mockupContent: {
      primary: "#3B82F6",
      secondary: "#60A5FA",
      bg: "#0D1B2A",
      items: [
        { label: "Pacientes", value: "48", icon: "👤" },
        { label: "Sesiones hoy", value: "6", icon: "📅" },
        { label: "Ejercicios", value: "120", icon: "💪" },
      ],
    },
  },
  {
    title: "Proyecto Resiliente",
    subtitle: "Plataforma web para organización social",
    description:
      "Sitio web institucional y plataforma de gestión para organización social. Incluye sistema de roles y permisos, interfaces de administración y despliegue en producción. Backend con Spring Boot y MySQL, frontend con React (Vite).",
    url: "https://www.proyectoresiliente.org/",
    tags: ["React", "Vite", "Spring Boot", "MySQL", "Roles & Auth"],
    accentColor: "#10B981",
    accentColorLight: "#34D399",
    gradientFrom: "#064E3B",
    gradientTo: "#022C22",
    mockupType: "browser" as const,
    mockupContent: {
      primary: "#10B981",
      secondary: "#34D399",
      bg: "#0A1A14",
      items: [
        { label: "Usuarios", value: "230", icon: "🌱" },
        { label: "Recursos", value: "85", icon: "📄" },
        { label: "Eventos", value: "12", icon: "🗓️" },
      ],
    },
  },
];

function MobileMockup({ content }: { content: typeof projects[0]["mockupContent"] }) {
  return (
    <div
      style={{
        width: 200,
        background: content.bg,
        border: "1.5px solid rgba(255,255,255,0.08)",
        borderRadius: 28,
        overflow: "hidden",
        boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)`,
        position: "relative",
      }}
    >
      {/* Phone notch */}
      <div
        style={{
          background: "#000",
          height: 28,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: 6,
        }}
      >
        <div
          style={{
            width: 60,
            height: 6,
            background: "#1a1a1a",
            borderRadius: 6,
          }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          padding: "12px 16px 10px",
          background: `linear-gradient(135deg, ${content.primary}22, transparent)`,
          borderBottom: `1px solid ${content.primary}22`,
        }}
      >
        <div style={{ fontSize: "0.65rem", color: "#9CA3AF", marginBottom: 2 }}>Bienvenido</div>
        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#F1F5F9" }}>Fernando D.</div>
      </div>

      {/* Stats */}
      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
        {content.items.map((item) => (
          <div
            key={item.label}
            style={{
              padding: "10px 12px",
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${content.primary}18`,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "0.8rem" }}>{item.icon}</span>
              <span style={{ fontSize: "0.68rem", color: "#94A3B8", fontWeight: 500 }}>
                {item.label}
              </span>
            </div>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: content.secondary,
              }}
            >
              {item.value}
            </span>
          </div>
        ))}

        {/* Chart placeholder */}
        <div
          style={{
            height: 60,
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${content.primary}15`,
            borderRadius: 10,
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end",
            padding: "8px 10px",
            gap: 4,
          }}
        >
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                background: `linear-gradient(to top, ${content.primary}88, ${content.secondary}44)`,
                borderRadius: 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div
        style={{
          padding: "8px 14px 16px",
          display: "flex",
          justifyContent: "space-around",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {["🏠", "👥", "📊", "⚙️"].map((icon, i) => (
          <div
            key={i}
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: i === 0 ? `${content.primary}22` : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function BrowserMockup({ content }: { content: typeof projects[0]["mockupContent"] }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 380,
        background: content.bg,
        border: "1.5px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: `0 30px 60px rgba(0,0,0,0.5)`,
      }}
    >
      {/* Browser chrome */}
      <div className="browser-chrome">
        <div style={{ display: "flex", gap: 6 }}>
          <div className="browser-dot" style={{ background: "#FF5F57" }} />
          <div className="browser-dot" style={{ background: "#FEBC2E" }} />
          <div className="browser-dot" style={{ background: "#28C840" }} />
        </div>
        <div className="browser-url">proyectoresiliente.org</div>
      </div>

      {/* Navbar */}
      <div
        style={{
          padding: "10px 16px",
          background: `linear-gradient(135deg, ${content.primary}15, transparent)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${content.primary}15`,
        }}
      >
        <div
          style={{
            width: 80,
            height: 8,
            background: content.secondary,
            borderRadius: 4,
            opacity: 0.9,
          }}
        />
        <div style={{ display: "flex", gap: 12 }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: 30,
                height: 5,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero area */}
      <div
        style={{
          padding: "16px",
          background: `linear-gradient(135deg, ${content.primary}12, transparent)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 800,
            color: content.secondary,
            marginBottom: 6,
            letterSpacing: "0.02em",
          }}
        >
          Proyecto Resiliente
        </div>
        <div
          style={{
            width: "60%",
            height: 4,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 2,
            margin: "0 auto 4px",
          }}
        />
        <div
          style={{
            width: "40%",
            height: 4,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 2,
            margin: "0 auto 12px",
          }}
        />
        <div
          style={{
            display: "inline-flex",
            padding: "4px 14px",
            background: content.primary,
            borderRadius: 20,
            fontSize: "0.6rem",
            color: "white",
            fontWeight: 600,
          }}
        >
          Únete
        </div>
      </div>

      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "rgba(255,255,255,0.04)",
          padding: 1,
          margin: "0 16px 16px",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {content.items.map((item) => (
          <div
            key={item.label}
            style={{
              padding: "10px 8px",
              background: content.bg,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "0.65rem", marginBottom: 2 }}>{item.icon}</div>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: content.secondary,
              }}
            >
              {item.value}
            </div>
            <div style={{ fontSize: "0.55rem", color: "#6B7280" }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          top: "0%",
          right: "10%",
          zIndex: 0,
        }}
      />
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%)",
          bottom: "10%",
          left: "0%",
          zIndex: 0,
        }}
      />

      <div className="max-w-6xl mx-auto px-6" style={{ position: "relative", zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Proyectos</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 64 }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F1F5F9",
              margin: 0,
            }}
          >
            Trabajo{" "}
            <span className="gradient-text-orange">destacado</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="project-card"
            >
              <div className="project-card-grid">
                {/* Left: Content */}
                <div className="project-card-content">
                  {/* Background gradient accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 200,
                      background: `linear-gradient(135deg, ${project.accentColor}08, transparent)`,
                      pointerEvents: "none",
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 1 }}>
                    {/* Number */}
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: project.accentColor,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 16,
                        opacity: 0.8,
                      }}
                    >
                      0{i + 1} — {project.subtitle}
                    </div>

                    <h3
                      style={{
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        color: "#F1F5F9",
                        margin: "0 0 16px",
                        lineHeight: 1.1,
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        color: "#64748B",
                        fontSize: "0.92rem",
                        lineHeight: 1.7,
                        margin: 0,
                        maxWidth: 480,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tags & buttons */}
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "4px 10px",
                            background: `${project.accentColor}12`,
                            border: `1px solid ${project.accentColor}25`,
                            borderRadius: 6,
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            color: project.accentColorLight,
                            letterSpacing: "0.03em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 22px",
                        background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColorLight})`,
                        borderRadius: 10,
                        fontSize: "0.84rem",
                        fontWeight: 600,
                        color: "white",
                        textDecoration: "none",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        boxShadow: `0 0 20px ${project.accentColor}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 0 30px ${project.accentColor}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 0 20px ${project.accentColor}30`;
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Ver sitio en vivo
                    </a>
                  </div>
                </div>

                {/* Right: Mockup */}
                <div
                  style={{
                    padding: "40px 44px 40px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${project.gradientFrom}40, ${project.gradientTo}40)`,
                    borderLeft: "1px solid rgba(255,255,255,0.04)",
                    minWidth: 280,
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="hidden md:flex"
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(circle at 60% 40%, ${project.accentColor}12, transparent 70%)`,
                    }}
                  />
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    {project.mockupType === "mobile" ? (
                      <MobileMockup content={project.mockupContent} />
                    ) : (
                      <BrowserMockup content={project.mockupContent} />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
