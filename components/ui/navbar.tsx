"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";

const Navbar = () => {
  return (
    <Element
      name="top"
      className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
      xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
      justify-between py-6 px-4 md:px-8 mx-6"
    >
      <Link href={"/"}>
        <span className="text-3xl font-bold tracking-wider">XERATO</span>
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
          <Link href={"/projects"} className="hover:text-blue-500">
            Proyectos
          </Link>

          <ScrollLink
            to="services"
            smooth={true}
            className="hover:text-blue-500"
          >
            Servicios
          </ScrollLink>

          <ScrollLink
            to="process"
            smooth={true}
            className="hover:text-blue-500"
          >
            Proceso
          </ScrollLink>

          <ScrollLink
            to="guarentees"
            smooth={true}
            className="hover:text-blue-500"
          >
            Garantías
          </ScrollLink>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <Link
          href={"/meeting"}
          className="
          py-3 
          px-6
          text-lg 
          hover:bg-[#abcbff]
          rounded-[6px]
          border-2
          border-black
          text-white
          bg-[#121212]
          transition
          duration-200
          hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Agendar llamada
        </Link>
      </div>
    </Element>
  );
};

export default Navbar; 