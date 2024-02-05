"use client";
import { useCartContext } from "@/context/CartContext";

const CartMobile = () => {
  const { isOpen } = useCartContext();
  return (
    <div
      className={`${
        isOpen ? "bottom-0" : "-bottom-full"
      } bg-green-400 fixed w-full h-full left-0`}
    >
      CartMobile
    </div>
  );
};

export default CartMobile;
