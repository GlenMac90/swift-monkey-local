"use client";

import { useState, useEffect } from "react";

import { Link } from "react-scroll";

import { navbarLinks } from "@/constants";
import { MobileNavbarProps } from "@/types";
import MotionWrapper from "../MotionWrapper";

const MobileNavbar = ({ handleCloseClick, animate }: MobileNavbarProps) => {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    if (!animate) {
      setBlur(false);
    } else {
      setTimeout(() => {
        setBlur(true);
      }, 150);
    }
  }, [animate]);

  return (
    <div
      className={`fixed inset-x-0 top-[4.5rem] z-40 flex h-full flex-col transition duration-300 ${blur && "backdrop-blur-sm"} lg:top-[8.25rem]`}
      onClick={handleCloseClick}
    >
      <MotionWrapper
        element="div"
        animation={{ y: animate ? 0 : "-100%" }}
        initial={{ y: "-100%" }}
        transition={{ duration: 0.3 }}
        className="z-50 flex h-fit w-full flex-col gap-4 bg-blush-100 px-5 py-8 shadow"
        onClick={(e) => e.stopPropagation()}
        mobileNavbar
      >
        {navbarLinks.map((link, index) => (
          <MotionWrapper
            element="div"
            animation={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            key={link.id}
          >
            <Link
              to={link.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <button
                className="paragraph-bold-1 w-full rounded-full px-8 py-3.5 transition duration-200 hover:bg-green hover:text-white"
                onClick={handleCloseClick}
              >
                {link.title}
              </button>
            </Link>
          </MotionWrapper>
        ))}
      </MotionWrapper>
    </div>
  );
};

export default MobileNavbar;
