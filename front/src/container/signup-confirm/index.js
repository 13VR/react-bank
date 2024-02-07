import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Link from "../../component/link";
// import Field from "../../component/field";
import Input from "../../component/input";
import { useState } from "react";

const ERROR = "Please, enter your code";

export default function SignUpConfirm(onSubmit) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
    setErrorMessage(e.target.value.trim().length === 0);
  }
  console.log(value);
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
          <Title
            title={"Confirm account!"}
            description={"Write the code you received"}
          />
          {errorMessage ? (
            <>
              <Input
                status="error"
                value={value}
                onChange={handleChange}
                title={"Code"}
                text={"Code"}
                type={"number"}
              >
                <span style={{ color: "red" }}>{ERROR}</span>
              </Input>
            </>
          ) : (
            <>
              <Input
                value={value}
                onChange={handleChange}
                title={"Code"}
                text={"Code"}
                type={"number"}
              />
            </>
          )}
        </header>

        <Button disabled={isDisabled} onClick={handleSubmit}>
          <Link text={"Confirm"} />
        </Button>
      </div>
    </Grid>
  );
}
