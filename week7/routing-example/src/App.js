import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Navbar from './components/navbar/Navbar.js';
import Pokemon from './components/pokemon/Pokemon.js';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      theNumber : 0,
    }
  }

   doTheSearch = (e) => {
    e.preventDefault();
    this.props.history.push('/pokemon/'+this.state.theNumber);
  }

  updatePokeNumber = (e) =>{
    this.setState({theNumber: e.target.value});
  }

  render(){
    return (
      <div>

        <form onSubmit = {this.doTheSearch}>
          <legend>Search Pokemon DB</legend>
          <input onChange = {this.updatePokeNumber} type="number" value={this.state.theNumber} />
          <button>Search</button>
        </form>

        <Navbar />

        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/pokemon/:numToSearch' component={Pokemon}/>
        </Switch>
      </div>
    );
  }
}

export default App;
