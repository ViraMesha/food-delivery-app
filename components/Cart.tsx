import { FaShoppingCart } from "react-icons/fa";

import { useCartActionsContext, useCartContext } from "@/context/CartContext";

export const Cart = () => {
  const { toggleModal } = useCartActionsContext();
  const { totalAmount } = useCartContext();

  return (
    <li className="list-none hidden md:block">
      <div
        onClick={toggleModal}
        className="md:py-4 block md:px-2 cursor-pointer"
      >
        <FaShoppingCart
          fill="var(--secondary-text-color)"
          className="w-8 h-8 md:w-5 md:h-5 hover:scale-125 trans"
        />
        {totalAmount > 0 && (
          <span className="hidden bg-teal-900 text-white absolute top-5 right-3 w-5 h-5 rounded-full md:flex justify-center items-center text-[13px]">
            {totalAmount}
          </span>
        )}
      </div>
    </li>
  );
};
