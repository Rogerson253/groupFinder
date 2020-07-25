import React from "react";
import Login from "./components/UserLogin";
import Quiz from "./components/Questions";
import SignUp from "./components/UserSignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/questions" component={Quiz} />
          <Route exact path="/UserSignUp" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
