import "./index.css";
import logo from "./welcome-img.svg";
import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";

export default function WelcomePage() {
  return (
    <div className="welcome_page">
      <header className="welcom_header">
        <StatusBar welcome />
        <Title welcom title={"Hello!"} description={"Welcome to bank app"} />
        <img className="img" src={logo} alt="logo" />
      </header>
      <div className="buttons">
        <Button>Sign Up</Button>
        <Button notprimary>Sign In</Button>
      </div>
    </div>
  );
}
