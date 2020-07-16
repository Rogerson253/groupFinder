const { createContext } = require("react");
import React from 'react';
import { Button } from 'react-bootstrap';

function WrapperButton(props) {
  const { quiz } = props;

  return <Button {...props}>{quiz}</Button>;
}





function quiz() {
    return (
        <div>
            
        </div>
    )
}

export default quiz;
