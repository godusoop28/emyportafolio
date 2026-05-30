import About from "../components/About";
import TechStack from "../components/TechStack";

export const metadata = {
  title: "Sobre mí — NEXA WEB",
  description: "Conoce a Emiliano Rodríguez, desarrollador web especializado en React, Next.js y Spring Boot con sede en Cuernavaca, Morelos.",
};

export default function SobreMiPage() {
  return (
    <>
      <About />
      <TechStack />
    </>
  );
}
