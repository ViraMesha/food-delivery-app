import { pizzas } from "@/lib/data";

import PizzaItem from "./PizzaItem";

const PizzasList = () => {
  return (
    <ul className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px]">
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default PizzasList;
