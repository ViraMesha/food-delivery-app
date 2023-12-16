import Image from "next/image";

import burger from "../public/burger.png";

type Props = {};

const Offer = (props: Props) => {
  return (
    <section className="bg-black h-screen flex flex-col md:flex-row text-white">
      {/* Text container */}
      <div className="flex-1">
        <h2>The food you love, delivered fast</h2>
        <p>
          Get a slice of pizza or the whole pie delivered, or pick up house lo
          mein from the Chinese takeout spot you`ve been meaning to try.
        </p>
        <button>Order now</button>
      </div>
      {/* Section container */}
      <div className="flex-1 w-full relative">
        <Image src={burger} alt="" fill className="object-contain" />
      </div>
    </section>
  );
};

export default Offer;
