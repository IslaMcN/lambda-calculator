import React from "react";

export const OperatorButton = (props) => {
  
  return (
    <button onClick={() => props.addOperator
    
    (props.addOperator.value)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    {props.addOperator.char}
    </button>
  );
};
export default OperatorButton;