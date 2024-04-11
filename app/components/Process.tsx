import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { processSteps } from "@/constants";
import MotionWrapper from "./MotionWrapper";
import Rocket from "./Rocket";

const Process = () => {
  return (
    <section className="mt-16 flex w-full max-w-xl flex-col self-center xs:gap-7 md:mt-[6.5rem] md:justify-between md:gap-10 lg:max-w-[77.5rem] lg:flex-row">
      <MotionWrapper
        element="div"
        className="flex w-full flex-col xs:gap-3"
        initial={{ opacity: 0, x: "-5%" }}
        animation={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <h2 className="heading-bold-3">
          Navigating Your Project Journey with SwiftMonkey&apos;s Effortless
          <span className="text-blush-500"> 4-Step Process</span>
        </h2>
        <figure className="flex w-full ">
          <Rocket />
        </figure>
      </MotionWrapper>
      <MotionWrapper
        element="div"
        initial={{ opacity: 0, x: "5%" }}
        animation={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, ease: "easeOut", duration: 0.8 }}
        className="flex w-full"
      >
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-6"
          defaultValue="01"
        >
          {processSteps.map((step) => (
            <AccordionItem value={step.number} key={step.number}>
              <AccordionTrigger className="py-2">
                <p className="paragraph-bold-1 text-green">
                  {step.number}
                  <span className="text-black-900"> - {step.title}</span>
                </p>
              </AccordionTrigger>
              <AccordionContent>{step.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MotionWrapper>
    </section>
  );
};

export default Process;
