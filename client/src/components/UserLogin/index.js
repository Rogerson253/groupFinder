import React, { Fragment } from 'react'
import { Component } from 'react';
//import { Link } from 'react-router-dom';
// import API from '../../routes/API';


class Login extends Component{
    constructor(props){
        super(props); 
        this.state = {}
    }

updateInputField = (element) =>{
    const name = element.target.name;
    const value = element.target.value;
    
    this.setState({[name]: value})

}    
submit = () =>{
    const userName = this.state.userId;
    const password = this.state.passId;
    //API.createNewUser 
   console.log(userName, password)

}





    render(){
        return(
            <Fragment>
                  <div className="col">
        <form className="login">
            <h1>Log In Page</h1>
            <p>Username:</p>
            <input name= "userId" type="username" onChange= {this.updateInputField} id="username-input" placeholder="Username"/>
            <p>Password:</p>
            <input name = "passId" type="password" onChange= {this.updateInputField} id="password-input" placeholder="Password"/>
            <br/>
            <button type="submit"  onClick= {()=> this.submit()}>Submit</button>
            
            <p>No Account? <a href="/signup.html">Sign Up</a></p>
        </form>
                </div>

            </Fragment>
        )
    }

}

export default Login