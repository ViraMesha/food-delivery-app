"use client";
import Counterdown from "react-countdown";

const endingDate = new Date("2024-02-31");

export const CountDown = () => {
  return (
    <Counterdown
      className="font-bold text-5xl md:text-6xl text-[var(--rating-color)]"
      date={endingDate}
    />
  );
};
