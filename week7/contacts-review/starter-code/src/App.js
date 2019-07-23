import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import allTheContacts from './contacts.json';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      visibleContacts: allTheContacts.slice(0,5),
      invisibleContacts: allTheContacts.slice(5),
      ascName: true,
      ascPop: true
    }
  }

  showContacts = ()=>{
    return this.state.visibleContacts.map((eachContact,i)=>{
        return(
          <div key={i} className="contact-card">
            <img src={eachContact.pictureUrl} />
            <span>{eachContact.name}</span>
            <span>{eachContact.popularity}</span>
            <button onClick = {()=>{this.deleteContact(i)}}>Delete</button>
          </div>
        )

    })
  }


  deleteContact = (theIndex) =>{
    let visibleClone = [...this.state.visibleContacts];
    let invisibleClone = [...this.state.invisibleContacts]

    invisibleClone.unshift(...visibleClone.splice(theIndex, 1))
  

    this.setState({visibleContacts: visibleClone, invisibleContacts: invisibleClone})
  }

  addRandom = () =>{
    
    let randomNumber = Math.floor(Math.random()*this.state.invisibleContacts.length);
    let visibleClone = [...this.state.visibleContacts];
    let invisibleClone = [...this.state.invisibleContacts];

    visibleClone.unshift(...invisibleClone.splice(randomNumber, 1))
    // this is the same as 
    // visibleClone.unshift(invisibleClone[randomNumber])
    // invisibleClone.splice(randomNumber, 1)
    // it just does them all at once because the splice method returns an array of the stuff that just got deleted

    this.setState({visibleContacts: visibleClone, invisibleContacts: invisibleClone})


  }

  sortBy = (what) =>{
    let clone = [...this.state.visibleContacts];

    let ascending = what === 'name'? this.state.ascName : this.state.ascPop


    clone.sort((a,b)=>{
      if(a[what] < b[what]){
        return ascending? -1 : 1
        // if(ascending){
        //   return -1
        // } else{
        //   return 1
        // }
      } else if (b[what] < a[what]){
        return ascending? 1 : -1
      } else{
        return 0
      }
    })

    if(what ==='name'){
      this.setState({visibleContacts: clone, ascName: !this.state.ascName})
    }else{
      this.setState({visibleContacts: clone, ascPop: !this.state.ascPop})
    }
  }

  // sortByPopular = () =>{
  //   let clone = [...this.state.visibleContacts];

  //   clone.sort((a,b)=>{
  //     if(a.popularity < b.popularity){
  //       return 1
  //     } else if (b.popularity < a.popularity){
  //       return -1
  //     } else{
  //       return 0
  //     }
  //   })
  //   this.setState({visibleContacts: clone})
  // }


  render() {
    console.log(this.state)
  
    return (
      <div >

        <button className="btn"
        onClick = {this.addRandom}
        >Add Random Contact</button>

        <button className="btn"
        onClick = {()=>{this.sortBy('name')}}
        >Sort By Name</button>
     
        <button className="btn"
        onClick = {()=>{this.sortBy('popularity')}}
        >Sort By Popularity</button> 



        <div className="table-heading">
        <span>Picture</span>
        <span>Name</span>
        <span>Popularity</span>
        </div>

       {this.showContacts()}
      
      </div>
    );
  }
}

export default App;
