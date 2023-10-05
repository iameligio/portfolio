import React from "react";
import introPic from "../assets/5910091.jpeg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInLeft, fadeIn, fadeInRight } from "../App";

const Intro = () => {
  const [ref, inView] = useInView();

  return (
    <div
      id="home"
      className="overflow-hidden transition ease-in-out w-full max-h-fit md:-mt-20 md:h-screen py-16 px-4 flex flex-row items-center  "
    >
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 p-2 ">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInRight}
          transition={{ duration: 1 }}
        >
          <img
            className="animate-profile__animate w-[250px] mx-auto my-4 border-white md:w-[350px] "
            src={introPic}
            alt="/"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInLeft}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col justify-center">
            <div className="text-5xl font-bold flex flex-col lg:flex-row flex-wrap justify-center lg:justify-start items-center gap-1 text-center">
              <h1 className="">Eligio Tapiador Jr</h1>
              <p className="flex mt-5 text-lg text-gray-500">
                <CiLocationOn size={25} /> Cainta, Rizal, Philippines
              </p>
            </div>

            <p className="py-7 text-lg text-gray-600  text-center lg:text-start">
              Hi, I'm Eligio Tapiador Jr. A Full-Stack Developer with over a
              decade of experience in tech industry. My expertise lies in
              creating modern and up-to-date websites that enable business to
              enhance their online presense and grow effectively. Let's
              collaborate! Feel free to connect with me on the following social
              media platform:
            </p>
            <div className="flex flex-row gap-4 mb-9 justify-center lg:justify-start items-center">
              <a href="mailto:etapiador@gmail.com">
                <AiFillMail
                  size={40}
                  className="text-gray-600 hover:scale-125 transition ease-in-out animate-[wiggle_1s_ease-in-out_infinite]"
                />
              </a>
              <a href="https://github.com/iameligio" target="_blank">
                <AiFillGithub
                  size={40}
                  className="text-gray-600 hover:scale-125 transition ease-in-out"
                />
              </a>
              <a href="https://www.linkedin.com/in/iameligio/" target="_blank">
                <AiFillLinkedin
                  size={40}
                  className="text-gray-600 hover:scale-125 transition ease-in-out"
                />
              </a>
              <a href="https://twitter.com/eligio" target="_blank">
                <AiFillTwitterCircle
                  size={40}
                  className="text-gray-600 hover:scale-125 transition ease-in-out"
                />
              </a>
              <a href="https://www.instagram.com/eligio.dev/" target="_blank">
                <AiFillInstagram
                  size={40}
                  className="text-gray-600 hover:scale-125 transition ease-in-out"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
