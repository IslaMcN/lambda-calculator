import React from "react";
 
export const SpecialButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.text.char}
    </button>
  );
};

export default SpecialButton;