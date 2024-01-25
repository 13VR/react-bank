import "./index.css";

export default function Title({ title, description, style = {}, welcome }) {
  return (
    <div style={style} className={`header  ${welcome ? "header_welcome" : ""}`}>
      <p className={`${welcome ? "welcome_title" : "title"}`}>{title}</p>
      <p className={`${welcome ? "welcome_description" : "description"}`}>{description}</p>
    </div>
  );
}
