import React from "react";
import Banner from "./_components/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jerson Omar Ramírez Ortiz",
  description:
    "Desarrollador de software con más de 3 años de experiencia creando soluciones web, móviles y de escritorio. Me especializo en construir productos funcionales, escalables y centrados en el usuario, participando en todo el ciclo de desarrollo.",
};

const HomePage = () => {
  return (
    <div className="">
      <Banner />
    </div>
  );
};

export default HomePage;
