import React, { Fragment } from "react";
import { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
    };
  }

  //   updateInputField = (element) => {
  //     const name = element.target.name;
  //     const value = element.target.value;

  //     this.setState({ [name]: value });
  //   };

  getUserData = () => {
    API.getUser()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getCharacterData = () => {
    API.getCharacters()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, userName, password } = this.state;
    API.saveUser({
      firstName,
      lastName,
      userName,
      password,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { firstName, lastName, username, password } = this.state;
    return (
      <Fragment>
        <h1>Log In Page</h1>
        {/* <p>Hello {this.state.username}</p> */}
        <div className="col">
          <form className="login" onSubmit={this.handleSubmit}>
          <p>FirstName</p>
          <input
              name="firstName"
              type="text"
              value={firstName}
              onChange={this.handleChange}
              id="firstName-input"
              placeholder="Firstname"
            />
            <p>LastName</p>
            <input
              name="lastName"
              type="text"
              value={lastName}
              onChange={this.handleChange}
              id="lastName-input"
              placeholder="Lastname"
            />
            <p>UserName</p>
            <input
              name="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              id="username-input"
              placeholder="Username"
            />
            <p>Password:</p>
            <input
              name="password"
              type="text"
              value={password}
              onChange={this.handleChange}
              id="password-input"
              placeholder="Password"
            />
            <br />
            <Link to="/questions">
            <button onClick={this.getUserData} type="submit">
              Submit
            </button>
            </Link>
            <p>
              No Account? <Link to = "/UserSignUp"> <button type="submit">Sign Up</button></Link>
            </p>
          </form>
          <button onClick={this.getCharacterData} type="submit">
            Disney
          </button>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;



















// import React, { Component } from "react";
// import {BrowserRouter as Router, Route }from "react-router-dom";


// class SignUp extends Component {


// render(){

//     return(
// <Route>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Username</Form.Label>
//     <Form.Control type="username" placeholder="Enter Username" />
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Route>




//     )
// }







// }

// export default SignUp;
