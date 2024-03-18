import { featuredContent } from "@/lib/data";

import { FeaturedItem } from ".";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed!");

  return res.json();
};

export const Featured = async () => {
  // const featuredContent: TPizza[] = await getData();
  return (
    <section className="w-screen overflow-auto overscroll-x-contain text-[var(--secondary-text-color)]">
      {/* Products' list wrapper */}
      <ul className="w-max flex">
        {/* Single item */}
        {featuredContent.map((item) => (
          <FeaturedItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};
