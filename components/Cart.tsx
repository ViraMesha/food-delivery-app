import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

type CartProps = {
  toggleMenu?: () => void;
};

export const Cart = ({ toggleMenu }: CartProps) => {
  return (
    <li className="list-none">
      <Link href="/cart" onClick={toggleMenu} className="md:py-4 block md:px-2">
        <FaShoppingCart
          fill="var(--secondary-text-color)"
          className="w-8 h-8 md:w-5 md:h-5 hover:scale-125 trans"
        />
      </Link>
    </li>
  );
};
