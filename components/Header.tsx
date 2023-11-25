import Link from "next/link";

import { navLinks } from "@/lib/data";

import Cart from "./Cart";
import Menu from "./Menu";

const Header = () => {
  //TODO:Clean later
  const isUser = false;

  return (
    <header className="relative min-h-12 text-teal-900 border-b-2 border-bottom-teal-500">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 font-black text-[25px] md:text-[35px] leading-normal"
          >
            FoodSwift
          </Link>

          <ul className="hidden md:flex md:items-center md:gap-4">
            {navLinks.map(({ id, name, url }) => (
              <li key={id}>
                <Link href={url} className=" md:py-4">
                  {name}
                </Link>
              </li>
            ))}
            {!isUser ? (
              <li>
                <Link href="/login" className=" md:py-4">
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/orders" className="md:py-4">
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
