"use client";
import { useRef } from "react";
import Image from "next/image";
import jerson from "../../../public/jerson.webp";
import { Github, Gitlab, Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = () => {
  const imageContainer = useRef<HTMLImageElement>(null);
  const bottomContainer = useRef<HTMLImageElement>(null);
  const userContainer = useRef<HTMLImageElement>(null);
  const professionContainer = useRef<HTMLImageElement>(null);
  const descriptionContainer = useRef<HTMLImageElement>(null);
  const socialContainer = useRef<HTMLDivElement>(null);
  const btnContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(imageContainer.current, {
      opacity: 0,
      x: -100,
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.from(bottomContainer.current, {
      opacity: 0,
      x: 50,
      delay: 0.35,
      duration: 0.5,
      ease: "power1.inOut",
    });

    const tl = gsap.timeline({
      defaults: { duration: 0.35, ease: "sine.out" }, // Default animation properties
      repeat: 0,
      delay: 0.5,
    });

    tl.from(userContainer.current, { opacity: 0, y: -20 })
      .from(professionContainer.current, { opacity: 0, x: 20 })
      .from(descriptionContainer.current, { opacity: 0, y: 20 })
      .from(socialContainer.current, { opacity: 0, x: 20 })
      .from(btnContainer.current, { opacity: 0, y: 20 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <div className="items-center justify-center md:flex-row max-w-5xl 2xl:max-w-6xl mx-auto px-4 relative flex flex-col gap-8 md:gap-12">
        <div className="relative">
          {/* <div className="absolute -top-28 left-1/2 -translate-x-1/2 bg-radial from-black via-yellow-400/20 to-black h-[500px] w-[500px] rounded-full"></div> */}
          <Image
            src={jerson}
            alt="Jerson Omar Ramírez Ortiz"
            width={600}
            height={350}
            ref={imageContainer}
            className="shrink-0 h-[250px] md:h-[600px] 2xl:h-[700px] w-auto shadow-image"
          />
        </div>
        <div className="md:mb-12 2xl:mb-16 flex flex-col gap-4 items-center text-center md:items-start md:text-start">
          <h1
            ref={userContainer}
            className="font-bold text-yellow-400 text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl"
          >
            Hola, soy
            <br />
            Jerson Ramírez Ortiz
          </h1>
          <h2
            ref={professionContainer}
            className="text-white text-xl xl:text-2xl 2xl:text-3xl"
          >
            Fullstack Developer
          </h2>
          <p
            ref={descriptionContainer}
            className="text-neutral-400 text-sm md:text-base max-w-md"
          >
            Desarrollador de software con más de 3 años de experiencia creando
            soluciones web, móviles y de escritorio. Me especializo en construir
            productos funcionales, escalables y centrados en el usuario,
            participando en todo el ciclo de desarrollo.
          </p>
          <div className="flex flex-wrap gap-3" ref={socialContainer}>
            <a href="https://github.com/jerson100" target="_blank nooreefer">
              <Github className="w-4 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/jerson100"
              target="_blank nooreefer"
            >
              <Linkedin className="w-4 text-blue-500" />
            </a>
            <a href="https://wwww.google.com" target="_blank nooreefer">
              <Gitlab className="w-4 text-orange-500" />
            </a>
          </div>
          <div ref={btnContainer}>
            <a
              href="mailto:jramiror@emeal.nttdata.com"
              className="px-4 py-2 bg-amber-300 text-black font-semibold rounded-md shadow hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 active:bg-amber-400 transition-all cursor-pointer text-sm xl:text-base"
            >
              Contáctame!
            </a>
          </div>
        </div>
        <div
          className="absolute -bottom-2 left-0 bg-amber-50/5 w-full max-w-3/4 p-4 2xl:p-6 rounded-md backdrop-blur-xs hidden md:block border border-neutral-800"
          ref={bottomContainer}
        >
          <ul className="flex justify-between list-none text-sm">
            <li className="flex flex-col gap-2">
              <span className="text-xl">3+</span>
              <span className="text-neutral-400">Años de experiencia</span>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-xl">15+</span>
              <span className="text-neutral-400">Clientes</span>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-xl">32+</span>
              <span className="text-neutral-400">Autom. completadas</span>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-xl">10+</span>
              <span className="text-neutral-400">Proyectos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
