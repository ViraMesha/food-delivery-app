"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { useCartActionsContext, useCartContext } from "@/context/CartContext";

import successImg from "../../public/success-1.gif";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CheckoutDetails = ({ setModal }: Props) => {
  const { cartItems, totalPrice, totalAmount } = useCartContext();
  const { setCartItems } = useCartActionsContext();
  const [successMsg, setSuccessMsg] = useState(false);
  const [count, setCount] = useState(5);
  const { removeCartItem } = useCartActionsContext();

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);
      // clear timer
      return () => clearTimeout(timer);
    }
  }, [count, successMsg]);

  // close modal after 5 seconds
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false);
        // clear cart
        setCartItems([]);

        //close modal
        setModal(false);
      }, 5000);

      //clear timer
      return () => clearTimeout(timer);
    }
  }, [setCartItems, setModal, successMsg]);

  return (
    <>
      {totalAmount > 0 ? (
        <div>
          {successMsg ? (
            <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
              <h2 className="text-2xl font-semibold text-center">
                Thank you! Your order has been placed!
              </h2>
              <Image src={successImg} alt="" width={150} height={150} />
              <div>
                This window will close in <span>{count}</span> seconds
              </div>
            </div>
          ) : (
            <div className="lg:gap-x-8 h-full lg:px-12 lg:py-8">
              {/* title */}
              <h2 className="mb-6 text-[20px] uppercase font-extrabold text-center lg:text-left pt-6 lg:pt-0">
                Shipping & Checkout
              </h2>
              <div className="h-[86vh] lg:h-[65.5vh] flex flex-col lg:flex-row lg:gap-x-4">
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
                <div className="flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
                  <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                    <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
                      Your order
                    </h3>
                    {/* items */}
                    <ul className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-full py-2 pr-2">
                      {cartItems.map(
                        ({ name, amount, price, id, crust }, index) => (
                          <li
                            key={index}
                            className="flex justify-between text-[15px]"
                          >
                            <div className="flex gap-x-2">
                              <h3 className="capitalize">{name}</h3>
                              <p>{amount > 1 && `x ${amount}`}</p>
                            </div>

                            <div>$ {(price * amount).toFixed(2)}</div>
                            {/* remove item */}
                            <div
                              onClick={() =>
                                removeCartItem({ id, price, crust })
                              }
                              className="text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 trans text-[var(--secondary-text-color)]"
                            >
                              <IoCloseOutline />
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                    <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-full py-2 pr-2">
                      <div className="flex justify-between">
                        <span>
                          Subtotal ({totalAmount}{" "}
                          {totalAmount > 1 ? "items" : "item"})
                        </span>
                        <span>$81.75</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service cost</span>
                        <span>$81.75</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery cost</span>
                        <span>$81.75</span>
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <span className="capitalize">Total (incl. vat)</span>
                        <span>$81.75</span>
                      </div>
                    </div>
                  </div>
                  {/* place order btn */}
                  <button
                    onClick={() => setSuccessMsg(true)}
                    className="btn btn-lg gradient w-full"
                  >
                    Place order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Your cart is empty😥
          </h2>
          <div className="relative w-[200px] h-[200px]">
            <iframe
              src="https://giphy.com/embed/Phna8ImVFWEqxPUIfk"
              width="100%"
              height="100%"
              className="absolute"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};
