import React from "react";
import { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import curry from "../assets/curry.png";
import meat from "../assets/meat.png";
import meat2 from "../assets/meat2.png";
import green from "../assets/green.png";

const images = [hero, curry, meat, meat2];

const hero = () => {
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
    <div className="pt-20 bg-[#111A1B] min-h-120 sm:min-h-150 md:min-h-175 lg:min-h-200 relative overflow-hidden">
      {/* Left Image */}
      <img
        src={green}
        alt=""
        className="hidden sm:block absolute -left-20 md:-left-12 lg:-left-8 top-20 sm:top-32 md:top-40 lg:top-48 w-32 sm:w-56 md:w-72 lg:w-96 opacity-50 drop-shadow-[0_0_80px_rgba(0,255,100,0.4)]"
      />

      {/* Right Image */}
      <img
        src={green}
        alt=""
        className="hidden sm:block absolute -right-20 md:-right-12 lg:-right-8 top-20 sm:top-32 md:top-40 lg:top-48 w-32 sm:w-56 md:w-72 lg:w-96 opacity-50 scale-x-[-1] drop-shadow-[0_0_80px_rgba(0,255,100,0.4)]"
      />
      <h1 className="pt-10 sm:pt-16 md:pt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 sm:px-6 md:px-8">
        Delicious food & wonderful
      </h1>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 sm:px-6 md:px-8">
        eating experience
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pt-5 text-center px-4 sm:px-6 text-gray-400">
        No:01 restuarant in Mirissa
      </h2>
      <div className="relative h-48 sm:h-64 md:h-96 lg:h-full lg:mt-60">
        <img
          src={images[current]}
          alt="hero"
          className={`
  md:block rotate-345 absolute
  top-1/2 left-1/2
  -translate-x-1/2 -translate-y-1/2
  w-100 md:w-150 lg:w-200
  animate-[float_3s_ease-in-out_infinite]
  transition-all duration-500 ease-in-out
  ${animate ? "translate-x-[120%] opacity-0" : "translate-x-[-50%] opacity-100"}
`}
        />
        {/* <img
          src="/src/assets/Untitled-1.gif"
          alt="hero"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 lg:w-80 animate-[float_3s_ease-in-out_infinite]"
        /> */}
      </div>
    </div>
  );
};

export default hero;
