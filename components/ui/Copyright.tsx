import Link from "next/link";
import { BiSolidHeart } from "react-icons/bi";

export const Copyright = () => {
  return (
    <div className="pt-7 mt-7 md:mt-14 md:pt-10 text-gray-500 text-center">
      <p className="text-center items-center mx-auto text-sm">
        &copy; 2023{" "}
        <Link
          href="/"
          className="text-[var(--secondary-text-color)] pb-1 linkUnderlineHover"
        >
          FoodSwift
        </Link>
        . All rights reserved. Created with{" "}
        <BiSolidHeart className="text-red-500 mx-1 inline-block" /> by{" "}
        <Link
          href="https://www.linkedin.com/in/vira-mesha/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-[var(--secondary-text-color)] pb-1 linkUnderlineHover"
        >
          Vira Mesha
        </Link>
      </p>
    </div>
  );
};
