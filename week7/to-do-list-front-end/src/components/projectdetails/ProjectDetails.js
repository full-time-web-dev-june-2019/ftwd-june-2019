import React, { Component } from 'react';
import axios from 'axios';


class ProjectDetails extends Component{

 


    render(){
        const allTheProjects = this.props.allTheProjects;
        const theID = this.props.match.params.theID;

        const theActualProject = allTheProjects.find((eachP)=>{
            return eachP._id === theID
        })


        const showTasks = () =>{
            return theActualProject.tasks.map((eachTask)=>{
              return ( <li key={eachTask._id}>
                    <h4>{eachTask.title}</h4>
                    <h6>{eachTask.description}</h6>
                </li>
              )
            })  
        }


        return(
            <div style={{paddingTop: '100px'}}>

            <h2>
                {theActualProject.title}
            </h2>            

            <h3>
                {theActualProject.description}
            </h3>

            <ul>
                <h3>Tasks For This Project</h3>
                {showTasks()}
            </ul>
            
            </div>
        )
    }








}

export default ProjectDetails;