import React, { Component } from 'react';
import axios from 'axios';


class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { newTitle: "", newDescription: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/projects", {
       theTitle: this.state.newTitle,
        theDescription: this.state.newDescription
      })
    .then( () => {
        this.props.getData();
        // this function updates the list in ProjectIndex.js
        this.setState({newTitle: "", newDescription: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="add-project">
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="newTitle" value={this.state.newTitle} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="newDescription" value={this.state.newDescription} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject;