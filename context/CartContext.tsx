"use client";
import { createContext, useContext, useState } from "react";

type CartContextProps = {
  children: React.ReactNode;
};

type CartContextI = {
  isOpen: boolean;
};

type CartActionsContextI = {
  toggleModal: () => void;
};

const CartContext = createContext<CartContextI | null>(null);
const CartActionsContext = createContext<CartActionsContextI | null>(null);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <CartContext.Provider value={{ isOpen }}>
      <CartActionsContext.Provider value={{ toggleModal }}>
        {children}
      </CartActionsContext.Provider>
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCartContext must be used within a ContextProvider");

  return context;
};

export const useCartActionsContext = () => {
  const context = useContext(CartActionsContext);
  if (!context)
    throw new Error(
      "useCartActionsContext must be used within a ContextProvider"
    );

  return context;
};
