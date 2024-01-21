"use client";
import Image from "next/image";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";

// bind modal to body
Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

type PizzaItemProps = {
  pizza: TPizza;
};

const PizzaItem = ({ pizza }: PizzaItemProps) => {
  const { image, name, description, priceSm, priceMd, priceLg } = pizza;

  // modal state
  const [isOpenModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <li>
      <article className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
        <Image
          className="lg:group-hover:translate-y-3 trans mb-8 cursor-pointer"
          src={image}
          alt={name}
          width={270}
          height={270}
          priority
        />
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold mb-3 capitalize cursor-pointer">
            {name}
          </h3>
        </div>
        {/* Description */}
        <p className="text-sm font-medium min-h-[60px] mb-6">{description}</p>
        {/* price & btn */}
        <div className="mb-6 flex items-center justify-between">
          {/* price => hidden (sm) - visible (lg) */}
          <span className="hidden lg:flex text-xl font-semibold">
            starts at {priceSm}
          </span>
          {/* btn => hidden (sm) - visible (lg) */}
          <button className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">
            Choose
          </button>
          {/* btn => visible (sm) - hidden (lg) */}
          <button
            className="btn btn-sm gradient lg:hidden px-3 text-sm"
            onClick={toggleModal}
          >
            starts at {priceSm}
          </button>
        </div>
        {/* modal */}
        {isOpenModal && (
          <Modal
            isOpen={isOpenModal}
            style={modalStyles}
            onRequestClose={toggleModal}
            contentLabel="Pizza Modal"
          >
            modal
          </Modal>
        )}
      </article>
    </li>
  );
};

export default PizzaItem;
