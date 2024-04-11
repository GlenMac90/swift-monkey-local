import Image from "next/image";

import { servicesCardData } from "@/constants";
import MotionWrapper from "./MotionWrapper";

const Services = () => {
  return (
    <section
      id="services"
      className="mt-32 flex w-full flex-col items-center gap-8 md:mt-48 md:gap-12"
    >
      <MotionWrapper
        element="h2"
        initial={{ y: "10%", opacity: 0 }}
        animation={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="heading-bold-3 text-center text-green"
      >
        Our Services
        <span className="text-black-900">: Innovation in Action</span>
      </MotionWrapper>
      <div className="flex w-full max-w-[77.5rem] flex-col items-center gap-6 lg:h-[26.8rem] lg:flex-row">
        {servicesCardData.map((service, index) => (
          <MotionWrapper
            element="div"
            initial={{ y: "10%", opacity: 0 }}
            animation={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            key={service.title}
            className="flex size-full max-w-xl flex-col rounded-3xl border border-blush-border/30 px-6 py-8"
          >
            <figure className="flex-center w-full rounded-ten bg-blush-200 py-10">
              <Image
                src={service.image}
                height={100}
                width={100}
                alt={`Icon representing the service: ${service.title}`}
                className="shrink-0"
              />
            </figure>
            <h3
              className={`paragraph-bold-1 mt-6 ${index === 1 && "whitespace-nowrap"}`}
            >
              {service.title}
            </h3>
            <p className="paragraph-reg-4 lg:paragraph-reg-3 mt-2.5">
              {service.description}
            </p>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
};

export default Services;
