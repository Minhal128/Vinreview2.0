"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext } from "../context/search";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);
  const [Header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const [desktopMode, setDesktopMode] = useState(false);

  // Detect desktop mode
  useEffect(() => {
    const updateDesktopMode = () => setDesktopMode(window.innerWidth >= 1300);
    updateDesktopMode(); // Initialize on mount

    window.addEventListener("resize", updateDesktopMode);
    return () => window.removeEventListener("resize", updateDesktopMode);
  }, []);

  // Handle scroll logic
  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 40);

      // Trigger the search context when scrolling past a certain point
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSearchActive]);

  // Prevent rendering until mounted to avoid hydration mismatches
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <header
      className={`${
        Header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="home" smooth={desktopMode} spy={true} className="cursor-pointer">
          <Image src="/icons/logo.png" width={130} height={1} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex space-x-8">
          {["home", "cars", "about", "why", "testimonials", "contact", "reports"].map((item) => (
            <Link
              key={item}
              className="cursor-pointer text-lg font-medium text-gray-700 hover:text-red-600"
              to={item}
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer xl:hidden text-4xl"
        >
          {nav ? <BiX /> : <BiMenuAltRight />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <nav
          className={`flex flex-col items-center bg-white shadow-md xl:hidden ${
            nav ? "max-h-max py-8 px-4" : "max-h-0"
          } transition-all duration-300`}
        >
          {["home", "cars", "about", "why", "testimonials", ].map((item) => (
            <Link
              key={item}
              className="cursor-pointer py-4 text-lg font-medium text-gray-700 hover:text-orange-500"
              to={item}
              onClick={() => setNav(false)}
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
  