"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { heroContent } from "@/lib/data";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) =>
          prev === heroContent.length - 1 ? 0 : prev + 1
        ),
      10000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[calc(100vh-6rem)] lg:h-[calc(100vh-7.6rem)] bg-[var(--accent-color)] flex flex-col items-center gap-10 sm:flex-row">
      {/* Text content */}
      <div className="flex-1 flex flex-col gap-4 md:gap-11 items-center justify-center text-center pl-2">
        <h1 className="text-[var(--secondary-text-color)] font-black leading-[1.3] text-3xl md:text-4xl lg:text-5xl capitalize">
          {heroContent[currentSlide].title}
        </h1>
        <p className="text-[#7C7C7C] text-base md:text-lg lg:text-2xl ">
          Explore and understand the culture more by tasting the amazing dishes
          of that culture
        </p>
        <button className="bg-[var(--secondary-text-color)] p-2 md:p-5 rounded-md text-white text-lg md:text-2xl hover:bg-white hover:text-[var(--secondary-text-color)] hover:shadow-2xl cursor-pointer trans">
          Order Food
        </button>
      </div>
      {/* Slider */}
      <div className="flex-1 h-full w-full relative">
        <Image
          src={heroContent[currentSlide].img}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
