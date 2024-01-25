import React from "react";
import Page from "./component/page";
import WelcomePage from "./container/welcome-page";
import SignUp from "./container/signup";
import SignIn from "./container/signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Page>
        {/* <WelcomePage /> */}
        <Routes>
          <Route index Component={WelcomePage} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
