// components/Calculator.js
import '../../App.css';

import React, { Component } from 'react';


function Calculator(props) {
 

  const handleChange = (e) => {
    props.sendTempToParent(e.target.value, props.units)
  }


    const boilingPoint = Number(props.boilingPoint);
    const temperature = props.theTemperature;

    return(
        <div className="calc">
      <legend>Please Enter temperature in {props.units}:</legend>
      <input
        value = {temperature}
        onChange={e => handleChange(e)}
    
       />
        <p>
        {temperature >= boilingPoint ? 'Yes this temperature would boil water' : 'No this is not hot enough to boil water'}
        </p>
        </div>
        )
  }


export default Calculator;