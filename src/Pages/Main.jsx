import React from "react";
import Hero from "./Hero";
import About from "./About";
import backgroundImageLarge from "../assets/bg.jpg";
const Main = () => {
  return (
    <div
      className="bg-bottom md:bg-cover md:bg-center  "
      style={{
        backgroundImage: `url(${backgroundImageLarge})`, // Set background image dynamicall
      }}
    >
      <About />
    </div>
  );
};

export default Main;
