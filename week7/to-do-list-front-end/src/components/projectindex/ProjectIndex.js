import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import AddProject from '../addproject/AddProject.js';
import EditProject from '../editproject/EditProject.js';



class ProjectIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            bufferFinished: false,
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({bufferFinished: true})
        }, 1000)
    }



    changeEditing = (whichNumber) => {
        this.setState({editing: whichNumber})
    } 

    resetEdit = () =>{
        this.setState({editing: false})
    }


    deleteProject = (idOfProject) =>{

        axios.delete(`http://localhost:5000/api/projects/${idOfProject}`)
        .then(()=>{
            this.props.getData();
        })
        .catch((err)=>{
            console.log(err)
        })



    }


  showProjects = () =>{
    
    const myProjects = this.props.allTheProjects.filter((eachP)=>{
        return eachP.owner === this.props.theUser._id;
    })

    return myProjects.map((project, index) => {
        if(this.state.editing !== index){

            return (
                <div key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
            <p style={{maxWidth: '400px'}} >{project.description} </p>

            <button onClick={()=>{this.changeEditing(index)}} >Edit This Project</button>
            <button onClick = {()=>{this.deleteProject(project._id)}} >Delete This Project</button>
          </div>
         
         
         )
        } else{
            return(
                <EditProject 
                resetEditingSituation = {this.resetEdit} 
                theProject = {project}
                getAllTheProjectsInAppJS = {this.props.getData}
                 />
            )
        }


        })
      
  }





  render(){
      if(this.props.theUser && this.props.allTheProjects){
          return(
              <div>
        <div style={{width: '60%', float:"left"}}>
         {this.showProjects()}
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddProject getData={this.props.getData}/>
        </div>
      </div>
    )
}
    else if(this.state.bufferFinished){
        return(<Redirect to="/" />)
    } else{
        return(<h2>loading...</h2>)
    }
    
  }
}

export default ProjectIndex;