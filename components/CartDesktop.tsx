"use client";

import { useCartActionsContext, useCartContext } from "@/context/CartContext";

import { CartBottom, CartItem, CartTop } from ".";

export const CartDesktop = () => {
  const { toggleModal } = useCartActionsContext();
  const { isOpen, cartItems } = useCartContext();

  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      } bg-white fixed top-0 z-10 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col trans`}
    >
      <CartTop />
      {/* list of items */}
      <div
        className={`px-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 mt-8 overflow-y-scroll scrollbar-thin ${
          cartItems.length >= 3 &&
          "scrollbar-track-black/10 scrollbar-thumb-teal-800"
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
