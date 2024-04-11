import Image from "next/image";

import MotionWrapper from "./MotionWrapper";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="mt-[4.5rem] flex w-full max-w-xl flex-col items-center self-center md:mt-[7.5rem] lg:max-w-[77.5rem]"
    >
      <MotionWrapper
        className="heading-bold-3"
        element="h2"
        initial={{ opacity: 0, y: "-10%" }}
        animation={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        The Digital Showcase - <span className="text-green">Our Portfolio</span>
      </MotionWrapper>
      <div className="mt-7 flex w-full flex-wrap justify-center gap-5 xs:gap-7 md:mt-[4.5rem] md:gap-x-10 md:gap-y-7">
        {Array.from({ length: 27 }).map((_, index) => (
          <MotionWrapper
            element="figure"
            key={index}
            className="size-20 shrink-0 rounded-lg lg:size-32"
            initial={{ opacity: 0, scale: 0.9 }}
            animation={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: index * 0.07 }}
          >
            <Image
              src={`/portfolio-icons/portfolio${index}.png`}
              alt="Star"
              height={130}
              width={130}
              className="shrink-0"
            />
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
