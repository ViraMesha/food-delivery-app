import { IoCloseOutline } from "react-icons/io5";

import { useCartActionsContext, useCartContext } from "@/context/CartContext";

export const CartBottom = () => {
  const { toggleModal } = useCartActionsContext();
  const { cartItems } = useCartContext();

  return (
    <>
      {cartItems.length >= 1 ? (
        <div className="px-6 py-3 lg:py-6 mt-auto">
          {/* Total price */}
          <div className="flex items-center justify-between mb-6 text-lg font-semibold">
            <p>Total:</p>
            <p>$320</p>
          </div>
          {/* btn */}
          <div className="flex flex-col gap-y-3">
            <button className="btn btn-lg gradient font-semibold flex justify-center">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10">
          <div className="font-semibold">Your cart is empty</div>
        </div>
      )}
    </>
  );
};
