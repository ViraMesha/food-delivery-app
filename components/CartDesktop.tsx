"use client";

import { useCartActionsContext, useCartContext } from "@/context/CartContext";

import { CartBottom, CartItem, CartTop } from ".";

export const CartDesktop = () => {
  const { toggleModal } = useCartActionsContext();
  const { isOpen, cartItems } = useCartContext();

  console.log(cartItems.length);

  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      } bg-white fixed top-0 z-10 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col trans`}
    >
      <CartTop />
      {/* list of items */}
      <div
        className={`px-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 mt-8 ${
          cartItems.length >= 3 &&
          "overflow-y-scroll scrollbar-thumb-gray-200 scrollbar-track-white scrollbar-thin"
        }`}
      >
        {cartItems.map((item, index) => (
          <CartItem pizza={item} key={index} />
        ))}
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  );
};
