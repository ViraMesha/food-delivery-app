"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

import { headerContent } from "@/lib/data";
import { isActivePathname } from "@/utils";

import { Cart } from "./Cart";
import UserLinksMd from "./UserLinksMd";

export const NavbarMd = () => {
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
      <UserLinksMd hoveredPath={hoveredPath} setHoveredPath={setHoveredPath} />
      <Cart />
    </ul>
  );
};
