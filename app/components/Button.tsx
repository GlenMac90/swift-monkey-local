"use client";

import Link from "next/link";
import { ButtonProps } from "@/types";

const Button = ({
  linkPath,
  children,
  className,
  disabled,
  type,
  handleClick,
}: ButtonProps) => {
  if (linkPath) {
    return (
      <Link href={linkPath}>
        <a className={className}>{children}</a>
      </Link>
    );
  }
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
