"use client";
import { IoCloseOutline } from "react-icons/io5";

import { useCartActionsContext } from "@/context/CartContext";

export const CartTop = () => {
  const { toggleModal } = useCartActionsContext();

  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10">
      {/* shopping bag text */}
      <div className="font-semibold">Shopping Bag(10)</div>
      {/* close icon */}
      <div onClick={toggleModal} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl group-hover:scale-110 trans" />
      </div>
    </div>
  );
};
