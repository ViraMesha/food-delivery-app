import { pizzas } from "@/lib/data";

import PizzaItem from "./PizzaItem";

const PizzasList = () => {
  return (
    <ul>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default PizzasList;
