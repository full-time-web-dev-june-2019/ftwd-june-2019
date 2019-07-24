import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/foodbox/FoodBox.js';

import allTheFoods from './foods.json'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allTheFoods: allTheFoods,
      visibleFoods: allTheFoods,
      formShowing: false,
      newFoodName: '',
      newFoodCalories: '',
      newFoodImage: '',
      searchTerm: '',
      groceryList: [],
    }
  }


  showAllTheFoods = () => {
    return this.state.visibleFoods.map((eachFood, i)=>{
      return <FoodBox key={i}
       nameOfFood = {eachFood.name}
        calories = {eachFood.calories}
         image = {eachFood.image}
         addToTheList = {this.addToGroceryList}/>
    })
  }

  toggleForm = () =>{
    this.setState({formShowing: !this.state.formShowing})
  }


  updateInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addNewFood = (e) => {
    e.preventDefault();
    let clone = [...this.state.allTheFoods];
    let newFood = {
      name: this.state.newFoodName,
      calories: this.state.newFoodCalories,
      image: this.state.newFoodImage || "https://d1yn1kh78jj1rr.cloudfront.net/image/preview/rnp9KOKvfjdviiioz/storyblocks-shop-navigation-foods-icons-set-isometric-illustration-of-16-shop-navigation-foods-vector-icons-for-web_S8fMe8TjW7_SB_PM.jpg"
    }
    clone.unshift(newFood);

    this.setState({
      allTheFoods: clone,
      visibleFoods: clone,
       formShowing: !this.state.formShowing,
       newFoodName: '',
       newFoodCalories: '',
       newFoodImage: '',
       searchTerm: '',
       groceryList: [],
      })
  }

  search = (e) => {
    let clone = [...this.state.allTheFoods]
    let searchTerm = e.target.value;

    let filteredList = clone.filter((eachFood)=>{
      return eachFood.name.toUpperCase().includes(searchTerm.toUpperCase())
    })


    this.setState({visibleFoods: filteredList, searchTerm: e.target.value})
  

  }

  displayGroceryList = () => {
    if(this.state.groceryList){

      return this.state.groceryList.map((eachFood, i)=>{
        return(
          <li key={i}>
          {eachFood.quantity} {eachFood.name} = {eachFood.calories}
        </li>
      )
    })
    
  }
  }

  addToGroceryList = (theName, theCalories, theQty) => {
    let newGroceryItem = {name: theName, calories: theCalories, quantity: theQty}

    let groceryClone = this.state.groceryList? [...this.state.groceryList] : []

    let found = false;
    groceryClone.forEach((eachItem)=>{
      if(eachItem.name === theName){
        let caloriesPerUnit = Number(eachItem.calories)/Number(eachItem.quantity);
        eachItem.quantity = Number(eachItem.quantity) + Number(theQty);
        eachItem.calories = Number(eachItem.quantity) * Number(caloriesPerUnit)
        found = true;
      }
    })

      if(!found){
      newGroceryItem.calories = Number(theCalories) * Number(theQty)
      groceryClone.unshift(newGroceryItem);
    }

    this.setState({groceryList: groceryClone})
  }



  render() {
    console.log(allTheFoods)
    return (

      
      <div className="container whole-page">
        <div className="left-side">



        <input className="input search" placeholder="Enter a Search Term" onChange={this.search} value={this.state.searchTerm} />


        <button className={`button btn ${this.state.formShowing? 'is-danger':'is-success'}`}
        onClick = {this.toggleForm}>
          {!this.state.formShowing && 'Add New Food'}
          {this.state.formShowing && 'Hide Form'}
        </button>

       {this.state.formShowing &&
         <form className ="add-new-food-form" onSubmit = {this.addNewFood}>

          <legend>Name</legend>
          <input type="text" value={this.state.newFoodName}
          name="newFoodName" onChange={this.updateInput} />

          <legend>Calories</legend>
          <input type="text" value={this.state.newFoodCalories}
          name="newFoodCalories" onChange={this.updateInput} />

          <legend>Image Url</legend>
          <input type="text" value={this.state.newFoodImage}
          name="newFoodImage" onChange={this.updateInput}/>

          <button className="button is-small is-success btn-inline">Submit</button>

        </form> }

        
      
      {this.showAllTheFoods()}

      </div> 
      {/* end left side div */}

      <div className="right-side">

        <h2 className="title is-2">Grocery List</h2>

        {this.displayGroceryList()}

        
      </div>
     
      </div>
    );
  }
}

export default App;
