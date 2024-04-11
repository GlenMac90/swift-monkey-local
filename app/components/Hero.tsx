"use client";

import Image from "next/image";

import MotionWrapper from "./MotionWrapper";

const Hero = () => {
  return (
    <section className="flex-center mt-[8.375rem] flex w-full md:mt-[12.25rem] md:px-10">
      <div className="relative flex max-w-lg flex-col items-center overflow-hidden md:max-w-[57rem] md:overflow-visible">
        <MotionWrapper
          element="figure"
          initial={{ opacity: 0 }}
          animation={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
          transition={{
            scale: {
              duration: 0.7,
              times: [0, 0.5, 1],
              ease: "easeInOut",
              delay: 0.4,
            },
            opacity: { duration: 0.2, delay: 0.4 },
          }}
          className="absolute -left-9 bottom-9 hidden md:flex"
        >
          <Image
            src="/icons/hero-star-graphic.svg"
            height={36}
            width={36}
            alt="Star graphic"
          />
        </MotionWrapper>
        <MotionWrapper
          element="figure"
          initial={{ opacity: 0 }}
          animation={{ scale: [1, 1.5, 1], opacity: [0, 1] }}
          transition={{
            scale: {
              duration: 0.7,
              times: [0, 0.5, 1],
              ease: "easeInOut",
              delay: 0.8,
            },
            opacity: { duration: 0.2, delay: 0.8 },
          }}
          className="absolute -right-9 -top-16 hidden md:flex"
        >
          <Image
            src="/icons/hero-star-graphic.svg"
            height={36}
            width={36}
            alt="Star graphic"
          />
        </MotionWrapper>
        <MotionWrapper
          element="h1"
          className="heading-bold-1 mt-4 text-center md:mt-5"
          initial={{ x: "15%", opacity: 0 }}
          animation={{ x: 0, opacity: 1 }}
          transition={{
            x: { duration: 0.8, delay: 0.4 },
            opacity: { duration: 0.8, delay: 0.4 },
          }}
        >
          Revolutionize Your Digital Realm with{" "}
          <span className="text-green">SwiftMonkey</span>
        </MotionWrapper>
        <MotionWrapper
          element="p"
          initial={{ x: "-15%", opacity: 0 }}
          animation={{ x: 0, opacity: 1 }}
          transition={{
            x: { duration: 0.8, delay: 0.6 },
            opacity: { duration: 0.8, delay: 0.6 },
          }}
          className="paragraph-reg-4 md:paragraph-reg-2 mt-4 text-center"
        >
          SwiftMonkey specializes in creating innovative and secure software,
          elevating your digital experience. We bring your vision to life with
          passion & precision.
        </MotionWrapper>
        <MotionWrapper
          element="button"
          initial={{
            y: "10%",
            opacity: 0,
          }}
          animation={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            y: { duration: 0.7, delay: 0.8 },
            opacity: { duration: 0.7, delay: 0.8 },
          }}
          className="paragraph-bold-2 flex-center mt-7 flex w-full cursor-pointer rounded-full bg-green py-4 text-white transition duration-300 hover:scale-105 sm:max-w-48"
          link="contact"
        >
          Get a Quote
        </MotionWrapper>
      </div>
    </section>
  );
};

export default Hero;
