import React from "react";
import {useState} from "react";

//import any components needed
import {NumberButton} from './NumberButton.js';
//Import your array data to from the provided data file
import {numbers} from '../../../data.js';
import { className } from "postcss-selector-parser";
const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
       {numbers.map((e) => {
         
         return <NumberButton key={e}
          text={e}
          addNumber={props.addNumber}/>
       })}
    </div>
  );
};
export default Numbers;