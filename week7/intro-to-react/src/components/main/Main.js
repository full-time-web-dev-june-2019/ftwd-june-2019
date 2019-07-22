import React, { Component } from 'react';
import '../../App.css';
import User from '../user-component/User';

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

       {/* <User theUser = 'blah' wow="hello" /> */}
       {/* you can pass in random arbitrary props as well as the ones youre actually using */}

        {this.props.firstUser &&  <User theUser = {this.props.firstUser} />}

      
        {this.props.secondUser &&  <User theUser = {this.props.secondUser} />}
        {/* this is the same as saying IF this.props.secondUser exists, show all the stuff on the right side of the && */}
      


    </div>
  );
  }
}

export default Main;
