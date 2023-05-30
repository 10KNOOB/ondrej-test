import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import {
  //   FaDiscord,
  FaTwitter,
  FaInstagram,
  //   FaTelegram,
  //   FaReddit,
  FaYoutube,
} from "react-icons/fa";

// import { BiMenu } from "react-icons/bi";

// import { HiMailOpen, HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  //   let activeStyle = {
  //     backgroundColor: "#FCC607",
  //   };

  const handleNav = () => {
    setNav(!nav);
  };

  //   const [showMyModal, setShowMyModal] = useState(false);
  //   const handleOnClose = () => setShowMyModal(false);

  //   //scroll lock when modal is open
  //   showMyModal
  //     ? (document.body.style.overflow = "hidden")
  //     : (document.body.style.overflow = "auto");

  return (
    <div className="text-white font-sans px-2">
      {/* This is navbar */}
      <div className="container flex justify-between items-center my-3">
        <div onClick={handleNav} className="text-2xl text-[#ddd]">
          ☰
        </div>

        <h1>
          <a
            href="https://brodypaetau.com"
            id="logo"
            className="max-md:hidden md:text-[3.2rem] font-wanted block text-[#ddd] uppercase letter-spacing-[0.2rem]"
          >
            Paetau Ondrej &amp; Kristofer Brody
          </a>
        </h1>

        <ul className="flex justify-center items-center gap-2">
          <li className="bg-[#ddd] text-black text-xl p-1 rounded-full">
            <FaYoutube className="" />
          </li>
          <li className="bg-[#ddd] text-black text-xl p-1 rounded-full">
            <FaInstagram />
          </li>
          <li className="bg-[#ddd] text-black text-xl p-1 rounded-full">
            <FaTwitter />
          </li>
        </ul>

        <div
          className={
            nav
              ? "bg-[#FFF200] fixed left-0 top-0 w-full ease-in-out duration-500 text-base z-50"
              : "ease-in duration-500 fixed top-[-100%] w-full  left-0 "
          }
        >
          <div>
            <div className="py-6 flex justify-between px-4">
              <div onClick={handleNav} className="text-black cursor-pointer">
                <AiOutlineClose size={28} />
              </div>
              <ul className="flex justify-center items-center gap-2">
                <li className="bg-black text-[#ddd] text-xl p-1 rounded-full">
                  <FaYoutube className="" />
                </li>
                <li className="bg-black text-[#ddd] text-xl p-1 rounded-full">
                  <FaInstagram />
                </li>
                <li className="bg-black text-[#ddd] text-xl p-1 rounded-full">
                  <FaTwitter />
                </li>
              </ul>
            </div>
            {/* grid px-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 */}
            <nav className="container pt-16 pb-16 grid grid-cols-4 text-[30px] font-bold text-black gap-1.5">
              <NavLink className="" to="/#" onClick={handleNav}>
                Home
              </NavLink>
              <NavLink className="" to="/about" onClick={handleNav}>
                Search
              </NavLink>

              <NavLink
                className=""
                to="/previouscollection"
                onClick={handleNav}
              >
                Old Website
              </NavLink>

              <div></div>

              <NavLink className="" to="/contact" onClick={handleNav}>
                About
              </NavLink>
              <a
                className=""
                rel="noreferrer"
                href="http://brodypaetau.com/"
                target="_blank"
              >
                Newsletters
              </a>
              <div></div>
              <div></div>

              <a
                className=""
                rel="noreferrer"
                href="https://old.brodypaetau.com/"
                target="_blank"
              >
                Publications
              </a>
            </nav>
          </div>
        </div>
      </div>
      <h1>
        <a
          href="https://brodypaetau.com"
          id="logo"
          className="text-4xl text-center md:hidden font-wanted block text-[#ddd] uppercase letter-spacing-[0.2rem]"
        >
          Paetau Ondrej &amp; Kristofer Brody
        </a>
      </h1>
    </div>
  );
};

export default Navbar;
