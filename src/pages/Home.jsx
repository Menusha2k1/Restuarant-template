import React from "react";
import Hero from "../Components/hero";
import Footer from "../Components/footer";
import Food from "../Components/food";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Food />
      <div className="min-h-screen flex items-center justify-center"></div>
      <Footer />
    </div>
  );
};

export default Home;
