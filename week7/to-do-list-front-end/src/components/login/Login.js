import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { usernameInput: '', passwordInput: '' };
    this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToLogin = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;
    
      this.service.login(uName, pWord)
      .then(()=>{
          this.props.toggleForm('login');
          this.props.getUser();
      })

  }

  

  render(){
    return(
      <form onSubmit = {this.tryToLogin}>

          <h3>Login</h3>

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

export default Login;