import React from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top" className="transition ease-in-out">
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
export const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default App;
