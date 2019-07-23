import React, {Component} from 'react';
import '../../App.css';



class AddMovie extends Component{

    constructor(props){
        super(props)
        this.state = {
            newTitle: '',
            newDirector: '',
            newImage: '',
            newOscar: false
        }
    }



  updateInput = (e) => {
    console.log('--------')
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value})
  }

  updateCheckBox = () =>{
    this.setState({newOscar: !this.state.newOscar},()=>{
      console.log(this.state)
    })
  }

  addMovieMiddleWare = (e)=>{
      e.preventDefault();
      this.props.addTheMovie(e,
         this.state.newOscar,
          this.state.newTitle,
           this.state.newDirector,
            this.state.newImage)

        this.setState({
            newTitle: '',
        newDirector: '',
        newImage: '',
        newOscar: false})
      
  }

    render(){
        return(
            <form className="add-form"
             onSubmit={this.addMovieMiddleWare}>
            <div>
              <label>Title</label>
              <input 
              value={this.state.newTitle}
              onChange = {this.updateInput}
              name = "newTitle"
               type="text" />
            </div>
            <div>
              <label>Director</label>
              <input
              value={this.state.newDirector}
              onChange = {this.updateInput}
              name = "newDirector"
               type="text" />
            </div>
            <div>
              <label>Image Url</label>
              <input 
              value={this.state.newImage}
              onChange = {this.updateInput}
              name = "newImage"
              type="text" />
            </div>
            <div>
              <label>Did It Get An Oscar?</label>

             {!this.state.newOscar && <input
              onChange = {this.updateCheckBox}
              name = "newOscar"
                type="checkbox"
                />}

              {this.state.newOscar && <input
              onChange = {this.updateCheckBox}
              name = "newOscar"
                type="checkbox"
                checked
                />}
            </div>

            <button>Add Movie </button>
          </form>
        )
    }





}

export default AddMovie;


