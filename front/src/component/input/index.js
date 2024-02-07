import "./index.css";

import { useState } from "react";

export default function Input({
  title,
  text,
  type,

  status = "default",
  children,
  onChange,
  pass,
  value,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="field">
      <label className={`field_label field_label--${status}`}>{title}</label>
      {pass ? (
        <div className="field_wrapper">
          <input
            onChange={onChange}
            className={`field_input validation  field_input--${status}`}
            // value={value}
            placeholder={text}
            type={isVisible ? "text" : "password"}
          ></input>
          <span
            onClick={toggleVisibility}
            className={`field_icon ${
              isVisible ? "field_icon--eyehide" : "field_icon--eye"
            }`}
          ></span>
          {children}
        </div>
      ) : (
        <div className="field_wrapper">
          <input
            onChange={onChange}
            className={`field_input validation  field_input--${status}`}
            // value={value}
            placeholder={text}
            type={type}
          ></input>
          {children}
        </div>
      )}
    </div>
  );
}
