import React, { Component } from 'react';
import '../App.css';

class Main extends Component {

    showAnimals = () => {
        let arrayOfAnimals = ['dog', 'cat', 'hippo', 'goose', 'wolf'];

        return (arrayOfAnimals.map((eachAnimal, i)=>{
            if(eachAnimal.length > 4){
                return(
                    <li key={i}>  {eachAnimal} </li>
                    )
                }// end if
                })// end map
                )// end return
    }


  render(){


  return (
    <div>

        <h1> Hello World</h1>

        <h4>First React App</h4>
     
       <ul>
           {this.showAnimals()}
       </ul>
   
    </div>
  );
  }
}

export default Main;
