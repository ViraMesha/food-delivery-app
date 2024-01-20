import Image from "next/image";

type PizzaItemProps = {
  pizza: TPizza;
};

const PizzaItem = ({ pizza }: PizzaItemProps) => {
  const { image, name, description, priceSm, priceMd, priceLg } = pizza;
  return (
    <li>
      <article className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
        <Image
          className="lg:group-hover:translate-y-3 trans mb-8 cursor-pointer"
          src={image}
          alt={name}
          width={270}
          height={270}
          priority
        />
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold mb-3 capitalize cursor-pointer">
            {name}
          </h3>
        </div>
        {/* Description */}
        <p className="text-sm font-medium min-h-[60px] mb-6">{description}</p>
        {/* price & btn */}
        <div className="mb-6 flex items-center justify-between">
          {/* price => hidden (sm) - visible (lg) */}
          <span className="hidden lg:flex text-xl font-semibold">
            starts at {priceSm}
          </span>
          {/* btn => hidden (sm) - visible (lg) */}
          <button className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">
            Choose
          </button>
          {/* btn => visible (sm) - hidden (lg) */}
          <button className="btn btn-sm gradient lg:hidden px-3 text-sm">
            starts at {priceSm}
          </button>
        </div>
      </article>
    </li>
  );
};

export default PizzaItem;
