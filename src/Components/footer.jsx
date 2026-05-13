import React from "react";

function Footer() {
  return (
    <footer className="bg-[#111A1B] text-white pt-16 pb-8 px-4 sm:px-6 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Logo + About */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Foodie</h1>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Delicious food with a wonderful dining experience. Fresh
            ingredients, modern recipes, and unforgettable taste.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-3 text-sm sm:text-base text-gray-400">
            <li className="hover:text-orange-500 transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-orange-500 transition cursor-pointer">
              About
            </li>
            <li className="hover:text-orange-500 transition cursor-pointer">
              Menu
            </li>
            <li className="hover:text-orange-500 transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Opening Hours
          </h2>

          <ul className="space-y-3 text-sm sm:text-base text-gray-400">
            <li>Monday - Friday</li>
            <li>10:00 AM - 10:00 PM</li>

            <li className="pt-2">Saturday - Sunday</li>
            <li>12:00 PM - 12:00 AM</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Contact</h2>

          <ul className="space-y-3 text-sm sm:text-base text-gray-400">
            <li>Mirissa, Sri Lanka</li>
            <li>+94 77 123 4567</li>
            <li>foodie@email.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm">
        © 2026 Foodie. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
