import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator/Calculator.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentF: 32,
      currentC: 0,
    }
  }

  updateCurrentTemp = (newTemp, units) => {
  
    let newC, newF
    if(units ==="Celsius"){
      newC = newTemp;
      newF = ((newC * 9 / 5) + 32)
      
  }else {
    newF = newTemp;
    newC = ((newF - 32) * 5 / 9)
  }
  this.setState({currentF: newF, currentC: newC})
}


  render(){

      
      return (
        <div>

          <Calculator sendTempToParent = {this.updateCurrentTemp}
           units = "Celsius"
            boilingPoint = "100"
            theTemperature = {this.state.currentC}
            />

          <Calculator sendTempToParent = {this.updateCurrentTemp}
           units = "Fahrenheit" 
           boilingPoint = "212"
           theTemperature = {this.state.currentF}
           />

      
        </div>
  );
  }
}

export default App;
