import "./index.css";
// import { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
  notprimary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  notprimary,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`button ${notprimary ? "button--usual" : "button--primary"}`}
    >
      <p className="button_text">{children}</p>
    </button>
  );
};

export default Button;
