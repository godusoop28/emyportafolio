import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXA WEB — Desarrollo Web Profesional",
  description:
    "Desarrollamos páginas web modernas, landing pages y soluciones digitales para negocios. Sitios rápidos, responsivos y adaptados a tu marca.",
  keywords: [
    "desarrollo web",
    "páginas web",
    "NEXA WEB",
    "landing page",
    "diseño web",
    "React",
    "Next.js",
    "México",
    "Cuernavaca",
    "freelance",
  ],
  authors: [{ name: "Emiliano Santiago Rodríguez Castañeda" }],
  openGraph: {
    title: "NEXA WEB — Desarrollo Web Profesional",
    description:
      "Páginas web modernas, landing pages y soluciones digitales para negocios.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060611]">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
