"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";

import { mobileLinkVars } from "@/constants";

type Props = {
  toggleMenu: () => void;
};

const UserLinksSm = ({ toggleMenu }: Props) => {
  const { status } = useSession();
  const authenticated = status === "authenticated";

  return (
    <>
      {authenticated ? (
        <motion.li variants={mobileLinkVars} className="overflow-hidden">
          <Link
            href="/orders"
            onClick={toggleMenu}
            className="pb-2 linkUnderlineHover"
          >
            Orders
          </Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </motion.li>
      ) : (
        <motion.li variants={mobileLinkVars} className="overflow-hidden">
          <Link
            href="/login"
            onClick={toggleMenu}
            className="pb-2 linkUnderlineHover"
          >
            Login
          </Link>
        </motion.li>
      )}
    </>
  );
};

export default UserLinksSm;
