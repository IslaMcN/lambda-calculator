import React from "react";

export const NumberButton = (props) => {
  return (
    <button className="number-button" onClick={() => props.addNumber(props.text)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.text}
    </button>
  );
};
