import React, { useState } from "react";
import Footer from "../Components/footer";
import { menuData } from "../data/menuData";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("rice");

  const tabs = Object.keys(menuData);

  return (
    <div className="bg-[#111A1B] min-h-screen text-white pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 md:px-8">
      {/* Title */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10">
        Menu
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 max-w-6xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-5 py-2 rounded-full border text-sm sm:text-base transition duration-300 ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "border-white hover:bg-white hover:text-black"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-8 sm:space-y-10 md:space-y-12 max-w-6xl mx-auto">
        {menuData[activeTab].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full text-center md:text-left hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-center items-center md:items-start gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {item.name}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-orange-500 font-semibold">
                Rs. {item.price}
              </p>
              <p className="text-sm sm:text-base text-gray-400 max-w-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
