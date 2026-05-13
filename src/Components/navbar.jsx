import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Gallery", "Contact"];

  return (
    <nav className="w-full bg-[#111A1B] text-white fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Navbar Container */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide\">
            Foodie
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-base sm:text-sm md:text-sm lg:text-lg">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-orange-500 transition duration-300"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <Link to="/menu">
            <button className="hidden md:block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition duration-300">
              Menu
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 bg-black/90 backdrop-blur-lg rounded-2xl p-5 mt-2">
            <ul className="flex flex-col gap-5 text-lg ">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-orange-500 transition duration-300 "
                >
                  {link}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition duration-300">
              Book Table
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
