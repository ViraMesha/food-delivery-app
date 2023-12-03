import Image from "next/image";

import { featuredContent } from "@/lib/data";

import pizzaImg from "../public/temp/pizza.png";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-[var(--secondary-text-color)] ">
      {/* Products' list wrapper */}
      <ul className="w-max flex">
        {/* Single item */}
        {featuredContent.map(({ id, title, img, desc, price, options }) => (
          <li
            key={id}
            className="w-screen h-[60vh] flex flex-col items-center justify-between py-4 hover:bg-[var(--accent-color)] trans"
          >
            {/* Image Container */}
            <div className="relative flex-1 w-full hover:rotate-[60deg] trans">
              <Image src={img} alt="Pizza" fill className="object-contain" />
            </div>
            {/* Text container */}
            <div className="flex-1 flex flex-col items-center text-center gap-4">
              <h2 className="text-3xl font-black capitalize">{title}</h2>
              <p className="p-4">{desc}</p>
              <span className="text-xl font-bold">${price}</span>
              <button className="bg-[var(--secondary-text-color)] p-2 md:p-5 rounded-md text-white text-lg md:text-2xl hover:bg-white hover:text-[var(--secondary-text-color)] hover:shadow-2xl cursor-pointer trans">
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Featured;
