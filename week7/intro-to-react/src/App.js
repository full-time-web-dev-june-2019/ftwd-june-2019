import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main  from './components/main/Main';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
   
      user1Username: '',
      user2Username: ''

    }
  }

  updateUser1Input = (e) => {
    this.setState({user1Username: e.target.value}, ()=>{
      // console.log(this.state.user1Username)
    })
  }

  updateUser2Input = (e) => {
    this.setState({user2Username: e.target.value})
  }


  updateFirstUser = (e) =>{
    e.preventDefault();

    this.setState({
      user1: {
        username: this.state.user1Username,
      }, 
      user1Username: ''
    })

    // this.state.user1 = userToLogin
    // we dont do it this way however, because React lifecycle methods
    // depend on using setState to change the state
  }

  updateSecondUser = (e) =>{
    e.preventDefault();

    this.setState({
      user2:{
        username: this.state.user2Username,
      }, 
      user2Username: ''
    })
  }

  render(){
    console.log('ahhhhh')
  return (
    <div className="blah">

      <div className="top-section">


      <form onSubmit={this.updateFirstUser}>
        <p>First User Login</p>
        <input type="text" onChange = {this.updateUser1Input} value={this.state.user1Username}/>
        <p>Password</p>
        <input type='password'  />
        <button>Submit</button>
      </form>

      <form onSubmit={this.updateSecondUser}>
        <p>Second User Login</p>
        <input type="text" onChange = {this.updateUser2Input} value={this.state.user2Username}/>
        <p>Password</p>
        <input type='password' />
        <button>Submit</button>
      </form>

      </div>

      <h6>This is part of app component</h6>

      <Main firstUser = {this.state.user1}
       secondUser = {this.state.user2} />
     

   
    </div>
  );
  }
}

export default App;
