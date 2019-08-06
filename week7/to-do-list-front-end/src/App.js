import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import ProjectIndex from './components/projectindex/ProjectIndex.js'
import ProjectDetails from './components/projectdetails/ProjectDetails';
import Signup from './components/signup/Signup.js';
import Login from './components/login/Login.js';

import AuthService from './services/AuthService.js';

import Navbar from './components/navbar/Navbar.js'


import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      listOfProjects: [],
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false,
   };

   this.service = new AuthService();
  
  
  }

  getAllProjects = () => {
    axios.get(`http://localhost:5000/api/projects`, {withCredentials: true})
    .then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data, ready: true
      })
    })
  }


getCurrentlyLoggedInUser = () =>{
  this.service.currentUser()
  .then((theUser)=>{
    this.setState({currentlyLoggedIn: theUser, ready: true})
  })
  .catch(()=>{
    this.setState({currentlyLoggedIn: null})
  })
}


toggleForm = (whichForm) =>{

  let theForm;

  if(whichForm === "signup"){
    theForm = 'signupShowing'
  } else {
    theForm = 'loginShowing'
  }

  this.setState({[theForm]: !this.state[theForm]})

  

}



  componentDidMount() {
      this.getAllProjects();
      this.getCurrentlyLoggedInUser();

  }


render(){

  console.log('=-=-=-=-=-=-=-',this.state);


    return (
      <div>


      <Navbar 
      theUser = {this.state.currentlyLoggedIn} 
      pleaseLogOut = {()=> this.service.logout()}
      toggleForm = {this.toggleForm}
      getUser = {this.getCurrentlyLoggedInUser}
      
      />

      {this.state.signupShowing && 
        <Signup getUser = {this.getCurrentlyLoggedInUser}
        toggleForm = {this.toggleForm}
         />
      }

      {this.state.loginShowing && 
        <Login getUser = {this.getCurrentlyLoggedInUser}
        toggleForm = {this.toggleForm}
        />
      }

        <Switch>

          
       
          <Route exact path="/projects" render ={(props)=>
          <ProjectIndex
            {...props} 
            theUser = {this.state.currentlyLoggedIn} 
            allTheProjects ={this.state.listOfProjects}
            getData = {this.getAllProjects}
            ready = {this.state.ready}
            theUser = {this.state.currentlyLoggedIn}
            />   
          } />
               

          <Route exact path="/projects/:theID" render ={(props)=> {
            if(this.state.currentlyLoggedIn)
            return(
              <ProjectDetails
              {...props} 
              allTheProjects ={this.state.listOfProjects}
              ready = {this.state.ready}
              getData = {this.getAllProjects}
              theUser = {this.state.currentlyLoggedIn}
              />
              )
              else 
              return(
                <Redirect to="/"/>
              )
            }} />



        </Switch>


      
    
      </div>
    );
  }
}

export default App;
