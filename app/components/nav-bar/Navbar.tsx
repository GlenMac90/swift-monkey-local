"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import LogoWithTitle from "./LogoWithTitle";
import { navbarLinks } from "@/constants";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMobileNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    setAnimate(false);

    setTimeout(() => {
      setShowMobileNavbar(false);
    }, 300);
  };

  const handleClick = () => {
    if (showMobileNavbar) {
      handleClose();
      return;
    }
    setShowMobileNavbar(true);
    setAnimate(true);
  };

  return (
    <>
      <nav className="flex-center fixed top-0 z-50 w-full bg-blush-100 px-5 py-6 md:px-8 lg:py-8">
        <div className="flex w-full max-w-[77.5rem] justify-between">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
          >
            <button onClick={handleClose}>
              <LogoWithTitle />
            </button>
          </Link>
          <div className="flex items-center">
            <button className="block md:hidden" onClick={handleClick}>
              <Image
                src="/icons/navbar-menu-button.svg"
                alt="Navbar Menu Button"
                height={24}
                width={24}
                className="shrink-0"
              />
            </button>
            <div className="hidden gap-14 md:flex">
              {navbarLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={1000}
                  className="paragraph-reg-2 cursor-pointer hover:text-green"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {showMobileNavbar && (
        <MobileNavbar handleCloseClick={handleClick} animate={animate} />
      )}
    </>
  );
};

export default Navbar;
