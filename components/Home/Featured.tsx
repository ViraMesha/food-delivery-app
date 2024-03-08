import { featuredContent } from "@/lib/data";

import { FeaturedItem } from ".";

export const Featured = () => {
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
