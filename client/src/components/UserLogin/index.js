import React, { Fragment } from 'react'
import { Component } from 'react';
// import API from '../../routes/API';


class Login extends Component{
    state = {
        username: "",
        password: "",   
    };
    // constructor(props){
    //     super(props); 
    //     this.state = {}
    

updateInputField = (element) =>{
    const name = element.target.name;
    const value = element.target.value;
    
    this.setState({[name]: value})
};

loginSubmit = () =>{
    const userName = this.state.userId;
    const password = this.state.passId;
//    API.createNewUser 
   console.log(userName, password)



this.setState({
    username: "",
    password: "",
});
}

render() {
    return (
        <div>
            <span> {this.state.userId}</span>
        </div>
    )};






    render(){
        return(
            <Fragment>
                <h1>Log In Page</h1>
            <p>Hello {this.state.userId} 
            </p>
                  <div className="col">
        <form className="login">

            <input 
            name= "userId" 
            type="username"
            onChange= {this.updateInputField} id="username-input" placeholder="Username"/>
            
            <p>Password:</p>
            <input 
            name = "passId" 
            type="password" 
            onChange= {this.updateInputField} id="password-input" placeholder="Password"/>
            <br/>
            <button type="submit" onClick= {()=> this.loginSubmit()}>Submit</button>
            <p>No Account? <a href="/signup.html">Sign Up</a></p>
        </form>
                </div>

            </Fragment>
        )};

}



export default Login

