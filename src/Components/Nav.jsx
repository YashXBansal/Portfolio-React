import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu(); // Close the menu after clicking a section link
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 ${
          isScrolled ? "bg-gray-800 bg-opacity-90 backdrop-blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl text-xl mx-auto px-6 py-2 flex justify-between items-center">
          <a
            className="text-white font-semibold cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Yash.
          </a>
          <div className="md:hidden">
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
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-4">
              <li>
                <button
                  className="text-white font-medium hover:text-gray-300"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="text-white font-medium hover:text-gray-300"
                  onClick={() => scrollToSection("education")}
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  className="text-white font-medium hover:text-gray-300"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Overlay to close drawer */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-40"
          onClick={closeMenu}
        ></div>
      )}
      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 z-50 p-8 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "#1F2937",
          backdropFilter: isOpen ? "blur(20px)" : "none",
        }}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <button
              className="text-white font-medium w-full hover:text-gray-300"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="text-white font-medium w-full hover:text-gray-300"
              onClick={() => scrollToSection("education")}
            >
              Education
            </button>
          </li>
          <li>
            <button
              className="text-white font-medium w-full hover:text-gray-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
