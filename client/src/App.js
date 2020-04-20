import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/layouts/Navigation";
import { GlobalStyle } from "./index.style";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ContactState from "./context/contact/ContactState";
import Home from "./components/pages/Home";
import Alerts from "./components/layouts/Alerts";
import SetAuthToken from "./components/utils/SetAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <GlobalStyle />
          <Router>
            <Navigation />
            <Alerts />
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
