import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";

import Grid from "../../component/grid";
import Arrow from "../../component/back-button";

import { NavLink } from "react-router-dom";
import Input from "../../component/input";
import { useState } from "react";
import axios from "axios";

const SignUpConfirm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [codawa, setCodawa] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const handleCodeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCodawa(e.target.value);
  };

  const handleSubmit = async () => {
    if (codawa.length === 0) return null;

    try {
      const response = await axios.post("", codawa);
      if (response.status === 200) {
        console.log("Ok");
        setError("");
        setIsSuccess(true);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
      setError("Error");
    }
  };
  const isDisabled: boolean = codawa.length === 0;
  return (
    <Grid>
      <Arrow />
      <div className="custom_page">
        <header className="custom_header">
          <Title
            title={"Confirm account!"}
            description={"Write the code you received"}
          />
          {isSuccess ? (
            <>
              <Input
                id="cod"
                status="error"
                value={codawa}
                onChange={handleCodeChange}
                title={"Code"}
                text={"Code"}
                type={"number"}
              >
                <span style={{ color: "red" }}>{error}</span>
              </Input>
            </>
          ) : (
            <>
              <Input
                id="cod"
                value={codawa}
                onChange={handleCodeChange}
                title={"Code"}
                text={"Code"}
                type={"number"}
              />
            </>
          )}
        </header>

        <Button disabled={isDisabled} onClick={handleSubmit}>
          <NavLink className={"button_text"} to={"/signup-confirm"}>
            {" "}
            Confirm
          </NavLink>
        </Button>
      </div>
    </Grid>
  );
};

export default SignUpConfirm;
