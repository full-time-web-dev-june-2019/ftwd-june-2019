import React from 'react';

import axios from 'axios'
import { thisExpression } from '@babel/types';


class AddNew extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            tagline: '',
            description: '',
            firstBrewed: '',
            brewerTips: '',
            attenLevel: '',
            yourName: ''
        }
    }

    updateInput = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }


    addNewBeer = (e) =>{
        e.preventDefault();
        axios.post('https://sample-api-ih.herokuapp.com/new', {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.firstBrewed,
            brewers_tips: this.state.brewerTips,
            attenuation_level: this.state.attenLevel,
            contributed_by: this.state.yourName,
        })
        .then((res)=>{
            this.setState({name: '',
            tagline: '',
            description: '',
            firstBrewed: '',
            brewerTips: '',
            attenLevel: '',
            yourName: ''})

          let theID = this.props.getData()
          


        this.props.history.push('/all')
       





        })
        .catch((err)=>{
            console.log(err)
        })

    }

    render(){
        console.log(this.state)
        return(
            <div>
                <form onSubmit = {this.addNewBeer}>

                    <legend>Name</legend>
                    <input 
                    value={this.state.name}
                    name ="name"
                    onChange = {this.updateInput}
                     />

                    <legend>Tagline</legend>
                    <input
                    value={this.state.tagline}
                    name="tagline"
                    onChange = {this.updateInput}
                     />

                    <legend>Description</legend>
                    <input
                    value={this.state.description}
                    name="description"
                    onChange = {this.updateInput}
                    />

                    <legend>First Brewed</legend>
                    <input
                    value={this.state.firstBrewed}
                    name="firstBrewed" 
                    onChange = {this.updateInput}
                    />

                    <legend>Brewer Tips</legend>
                    <input
                    value={this.state.brewerTips}
                    name="brewerTips"
                    onChange = {this.updateInput}
                    />

                    <legend>Attenuation Level</legend>
                    <input 
                    type ="number"
                    value={this.state.attenLevel}
                    name="attenLevel"
                    onChange = {this.updateInput}
                    />

                    <legend>Your Name</legend>
                    <input
                    value={this.state.yourName}
                    name="yourName" 
                    onChange = {this.updateInput}
                    />

                    <button>Save</button>



           



                </form>
            </div>
        )
    }





}

export default AddNew;