import Marquee from "react-fast-marquee";

const Notification = () => {
  return (
    <Marquee autoFill pauseOnHover>
      <p className="bg-teal-700 p-2 text-white text-center text-sm md:text-base">
        🌟 Exciting News! Enjoy Free Delivery on All Orders Over $25. Explore
        our menu and savor delicious meals delivered straight to your doorstep!
        🍔🍕🥗 #DeliciousDelivered
      </p>
    </Marquee>
  );
};

export default Notification;
