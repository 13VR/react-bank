import React from "react";
import "./index.css";

export default function Link({ text, link, onClick }) {
  const handleClick = () => {
    // onClick();
    window.location.assign(link);
  };
  return <span onClick={onClick || handleClick}>{text}</span>;
}
