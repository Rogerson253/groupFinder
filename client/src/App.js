import React from "react";
import Login from "./components/UserLogin";
import Quiz from "./components/Questions";

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">

      <Route exact path="/" component={Login} />
      <Route exact path="/questions" component={Quiz} />
     

    </div>
    </Router>
  );
}

export default App;
