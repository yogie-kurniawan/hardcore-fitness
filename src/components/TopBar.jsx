import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-[var(--primary)] text-white">
      <div className="flex gap-2 items-center">
        <h1 className="font-medium text-xl">HRFS</h1>
      </div>
      <div className="flex items-center gap-3">
        <FaInstagram size={20} className="cursor-pointer" />
        <FaFacebookF size={20} className="cursor-pointer" />
        <div className="flex items-start gap-2">
          <AiFillPhone size={20} className="cursor-pointer" />
          <div>+6289320394</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
