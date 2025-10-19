import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useBanner = () => {
  const imageContainer = useRef<HTMLImageElement>(null);
  const bottomContainer = useRef<HTMLImageElement>(null);
  const userContainer = useRef<HTMLImageElement>(null);
  const professionContainer = useRef<HTMLImageElement>(null);
  const descriptionContainer = useRef<HTMLImageElement>(null);
  const socialContainer = useRef<HTMLDivElement>(null);
  const btnContainer = useRef<HTMLDivElement>(null);
  const line1Container = useRef<SVGSVGElement>(null);
  const line2Container = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    // Estado inicial manual
    gsap.set(imageContainer.current, { opacity: 0, x: -100 });
    gsap.set(bottomContainer.current, { opacity: 0, x: 50 });
    gsap.set(line1Container.current, { opacity: 0, x: -20 });
    gsap.set(line2Container.current, { opacity: 0, x: 20 });

    gsap.to(imageContainer.current, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.to(bottomContainer.current, {
      opacity: 1,
      x: 0,
      // delay: 0.35,
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.to(line1Container.current, {
      opacity: 1,
      x: 0,
      delay: 1.5,
      duration: 0.5,
      ease: "power1.inOut",
    });

    gsap.to(line2Container.current, {
      opacity: 1,
      x: 0,
      delay: 1,
      duration: 0.5,
      ease: "power1.inOut",
    });

    // Timeline: estado inicial manual
    gsap.set(userContainer.current, { opacity: 0, y: -20 });
    gsap.set(professionContainer.current, { opacity: 0, x: 20 });
    gsap.set(descriptionContainer.current, { opacity: 0, y: 20 });
    gsap.set(socialContainer.current, { opacity: 0, x: 20 });
    gsap.set(btnContainer.current, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      defaults: { duration: 0.35, ease: "sine.out" },
      repeat: 0,
      delay: 0.5,
    });

    tl.to(userContainer.current, { opacity: 1, y: 0 })
      .to(professionContainer.current, { opacity: 1, x: 0 })
      .to(descriptionContainer.current, { opacity: 1, y: 0 })
      .to(socialContainer.current, { opacity: 1, x: 0 })
      .to(btnContainer.current, { opacity: 1, y: 0 });

    return () => {
      tl.kill();
    };
  });

  return {
    imageContainer,
    bottomContainer,
    userContainer,
    professionContainer,
    descriptionContainer,
    socialContainer,
    btnContainer,
    line1Container,
    line2Container,
  };
};
