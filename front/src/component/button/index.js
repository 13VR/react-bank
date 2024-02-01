import "./index.css";
// import { useState } from "react";

export default function Button({ children, notprimary, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`button ${notprimary ? "button--usual" : "button--primary"}`}
    >
      <p className="button_text">{children}</p>
    </button>
  );
}
