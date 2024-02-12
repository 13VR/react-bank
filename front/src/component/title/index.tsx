import "./index.css";

type TitleProps = {
  title: string;
  description: string;
  style?: React.CSSProperties;
  welcome?: boolean;
};

const Title: React.FC<TitleProps> = ({
  title,
  description,
  style = {},
  welcome,
}) => {
  return (
    <div style={style} className={`header  ${welcome ? "header_welcome" : ""}`}>
      <p className={`${welcome ? "welcome_title" : "title"}`}>{title}</p>
      <p className={`${welcome ? "welcome_description" : "description"}`}>
        {description}
      </p>
    </div>
  );
};
export default Title;
