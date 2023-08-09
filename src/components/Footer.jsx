import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="transition ease-in-out w-full text-black  bg-gray-100  p-6 flex flex-col gap-2 text-sm">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <h1 className="flex items-center">
              <BiCopyright />
              2023 Portfolio of Eligio Tapiador jr ❤️
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
