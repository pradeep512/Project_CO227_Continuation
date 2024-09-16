import { useState } from "react";

export default function NavBar() {
  // State
  const [menuOpen, setMenuOpen] = useState(false);

  // Event handlers
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle menu open state
  };

  const handleMenuClose = () => {
    setMenuOpen(false); // Close menu
  };

  return (
    <div className="w-full bg-orange-700">
      <div className="flex items-center justify-between p-4">
        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full bg-gray-900">
            <ul className="flex flex-col items-center">
              <li className="p-4">
                <a
                  href="/home"
                  className="text-white"
                  onClick={handleMenuClose}
                >
                  Home
                </a>
              </li>
              <li className="p-4">
                <a
                  href="/about"
                  className="text-white"
                  onClick={handleMenuClose}
                >
                  About
                </a>
              </li>
              <li className="p-4">
                <a
                  href="/contact"
                  className="text-white"
                  onClick={handleMenuClose}
                >
                  Contact Us
                </a>
              </li>
              <li className="p-4">
                <a
                  href="/services"
                  className="text-white"
                  onClick={handleMenuClose}
                >
                  Services
                </a>
              </li>
              <li className="p-4">
                <a
                  href="/tests2"
                  className="text-white"
                  onClick={handleMenuClose}
                >
                  Tests
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6">
          <a href="/" className="text-white hover:underline">
            Home
          </a>
          <a href="/about" className="text-white hover:underline">
            About
          </a>
          <a href="/contact" className="text-white hover:underline">
            Contact Us
          </a>
          <a href="/services" className="text-white hover:underline">
            Services
          </a>
          <a href="/tests2" className="text-white hover:underline">
            Tests
          </a>
        </div>

        {/* Register and Login */}
        <div className="flex items-center space-x-4">
          <a href="/register-patient" className="text-white hover:underline">
            Register
          </a>
          <a href="/login" className="text-white hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
