import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/rating-app.png",
    title: "Rating App",
    link: "https://www.ratingapp.com.ar",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/copa-de-reyes.png",
    title: "Copa de Reyes",
    link: "https://www.blackrhinoygp.com/copadereyes",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/risingshakti.png",
    title: "Rising Shakti",
    link: "https://www.risingshakti.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/novoturismo.png",
    title: "Novoturismo",
    link: "https://www.novoturismo.com.uy",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/green.png",
    title: "Envases green",
    link: "https://www.envasesgreen.com.ar",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/as1pe.png",
    title: "AS1",
    link: "https://www.as1.pe",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/seshat.png",
    title: "Seshat",
    link: "https://seshatdistribuidora.com/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/congreso-de-punta.png",
    title: "Congreso de Punta",
    link: "https://www.congresodepunta.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/palacio.png",
    title: "Palacio Propiedades",
    link: "https://www.franciscopalacios.com.ar",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/donapupa.png",
    title: "Dona pupa",
    link: "https://www.donapupa.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/projects/blackrhino.png",
    title: "Black Rhino YGP",
    link: "https://www.blackrhinoygp.com",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
