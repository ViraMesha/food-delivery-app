type MenuItem = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
};

type Topping = {
  image: string;
  name: string;
  price: number;
};

type TPizza = {
  id: number;
  name: string;
  description: string;
  image: string;
  priceSm: number;
  priceMd: number;
  priceLg: number;
  toppings: Topping[];
};

type TSize = "small" | "medium" | "large";
type TCrust = "traditional" | "thin";
