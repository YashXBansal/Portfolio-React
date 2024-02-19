import React from "react";
import backgroundImageLarge from "../assets/bg.jpg";
import backgroundImageMobile from "../assets/Me.png";

function Hero() {
  return (
    <div
      className="hero-container relative h-screen flex flex-col items-center justify-center text-center  "
      id="hero"
      style={{
        backgroundImage: `url(${backgroundImageMobile})`, // Set background image dynamically
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundPositionY: "20%",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay to enhance readability */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 px-2">
          Hi, I'm Yash, a passionate developer with a keen interest in
          technology. Welcome to my portfolio website where I had showcased my
          projects and shared my journey.
        </p>
        <div className="flex flex-col items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out mb-2 shadow-md">
            Contact Me
          </button>
          <a
            href="your_resume_url_here"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-md"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
