import React from "react";
import Banner from "./_components/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jerson Omar Ramírez Ortiz",
  description: "Portafolio de Jerson Omar Ramírez Ortiz",
};

const HomePage = () => {
  return (
    <div className="">
      <Banner />
    </div>
  );
};

export default HomePage;
