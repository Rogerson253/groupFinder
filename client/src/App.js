import React from "react";
import Jumbotron from "./components/Jumbotron";
import Button from "react-bootstrap/Button";
import axios from "axios";

function App() {
  function test() {
    axios
      .get("/api/test")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Jumbotron />
      <Button oncClick={test()} variant="outline-primary">
        Primary
      </Button>{" "}
    </div>
  );
}

export default App;
