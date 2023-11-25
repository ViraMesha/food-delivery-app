import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

type CartProps = {
  toggleMenu?: () => void;
};

const Cart = ({ toggleMenu }: CartProps) => {
  return (
    <li>
      <Link href="/cart" onClick={toggleMenu} className="md:py-4 block">
        <FaShoppingCart fill="#134e4a" className="w-8 h-8 md:w-5 md:h-5" />
      </Link>
    </li>
  );
};

export default Cart;
