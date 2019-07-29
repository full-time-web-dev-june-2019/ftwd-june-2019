import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { usernameInput: '', passwordInput: '' };
    this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToSignUp = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;
    
    this.service.signup(uName, pWord)
    .then(()=>{
        this.props.toggleForm('signup');
        this.props.getUser();
    })

  }

  

  render(){
    return(
      <form onSubmit = {this.tryToSignUp}>

          <h3>Signup For An Account</h3>

          <legend>Username</legend>
          <input value={this.state.usernameInput}
            name="usernameInput"
            onChange={this.handleChange}
          />

          <legend>Password</legend>
          <input value={this.state.passwordInput} 
            name="passwordInput"
            onChange={this.handleChange}
          />



        <button>Submit</button>

      </form>
    )
  }
}

export default Signup;