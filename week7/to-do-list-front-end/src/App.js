import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import ProjectIndex from './components/projectindex/ProjectIndex.js'
import ProjectDetails from './components/projectdetails/ProjectDetails';

import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { listOfProjects: [] };
  
  
  }

  getAllProjects = () => {
    axios.get(`http://localhost:5000/api/projects`)
    .then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllProjects();
  }


render(){


    return (
      <div>
        <li><Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link></li>


        <Switch>
          <Route exact path="/projects" render ={(props)=> <ProjectIndex
           {...props} 
           allTheProjects ={this.state.listOfProjects}
           getData = {this.getAllProjects}
           />} />

          <Route exact path="/projects/:theID" render ={(props)=> <ProjectDetails
           {...props} 
           allTheProjects ={this.state.listOfProjects}
           />} />



        </Switch>


      
    
      </div>
    );
  }
}

export default App;
