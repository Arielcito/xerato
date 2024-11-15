"use client";


import Calendly from "./cal";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Cal from "@calcom/embed-react";
import CalEmbed from "./cal";
import Navbar from "@/components/ui/navbar";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {



  return (
    <div className="
    
    flex flex-col  w-full  

     overflow-clip inset-0 -z-10 
  bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]
    
    ">
      <Navbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10   ">Reunámonos</h1>
          <p className="text-lg text-gray-500 py-4">
            Siempre estamos emocionados de conocer nuevas personas y discutir nuevos proyectos.
            No dudes en agendar una reunión con nosotros.
          </p>

          {[
                {
                  title: "Desarrollo + Diseño",
                  description:
                    "Convierte tus ideas en realidad con nuestros servicios de desarrollo y diseño.",
                },

                {
                  title: "Consulta Gratuita",
                  description:
                    "Obtén asesoramiento experto sobre cómo mejorar tu negocio y aumentar tu presencia en línea.",
                },
                {
                  title: "Soporte Técnico",
                  description:
                    "Obtén soporte técnico para tu sitio web o aplicación.",
                },
              ].map((item, index) => (
                <motion.div
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
        </div>

    <div className="md:w-1/2">
      <CalEmbed />
      </div>
      </div>
    </div>
  );
};

export default Meeting;
