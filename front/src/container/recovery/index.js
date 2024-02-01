import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Input from "../../component/input";
import Link from "../../component/link";

export default function Recovery() {
  return (
    <Grid>
      <StatusBar />
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <Title
            title={"Recover password"}
            description={"Choose a recovery method"}
          />
          <Input title={"Email"} text={"Email"} type={"email"} />
        </header>

        <Button>
          <Link text={"Send code"} link={"../recovery-confirm"} />
        </Button>
      </div>
    </Grid>
  );
}
