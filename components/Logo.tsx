import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-10 font-black text-[25px] md:text-[35px] leading-normal trans hover:skew-y-12"
    >
      FoodSwift
    </Link>
  );
};

export default Logo;
