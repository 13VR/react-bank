import "./index.css";

import { useState } from "react";

export default function Field({
  classname,
  children,
  title,
  text,
  type,
  ...props
}) {
  return (
    <div className="field">
      <label className="field_label">{title}</label>
      <div className="field_wrapper">
        <input
          {...props}
          className={`field_input validation ${classname}`}
          placeholder={text}
          type={type}
        ></input>
        {children}
      </div>
    </div>
  );
}
