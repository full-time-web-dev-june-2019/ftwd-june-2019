import React, { Component } from 'react';
import axios from 'axios';


class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { newTitle: "", newDescription: "", newImage: null };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();


    let blah = new FormData();
    blah.append('theImageParameter', this.state.newImage )
    blah.append('theTitle', this.state.newTitle)
    blah.append('theDescription', this.state.newDescription )


    axios.post("http://localhost:5000/api/projects", blah, { headers: {
      'Content-Type': 'multipart/form-data',
    }, withCredentials: true })
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

  updateFileInState = (e) =>{
    this.setState({newImage: e.target.files[0]})
  }

  render(){
    console.log(this.state)
    return(
      <div className="add-project">
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="newTitle" value={this.state.newTitle} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="newDescription" value={this.state.newDescription} onChange={ e => this.handleChange(e)} />
          <legend style={{marginTop: '100px'}}>Choose a Picture</legend>
          <input type="file" onChange={this.updateFileInState} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject;