"use client";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import { useToggle } from "usehooks-ts";

import PizzaDetails from "./PizzaDetails";

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
  const [isOpenModal, toggleModal, setOpenModal] = useToggle();

  return (
    <li>
      <article className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
        <Image
          onClick={toggleModal}
          className="lg:group-hover:translate-y-3 trans mb-8 cursor-pointer"
          src={image}
          alt={name}
          width={270}
          height={270}
          priority
        />
        {/* Title */}
        <div onClick={toggleModal}>
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
          <button
            onClick={toggleModal}
            className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
          >
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
            className="bg-white w-full h-full border-red-50 lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
          >
            {/* close modal icon */}
            <div
              onClick={toggleModal}
              className="absolute z-30 right-2 top-2 hover:scale-110 trans cursor-pointer"
            >
              <IoCloseOutline className="text-4xl text-[--secondary-text-color]" />
            </div>
            <PizzaDetails
              pizza={pizza}
              toggleModal={toggleModal}
              isOpenModal={isOpenModal}
            />
          </Modal>
        )}
      </article>
    </li>
  );
};

export default PizzaItem;
