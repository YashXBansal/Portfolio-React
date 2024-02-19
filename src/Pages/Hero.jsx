import React from "react";
import backgroundImageMobile from "../assets/Me.png";

function Hero() {
  return (
    <div
      className="hero-container relative h-screen flex flex-col items-center justify-center text-center"
      id="hero"
      style={{
        backgroundImage: `url(${backgroundImageMobile})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundPositionY: "20%",
      }}
    >
      <div className="absolute inset-0 opacity-80"></div>
      {/* Gradient overlay */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4 text-yellow-400">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300">
          Hi, I'm Yash, a passionate developer with a keen interest in
          technology. Welcome to my portfolio website where I showcase my
          projects and share my journey.
        </p>
        <div className="flex flex-col items-center gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out mb-2 shadow-md">
            Contact Me
          </button>
          <a
            href="your_resume_url_here"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-md"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
