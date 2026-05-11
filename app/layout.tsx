import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emiliano Rodríguez — Desarrollador de Software",
  description:
    "Desarrollador de Software Multiplataforma especializado en React, Next.js, React Native, Spring Boot y APIs REST. Disponible para proyectos freelance.",
  keywords: [
    "desarrollador",
    "software",
    "React",
    "Next.js",
    "Spring Boot",
    "React Native",
    "México",
    "Cuernavaca",
    "freelance",
  ],
  authors: [{ name: "Emiliano Santiago Rodríguez Castañeda" }],
  openGraph: {
    title: "Emiliano Rodríguez — Desarrollador de Software",
    description:
      "Desarrollador de Software Multiplataforma especializado en React, Next.js y Spring Boot.",
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
      <body className="min-h-full flex flex-col bg-[#060611]">{children}</body>
    </html>
  );
}
