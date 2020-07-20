import React from "react";
import Login from "./components/UserLogin";
// import Quiz from "./components/Questions";

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/questions" component={Quiz} />
      {/* <Quiz /> */}
    </div>
    </Router>
  );
}

export default App;
