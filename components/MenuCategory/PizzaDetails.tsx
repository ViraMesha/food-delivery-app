import { useEffect, useState } from "react";

type PizzaDetailsProps = {
  pizza: TPizza;
  toggleModal: () => void;
  isOpenModal: boolean;
};

type TSize = "small" | "medium" | "large";

const PizzaDetails = ({
  pizza,
  toggleModal,
  isOpenModal,
}: PizzaDetailsProps) => {
  const { priceSm, priceMd, priceLg } = pizza;
  const [size, setSize] = useState<TSize>("small");
  const [crust, setCrust] = useState("traditional");
  const [topping, setTopping] = useState([]);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    switch (size) {
      case "small":
        setPrice(parseFloat((priceSm + toppingPrice).toFixed(2)));
        break;

      case "medium":
        setPrice(parseFloat((priceMd + toppingPrice).toFixed(2)));
        break;

      case "large":
        setPrice(parseFloat((priceLg + toppingPrice).toFixed(2)));
        break;

      default:
        console.log("Invalid size type");
    }
  }, [priceLg, priceMd, priceSm, size, toppingPrice]);

  console.log(price);

  return <div>PizzaDetails</div>;
};

export default PizzaDetails;
