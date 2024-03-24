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

type AddToCartParams = {
  id: number;
  image: string;
  name: string;
  price: number;
  additionalToppings: Topping[];
  size: TSize;
  crust: TCrust;
};

type TCartItems = AddToCartParams & {
  amount: number;
};

type RemoveCartItemProps = {
  id: number;
  price: number;
  crust: TCrust;
};

type OrderT = {
  id: string;
  userEmail: string;
  createdAt: Date;
  price: number;
  products: object[];
  status: string;
  intent_id?: string;
};
