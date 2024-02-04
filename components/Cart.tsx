import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

type CartProps = {
  toggleMenu?: () => void;
};

export const Cart = ({ toggleMenu }: CartProps) => {
  return (
    <li className="list-none hidden md:block">
      <Link href="/cart" onClick={toggleMenu} className="md:py-4 block md:px-2">
        <FaShoppingCart
          fill="var(--secondary-text-color)"
          className="w-8 h-8 md:w-5 md:h-5 hover:scale-125 trans"
        />
        <span className="hidden bg-teal-900 text-white absolute top-5 right-3 w-5 h-5 rounded-full md:flex justify-center items-center text-[13px]">
          10
        </span>
      </Link>
    </li>
  );
};
