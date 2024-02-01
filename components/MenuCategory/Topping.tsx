import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

type ToppingProps = {
  topping: Topping;
  additionalToppings: [] | Topping[];
  setAdditionalToppings: React.Dispatch<React.SetStateAction<[] | Topping[]>>;
};

const Topping = ({
  topping,
  additionalToppings,
  setAdditionalToppings,
}: ToppingProps) => {
  const { image, name, price } = topping;
  // checkbox state
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleTopping = () => {
    if (isChecked) {
      const newToppings = new Set([...additionalToppings, { ...topping }]);
      setAdditionalToppings(Array.from(newToppings));
      console.log(additionalToppings);
    } else {
      //remove the topping with the matching name
      const newToppings = additionalToppings.filter(
        (item) => item.name !== name
      );
      setAdditionalToppings(newToppings);
    }
  };

  useEffect(() => {
    handleTopping();
  }, [isChecked]);

  return (
    <li
      className={`${
        isChecked && "border-[var(--secondary-text-color)]"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image src={image} alt="" width={70} height={70} className="mb-2" />
      <h4 className="text-sm capitalize text-center font-medium">{name}</h4>
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
      />
      <div
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-1 right-1`}
      >
        <IoMdCheckmark className="text-xl text-[var(--secondary-text-color)]" />
      </div>
    </li>
  );
};

export default Topping;
