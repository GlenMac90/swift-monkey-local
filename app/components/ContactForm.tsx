"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from ".";
import { sendEmail } from "@/lib/actions/email.actions";
import { ContactFormFields, contactFormSchema } from "@/types";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    try {
      setSending(true);
      const response = await sendEmail(data);
      if (response && response.success) {
        toast({
          title: "Message sent successfully",
          description: "We'll get back to you as soon as possible.",
        });
        setValue("name", "");
        setValue("email", "");
        setValue("message", "");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex flex-col lg:mt-8"
    >
      <label htmlFor="name" className="paragraph-reg-4">
        Name
      </label>
      <div className="relative mt-1.5 flex w-full rounded-full border border-blush-500/30 bg-white px-5 py-3">
        <input
          {...register("name")}
          type="text"
          placeholder="Your Name"
          id="name"
          className="paragraph-bold-2 placeholder:paragraph-reg-3 w-full bg-transparent outline-none"
        />
        {errors.name && (
          <span className="paragraph-reg-4 absolute bottom-[-1.375rem] text-red-500">
            {errors.name.message}
          </span>
        )}
      </div>
      <label htmlFor="email" className="paragraph-reg-4 mt-6">
        Email
      </label>
      <div className="relative mt-1.5 flex w-full rounded-full border border-blush-500/30 bg-white px-5 py-3">
        <input
          {...register("email")}
          autoCorrect="off"
          type="email"
          placeholder="example@email.com"
          id="email"
          className="paragraph-bold-2 placeholder:paragraph-reg-3 w-full bg-transparent outline-none"
        />
        {errors.email && (
          <span className="paragraph-reg-4 absolute bottom-[-1.375rem] text-red-500">
            {errors.email.message}
          </span>
        )}
      </div>
      <label htmlFor="message" className="paragraph-reg-4 mt-6">
        Message
      </label>
      <div className="relative mt-1.5 flex w-full rounded-2xl border border-blush-500/30 bg-white px-5 py-3">
        <textarea
          {...register("message")}
          placeholder="Leave us a message"
          id="message"
          className="paragraph-bold-2 placeholder:paragraph-reg-3 h-32 w-full resize-none bg-transparent outline-none"
        />
        {errors.message && (
          <span className="paragraph-reg-4 absolute bottom-[-1.375rem] text-red-500">
            {errors.message.message}
          </span>
        )}
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="paragraph-bold-4 md:paragraph-bold-2 mt-6 w-full rounded-full bg-green py-4 text-white transition duration-300 hover:scale-[1.02]"
      >
        <span className={`${sending && "animate-pulse"}`}>
          {" "}
          {sending ? "Sending..." : "Send Message"}
        </span>
      </Button>
      <span className="mt-2.5 self-center text-xs text-black-600">
        (Please allow 24 hours for a response)
      </span>
    </form>
  );
};

export default ContactForm;
