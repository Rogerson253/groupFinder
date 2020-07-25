import React, { Fragment } from "react";
import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://api.disneyapi.dev/characters")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
      <Fragment>
        <ul>
          {items.map(data => (
            <li key={data.name}>
              {data.name} 
            </li>
          ))}
        </ul>
        <h1>Questionnaire</h1>
        <h3 className="display-4">
          Answer the questions using a scale of 1 (strongly disagree) to 5
          (strongly agree)
        </h3>
        <h2>Tell Us About You!</h2>

        <h4>
          #1. There was definitely enough room on that floating door for
          Leonardo DiCaprio.
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={""}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            5
          </ListGroup.Item>
        </ListGroup>

        <h4>
          #2. The Krusty Krab pizza is, in fact, the pizza for you and me.
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={""}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            5
          </ListGroup.Item>
        </ListGroup>

        <h4>
          #3. Book Ginny is light years better than movie Ginny.
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={""}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            5
          </ListGroup.Item>
        </ListGroup>

        <h4>
          #4. Someday we will be able to hear the words "what is love" without them immediately being followed in our minds by the words "baby don't hurt me."
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={""}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            5
          </ListGroup.Item>
        </ListGroup>

        <h4>
          #5. White Claws are pretty good, ok?
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={""}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            5
          </ListGroup.Item>
        </ListGroup>

        <h4>
          #6. 2014 Forest Hills Drive was ok.
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={""}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            5
          </ListGroup.Item>
        </ListGroup>

        <h4>
          #7. Britney Spears' 2007 meltdown was a leap in cultural evolution.
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={""}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            5
          </ListGroup.Item>
        </ListGroup>

        <h4>
          #8. To date, there has been no conclusive evidence gathered proving in any way that the bird is the word.
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={""}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            5
          </ListGroup.Item>
        </ListGroup>

        <h4>
          #9. #PlutoIsAPlanet.
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={""}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={""}>
            5
          </ListGroup.Item>
        </ListGroup>

        <h4>
          #10. We should grant French fries citizenship.
        </h4>

        <ListGroup horizontal>
          <ListGroup.Item action onClick={this.componentDidMount}>
            1
          </ListGroup.Item>
          <ListGroup.Item action onClick={this.componentDidMount}>
            2
          </ListGroup.Item>
          <ListGroup.Item action onClick={this.componentDidMount}>
            3
          </ListGroup.Item>
          <ListGroup.Item action onClick={this.componentDidMount}>
            4
          </ListGroup.Item>
          <ListGroup.Item action onClick={this.componentDidMount}>
            5
          </ListGroup.Item>
        </ListGroup>

        
        
      </Fragment>
    );
  }
}
}

export default Quiz;
