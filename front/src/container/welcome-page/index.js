import "./index.css";

import logo from "./welcome-img.svg";
import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import LinkTo from "../../component/link";

export default function WelcomePage() {
  return (
    <div className="welcome_page">
      <header className="welcom_header">
        <StatusBar welcome />
        <Title welcome title={"Hello!"} description={"Welcome to bank app"} />
        <img className="img" src={logo} alt="logo" />
      </header>
      <div className="buttons">
        <Button>
          <LinkTo text={"Sign Up"} link={"../signup"} />
        </Button>
        <Button notprimary>
          <LinkTo text={"Sign In"} link={"../signin"} />
        </Button>
      </div>
    </div>
  );
}
