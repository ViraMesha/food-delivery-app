"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import burger from "@images/burger.png";

export const OfferImageSection = () => {
  return (
    <div className="flex-1 w-full">
      <Tilt style={{ height: "100%" }}>
        <div className="w-full h-full relative">
          <Image src={burger} alt="" fill className="object-contain" />
        </div>
      </Tilt>
    </div>
  );
};
