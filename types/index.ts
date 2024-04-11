import { ReactNode, MouseEvent } from "react";
import { z } from "zod";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}
export interface ButtonProps {
  linkPath?: string;
  children: ReactNode;
  className: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
}

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please check your email" }),
  message: z
    .string()
    .min(40, { message: "Message must be atleast 40 characters" }),
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;

export interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

type Element = "div" | "figure" | "figcaption" | "h1" | "h2" | "p" | "button";

export interface MotionWrapperProps {
  children?: ReactNode;
  element: Element;
  animation: object;
  initial: object;
  transition: object;
  className?: string;
  link?: string;
  onClick?: (e: MouseEvent) => void;
  mobileNavbar?: boolean;
}

export interface MobileNavbarProps {
  handleCloseClick: () => void;
  animate: boolean;
}
