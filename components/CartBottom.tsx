"use client";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";

import { useCartActionsContext, useCartContext } from "@/context/CartContext";

import { CheckoutDetails } from "./Checkout";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

// bind modal to body
Modal.setAppElement("body");

export const CartBottom = () => {
  const { toggleModal } = useCartActionsContext();
  const { cartItems, totalPrice } = useCartContext();

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleCheckoutBtnClick = () => {
    toggleModal();
    openModal();
  };

  return (
    <>
      {cartItems.length >= 1 ? (
        <div className="px-6 py-3 lg:py-6 mt-auto">
          {/* Total price */}
          <div className="flex items-center justify-between mb-6 text-lg font-semibold">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          {/* btn */}
          <div className="flex flex-col gap-y-3">
            <button
              onClick={handleCheckoutBtnClick}
              className="btn btn-lg gradient font-semibold flex justify-center"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10">
          <div className="font-semibold">Your cart is empty</div>
        </div>
      )}
      {/* checkout modal */}
      {modal && (
        <Modal
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Checkout Modal"
        >
          {/* close modal icon */}
          <button
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-110 cursor-pointer trans"
          >
            <IoCloseOutline className="text-4xl text-[var(--secondary-text-color)]" />
          </button>
          <CheckoutDetails setModal={setModal} />
        </Modal>
      )}
    </>
  );
};
