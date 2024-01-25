import "./index.css";
import arrow from "./arrow.svg";

export default function Arrow() {
  const handleClick = () => {
    window.history.back();
  };
  return (
    <div className="arrow_img">
      <img onClick={handleClick} src={arrow} alt="arrow" />
    </div>
  );
}
