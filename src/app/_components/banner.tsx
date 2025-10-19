"use client";
import Image from "next/image";
import jerson from "../../../public/jerson.webp";
import { Github, Gitlab, Linkedin } from "lucide-react";
import LogosCloud from "./LogosCloud";
import { useBanner } from "../_core/hooks";

const Banner = () => {
  const {
    imageContainer,
    bottomContainer,
    userContainer,
    professionContainer,
    descriptionContainer,
    socialContainer,
    btnContainer,
    line1Container,
    line2Container,
  } = useBanner();

  return (
    <div className="flex items-center justify-center min-h-[100vh] relative banner-container overflow-x-hidden overflow-y-auto bg-black">
      <LogosCloud />
      <svg
        preserveAspectRatio="none"
        className="absolute left-0 bottom-0 h-[30%] md:h-[50%] w-auto opacity-0"
        width="381"
        height="770"
        viewBox="0 0 381 770"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={line1Container}
      >
        <path
          d="M347.729 766.852C347.729 766.852 444.525 589.091 293.258 494.66C141.992 400.228 81.2469 428.842 106.402 211.323C131.557 -6.19541 55.8326 12.4745 2.99955 3.24251"
          className="stroke-yellow-400/15"
          strokeWidth="4.60098"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
      </svg>
      <svg
        className="absolute right-0 top-0 h-[40%] md:h-[60%] w-auto opacity-0"
        xmlns="http://www.w3.org/2000/svg"
        width="304"
        height="805"
        viewBox="0 0 304 805"
        fill="none"
        ref={line2Container}
      >
        <path
          d="M49.123 3C49.123 3 -68.0043 168.074 71.0415 279.722C210.087 391.369 273.788 370.136 223.102 583.157C172.415 796.178 249.815 786.589 301.186 802"
          className="stroke-yellow-400/15"
          strokeWidth="4.60098"
          strokeMiterlimit="10"
          strokeLinecap="round"
        ></path>
      </svg>
      <div className="items-center justify-center md:flex-row max-w-5xl 2xl:max-w-6xl mx-auto px-4 relative flex flex-col gap-8 md:gap-12 z-10">
        <div className="h-[250px] md:h-[586px] md:w-[433px] w-auto flex items-center justify-center">
          <Image
            src={jerson}
            alt="Jerson Omar Ramírez Ortiz"
            width={433}
            height={586}
            ref={imageContainer}
            className="shrink-0 shadow-image h-auto w-full max-h-full opacity-0"
          />
        </div>
        <div className="md:mb-12 2xl:mb-16 flex flex-col gap-4 items-center text-center md:items-start md:text-start">
          <h1
            ref={userContainer}
            className="font-bold text-yellow-400 text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl opacity-0"
          >
            Hola, soy
            <br />
            Jerson Ramírez Ortiz
          </h1>
          <p
            ref={professionContainer}
            className="text-white text-xl xl:text-2xl 2xl:text-3xl opacity-0"
          >
            Fullstack Developer
          </p>
          <p
            ref={descriptionContainer}
            className="text-neutral-400 text-sm md:text-base max-w-md opacity-0"
          >
            Desarrollador de software con más de 3 años de experiencia creando
            soluciones web, móviles y de escritorio. Me especializo en construir
            productos funcionales, escalables y centrados en el usuario,
            participando en todo el ciclo de desarrollo.
          </p>
          <div className="flex flex-wrap gap-3 opacity-0" ref={socialContainer}>
            <a
              href="https://github.com/jerson100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/jerson100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 text-blue-500" />
            </a>
            <a
              href="https://gitlab.com/jerson100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gitlab className="w-4 text-orange-500" />
            </a>
          </div>
          <div ref={btnContainer} className="opacity-0">
            <a
              href="mailto:jramiror@emeal.nttdata.com"
              className="px-4 py-2 bg-amber-300 text-black font-semibold rounded-md shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 active:bg-amber-400 transition-all cursor-pointer text-sm xl:text-base"
            >
              Contáctame!
            </a>
          </div>
        </div>
        <div
          className="absolute -bottom-2 left-0 bg-amber-50/5 w-full max-w-3/4 p-4 2xl:p-6 rounded-md backdrop-blur-xs hidden md:block border border-neutral-800 opacity-0"
          ref={bottomContainer}
        >
          <ul className="flex justify-between list-none text-sm">
            <li className="flex flex-col gap-1">
              <span className="text-xl">3+</span>
              <span className="text-neutral-400">Años de experiencia</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xl">12+</span>
              <span className="text-neutral-400">Clientes</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xl">32+</span>
              <span className="text-neutral-400">Autom. completadas</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xl">17+</span>
              <span className="text-neutral-400">Proyectos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
