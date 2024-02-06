"use client";
import { useCartContext } from "@/context/CartContext";

import { CartTop } from ".";

const CartMobile = () => {
  const { isOpen } = useCartContext();
  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } bg-white fixed w-full h-full left-0 z-20 flex flex-col trans md:hidden`}
    >
      <CartTop />
      <div>cart items</div>
    </div>
  );
};

export default CartMobile;
