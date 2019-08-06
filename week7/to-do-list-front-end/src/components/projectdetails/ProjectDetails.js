import React, { Component } from 'react';
import axios from 'axios';
import AddTask from '../addtask/AddTask.js';
import EditTask from '../edittask/EditTask.js';


class ProjectDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
        }
        
    }


    resetEdit = () =>{
        this.setState({editing: false})
    }

    edit = (whichNumber) =>{
        this.setState({editing: whichNumber})
    }

    deleteTask = (theID) =>{
        axios.delete('http://localhost:5000/api/tasks/'+theID)
        .then(()=>{
            this.props.getData();
        })
        .catch((err)=>{
            console.log(err)
        })
    }
 


    render(){
        const allTheProjects = this.props.allTheProjects;
        const theID = this.props.match.params.theID;

        const theActualProject = allTheProjects.find((eachP)=>{
            return eachP._id === theID
        })



        const showTasks = () =>{
            return theActualProject.tasks.map((eachTask, index)=>{
                if(this.state.editing !== index)
              return ( <li key={eachTask._id}>
                    <h4>{eachTask.title}</h4>
                    <h6>{eachTask.description}</h6>
                    <button onClick = {()=>{this.edit(index)}}>Edit This Task</button>
                    <button onClick = {()=>{this.deleteTask(eachTask._id)}}>Delete This Task</button>
                </li>
              )
              else
              return(
                <EditTask
                 theTask ={eachTask}
                 getAllTheProjectsInAppJS = {this.props.getData}
                 resetEditingSituation = {this.resetEdit}
                    />
              )
            })  
        }


        if(this.props.ready)
        return(
            <div style={{paddingTop: '100px'}}>

                <div style={{float: 'left'}}>

                    <h2>
                        {theActualProject.title}
                    </h2>            

                    <h3>
                        {theActualProject.description}
                    </h3>


                    <img style={{width: '400px'}} src={theActualProject.image} />

                        {theActualProject.tasks.length > 0 && 
                            <ul>
                                <h3>Tasks For This Project</h3>
                                <hr />
                                {showTasks()}
                            </ul>
                        }
            </div>

            <div className="right-side-column" style={{float: 'right'}}>

                <AddTask 
                theProjectToAddTasksTo = {theActualProject._id} 
                getData = {this.props.getData}
                
                />

            </div>


            </div>
        )
        else
        return(<h3>Loading...</h3>)
    }








}

export default ProjectDetails;