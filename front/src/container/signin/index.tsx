import "./index.css";
import { ChangeEventHandler, useState } from "react";
import Button from "../../component/button";
import Title from "../../component/title";

import Grid from "../../component/grid";
import Arrow from "../../component/back-button";

import Input from "../../component/input";

import axios from "axios";
import { NavLink } from "react-router-dom";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (email.length === 0 || password.length === 0) return null;

    try {
      const response = await axios.post("", {
        email,
        password,
      });
      if (response.status === 200) {
        console.log("Ok");
        setEmail("");
        setPassword("");
        setIsSuccess(true);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
      setError("Error");
    }
  };
  const isDisabled: boolean = email.length === 0 || password.length === 0;

  return (
    <Grid>
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
            onChange={handlePasswordChange}
            value={password}
            title={"Password"}
            text={"Password"}
            type={"password"}
          />
          <span className="info">
            Already have an account? <a href="/signin">Sign In</a>
          </span>
        </header>

        <Button onClick={handleSubmit} disabled={isDisabled}>
          <NavLink className={"button_text"} to={isSuccess ? "/recovery" : ""}>
            {" "}
            Continue
          </NavLink>
        </Button>

        {error && <div>{error}</div>}

        <pre>email: {email}</pre>

        <pre>password: {password}</pre>
      </div>
    </Grid>
  );
};

export default SignIn;
