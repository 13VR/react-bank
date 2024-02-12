import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";

import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Input from "../../component/input";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Recovery(onSubmit) {
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
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <Title
            title={"Recover password"}
            description={"Choose a recovery method"}
          />
          <Input
            onChange={handleChange}
            title={"Email"}
            text={"Email"}
            type={"email"}
          />
        </header>

        <Button disabled={isDisabled} onClick={handleSubmit}>
          <NavLink className={"button_text"} to={"/balance"}>
            Restore Password
          </NavLink>
        </Button>
      </div>
    </Grid>
  );
}
