"use client";

import { useEffect, useState } from "react";
import { LOGOS } from "../_core/consts";
import { delays } from "../_core/utils";

export default function LogosCloud() {
  const [_delays, setDelays] = useState<number[]>([]);
  useEffect(() => {
    setDelays(delays(LOGOS.length));
  }, []);
  return (
    <>
      {LOGOS.map((logo, i) => {
        return (
          <div
            key={logo.name}
            className={`absolute w-12 h-12 z-10 pointer-events-none ${logo.className} fadeIn delay-[${_delays[i]}ms]`}
            style={{ filter: "blur(5px) brightness(0.9) opacity(0.5)" }}
          >
            {logo.svg}
          </div>
        );
      })}
    </>
  );
}
