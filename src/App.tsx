import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import GlobalStyle from "./pages/global/GlobalStyles";
import landing from "./pages/purple-shoes/landing";

function App() {
  return (
    // TODO:
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/landing" exact component={landing} />
        <Redirect path="/" to="/landing" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
