import React from "react";

import Page from "./component/page";
import WelcomePage from "./container/welcome-page";
import SignUp from "./container/signup copy";
import SignIn from "./container/signin";
import SignUpConfirm from "./container/signup-confirm";
import Recovery from "./container/recovery";
import RecoveryConfirm from "./container/recovery-confirm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/signup-confirm" Component={SignUpConfirm} />
          <Route path="/recovery" Component={Recovery} />
          <Route path="/recovery-confirm" Component={RecoveryConfirm} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
