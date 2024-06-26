import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNav(false);
      setFixedNav(window.scrollY > 50 ? true : false);
    });
  });

  return (
    <div
      className={`w-full min-h-[50px] flex justify-between items-center px-4 py-4 ease-in-out duration-300 z-10 text-white ${
        fixedNav ? "fixed bg-black" : "absolute"
      }`}
    >
      <h1 className="font-medium text-2xl text-[var(--primary)]">
        HARDCORE FITNESS
      </h1>
      <div className="hidden md:flex items-center text-white gap-3">
        <ul className="flex items-center gap-6">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#trainers" className="nav-link">
              Trainers
            </a>
          </li>
          <li>
            <a href="#footer" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-3 text-white">
        <a
          href="https://www.instagram.com/hardcorefitness_center/"
          target="_blank"
          className="hover:text-[var(--primary)] ease-in duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=6281267065747"
          target="_blank"
          className="flex items-start gap-2 cursor-pointer hover:text-[var(--primary)] ease-in duration-300 "
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="https://maps.app.goo.gl/Asfc5panZtRWzLFs9"
          target="_blank"
          className="flex items-start gap-2 cursor-pointer hover:text-[var(--primary)] ease-in duration-300 "
        >
          <MdOutlineLocationOn size={20} />
        </a>
      </div>
      <div className="md:hidden relative z-10" onClick={handleNav}>
        <FaBars size={20} className="text-white" />
      </div>
      <div
        className={
          nav
            ? "overflow-y-hidden md:hidden absolute w-full h-screen py-20 left-0 top-0 bg-black/90 ease-in duration-300"
            : "absolute w-full h-screen top-0 left-[-100%] py-20 ease-in duration-300"
        }
        onClick={handleNav}
      >
        <ul className="flex h-full flex-col gap-6 text-center">
          <li>
            <a href="/" className="nav-link text-2xl">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link text-2xl">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link text-2xl">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link text-2xl">
              Pricing
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link text-2xl">
              Trainers
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link text-2xl">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
