import "./index.css";

export default function Title({ title, description, style = {}, welcom }) {
  return (
    <div style={style} className={`header  ${welcom ? "header_welcom" : ""}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
}
