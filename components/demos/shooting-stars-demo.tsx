import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const caracteristicas = [
  {
    icon: "/icons/fast.svg",
    title: "Entrega Rápida",
    description:
      "Entrega de 2-4 semanas para la mayoría de proyectos. Llámenos para más información.",
  },
  {
    icon: "/icons/design.svg", 
    title: "Diseño y Desarrollo",
    description:
      "Diseñamos y desarrollamos su sitio web con las últimas tecnologías y tendencias.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Escalabilidad + Mantenimiento",
    description: "Ofrecemos mantenimiento y escalabilidad para todos los sitios web.",
  },
  {
    icon: "/icons/team.svg",
    title: "Equipo de Expertos",
    description: "Un equipo de expertos listo para ayudarte, en todo momento.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Construcción Segura",
    description:
      "Prácticas de construcción seguras y protegidas. Para garantizar que sus datos estén seguros.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Seguimiento Analítico",
    description: "Rastrea tu progreso con nuestra analítica incorporada",
  },
  {
    icon: "/icons/flexible.svg",
    title: "Sitios Web Dinámicos",
    description: "Construimos soluciones dinámicas fáciles de gestionar.",
  },
  {
    icon: "/icons/support.svg",
    title: "Soporte 24/7",
    description:
      "Ofrecemos soporte 24/7 para todos nuestros clientes. Llámenos para más información.",
  },
  {
    icon: "/icons/money.svg",
    title: "Precios Asequibles",
    description: "Precios asequibles para todos nuestros clientes.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Nuestras garantías para ti.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          Aseguramos la más alta calidad de trabajo, con los tiempos de entrega más rápidos.
        </p>
      </h2>

      {/* Características */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {caracteristicas.map((caracteristica, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={caracteristica.icon}
                width={10000}
                height={10000}
                alt="icono"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {caracteristica.title}
            </h3>
            <p className=" text-gray-200">{caracteristica.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
