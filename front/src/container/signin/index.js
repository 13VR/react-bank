import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import Grid from "../../component/grid";
import Arrow from "../../component/arrow";
import Input from "../../component/input";

export default function SignIn() {
  return (
    <Grid>
      <StatusBar />
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <Title title={"Sign In!"} description={"Select login mthod"} />
          <Input title={"Email"} text={"Email"} type={"email"} />
          <Input show title={"Password"} text={"Password"} type={"password"} />
          <span className="info">
            Forgot your password? <a href="/signin">Restore</a>
          </span>
        </header>
        <div className="buttons">
          <Button>Continue</Button>
        </div>
      </div>
    </Grid>
  );
}
