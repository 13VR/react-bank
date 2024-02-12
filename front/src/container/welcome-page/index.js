import "./index.css";

import logo from "./welcome-img.svg";
import Button from "../../component/button";
import Title from "../../component/title";
import { NavLink } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="welcome_page">
      <header className="welcom_header">
        <Title welcome title={"Hello!"} description={"Welcome to bank app"} />
        <img className="img" src={logo} alt="logo" />
      </header>
      <div className="buttons">
        <Button welcome>
          <NavLink className={"button_text"} to={"../signup"}>
            Sign Up
          </NavLink>
        </Button>
        <Button notprimary>
          <NavLink className={""} to={"../signin"}>
            Sign In
          </NavLink>
        </Button>
      </div>
    </div>
  );
}
