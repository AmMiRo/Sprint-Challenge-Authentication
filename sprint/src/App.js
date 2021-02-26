import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";

import Login from "../components/Login";
import Registration from "../components/Registration";
import Jokes from "../components/Jokes";

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route
            exact
            path="/"
            path="/login"
            render={props => <Login {...props} />}
          />
          <Route
            path="/registration"
            render={props => <Registration {...props} />}
          />
          <PrivateRoute path="/jokes" component={Jokes} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
