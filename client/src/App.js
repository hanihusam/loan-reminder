import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/layouts/Navigation";
import { GlobalStyle } from "./index.style";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Switch></Switch>
      </Router>
    </Fragment>
  );
}

export default App;
