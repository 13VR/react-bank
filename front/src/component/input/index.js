import "./index.css";
import imgshow from "./show.svg";
import imgunshow from "./unshow.svg";

export default function Input({ title, text, type, show }) {
  return (
    <div className="main_input">
      <span className="input_text">{title}</span>
      <input className="input" placeholder={text} type={type}></input>
      {show ? (
        <div className="img_show">
          <img src={imgunshow} alt="show" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
