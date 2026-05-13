import React, { useEffect, useState } from "react";
import meat from "../../assets/meat.png";
import hero from "../../assets/hero.png";
import rice from "../../assets/rice.png";

const images = [rice, meat, hero];
const captions = ["Mongolian rice", "fish", "meat"];
const prices = ["LKR 2500", "LKR 3800", "LKR 1650"];

const FoodCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // trigger animation

      setTimeout(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setAnimate(false);
      }, 400); // animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-300 flex items-center justify-center bg-white overflow-hidden">
      {/* Title */}
      <div className="absolute top-10 text-center">
        <h3 className="text-orange-500 uppercase tracking-[4px]">taste our</h3>
        <h1 className="text-[#111A1B] text-3xl md:text-5xl font-bold">
          Fast moving items
        </h1>
      </div>

      {/* Image */}
      <div className="grid grid-rows-3 ">
        <img
          src={images[current]}
          alt="food"
          className={`
          w-72 md:w-96
          transition-all duration-500 ease-in-out
          ${animate ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}
        `}
        />
        <h3 className="text-black text-center text-2xl  font-bold">
          {captions[current]}
        </h3>
        <h3 className="text-orange-500 font-bold text-center text-2xl -mt-60">
          {prices[current]}
        </h3>
      </div>
    </div>
  );
};

export default FoodCarousel;
