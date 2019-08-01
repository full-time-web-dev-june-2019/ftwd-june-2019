import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { usernameInput: '', passwordInput: '' };
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToLogin = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;
    
      axios.post('http://localhost:5000/api/auth/login', {
        username: uName,
        password: pWord
      }, {withCredentials: true})
      .then(()=>{
        this.props.getUser()
        this.props.toggleForm('login');
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