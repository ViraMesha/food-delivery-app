"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

import { headerContent } from "@/lib/data";
import { isActivePathname } from "@/utils";

import Cart from "./Cart";

const NavbarMd = () => {
  //TODO:Clean later
  const isUser = false;
  const pathname = usePathname() || "/";
  const [hoveredPath, setHoveredPath] = useState(pathname);

  const { navLinks } = headerContent;

  return (
    <ul className="hidden md:flex items-center flex-wrap gap-4 capitalize text-[var(--primary-text-color)] text-[20px]">
      {navLinks.map(({ id, name, url }) => {
        const isActive = isActivePathname(url, pathname);

        return (
          <li key={id}>
            <Link
              data-active={isActive}
              onMouseOver={() => setHoveredPath(url)}
              onMouseLeave={() => setHoveredPath(pathname)}
              href={url}
              className={`py-4 px-2 trans relative ${
                isActive
                  ? "text-[var(--secondary-text-color)]"
                  : "text-[var(--primary-text-color)]"
              }`}
            >
              {name}
              {url === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-[var(--alpha-secondary-color)] rounded-md"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          </li>
        );
      })}
      {!isUser ? (
        <li>
          <Link
            data-active={"/login" === pathname}
            onMouseOver={() => setHoveredPath("/login")}
            onMouseLeave={() => setHoveredPath(pathname)}
            href="/login"
            className={`py-4 px-2 trans relative ${
              "/login" === pathname
                ? "text-[var(--secondary-text-color)]"
                : "text-[var(--primary-text-color)]"
            } `}
          >
            Login
            {"/login" === hoveredPath && (
              <motion.div
                className="absolute bottom-0 left-0 h-full bg-[var(--alpha-secondary-color)] rounded-md"
                layoutId="navbar"
                aria-hidden="true"
                style={{
                  width: "100%",
                }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                  duration: 0.3,
                }}
              />
            )}
          </Link>
        </li>
      ) : (
        <li>
          <Link
            href="/orders"
            data-active={"/orders" === pathname}
            onMouseOver={() => setHoveredPath("/orders")}
            onMouseLeave={() => setHoveredPath(pathname)}
            className={`py-4 px-2 trans relative ${
              "/orders" === pathname
                ? "text-[var(--secondary-text-color)]"
                : "text-[var(--primary-text-color)]"
            } `}
          >
            Orders
            {"/orders" === hoveredPath && (
              <motion.div
                className="absolute bottom-0 left-0 h-full bg-[var(--alpha-secondary-color)] rounded-md"
                layoutId="navbar"
                aria-hidden="true"
                style={{
                  width: "100%",
                }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                  duration: 0.3,
                }}
              />
            )}
          </Link>
        </li>
      )}
      <Cart />
    </ul>
  );
};

export default NavbarMd;
