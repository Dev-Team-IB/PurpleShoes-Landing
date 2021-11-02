import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import GlobalStyle from "./pages/global/GlobalStyles";
import landing from "./pages/purple-shoes/landing";
import BrandStory from "./pages/purple-shoes/landing/BrandStory";
import UserService from "./pages/purple-shoes/landing/UserService";
import ManagerService from "./pages/purple-shoes/landing/ManagerService";

function App() {
  return (
    // TODO:
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/brandstory" exact component={BrandStory} />
        <Route path="/landinguser" exact component={UserService} />
        <Route path="/landingmanager" exact component={ManagerService} />
        <Route path="/landing" exact component={landing} />
        <Redirect path="/" to="/landing" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
