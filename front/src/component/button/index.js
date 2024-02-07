import "./index.css";
// import { useState } from "react";

export default function Button({ children, notprimary, ...props }) {
  return (
    <button
      {...props}
      className={`button ${notprimary ? "button--usual" : "button--primary"}`}
    >
      <p className="button_text">{children}</p>
    </button>
  );
}
