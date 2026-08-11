"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "FS Therapy",
    subtitle: "Sitio web de fisioterapeuta",
    description:
      "Página web profesional para el fisioterapeuta Fernando Delgado. Presenta sus servicios, especialidades y facilita el contacto con pacientes. Diseño moderno, responsivo y optimizado para SEO.",
    url: "https://www.fstherapyfernandodelgado.com/",
    tags: ["Next.js", "React", "TailwindCSS", "SEO", "Responsive"],
    accentColor: "#3B82F6",
    accentColorLight: "#60A5FA",
    gradientFrom: "#1E3A5F",
    gradientTo: "#0F2027",
    mockupType: "browser",
    mockupContent: {
      primary: "#3B82F6",
      secondary: "#60A5FA",
      bg: "#0D1B2A",
      displayName: "FS Therapy",
      displayUrl: "fstherapyfernandodelgado.com",
      items: [
        { label: "Servicios", value: "8" },
        { label: "Especialidades", value: "4" },
        { label: "Años exp.", value: "10+" },
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
    mockupType: "browser",
    mockupContent: {
      primary: "#10B981",
      secondary: "#34D399",
      bg: "#0A1A14",
      displayUrl: "proyectoresiliente.org",
      displayName: "Proyecto Resiliente",
      items: [
        { label: "Usuarios", value: "230" },
        { label: "Recursos", value: "85" },
        { label: "Eventos", value: "12" },
      ],
    },
  },
  {
    title: "Aureon Ingeniería",
    subtitle: "Sitio web corporativo de ingeniería",
    description:
      "Sitio web profesional para empresa de ingeniería y construcción. Multi-página con secciones de servicios, proyectos realizados, cobertura geográfica, testimonios de clientes y contacto. Animaciones fluidas con Framer Motion y diseño responsivo.",
    url: "https://www.aureoningenieria.com.mx/",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Lucide React"],
    accentColor: "#F59E0B",
    accentColorLight: "#FCD34D",
    gradientFrom: "#78350F",
    gradientTo: "#1C0800",
    mockupType: "browser",
    mockupContent: {
      primary: "#F59E0B",
      secondary: "#FCD34D",
      bg: "#130A00",
      displayUrl: "aureoningenieria.com.mx",
      displayName: "Aureon Ingeniería",
      items: [
        { label: "Proyectos", value: "50+" },
        { label: "Servicios", value: "12" },
        { label: "Cobertura", value: "5 estados" },
      ],
    },
  },
  {
    title: "Bety Web",
    subtitle: "Portafolio profesional de terapeuta",
    description:
      "Sitio web para terapeuta ocupacional con presentación de servicios especializados: terapia de lenguaje, inclusión educativa y atención TEA/TDAH. Secciones de experiencia, galería fotográfica y contacto. Diseño elegante en Next.js.",
    url: "https://betyweb.vercel.app/",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    accentColor: "#8B5CF6",
    accentColorLight: "#A78BFA",
    gradientFrom: "#2E1065",
    gradientTo: "#0F0A1F",
    mockupType: "browser",
    mockupContent: {
      primary: "#8B5CF6",
      secondary: "#A78BFA",
      bg: "#0A0614",
      displayUrl: "betyweb.vercel.app",
      displayName: "Beatriz García",
      items: [
        { label: "Servicios", value: "8" },
        { label: "Experiencia", value: "6 años" },
        { label: "Pacientes", value: "200+" },
      ],
    },
  },
  {
    title: "Karlita Web",
    subtitle: "Portafolio personal creativo",
    description:
      "Portafolio personal creativo con galería de proyectos, scroll suave con Lenis y animaciones paralax con Framer Motion. Diseño minimalista sobre fondo oscuro con secciones de about, galería, proyectos destacados y contacto.",
    url: "https://karlitaweb.vercel.app/",
    tags: ["Next.js", "Framer Motion", "Lenis", "Tailwind CSS"],
    accentColor: "#EC4899",
    accentColorLight: "#F9A8D4",
    gradientFrom: "#500724",
    gradientTo: "#1A0010",
    mockupType: "browser",
    mockupContent: {
      primary: "#EC4899",
      secondary: "#F9A8D4",
      bg: "#100008",
      displayUrl: "karlitaweb.vercel.app",
      displayName: "Karlita",
      items: [
        { label: "Proyectos", value: "24" },
        { label: "Galería", value: "60+" },
        { label: "Clientes", value: "18" },
      ],
    },
  },
  {
    title: "MercActiva",
    subtitle: "Agencia de publicidad digital",
    description:
      "Sitio web profesional para agencia de publicidad y marketing digital. Presentación de servicios, portafolio de campañas y formulario de contacto. Diseño moderno y responsivo construido con Next.js y TailwindCSS.",
    url: "https://www.mercactivapublicidad.com/",
    tags: ["Next.js", "React", "TailwindCSS", "TypeScript", "Responsive"],
    accentColor: "#06B6D4",
    accentColorLight: "#67E8F9",
    gradientFrom: "#0C4A6E",
    gradientTo: "#040F1C",
    mockupType: "browser",
    mockupContent: {
      primary: "#06B6D4",
      secondary: "#67E8F9",
      bg: "#030D18",
      displayUrl: "mercactivapublicidad.com",
      displayName: "MercActiva",
      items: [
        { label: "Servicios", value: "12+" },
        { label: "Clientes", value: "30+" },
        { label: "Campañas", value: "80+" },
      ],
    },
  },
  {
    title: "HAREMS",
    subtitle: "Plataforma SaaS de compañía con IA",
    description:
      "Plataforma de chat con personajes impulsados por inteligencia artificial. Sistema de planes y créditos (Free, Trial, Premium, VIP), generación de imágenes con IA, autenticación JWT y galería de personajes con perfiles narrativos. Backend en Spring Boot integrado con OpenRouter para las respuestas de IA, frontend en Next.js.",
    url: "",
    tags: ["Next.js", "Spring Boot", "IA · OpenRouter", "JWT", "Suscripciones"],
    accentColor: "#38BDF8",
    accentColorLight: "#7DD3FC",
    gradientFrom: "#0C2A3E",
    gradientTo: "#03070F",
    mockupType: "browser",
    mockupContent: {
      primary: "#38BDF8",
      secondary: "#7DD3FC",
      bg: "#05070D",
      displayUrl: "harems (en desarrollo)",
      displayName: "HAREMS",
      items: [
        { label: "Personajes", value: "IA" },
        { label: "Planes", value: "4" },
        { label: "Créditos", value: "Chat/Img" },
      ],
    },
  },
  {
    title: "Renova Inversiones",
    subtitle: "Plataforma de inversión inmobiliaria",
    description:
      "Plataforma completa para empresa de inversión inmobiliaria: sitio público con catálogo de propiedades, proceso de inversión, cobertura, testimonios y formulario de captación de leads, más un panel administrativo para gestionar el flujo de inversiones por etapas (oferta, visita, documentación, remodelación). Frontend en Next.js y API REST en Spring Boot.",
    url: "",
    tags: ["Next.js", "Spring Boot", "Panel Admin", "API REST", "TailwindCSS"],
    accentColor: "#2C65F2",
    accentColorLight: "#C0E001",
    gradientFrom: "#0C0F58",
    gradientTo: "#030418",
    mockupType: "browser",
    mockupContent: {
      primary: "#2C65F2",
      secondary: "#C0E001",
      bg: "#060A1F",
      displayUrl: "renova-inversiones (en desarrollo)",
      displayName: "Renova Inversiones",
      items: [
        { label: "Propiedades", value: "Catálogo" },
        { label: "Inversiones", value: "Panel" },
        { label: "Etapas", value: "Pipeline" },
      ],
    },
  },
  {
    title: "Century 21 Inova",
    subtitle: "Automatización y distribución de leads inmobiliarios",
    description:
      "Sistema de automatización que recibe prospectos desde WhatsApp y campañas de Meta Ads, normaliza la información del lead, consulta y enriquece datos de propiedades contra una API inmobiliaria, y distribuye automáticamente cada lead entre los asesores disponibles. Un pipeline completo de ingesta, transformación, enriquecimiento y sincronización de datos entre plataformas, construido con herramientas de automatización sin servidor propio.",
    url: "",
    tags: ["Make", "ManyChat", "WhatsApp API", "EasyBroker API", "Webhooks", "Google Sheets"],
    accentColor: "#65A30D",
    accentColorLight: "#A3E635",
    gradientFrom: "#2A3A0A",
    gradientTo: "#0B0F03",
    mockupType: "browser",
    mockupContent: {
      primary: "#65A30D",
      secondary: "#A3E635",
      bg: "#10140A",
      displayUrl: "automatización de leads",
      displayName: "Century 21 Inova",
      items: [
        { label: "Leads", value: "Auto" },
        { label: "Fuentes", value: "WhatsApp/Meta" },
        { label: "Asesores", value: "Asignación" },
      ],
    },
  },
  {
    title: "Inova Admin Panel",
    subtitle: "Dashboard administrativo de datos inmobiliarios",
    description:
      "Panel administrativo que centraliza la información generada por el ecosistema de automatización de Century 21 Inova. Consume datos desde Google Sheets y una API inmobiliaria externa, con autenticación propia y sincronización opcional vía webhook, para darle a los asesores una interfaz simple de consulta y operación sobre los leads procesados.",
    url: "",
    tags: ["Next.js", "TypeScript", "Google Sheets API", "EasyBroker", "Auth"],
    accentColor: "#AF8E41",
    accentColorLight: "#C6A664",
    gradientFrom: "#3A2F12",
    gradientTo: "#0F0B03",
    mockupType: "browser",
    mockupContent: {
      primary: "#AF8E41",
      secondary: "#C6A664",
      bg: "#1A1610",
      displayUrl: "inova-panel (en desarrollo)",
      displayName: "Inova Admin Panel",
      items: [
        { label: "Fuentes", value: "3 APIs" },
        { label: "Vista", value: "Dashboard" },
        { label: "Acceso", value: "Login" },
      ],
    },
  },
  {
    title: "Menzo",
    subtitle: "Red social móvil para comunidades",
    description:
      "Aplicación social móvil orientada a pequeñas comunidades: perfiles, membresías, roles, feeds y personalización de apariencia por comunidad. Backend propio con autenticación JWT y refresh tokens, subida de archivos y health checks. Cerca de 36 pantallas desarrolladas en Flutter, con build y despliegue configurados para Android.",
    url: "",
    tags: ["Flutter", "Dart", "Spring Boot", "PostgreSQL", "JWT"],
    accentColor: "#0D9488",
    accentColorLight: "#2DD4BF",
    gradientFrom: "#042F2E",
    gradientTo: "#01100F",
    mockupType: "phone",
    mockupContent: {
      primary: "#0D9488",
      secondary: "#2DD4BF",
      bg: "#01100F",
      displayUrl: "36+ pantallas · Android",
      displayName: "Menzo",
      items: [
        { label: "Pantallas", value: "36+" },
        { label: "Backend", value: "REST + JWT" },
        { label: "Plataforma", value: "Android" },
      ],
    },
  },
  {
    title: "Sunnyday",
    subtitle: "Arquitectura omnicanal de automatización comercial",
    description:
      "Diseño de arquitectura de automatización para el proceso comercial de una compañía de energía solar: unifica leads provenientes de Meta Ads, WhatsApp, web y referidos mediante n8n, los enriquece con IA y los sincroniza con un CRM. Incluye un agente de IA de seguimiento que resume el historial de conversación, clasifica al prospecto y redacta correos de seguimiento personalizados con aprobación humana antes del envío.",
    url: "",
    tags: ["n8n", "Pipedrive", "IA / LLM", "Meta Ads", "WhatsApp Business", "Human-in-the-loop"],
    accentColor: "#FACC15",
    accentColorLight: "#FDE68A",
    gradientFrom: "#3A2E05",
    gradientTo: "#0F0C01",
    mockupType: "browser",
    mockupContent: {
      primary: "#FACC15",
      secondary: "#FDE68A",
      bg: "#161200",
      displayUrl: "n8n → CRM → agente IA",
      displayName: "Sunnyday",
      items: [
        { label: "Canales", value: "Omnicanal" },
        { label: "Pipeline", value: "n8n" },
        { label: "Agente IA", value: "Seguimiento" },
      ],
    },
  },
];

const smallProjects = [
  {
    title: "FisioPro",
    subtitle: "App móvil clínica — React Native",
    description:
      "Aplicación de gestión clínica para fisioterapeutas. Manejo de pacientes, citas y sesiones con almacenamiento local SQLite, documentación médica y sincronización con API Spring Boot.",
    tags: ["React Native", "Expo", "TypeScript", "SQLite", "Spring Boot"],
    accentColor: "#06B6D4",
    initials: "FP",
  },
  {
    title: "GymPro",
    subtitle: "App de entrenamiento — Flutter",
    description:
      "Aplicación móvil Flutter con tema oscuro para seguimiento de rutinas de gym. Gráficas de progreso con fl_chart, autenticación con Provider y gestión de datos de entrenamiento.",
    tags: ["Flutter", "Dart", "Provider", "fl_chart", "Google Fonts"],
    accentColor: "#22C55E",
    initials: "GP",
  },
  {
    title: "Resiliente Café",
    subtitle: "Plataforma web con tienda y talleres",
    description:
      "Web app para el ecosistema Resiliente con tienda online, blog, talleres, panel de administración y sistema de login. Frontend React + Vite con React Router.",
    tags: ["React", "Vite", "React Router", "Lucide React"],
    accentColor: "#10B981",
    initials: "RC",
  },
  {
    title: "Electricidad",
    subtitle: "Sitio estático de servicios eléctricos",
    description:
      "Sitio web sencillo y directo para presentación de servicios de electricidad. Galería de trabajos realizados con fotografías y video. Desarrollo estático en HTML y CSS puro.",
    tags: ["HTML", "CSS", "Static Site"],
    accentColor: "#F59E0B",
    initials: "EL",
  },
  {
    title: "CRM RENOVA",
    subtitle: "CRM inmobiliario — Monday.com + Make",
    description:
      "CRM operativo para empresa inmobiliaria con flujo completo desde captación hasta titulación. Tablero estructurado en Monday.com con fases, estados y automatizaciones. Integración Make + ManyChat para captura automática de leads desde WhatsApp. Dashboard directivo con KPIs operativos.",
    tags: ["Monday.com", "Make", "CRM", "Automatización", "ManyChat"],
    accentColor: "#6366F1",
    initials: "CR",
  },
  {
    title: "ALIVOS",
    subtitle: "Plataforma de cursos — Estimulación Temprana",
    description:
      "Plataforma educativa (LMS) a medida con área de alumnos (cursos, módulos, lecciones, progreso, compras) y panel administrativo completo, incluyendo otorgamiento manual de accesos. Backend en Spring Boot con PostgreSQL, video vía Vimeo API y despliegue en Render + Vercel.",
    tags: ["Spring Boot", "PostgreSQL", "Vimeo API", "Render", "E-learning"],
    accentColor: "#14B8A6",
    initials: "AL",
  },
  {
    title: "Tapas y Envases",
    subtitle: "Catálogo industrial — sitio estático",
    description:
      "Sitio web de catálogo para distribuidora industrial de envases: presentación de productos, categorías y contacto. Desarrollo estático en HTML y CSS puro, ligero y rápido de cargar.",
    tags: ["HTML", "CSS", "Catálogo", "Static Site"],
    accentColor: "#0EA5E9",
    initials: "TE",
  },
  {
    title: "Perfil WISC-IV",
    subtitle: "Herramienta de análisis psicométrico",
    description:
      "Aplicación web para generar gráficas de perfil de puntuaciones de la prueba WISC-IV, con exportación de imágenes para uso clínico. Construida con Next.js y TypeScript.",
    tags: ["Next.js", "React", "TypeScript", "Data Viz"],
    accentColor: "#D946EF",
    initials: "WI",
  },
];

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
      <div className="browser-chrome">
        <div style={{ display: "flex", gap: 6 }}>
          <div className="browser-dot" style={{ background: "#FF5F57" }} />
          <div className="browser-dot" style={{ background: "#FEBC2E" }} />
          <div className="browser-dot" style={{ background: "#28C840" }} />
        </div>
        <div className="browser-url">{content.displayUrl || "localhost:3000"}</div>
      </div>

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
              style={{ width: 30, height: 5, background: "rgba(255,255,255,0.1)", borderRadius: 3 }}
            />
          ))}
        </div>
      </div>

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
          {content.displayName || "Proyecto"}
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
          Ver más
        </div>
      </div>

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
            style={{ padding: "10px 8px", background: content.bg, textAlign: "center" }}
          >
            <div style={{ fontSize: "0.8rem", fontWeight: 800, color: content.secondary }}>
              {item.value}
            </div>
            <div style={{ fontSize: "0.55rem", color: "#6B7280" }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMockup({ content }: { content: typeof projects[0]["mockupContent"] }) {
  return (
    <div
      style={{
        width: 220,
        maxWidth: "100%",
        background: content.bg,
        border: "1.5px solid rgba(255,255,255,0.08)",
        borderRadius: 36,
        padding: "16px 12px",
        boxShadow: `0 30px 60px rgba(0,0,0,0.5)`,
      }}
    >
      <div
        style={{
          width: 70,
          height: 18,
          background: "rgba(0,0,0,0.35)",
          borderRadius: 12,
          margin: "0 auto 18px",
        }}
      />

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: `linear-gradient(135deg, ${content.primary}, ${content.secondary})`,
            margin: "0 auto 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: "1.05rem",
            color: "#0B0B16",
          }}
        >
          {(content.displayName || "AP").slice(0, 2).toUpperCase()}
        </div>
        <div style={{ fontSize: "0.85rem", fontWeight: 800, color: content.secondary }}>
          {content.displayName}
        </div>
        <div style={{ fontSize: "0.6rem", color: "#6B7280", marginTop: 2 }}>
          {content.displayUrl}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {content.items.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 12px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 10,
            }}
          >
            <span style={{ fontSize: "0.66rem", color: "#8B93A3" }}>{item.label}</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: content.secondary }}>
              {item.value}
            </span>
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
      style={{ padding: "100px 0 120px", position: "relative", overflow: "hidden" }}
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

        {/* Header with mascot */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Proyectos</span>
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
                margin: 0,
              }}
            >
              Trabajo{" "}
              <span className="gradient-text-orange">destacado</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ color: "#475569", fontSize: "0.95rem", margin: "12px 0 0", lineHeight: 1.6, maxWidth: 480 }}
            >
              Proyectos reales entregados a clientes. Cada uno construido con atención al detalle,
              rendimiento y experiencia de usuario.
            </motion.p>
          </div>

          {/* Projects mascot */}
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
                background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(255,107,53,0.1) 60%, transparent 80%)",
                filter: "blur(24px)",
                zIndex: 0,
              }}
            />
            <div className="animate-float" style={{ position: "relative", zIndex: 1 }}>
              <Image
                src="/proyectos.png"
                alt="NEXA WEB — proyectos realizados"
                width={220}
                height={220}
                style={{ objectFit: "contain" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Featured projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="project-card"
            >
              <div className="project-card-grid">
                <div className="project-card-content">
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

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
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

                    {project.url ? (
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
                    ) : (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "10px 22px",
                          background: `${project.accentColor}12`,
                          border: `1px solid ${project.accentColor}35`,
                          borderRadius: 10,
                          fontSize: "0.84rem",
                          fontWeight: 600,
                          color: project.accentColorLight,
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        En desarrollo
                      </span>
                    )}
                  </div>
                </div>

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
                    {project.mockupType === "phone" ? (
                      <PhoneMockup content={project.mockupContent} />
                    ) : (
                      <BrowserMockup content={project.mockupContent} />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: 80, marginBottom: 32 }}
        >
          <h3
            style={{
              fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#F1F5F9",
              margin: 0,
            }}
          >
            Más{" "}
            <span className="gradient-text-orange">proyectos</span>
          </h3>
          <p style={{ color: "#475569", fontSize: "0.9rem", margin: "8px 0 0", lineHeight: 1.6 }}>
            Apps móviles, plataformas web y proyectos adicionales desarrollados.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {smallProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "28px 28px 24px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
              whileHover={{ y: -4 }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 120,
                  background: `linear-gradient(135deg, ${project.accentColor}06, transparent)`,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: -1,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${project.accentColor}60, transparent)`,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: `${project.accentColor}15`,
                      border: `1px solid ${project.accentColor}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: project.accentColor,
                      letterSpacing: "0.04em",
                      fontFamily: "monospace",
                    }}
                  >
                    {project.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#F1F5F9",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {project.title}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: project.accentColor, fontWeight: 600 }}>
                      {project.subtitle}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    color: "#64748B",
                    fontSize: "0.85rem",
                    lineHeight: 1.65,
                    margin: "0 0 20px",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "3px 8px",
                        background: `${project.accentColor}10`,
                        border: `1px solid ${project.accentColor}20`,
                        borderRadius: 5,
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        color: `${project.accentColor}cc`,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
