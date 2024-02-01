import "./index.css";
import { useState } from "react";
import Button from "../../component/button";
import Title from "../../component/title";
import StatusBar from "../../component/status-bar";
import Grid from "../../component/grid";
import Arrow from "../../component/back-button";
import Input from "../../component/input";
import Link from "../../component/link";

import { Alert, Loader, LOAD_STATUS } from "../../component/load";

export default function SignUp(onCreate, id, onSubmit) {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (e) => setValue(e.target.value);

  // const [status, setStatus] = useState(null);
  // const [message, setMessage] = useState("");
  // const handleSubmit = (value) => {
  //   return sendData({ value });
  // };

  // const sendData = async (dataToSend) => {
  //   setStatus(LOAD_STATUS.PROGRESS);
  //   try {
  //     const res = await fetch("http://localhost:4000/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: convertData(dataToSend),
  //     });
  //     const data = await res.json();
  //     if (res.ok) {
  //       setStatus(null);
  //       if (onCreate) onCreate();
  //     } else {
  //       setMessage(data.message);
  //       setStatus(LOAD_STATUS.ERROR);
  //     }
  //   } catch (error) {
  //     setMessage(error.message);
  //     setStatus(LOAD_STATUS.ERROR);
  //   }
  // };
  // const convertData = ({ value }) =>
  //   JSON.stringify({
  //     email: value,

  //     userId: id,
  //   });

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
          <Input title={"Email"} text={"Email"} type={"email"} />
          <Input
            pass
            // onChange={handleChange}
            title={"Password"}
            text={"Password"}
            type={"password"}
          />
          <span className="info">
            Already have an account? <a href="/signin">Sign In</a>
          </span>
        </header>

        <Button
        // onClick={handleSubmit}
        >
          <Link text={"Continue"} link={"../signup-confirm"} />
        </Button>
      </div>
    </Grid>
  );
}
