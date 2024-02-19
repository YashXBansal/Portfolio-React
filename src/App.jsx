import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Utility/Footer";
import Main from "./Pages/Main";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Education from "./Pages/Education";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
