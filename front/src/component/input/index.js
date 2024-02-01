import "./index.css";

import { useState } from "react";

export default function Input({ title, text, type, pass, onChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  console.log(value);
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="field">
      <label className="field_label">{title}</label>
      {pass ? (
        <div className="field_wrapper">
          <input
            onChange={handleChange}
            className="field_input validation"
            value={value}
            placeholder={text}
            type={isVisible ? "text" : "password"}
          ></input>
          <span
            onClick={toggleVisibility}
            className={`field_icon ${
              isVisible ? "field_icon--eyehide" : "field_icon--eye"
            }`}
          ></span>
        </div>
      ) : (
        <div className="field_wrapper">
          <input
            onChange={handleChange}
            className="field_input validation"
            value={value}
            placeholder={text}
            type={type}
          ></input>
        </div>
      )}
    </div>
  );
}
