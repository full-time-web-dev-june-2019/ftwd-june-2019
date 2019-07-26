import React, { Component } from 'react';
import './App.css';

import allTheCountries from './countries.json';

import {NavLink, Route} from 'react-router-dom';
import CountryDetails from './components/countrydetails/CountryDetails.js';


class App extends Component {

  constructor(props){
    super(props)

    this.state={
      allTheCountries:[],
    }




  } 

    componentDidMount(){
      this.setState({allTheCountries: allTheCountries})
    }


  renderListOfCountries = () =>{
    return this.state.allTheCountries.map((eachC, i)=>{

      return(

      <div key={i}>
        <NavLink activeClassName="active" exact to = {'/countryDetails/'+eachC.cca3}> {eachC.flag} {eachC.name.official}  </NavLink>
      </div>
        )
      

    })
  }





  render() {
    console.log(this.state.allTheCountries)
    return (
      <div className="full-page">

        <div>
          {this.renderListOfCountries()}
        </div>

        <div className="right-column">



        <Route exact path='/countryDetails/:code' render={(props)=> <CountryDetails {...props} allCountries = {this.state.allTheCountries} /> }/>


        </div>



 
     

      </div>
    );
  }
}

export default App;
