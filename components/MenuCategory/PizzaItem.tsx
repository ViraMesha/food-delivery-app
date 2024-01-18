import Image from "next/image";

type PizzaItemProps = {
  pizza: TPizza;
};

const PizzaItem = ({ pizza }: PizzaItemProps) => {
  const { image, name } = pizza;
  return (
    <li>
      <article>
        <Image src={image} alt={name} width={270} height={270} />
      </article>
    </li>
  );
};

export default PizzaItem;
