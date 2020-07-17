import React, { Fragment } from 'react'
import { Component } from 'react';



class Quiz extends Component{
    constructor(props){
        super(props); 
        this.state = {}
    }


    render(){
        return(
            <Fragment>
<h1>Questionnaire</h1>
            <h3 class="display-4">Answer the questions using a scale of 1 (strongly disagree) to 5 (strongly agree)</h3>
            <h2>Tell Us About You!</h2>

            <h4>#1. There was definitely enough room on that floating door for Leonardo DiCaprio.</h4>

            <ListGroup horizontal>
            <ListGroup.Item action onClick={alertClicked}>1</ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>2</ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>3</ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>4</ListGroup.Item>
            </ListGroup>
            </Fragment>
        )

}}