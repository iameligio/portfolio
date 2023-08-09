import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInLeft, fadeIn } from "../App";

function About() {
  const [ref, inView] = useInView();
  return (
    <div
      id="about"
      className="transition ease-in-out w-full max-h-fit md:pt-10 md:h-screen mx-auto bg-white  text-center  "
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInLeft}
        transition={{ duration: 1 }}
      >
        <h3 className="text-gray-700 text-7xl pt-10 ">About Me</h3>
        <div className="container mx-auto">
          <p className="text-xl mt-10">
            I'm Eligio, I'm a full-stack developer, consultant and amature
            designer based in the Philippines 🇸🇽 .
          </p>

          <p className="text-xl mt-5">
            On my free time, I love working on a variety of technologies for
            developing products with PHP, Javascript and Python. I have done
            several web scraping projects with Selenium for my collegues,
            Automation script for a small client, and basic Deep learning.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
