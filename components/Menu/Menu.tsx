import Image from "next/image";
import Link from "next/link";

import { menuItems } from "@/lib/data";

export const Menu = () => {
  return (
    <section className="py-10 md:py-20 xl:py-30 min-h-[calc(100vh - 80px)] md:min-h-[calc(100vh - 500px)]">
      <div className="wrapper">
        <ul className="flex flex-col lg:flex-wrap md:flex-row items-center justify-center gap-8">
          {menuItems.map(({ id, title, img, slug, desc }) => (
            <li
              key={id}
              className="relative w-[25.5rem] h-[19rem] md:w-[17rem] lg:h-[22.5rem] rounded-2xl overflow-clip p-[1.5rem] b-white trans shadow-2xl lg:hover:translate-y-[20px] before:opacity-[1] lg:hover:before:opacity-[1] group before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:rounded-[15px] before:bg-[rgba(0,0,0,0.6)] before:z-2 before:trans lg:before:opacity-0"
            >
              <Link href={`/menu/${slug}`}>
                {img && (
                  <div>
                    <Image
                      src={img}
                      alt={title}
                      className="cover object-center -z-[1] rounded-2xl"
                      fill
                    />
                  </div>
                )}
                <div
                  className="relative h-full z-[3] text-white
               lg:opacity-0 lg:translate-y-[30px] flex flex-col justify-end trans lg:group-hover:opacity-[1] lg:group-hover:translate-y-0"
                >
                  <h2 className="text-3xl">{title}</h2>

                  <p className="tracking-[1px] text-[1.2rem] mt-[0.5rem]">
                    {desc}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
