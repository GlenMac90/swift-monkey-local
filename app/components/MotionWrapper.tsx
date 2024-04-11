"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { MotionWrapperProps } from "@/types";

const MotionWrapper = ({
  children,
  element,
  animation,
  initial,
  transition,
  className,
  link,
  onClick,
  mobileNavbar,
}: MotionWrapperProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const initialPosition =
    typeof window !== "undefined" && window.innerWidth < 400 && !mobileNavbar
      ? { x: 0, y: 0, opacity: 1 }
      : initial;
  const props = {
    initial: initialPosition,
    transition,
    viewport: { once: true },
    whileInView: animation,
    className,
  };

  switch (element) {
    case "div":
      return (
        <motion.div onClick={onClick} {...props}>
          {children}
        </motion.div>
      );
    case "figure":
      return <motion.figure {...props}>{children}</motion.figure>;
    case "figcaption":
      return <motion.figcaption {...props}>{children}</motion.figcaption>;
    case "h1":
      return <motion.h1 {...props}>{children}</motion.h1>;
    case "h2":
      return <motion.h2 {...props}>{children}</motion.h2>;
    case "p":
      return <motion.p {...props}>{children}</motion.p>;
    case "button":
      if (link) {
        return (
          <Link
            to={link}
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
            className="flex w-full sm:w-48"
          >
            <motion.button {...props}>{children}</motion.button>
          </Link>
        );
      }
      return <motion.button {...props}>{children}</motion.button>;
  }
};

export default MotionWrapper;
