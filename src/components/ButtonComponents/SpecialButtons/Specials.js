import React from "react";
import useState from 'react';

//import any components needed
import {SpecialButton} from '../SpecialButtons/SpecialButton.js';
//Import your array data to from the provided data file
import {specials} from '../../../data.js';
const Specials = (props) => {
  // STEP 2 - add the imported data to state
const [specialState, setSpecialState] = useState(specials)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       specialState.map((arr, index) => { 
         return <SpecialButton key = {index}
         text={arr}
          />
       })}
    </div>
  );
};

export default Specials;
