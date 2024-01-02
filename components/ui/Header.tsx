import { NavbarMd, NavbarSm } from "..";

import { Logo } from ".";

export const Header = () => {
  return (
    <header className="relative py-3 md:min-h-[80px] text-[var(--secondary-text-color)] bg-[var(--accent-color)] flex justify-between items-center">
      <div className="max-w-[1536px] px-4 w-full">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Logo />
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
