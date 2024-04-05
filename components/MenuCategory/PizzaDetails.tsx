"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useCartActionsContext } from "@/context/CartContext";
import { convertStringToNumber } from "@/utils";

import CrustSelection from "./CrustSelection";
import SizeSelection from "./SizeSelection";
import Topping from "./Topping";

type PizzaDetailsProps = {
  pizza: TPizza;
  toggleModal: () => void;
  isOpenModal: boolean;
};

const PizzaDetails = ({
  pizza,
  toggleModal,
  isOpenModal,
}: PizzaDetailsProps) => {
  const { priceSm, priceMd, priceLg, image, name, toppings, id } = pizza;

  const [size, setSize] = useState<TSize>("small");
  const [crust, setCrust] = useState<TCrust>("traditional");
  const [toppingPrice, setToppingPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [additionalToppings, setAdditionalToppings] = useState<Topping[] | []>(
    []
  );

  const { addToCart } = useCartActionsContext();

  const parsedPriceSm = convertStringToNumber(priceSm, 0);
  const parsedPriceMd = convertStringToNumber(priceMd, 0);
  const parsedPriceLg = convertStringToNumber(priceLg, 0);
  const parsedToppingPrice = convertStringToNumber(toppingPrice, 0);

  useEffect(() => {
    switch (size) {
      case "small":
        setPrice(parseFloat((parsedPriceSm + parsedToppingPrice).toFixed(2)));
        break;

      case "medium":
        setPrice(parseFloat((parsedPriceMd + parsedToppingPrice).toFixed(2)));
        break;

      case "large":
        setPrice(parseFloat((parsedPriceLg + parsedToppingPrice).toFixed(2)));
        break;

      default:
        console.log("Invalid size type");
    }
  }, [parsedPriceLg, parsedPriceMd, parsedPriceSm, parsedToppingPrice, size]);

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
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full lg:p-8">
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
              <div className="mb-6 text-lg font-medium">
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
            <CrustSelection crust={crust} setCrust={setCrust} />
            <span className="mb-4 text-xl font-semibold">Choose topping</span>
            <ul className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
              {toppings?.map((topping, index) => (
                <Topping
                  topping={topping}
                  additionalToppings={additionalToppings}
                  setAdditionalToppings={setAdditionalToppings}
                  key={index}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* add to cart btn */}
        <div className="h-full flex items-center px-2 lg:items-end pb-5 lg:pb-0">
          <button
            onClick={() => {
              addToCart({
                id,
                image,
                name,
                price,
                additionalToppings,
                size,
                crust,
              });
              toggleModal();
            }}
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
