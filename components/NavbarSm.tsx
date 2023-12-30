"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";

import { containerVars, menuVars, mobileLinkVars } from "@/constants";
import { headerContent } from "@/lib/data";

import Cart from "./Cart";

const NavbarSm = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  const { mobNavLinks } = headerContent;

  //TODO:Clean later
  const isUser = false;

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (width > 768 && open) {
      setOpen(false);
    }
  }, [open, width]);

  return (
    <>
      <button
        type="button"
        className={`${
          open
            ? "before:top-[calc(50% - 1px)] before:-rotate-45 after:bottom-[calc(50% - 1px)] after:rotate-45"
            : "before:top-0 after:bottom-0"
        } block relative z-10 w-5 h-5 cursor-pointer border-none bg-transparent before:absolute before:block before:right-0 before:w-full before:h-[2px] before:bg-[var(--secondary-text-color)] before:transition-all before:duration-500 before:ease-in-out before:delay-0 after:absolute after:block after:right-0  after:w-full after:h-[2px] after:bg-[var(--secondary-text-color)] after:transition-all after:duration-500 after:ease-in-out after:delay-0`}
        onClick={toggleMenu}
      >
        <span
          className={`absolute top-[calc(50% - 1px)] right-0 block h-[2px] bg-[var(--secondary-text-color)] trans ${
            open ? "w-0" : "w-full"
          }`}
        ></span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`${
              open
                ? "origin-top absolute z-[5] top-0 left-0 bg-teal-500 text-white h-[calc(100vh-36px)] w-full pt-40 text-2xl flex flex-col items-center gap-8"
                : ""
            } trans`}
          >
            <motion.ul
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center gap-8"
            >
              {mobNavLinks.map(({ id, name, url }) => (
                <motion.li
                  variants={mobileLinkVars}
                  key={id}
                  className="overflow-hidden"
                >
                  <Link
                    href={url}
                    onClick={toggleMenu}
                    className="pb-2 linkUnderlineHover"
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
              {!isUser ? (
                <motion.li
                  variants={mobileLinkVars}
                  className="overflow-hidden"
                >
                  <Link
                    href="/login"
                    onClick={toggleMenu}
                    className="pb-2 linkUnderlineHover"
                  >
                    Login
                  </Link>
                </motion.li>
              ) : (
                <motion.li
                  variants={mobileLinkVars}
                  className="overflow-hidden"
                >
                  <Link
                    href="/orders"
                    onClick={toggleMenu}
                    className="pb-2 linkUnderlineHover"
                  >
                    Orders
                  </Link>
                </motion.li>
              )}
            </motion.ul>
            <Cart toggleMenu={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarSm;
