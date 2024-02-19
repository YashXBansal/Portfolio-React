import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-white mb-4 md:mb-0">
            {/* GitHub */}
            <a href="https://github.com/YashXBansal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              GitHub
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/yash-bansal-768402273/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              LinkedIn
            </a>

            {/* Gmail */}
            <a href="mailto:yashbansal414@gmail.com" className="hover:text-gray-300">
              Gmail
            </a>
            {/* Add more links as needed */}
          </div>

          {/* Copyright */}
          <div className="text-white text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
      {/* Scroll to top button */}
      {isVisible && (
        <button
          className="bg-white text-gray-900 hover:text-gray-800 rounded-full p-2 shadow-md fixed bottom-4 right-4 z-50 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
          onClick={scrollToTop}
        >
          <FaChevronUp size={24} />
        </button>
      )}
    </footer>
  );
}

export default Footer;
