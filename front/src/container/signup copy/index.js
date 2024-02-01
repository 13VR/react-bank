import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Input from "../../component/input";
import Link from "../../component/link";

export default function SignUp() {
  return (
    <Grid>
      <StatusBar />
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <Title
            title={"Sign Up!"}
            description={"Choose a registration method"}
          />
          <Input title={"Email"} text={"Email"} type={"email"} />
          <Input show title={"Password"} text={"Password"} type={"password"} />
          <span className="info">
            Already have an account? <a href="/signin">Sign In</a>
          </span>
        </header>

        <Button>
          <Link text={"Continue"} />
        </Button>
      </div>
    </Grid>
  );
}