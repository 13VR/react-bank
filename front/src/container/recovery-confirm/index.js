import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";

import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Input from "../../component/input";

import { NavLink } from "react-router-dom";

export default function RecoveryConfirm() {
  return (
    <Grid>
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <Title
            title={"Recover password"}
            description={"Write the code you received"}
          />
          <Input title={"Code"} text={"Code"} type={"number"} />
          <Input
            pass
            title={"New password"}
            text={"Password"}
            type={"password"}
          />
        </header>

        <Button>
          <NavLink className={"button_text"} to={"/balance"}>
            Restore Password
          </NavLink>
        </Button>
      </div>
    </Grid>
  );
}
