"use client";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

export const Logo = () => {
  return (
    <Tilt style={{ height: "100%" }}>
      <Link
        href="/"
        className="relative z-10 font-black text-[25px] md:text-[35px] leading-normal"
      >
        FoodSwift
      </Link>
    </Tilt>
  );
};

