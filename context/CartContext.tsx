"use client";
import { createContext, useContext, useState } from "react";

type CartContextProps = {
  children: React.ReactNode;
};

type CartContextI = {
  isOpen: boolean;
  cartItems: TCartItems[];
};

type CartActionsContextI = {
  toggleModal: () => void;
  addToCart: ({
    id,
    image,
    name,
    price,
    additionalToppings,
    size,
    crust,
  }: AddToCartParams) => void;
};

const CartContext = createContext<CartContextI | null>(null);
const CartActionsContext = createContext<CartActionsContextI | null>(null);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<TCartItems[] | []>([]);

  const toggleModal = () => {
    setIsOpen(() => !isOpen);
  };

  const addToCart = ({
    id,
    image,
    name,
    price,
    additionalToppings,
    size,
    crust,
  }: AddToCartParams) => {
    additionalToppings.sort((a, b) => a.name.localeCompare(b.name));

    const newItem = {
      id,
      image,
      name,
      price,
      additionalToppings,
      size,
      crust,
      amount: 1,
    };

    const cartItemIndex = cartItems.findIndex(
      (item) =>
        item.id === id &&
        item.price === price &&
        item.size === size &&
        // check if additional array is equal
        JSON.stringify(item.additionalToppings) ===
          JSON.stringify(additionalToppings) &&
        item.crust === crust
    );

    if (cartItemIndex === -1) {
      setCartItems([...cartItems, newItem]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[cartItemIndex].amount += 1;
      setCartItems(newCartItems);
    }

    // open the cart everytime you add a product
    setIsOpen(true);
  };

  return (
    <CartContext.Provider value={{ isOpen, cartItems }}>
      <CartActionsContext.Provider value={{ toggleModal, addToCart }}>
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
