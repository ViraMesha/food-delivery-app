"use client";
import { useCartActionsContext, useCartContext } from "@/context/CartContext";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CheckoutDetails = ({ setModal }: Props) => {
  const { cartItems, totalPrice } = useCartContext();
  const { setCartItems } = useCartActionsContext();

  return (
    <div>
      <div className="lg:gap-x-8 h-full lg:px-12 lg:py-8">
        {/* title */}
        <h2>Shipping & Checkout</h2>
        <div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
          {/* box 1 */}
          <div className="flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0">
            {/* input wrapper */}
            <div className="flex flex-col gap-4 h-full">
              {/* first & last name */}
              <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                <input
                  type="text"
                  className="w-full input"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Last name"
                />
              </div>

              {/* phone & email */}
              <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Email Address"
                />
              </div>

              {/* street & street no. */}
              <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4">
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Street Name"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Street No."
                />
              </div>

              {/* block floor & apartment */}
              <div className="flex justify-between gap-x-4">
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Block"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Floor"
                />
                <input
                  type="text"
                  className="w-full input"
                  placeholder="Apt. No."
                />
              </div>

              {/* textarea */}
              <div className="flex-1 h-full">
                <textarea
                  className="textarea w-full h-full"
                  placeholder="Mentions (optional)"
                ></textarea>
              </div>
            </div>
          </div>
          {/* box 2 */}
          <div className="bg-blue-400 flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
            Box 2
          </div>
        </div>
      </div>
    </div>
  );
};
