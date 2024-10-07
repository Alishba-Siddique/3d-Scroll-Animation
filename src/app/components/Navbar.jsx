'use client';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { IoIosCart } from 'react-icons/io';
import { PiCigaretteThin } from 'react-icons/pi';

const Navbar = ({ colorIndex }) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Ref for the navbar element
  const navRef = useRef();

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Close the navbar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nav && navRef.current && navRef.current.contains(event.target)) {
        setNav(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nav]);

  // Array containing navigation items with href links
  const sideItems = [
    { id: 1, text: 'Home', href: '#history' },
    { id: 2, text: <FaInstagram />, href: '#about' },
    { id: 2, text: <FaFacebookF />, href: '#about' },
    { id: 3, text: <FaLinkedinIn />, href: '#contact' },
  ];
  const navItems = [
    { id: 1, text: 'Home', href: '#history' },
    { id: 2, text: 'About', href: '#about' },
    { id: 2, text: 'Order Now', href: '#about' },
    { id: 3, text: 'Contact', href: '#contact' },
  ];

  const colorsBtn = ['#FF834F', '#F9AF42', '#7ECF86', '#d397b1'];

  return (
    <div
      className="absolute top-0 left-0 w-full z-10 "
    >
      <div className="bg-transparent flex justify-between items-center text-center h-24 max-w-full mx-auto px-4 text-offWhite">
        {/* Desktop Navigation */}
        <ul className="flex ">
          {sideItems.map((item) => (
            <li
              key={item.id}
              className="px-2  sm:px-2 md:px-2 lg:px-4 xl:px-4 2xl:px-4 
                ml-2 sm:ml-2 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 largestLaptop:ml-0 text-base md:text-xs lg:text-sm mediumLaptop:text-lg xl:text-lg  2xl:text-lg largestLaptop:text-3xl cursor-pointer relative group"
            >
              <a href={item.href} className="inline-block">
                {item.text}
                <span className="absolute left-0 bottom-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom-right group-hover:origin-bottom-left duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <h1
          className="
          text-center text-5xl" // Responsive width for different screen sizes
        >
          CocoMi
        </h1>

        <div className="flex items-center gap-8">
          <button
            className="text-black font-bold py-2 px-4 rounded-full cursor-pointer mt-4"
            style={{ backgroundColor: colorsBtn[colorIndex] }}
          >
            Order Now
          </button>
          <button className="border-2 border-offWhite font-bold p-3 rounded-full cursor-pointer mt-4">
            <IoIosCart size={20} />
          </button>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNav}>
            {nav ? (
              <div className="flex items-center text-offWhite">
                <span className="ml-2">Close</span>
                <AiOutlineClose size={20} className="cursor-pointer" />
              </div>
            ) : (
              <div className="flex items-center">
                <span className="ml-2">Menu</span>
                <AiOutlineMenu size={20} className="cursor-pointer" />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          ref={navRef} // Reference to the mobile menu
          className={
            nav
              ? 'fixed top-0 bottom-0 w-screen h-full  bg-offWhite opacity-95 ease-in-out duration-500'
              : 'ease-in-out w-screen h-full  duration-500 fixed top-0 bottom-[-100%] right-[100%]'
          }
        >
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 text-black text-center text-6xl border-b-gray-600  first:mt-6 duration-300 hover:bg-[{{colorsBtn[colorIndex]}}] cursor-pointer border-gray-400"
            >
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
