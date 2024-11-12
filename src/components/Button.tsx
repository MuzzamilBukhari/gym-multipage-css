import React, { ReactNode } from "react";
import "../styles/Button.css";

type btn = "button" | "submit" | "reset";
const Button = ({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className?: string;
  type: btn;
}) => {
  return (
    <button type={type} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
