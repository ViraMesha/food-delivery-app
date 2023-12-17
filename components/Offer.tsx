import Image from "next/image";

import burger from "../public/burger.png";

type Props = {};

const Offer = (props: Props) => {
  return (
    <section className="bg-black h-screen flex flex-col md:flex-row text-white">
      {/* Text container */}
      <div className="flex-1 flex flex-col justify-center items-center gap-9 p-6 text-center">
        <h2 className="text-5xl font-bold xl:text-6xl">
          The food you love, delivered fast
        </h2>
        <p className="text-xl">
          Get a slice of pizza or the whole pie delivered, or pick up house lo
          mein from the Chinese takeout spot you`ve been meaning to try.
        </p>
        <button className="bg-[var(--secondary-text-color)] p-2 md:p-5 rounded-md text-white text-lg md:text-2xl hover:bg-white hover:text-[var(--secondary-text-color)] hover:shadow-2xl cursor-pointer trans">
          Order now
        </button>
      </div>
      {/* Section container */}
      <div className="flex-1 w-full relative">
        <Image src={burger} alt="" fill className="object-contain" />
      </div>
    </section>
  );
};

export default Offer;
