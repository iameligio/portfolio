import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 768) {
        setNav(nav);
        return;
      }
    };
    // Attach event listener on component mount
    window.addEventListener("resize", handleResize);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    { name: "Home", route: "home" },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Skills",
      route: "skills",
    },
    {
      name: "About",
      route: "about",
    },
  ];
  return (
    <div className="transition ease-in-out  sticky top-0 flex justify-between md:justify-between lg:justify-evenly items-center h-20 w-full mx-auto px-4 text-black  bg-white   z-30">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="group text-3xl font-bold cursor-pointer"
      >
        <span className="uppercase group-hover:text-gray-900 transition ease-in-out">
          eligio
        </span>
      </Link>
      <ul className="hidden md:flex justify-end md:w-[30%]">
        {links.map((e) => (
          <li className="px-1">
            <Link
              to={e.route}
              activeClass={"text-white bg-gray-500"}
              spy={true}
              smooth={true}
              duration={500}
              className="uppercase p-3 hover:text-white hover:bg-gray-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
            >
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      <div
        className={
          nav
            ? "flex flex-col items-center py-6 fixed left-0 top-0 h-full w-[50%] border-r  "
            : "fixed left-[-100%]"
        }
      >
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          className="group text-3xl font-bold cursor-pointer "
        >
          <span className="uppercase text-gray-700 group-hover:text-blue-500 transition ease-in-out">
            eligio
          </span>
        </Link>
        <ul className="uppercase p-4 flex flex-col text-center">
          {links.map((e) => (
            <Link
              to={e.route}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNav}
              className="p-3 hover:text-blue-500 transition ease-in-out rounded-xl font-semibold cursor-pointer"
            >
              {e.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
