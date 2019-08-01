import React, { Component } from 'react';
import axios from 'axios';

class EditTask extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theTask.title, 
        description: this.props.theTask.description
     
    }
  }

    
  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    event.preventDefault();

    axios.post(`http://localhost:5000/api/tasks/update/${this.props.theTask._id}`,
     { theTitle: title,
         theDescription: description,
         })
    .then( () => {
        this.props.getAllTheProjectsInAppJS();
        this.props.resetEditingSituation();
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    this.setState({
      [event.target.name]:event.target.value
    })
  }

 

  render(){
    return (
      <div>
    
    
        <form onSubmit={this.handleFormSubmit}>

        <div>

          <input style={{padding: '5px', fontSize: '20px', margin: '5px'}} type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        
         
         
          <input name="description" value={this.state.description} onChange={this.handleChange} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditTask;