import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInLeft, fadeIn } from "../App";

import resources from "../sites.js";

const Projects = () => {
  const slider = React.useRef(null);
  const [ref, inView] = useInView();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="projects"
      className="container mx-auto md:pt-20 text-center transition ease-in-out w-full   "
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <h3 className="text-7xl mb-10">Projects</h3>

        <div className="mx-auto mb-20 text-left  bg-white">
          <div className="relative  w-full h-full ">
            <button onClick={() => slider?.current?.slickPrev()}>
              <MdArrowBackIosNew className="absolute z-[1] inset-y-0 left-4 md:-left-4 top-[270px] text-4xl bg-gray-500 text-white hover:bg-gray-700" />
            </button>
            <button onClick={() => slider?.current?.slickNext()}>
              <MdArrowForwardIos className="absolute z-[1] inset-y-0 right-2 md:-right-4 top-[270px] text-4xl  bg-gray-500 text-white hover:bg-gray-700" />
            </button>
          </div>
          <Slider ref={slider} {...settings}>
            {resources.map((site) => (
              <Carousel key={site.title} site={site} />
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
