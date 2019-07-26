import React, { Component } from 'react';
import axios from 'axios';


class AddTask extends Component {
  constructor(props){
      super(props);
      this.state = { newTitle: "", newDescription: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/tasks", {
       theTitle: this.state.newTitle,
        theDescription: this.state.newDescription,
        theProject: this.props.theProjectToAddTasksTo
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
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="newTitle" value={this.state.newTitle} onChange={this.handleChange}/>
          <label>Description:</label>
          <textarea name="newDescription" value={this.state.newDescription} onChange={this.handleChange} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddTask;