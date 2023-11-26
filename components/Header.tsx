import Link from "next/link";

import { headerContent } from "@/lib/data";

import Cart from "./Cart";
import Menu from "./Menu";

const Header = () => {
  //TODO:Clean later
  const isUser = false;

  const { navLinks } = headerContent;

  return (
    <header className="relative py-3 md:min-h-[80px] text-[var(--secondary-text-color)] bg-[var(--accent-color)] flex justify-between items-center">
      <div className="wrapper">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 font-black text-[25px] md:text-[35px] leading-normal"
          >
            FoodSwift
          </Link>

          <ul className="hidden md:flex items-center flex-wrap gap-4 capitalize text-[var(--primary-text-color)] text-[20px]">
            {navLinks.map(({ id, name, url }) => (
              <li key={id}>
                <Link
                  href={url}
                  className="py-4 px-2 hover:text-[var(--secondary-text-color)] trans"
                >
                  {name}
                </Link>
              </li>
            ))}
            {!isUser ? (
              <li>
                <Link
                  href="/login"
                  className="py-4 px-2 hover:text-[var(--secondary-text-color)] trans"
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href="/orders"
                  className="py-4 px-2 hover:text-[var(--secondary-text-color)] trans"
                >
                  Orders
                </Link>
              </li>
            )}
            <Cart />
          </ul>
          {/* Mobile menu */}
          <div className="md:hidden">
            <Menu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
