import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Input from "../../component/input";
import Link from "../../component/link";

export default function RecoveryConfirm() {
  return (
    <Grid>
      <StatusBar />
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <Title
            title={"Recover password"}
            description={"Write the code you received"}
          />
          <Input title={"Code"} text={"Code"} type={"number"} />
          <Input
            show
            title={"New password"}
            text={"Password"}
            type={"password"}
          />
        </header>

        <Button>
          <Link text={"Send code"} />
        </Button>
      </div>
    </Grid>
  );
}
