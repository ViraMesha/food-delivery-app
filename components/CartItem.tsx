import Image from "next/image";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

import { useCartActionsContext } from "@/context/CartContext";

type CartItemProps = {
  pizza: TCartItems;
};

export const CartItem = ({ pizza }: CartItemProps) => {
  const { removeCartItem, increaseAmount, decreaseAmount } =
    useCartActionsContext();
  const { id, image, name, crust, size, price, amount, additionalToppings } =
    pizza;
  return (
    <li className="select-none">
      <div className="flex gap-x-4 mb-2">
        {/* image */}
        <div className="flex justify-center items-center">
          <Image src={image} alt={name} width={90} height={90} />
        </div>
        {/* pizza info */}
        <div className="flex flex-col gap-y-1 flex-1">
          {/* 
        name */}
          <h3 className="text-lg capitalize font-bold">{name}</h3>
          <div className="flex flex-col gap-y-1">
            {/* crust */}
            <p className="capitalize font-medium text-[15px]">{crust} crust</p>
            {/* size */}
            <p className="capitalize mb-2 font-medium text-[15px]">
              {size} size
            </p>
            {/* quantity controls */}
            <div className="flex items-center gap-x-1">
              {/* decrease quantity */}
              <div
                onClick={() => decreaseAmount(id, price)}
                className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full"
              >
                <BiMinus />
              </div>
              {/* pizza amount */}
              <span className="font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm">
                {amount}
              </span>
              {/* increase quantity */}
              <div
                onClick={() => increaseAmount(id, price)}
                className="w-[18px] h-[18px] flex justify-center items-center cursor-pointer text-white gradient rounded-full"
              >
                <BiPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {/* remove item */}
          <div
            onClick={() => removeCartItem({ id, price, crust })}
            className="text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 trans text-[var(--secondary-text-color)]"
          >
            <IoCloseOutline />
          </div>
          {/* price */}
          <div>
            <span className="text-[17px] font-medium">
              ${(price * amount).toFixed(2).toString()}
            </span>
          </div>
        </div>
      </div>
      {/* toppings */}
      <div className="flex flex-wrap items-center gap-3 p-6 border-b border-black/10">
        <div>
          <span className="font-semibold">Toppings:</span>{" "}
          {!additionalToppings.length && "None"}
        </div>
        <ul className="flex flex-wrap gap-2 py-1 justify-center lg:justify-start">
          {additionalToppings.map((topping, index) => (
            <li
              key={index}
              className="capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none"
            >
              {topping.name}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
