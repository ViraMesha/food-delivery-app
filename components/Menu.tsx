"use client";

import Link from "next/link";
import { useState } from "react";

import { mobLinks } from "@/lib/data";

import Cart from "./Cart";

const Menu = () => {
  const [open, setOpen] = useState(false);

  //TODO:Clean later
  const isUser = false;

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        type="button"
        className={`${
          open
            ? "before:top-[calc(50% - 1px)] before:-rotate-45 after:bottom-[calc(50% - 1px)] after:rotate-45"
            : "before:top-0 after:bottom-0"
        } block relative z-10 w-5 h-5 cursor-pointer border-none bg-transparent before:absolute before:block before:right-0 before:w-full before:h-[2px] before:bg-teal-900 before:transition-all before:duration-500 before:ease-in-out before:delay-0 after:absolute after:block after:right-0  after:w-full after:h-[2px] after:bg-teal-900 after:transition-all after:duration-500 after:ease-in-out after:delay-0`}
        onClick={toggleMenu}
      >
        <span
          className={`absolute top-[calc(50% - 1px)] right-0 block h-[2px] bg-teal-900 trans ${
            open ? "w-0" : "w-full"
          }`}
        ></span>
      </button>
      {open && (
        <ul
          className={`${
            open
              ? "absolute z-[5] top-0 left-0 bg-teal-500 text-white h-[calc(100vh-36px)] w-full pt-40 flex flex-col items-center gap-8 text-2xl"
              : ""
          } trans`}
        >
          {mobLinks.map(({ id, name, url }) => (
            <li key={id}>
              <Link href={url} onClick={toggleMenu}>
                {name}
              </Link>
            </li>
          ))}
          {!isUser ? (
            <li>
              <Link href="/login" onClick={toggleMenu}>
                Login
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/orders" onClick={toggleMenu}>
                Orders
              </Link>
            </li>
          )}
          <Cart toggleMenu={toggleMenu} />
        </ul>
      )}
    </>
  );
};

export default Menu;
