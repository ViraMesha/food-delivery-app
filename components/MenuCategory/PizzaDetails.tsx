import Image from "next/image";
import { useEffect, useState } from "react";

import CrustSelection from "./CrustSelection";
import SizeSelection from "./SizeSelection";
import Topping from "./Topping";

type PizzaDetailsProps = {
  pizza: TPizza;
  toggleModal: () => void;
  isOpenModal: boolean;
};

type TTopping = {
  price: number;
};

const PizzaDetails = ({
  pizza,
  toggleModal,
  isOpenModal,
}: PizzaDetailsProps) => {
  const { priceSm, priceMd, priceLg, image, name } = pizza;
  const [size, setSize] = useState<TSize>("small");
  const [crust, setCrust] = useState<TCrust>("traditional");
  const [toppings, setToppings] = useState<TTopping[] | []>([]);
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

  useEffect(() => {
    if (toppings.length > 0) {
      const toppingPrice = toppings.reduce(
        (acc, topping) => acc + topping.price,
        0
      );
      setToppingPrice(toppingPrice);
    } else {
      setToppingPrice(0);
    }
  }, [toppings]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
      {/* top */}
      <div className="lg:flex-1 flex justify-center items-center">
        {/* pizza image */}
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image
            width={450}
            height={450}
            src={image}
            alt={name}
            priority
            className="mx-auto"
          />
        </div>
      </div>
      {/* details */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            {/* name */}
            <div className="font-semibold">
              <h3 className="capitalize text-3xl mb-1">{name}</h3>
              <div className="bg-yellow-200 mb-6 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25 cm"
                    : size === "medium"
                    ? "30 cm"
                    : size === "large"
                    ? "35 cm"
                    : null}
                  ,
                </span>
                <span>{crust} crust</span>
              </div>
            </div>
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />
            <CrustSelection />
            <span>Choose topping</span>
            <ul>
              {toppings?.map((topping, index) => (
                <Topping key={index} />
              ))}
            </ul>
          </div>
        </div>
        {/* add to cart btn */}
        <div className="h-full flex items-center px-2 lg:items-end">
          <button
            type="button"
            className="btn btn-lg gradient w-full flex justify-center gap-x-2"
          >
            <span>Add to cart for</span>
            <span> $ {price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
