import Image from "next/image";

import { featuredContent } from "@/lib/data";

export const Featured = () => {
  return (
    <section className="w-screen overflow-auto overscroll-x-contain text-[var(--secondary-text-color)]">
      {/* Products' list wrapper */}
      <ul className="w-max flex">
        {/* Single item */}
        {featuredContent.map(({ id, title, img, desc, price }) => (
          <li
            key={id}
            className="w-screen h-[70vh] flex flex-col items-center p-4 gap-5 hover:bg-[var(--accent-color)] trans md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* Image Container */}
            <div className="relative w-full flex-1 hover:scale-110 trans">
              <Image src={img} alt="Pizza" fill className="object-contain" />
            </div>
            {/* Text container */}
            <div className="flex-1 flex flex-col items-center justify-between text-center gap-4">
              <h2 className="text-3xl font-black capitalize">{title}</h2>
              <p className="p-4 2xl:p-8 text-xl">{desc}</p>
              <span className="text-xl font-bold">${price}</span>
              <button className="bg-[var(--secondary-text-color)] p-2 md:p-5 rounded-md text-white text-lg md:text-2xl hover:bg-white hover:text-[var(--secondary-text-color)] hover:shadow-2xl cursor-pointer trans">
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
