import React  from "react";
import {useState} from "react";

//import any components needed
import {OperatorButton} from '../OperatorButtons/OperatorButton.js';
//Import your array data to from the provided data file
import {operators} from '../../../data.js';
const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorsState] = useState(operators);
  console.log(props);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operatorsState.map((a, index) => {
         return <OperatorButton key = {index}
         text = {a}
          />
       })}
    </div>
  );
};
export default Operators;