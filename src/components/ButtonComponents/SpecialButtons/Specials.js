import React from "react";
import {useState} from "react";

//import any components needed
import {SpecialButton} from './SpecialButton.js';
//Import your array data to from the provided data file
import {specials} from '../../data.js';
const Specials = (props) => {
  // STEP 2 - add the imported data to state
const [specialsState, setSpecialsState] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       specials.map((arr) => {
         return <SpecialButton key = {arr}
         text={arr}
         addSpecial={props.addSpecial} />
       })}
    </div>
  );
};



 // let newComponents = data.map( (arrayItem) => {
    //     let newButton = buttonCreator(arrayItem);
        
    //     // Remember, we always need to return something when we use .map
    //     return newButton;
    // }}
    // data.map(data => {
    //     article.appendChild(createComponent(data))
    //   })