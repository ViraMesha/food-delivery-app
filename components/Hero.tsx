import Image from "next/image";

import slide1 from "../public/slide1.jpg";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-6rem)] grid grid-flow-row lg:grid-flow-col items-center">
      {/* Text content */}
      <div className="h-1/2">
        <h1>Eat the best</h1>
        <p>
          Explore and understand the culture more by tasting the amazing dishes
          of that culture
        </p>
        <button>Order Food</button>
      </div>
      {/* Slider */}
      <div className="h-1/2 relative w-full">
        <Image src={slide1} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
