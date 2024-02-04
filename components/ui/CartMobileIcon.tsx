import { BsHandbagFill } from "react-icons/bs";

export const CartMobileIcon = () => {
  return (
    <div className="bg-teal-950 w-[72px] h-[72px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[10%] bottom-[5%] z-2 md:hidden">
      <BsHandbagFill className="text-4xl" />
      <span
        className="text-white absolute bottom-3 right-4 gradient w-5 h-5 flex justify-center items-center rounded-full text-[13px]
      "
      >
        10
      </span>
    </div>
  );
};
