import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";

type Props = {
  setHoveredPath: React.Dispatch<React.SetStateAction<string>>;
  hoveredPath: string;
};

const UserLinksMd = ({ setHoveredPath, hoveredPath }: Props) => {
  const { status } = useSession();
  const authenticated = status === "authenticated";

  const pathname = usePathname() || "/";

  return (
    <>
      {authenticated ? (
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
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </li>
      ) : (
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
      )}
    </>
  );
};

export default UserLinksMd;
