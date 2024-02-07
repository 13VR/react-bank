import "./index.css";
import { useState } from "react";
import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Field from "../../component/field";
import Input from "../../component/input";
import Link from "../../component/link";

import { Alert, Loader, LOAD_STATUS } from "../../component/load";

export default function SignUp(onSubmit) {
  const [value, setValue] = useState({ email: "", password: "" });
  const [email, setEmail] = useState("");

  // const handleChange = (e) => setValue(e.target.value);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // function handleChange(e) {
  //   if (setValue.email === "email") setValue.email(e.target.value);
  //   if (setValue.password === "password") setValue.password(e.target.value);

  //   // setValue({
  //   //   email: e.target.value,
  //   //   password: e.target.value,
  //   // });
  // }
  const handleSubmit = () => {
    if (email.length === 0) return null;

    if (onSubmit) {
      onSubmit(email);
    } else {
      throw new Error("onSubmit props is undefined");
    }

    setValue("");
  };
  const isDisabled = email.length === 0;

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
          <Input
            id="email"
            onChange={handleEmailChange}
            value={email}
            title={"Email"}
            text={"Email"}
            type={"email"}
          />
          <Input
            pass
            id="password"
            // onChange={handleChange}
            value={value.password}
            title={"Password"}
            text={"Password"}
            type={"password"}
          />
          <span className="info">
            Already have an account? <a href="/signin">Sign In</a>
          </span>
        </header>
        <Button onClick={handleSubmit} disabled={isDisabled}>
          <Link text={"Continue"} link={"../signup-confirm"} />
        </Button>
        <pre>email: {email}</pre>
      </div>
    </Grid>
  );
}
