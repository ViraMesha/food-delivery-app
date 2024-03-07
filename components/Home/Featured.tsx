"use client";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import { useToggle } from "usehooks-ts";

import { featuredContent } from "@/lib/data";

import PizzaDetails from "../MenuCategory/PizzaDetails";

// bind modal to body
Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const Featured = () => {
  const [isOpenModal, toggleModal, setOpenModal] = useToggle();

  return (
    <section className="w-screen overflow-auto overscroll-x-contain text-[var(--secondary-text-color)]">
      {/* Products' list wrapper */}
      <ul className="w-max flex">
        {/* Single item */}
        {featuredContent.map((pizza) => {
          const { id, name, image, description, priceSm, priceMd, priceLg } =
            pizza;
          return (
            <li
              key={id}
              className="w-screen h-[70vh] flex flex-col items-center p-4 gap-5 hover:bg-[var(--accent-color)] trans md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
            >
              {/* Image Container */}
              <div className="relative w-full flex-1 hover:scale-110 trans">
                <Image
                  src={image}
                  alt="Pizza"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Text container */}
              <div className="flex-1 flex flex-col items-center justify-between text-center gap-4">
                <h2 className="text-3xl font-black capitalize">{name}</h2>
                <p className="p-4 2xl:p-8 text-xl">{description}</p>
                {/* price & btn */}
                <div className="mb-6 flex items-center justify-between lg:gap-4">
                  {/* price => hidden (sm) - visible (lg) */}
                  <span className="hidden lg:flex  text-xl font-semibold">
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
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
