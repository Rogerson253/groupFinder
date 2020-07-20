import React, { Fragment } from "react";
import { Component } from "react";
import API from "../utils/API";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    API.saveUser({
      username,
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
    const { username, password } = this.state;
    return (
      <Fragment>
        <h1>Log In Page</h1>
        {/* <p>Hello {this.state.username}</p> */}
        <div className="col">
          <form className="login" onSubmit={this.handleSubmit}>
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
            <button onClick={this.getUserData} type="submit">
              Submit
            </button>
            <p>
              No Account? <a href="/signup.html">Sign Up</a>
            </p>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Login;
