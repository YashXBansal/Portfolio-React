import React, { useState } from "react";
import "./Nav.css"; // Import CSS file for styling

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 1);
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu(); // Close the menu after clicking a section link
    }
  };

  return (
    <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          className="logo text-white text-base md:text-lg font-bold"
          onClick={() => scrollToSection("hero")}
        >
          Yash.
        </a>
        <div className="md:hidden nav-menu-button">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <button
                className="nav-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="nav-link"
                onClick={() => scrollToSection("education")}
              >
                Education
              </button>
            </li>
            <li>
              <button
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Overlay to close drawer */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
      {/* Drawer */}
      <div
        className={`md:hidden nav-drawer fixed top-0 right-0 h-full w-2/3 bg-gray-800 bg-opacity-90 z-50 p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <button
              className="nav-link"
              onClick={() => {
                scrollToSection("about");
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => {
                scrollToSection("education");
              }}
            >
              Education
            </button>
          </li>

          <li>
            <button
              className="nav-link"
              onClick={() => {
                scrollToSection("contact");
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
