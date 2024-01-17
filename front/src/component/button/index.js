import "./index.css";

export default function Button({ children, notprimary }) {
  return (
    <button
      className={`button ${notprimary ? "button--usual" : "button--primary"}`}
    >
      <p className="button_text">{children}</p>
    </button>
  );
}
