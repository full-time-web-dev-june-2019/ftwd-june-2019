import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import AddNew from './components/AddNew';
import BeerDetails from './components/BeerDetails';

import {Route, Switch} from 'react-router-dom'

import axios from 'axios';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allTheBeers: [],
      visibleBeers: [],
      ready: false,
      searchTerm: '',
    }
  }




  fetchBeers = () =>{
    axios.get('https://sample-api-ih.herokuapp.com')
    .then((response)=>{
      this.setState({allTheBeers: response.data.reverse(), visibleBeers: response.data.reverse(),  ready: true})
      return response.data.reverse()[0]._id;
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  componentDidMount(){
    this.fetchBeers()
  }

  search = (e) =>{

    let theSearchTerm = e.target.value;

    let results = this.state.allTheBeers.filter((eachBeer)=>{
      return eachBeer.name.toUpperCase().includes(theSearchTerm.toUpperCase())
    })

    this.setState({visibleBeers: results, searchTerm: theSearchTerm})
  


  }






  render(){
    console.log(this.state)
    return (
      <div>

        <legen>Search</legen>
        <input onChange = {this.search}  />

        <Navbar />

        <Switch>
        <Route exact path ="/all" render = {props => <AllBeers       {...props} listOBeers = {this.state.visibleBeers} ready={this.state.ready}  />    } />
        <Route  exact path ="/rando" render = {(props)=> <RandomBeer {...props} listOBeers = {this.state.visibleBeers} ready={this.state.ready}   />    } />
        <Route  exact path ="/add-new" render = {(props) => <AddNew  {...props} getData = {this.fetchBeers}  />    } />
        <Route  exact path ="/details/:id" render = {(props) => <BeerDetails  {...props} listOBeers = {this.state.visibleBeers} ready={this.state.ready}   />    } />
        </Switch>
      
    
      </div>
    );
  }
}

export default App;
