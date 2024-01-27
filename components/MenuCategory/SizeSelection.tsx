import Image from "next/image";

type SizeSelectionProps = {
  pizza: TPizza;
  size: TSize;
  setSize: React.Dispatch<React.SetStateAction<TSize>>;
};
const SizeSelection = ({ pizza, size, setSize }: SizeSelectionProps) => {
  const { image, name } = pizza;
  return (
    <div className="mx-auto max-w-sm lg:max-w-none flex items-center justify-center lg:justify-start">
      {/* sizes */}
      <div className="flex gap-x-12 items-baseline mb-10 font-medium">
        {/* small */}
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            src={image}
            alt={name}
            width={60}
            height={60}
            className={`${
              size === "small"
                ? "border-2 border-[var(--secondary-text-color)] p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={() => setSize("small")}
            className="appearance-none"
          />
          Small
        </label>
        {/* medium */}
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            src={image}
            alt={name}
            width={70}
            height={70}
            className={`${
              size === "medium"
                ? "border-2 border-[var(--secondary-text-color)] p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={() => setSize("medium")}
            className="appearance-none"
          />
          Medium
        </label>
        {/* large */}
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className={`${
              size === "large"
                ? "border-2 border-[var(--secondary-text-color)] p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={() => setSize("large")}
            className="appearance-none"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
