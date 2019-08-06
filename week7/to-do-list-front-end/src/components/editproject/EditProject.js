import React, { Component } from 'react';
import axios from 'axios';

class EditProject extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theProject.title, 
        description: this.props.theProject.description,
        image: null,
    }
  }

  updateFileInState = (e) =>{
    this.setState({image: e.target.files[0]})
  }

    
  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;

    let theRequest = new FormData();
    theRequest.append('theTitle', title)
    theRequest.append('theDescription', description)
    theRequest.append('theImageParameter', this.state.image)

    event.preventDefault();

    axios.post(`http://localhost:5000/api/projects/update/${this.props.theProject._id}`,
     theRequest)
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
    console.log('=====', this.state)
    return (
      <div>
    
    
        <form onSubmit={this.handleFormSubmit}>

        <div>

          <input style={{padding: '5px', fontSize: '20px', margin: '5px'}} type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        
         
         
          <input name="description" value={this.state.description} onChange={this.handleChange} />
          


          <input type="file" onChange={this.updateFileInState} />


          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditProject;