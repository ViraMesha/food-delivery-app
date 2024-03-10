"use client";
import Link from "next/link";
import { useEffect } from "react";

import { useCartActionsContext } from "@/context/CartContext";

export const SuccessOrder = () => {
  const { setCartItems } = useCartActionsContext();

  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
      <h2 className="text-2xl font-semibold text-center">
        Thank you! Your order has been placed!
      </h2>
      <div className="relative w-[350px] h-[350px]">
        <iframe
          src="https://giphy.com/embed/zaqclXyLz3Uoo"
          width="100%"
          height="100%"
          className="absolute"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link href="/" className="btn btn-lg gradient">
        Return to main page
      </Link>
    </div>
  );
};
