"use client";
import { useCartContext } from "@/context/CartContext";

import { CartBottom, CartItem, CartTop } from ".";

const CartMobile = () => {
  const { isOpen, cartItems } = useCartContext();

  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } bg-white fixed w-full h-full left-0 z-20 flex flex-col trans md:hidden`}
    >
      <CartTop />
      <div
        className={`px-4 flex flex-col gap-y-4 py-2 mr-8 mt-8 h-[60vh] overflow-y-scroll scrollbar-thin -red-300 ${
          cartItems.length > 3
            ? "scrollbar-track-white/10"
            : "scrollbar-track-transparent"
        }`}
      >
        {cartItems?.map((pizza, index) => (
          <CartItem pizza={pizza} key={index} />
        ))}
      </div>
      <CartBottom />
    </div>
  );
};

export default CartMobile;
