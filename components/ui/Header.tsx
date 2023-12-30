import Link from "next/link";

import { NavbarMd, NavbarSm } from "..";

const Header = () => {
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
          {/* Tablet-Desktop menu */}
          <NavbarMd />
          {/* Mobile menu */}
          <div className="md:hidden">
            <NavbarSm />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
