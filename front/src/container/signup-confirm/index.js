import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Input from "../../component/input";
import Link from "../../component/link";

export default function SignUpConfirm() {
  return (
    <Grid>
      <StatusBar />
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <Title
            title={"Confirm account!"}
            description={"Write the code you received"}
          />
          <Input title={"Code"} text={"Code"} type={"number"} />
        </header>

        <Button>
          <Link text={"Confirm"} />
        </Button>
      </div>
    </Grid>
  );
}
