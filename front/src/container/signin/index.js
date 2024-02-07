import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Input from "../../component/input";
import Link from "../../component/link";
import { useState } from "react";

export default function SignIn(onSubmit) {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = () => {
    if (value.length === 0) return null;

    if (onSubmit) {
      onSubmit(value);
    } else {
      throw new Error("onSubmit props is undefined");
    }

    setValue("");
  };
  const isDisabled = value.length === 0;
  return (
    <Grid>
      <StatusBar />
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <Title title={"Sign In!"} description={"Select login method"} />
          <Input
            onChange={handleChange}
            title={"Email"}
            text={"Email"}
            type={"email"}
          />
          <Input
            pass
            onChange={handleChange}
            title={"Password"}
            text={"Password"}
            type={"password"}
          />
          <span className="info">
            Forgot your password? <a href="/recovery">Restore</a>
          </span>
        </header>

        <Button disabled={isDisabled} onClick={handleSubmit}>
          <Link text={"Continue"} />
        </Button>
      </div>
    </Grid>
  );
}
