import Image from "next/image";

import ContactForm from "./ContactForm";
import MotionWrapper from "./MotionWrapper";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-[4.5rem] flex w-full max-w-xl flex-col justify-between self-center md:mt-[7.5rem] lg:max-w-[77.5rem] lg:flex-row"
    >
      <MotionWrapper
        className="flex w-full flex-col lg:mr-20 lg:max-w-lg"
        element="div"
        initial={{ opacity: 0, x: "-10%" }}
        animation={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <h2 className="heading-bold-3 text-blush-500">
          Get in touch <span className="text-black-900"> with us</span>
        </h2>
        <p className="paragraph-reg-4 lg:paragraph-reg-3 mt-3">
          Share your details, thoughts, or projects by filling out the form
          below. We&apos;re here to bring your ideas to life!{" "}
        </p>
        <ContactForm />
      </MotionWrapper>
      <MotionWrapper
        element="div"
        className="flex-center hidden w-full min-w-[30rem] rounded-2xl bg-gunther py-6 lg:flex"
        initial={{ opacity: 0, x: "10%" }}
        animation={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
      >
        <MotionWrapper
          element="figure"
          initial={{ opacity: 0, scale: 0.9 }}
          animation={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.3, delay: 0.5 }}
        >
          <Image
            src="/gunther.png"
            alt="A delightful picture of a monkey wearing a bowler hat"
            height={600}
            width={600}
          />
        </MotionWrapper>
      </MotionWrapper>
    </section>
  );
};

export default Contact;
