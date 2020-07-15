import React from "react";
import Jumbotron from "./components/Jumbotron";
import Button from "react-bootstrap/Button";
import API from "./components/utils/API";

function App() {
  const handleTest = () => {
    API.getTest()
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Jumbotron />
      <Button oncClick={handleTest} variant="outline-primary">
        Primary
      </Button>{" "}
    </div>
  );
}

export default App;
