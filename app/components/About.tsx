import Image from "next/image";

import { aboutData } from "@/constants";
import MotionWrapper from "./MotionWrapper";

const iconBackground: { [key: string]: string } = {
  bgPink: "bg-pink/10",
  bgPurple: "bg-purple/10",
  bgYellow: "bg-yellow/10",
  bgGreen: "bg-green/10",
};

const About = () => {
  return (
    <section
      id="about"
      className="mt-[4.5rem] flex max-w-xl flex-col self-center md:mt-28 lg:max-w-[77.5rem]"
    >
      <MotionWrapper
        className="heading-bold-3"
        element="h2"
        initial={{ opacity: 0, y: "-10%" }}
        animation={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        About Us
      </MotionWrapper>
      <div className="mt-6 flex flex-col gap-5 md:mt-7 md:justify-between md:gap-6 lg:flex-row">
        <MotionWrapper
          element="p"
          className="paragraph-reg-4 md:paragraph-reg-1"
          initial={{ opacity: 0, x: "-5%" }}
          animation={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.15 }}
        >
          At SwiftMonkey, passion fuels our commitment to excellence. With a
          shared dedication to raising industry standards, our team harnesses
          over{" "}
          <strong>20 years of iOS and mobile development experience</strong>,
          alongside <strong>40 years of server expertise</strong>.
        </MotionWrapper>
        <MotionWrapper
          element="p"
          className="paragraph-reg-4 md:paragraph-reg-1"
          initial={{ opacity: 0, x: "-5%" }}
          animation={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
        >
          From networks to servers, 3D rendering to mobile development,
          we&apos;re driven to redefine coding excellence. SwiftMonkey
          isn&apos;t just a company —{" "}
          <strong>it&apos;s a promise of top-tier software solutions</strong>{" "}
          crafted with precision and finesse.
        </MotionWrapper>
      </div>
      <div className="mt-6 grid w-full grid-cols-2 gap-5 xs:gap-7 md:mt-12 md:gap-8 lg:grid-cols-4">
        {aboutData.map((item, index) => {
          const bgKey = iconBackground[item.bgKey];
          return (
            <MotionWrapper
              key={item.id}
              element="div"
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: "5%" }}
              animation={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.2 * index,
              }}
            >
              <figure
                className={`${bgKey} flex-center w-fit shrink-0 rounded-lg p-1.5`}
              >
                <Image
                  src={item.image}
                  height={24}
                  width={24}
                  alt={`Icon for the following company info: ${item.text}`}
                  className="shrink-0"
                />
              </figure>
              <figcaption className="paragraph-med-2">{item.text}</figcaption>
            </MotionWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default About;
