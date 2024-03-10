"use client";

import Link from "next/link";

import { useCartContext } from "@/context/CartContext";

import { CartItem } from "..";

export const CheckoutDetails = () => {
  const { cartItems, totalPrice, totalAmount } = useCartContext();

  return (
    <>
      {totalAmount > 0 ? (
        <div className="lg:gap-x-8 h-full lg:px-12 lg:py-8">
          {/* title */}
          <h2 className="mb-6 text-[20px] uppercase font-extrabold text-center pt-6 lg:pt-0">
            Shipping & Checkout
          </h2>
          <div className="h-[86vh] flex flex-col lg:flex-row lg:gap-x-4">
            {/* box 1 */}
            <div className="h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0">
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
            <div className="flex-1 h-full flex flex-col justify-between pt-3 px-8 lg:p-0">
              <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4">
                  Your order
                </h3>
                {/* items */}
                <ul
                  className={`font-semibold flex flex-col gap-y-4 h-full py-2 pr-2 ${
                    cartItems.length >= 3 &&
                    "overflow-y-scroll scrollbar-thumb-gray-200 scrollbar-track-white scrollbar-thin"
                  }`}
                >
                  {" "}
                  {cartItems.map((item, index) => (
                    <CartItem pizza={item} key={index} />
                  ))}
                </ul>
              </div>
              <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                <div className="font-semibold flex flex-col gap-y-4 h-full py-2 pr-2">
                  <div className="flex justify-between">
                    <span>
                      Subtotal ({totalAmount}{" "}
                      {totalAmount > 1 ? "items" : "item"})
                    </span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service cost</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery cost</span>
                    <span className="text-green-500 capitalize">Free!</span>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <span className="capitalize">Total (incl. vat)</span>
                    <span className="font-bold">${totalPrice}</span>
                  </div>
                </div>
              </div>
              {/* place order btn */}
              <Link
                href="/success-order-placement"
                className="btn btn-lg gradient w-full"
              >
                Place order
              </Link>
            </div>
          </div>
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
