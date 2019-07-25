import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/productlist/ProductList.js';
import SearchBar from './components/searchbar/SearchBar.js';

import allTheProducts from './data.json';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        allProducts: allTheProducts.data,
        allTheCategories: [],
        visibleCategories: [],
        visibleProducts: allTheProducts.data,
        showOnlyStocked: false,
        searchTerm: '',
    }
}

componentWillMount(){
  this.getCategories();
}

getCategories() {
  let categories = [];
  this.state.allProducts.forEach((eachP)=>{
      if(!categories.includes(eachP.category)){
          categories.push(eachP.category);
      }
  })
  this.setState({allTheCategories: categories, visibleCategories: categories})
}



  filterProducts = (e) => {
    let theSearchTerm;
    let showStocked;

    if(e.target.type === "checkbox"){
      showStocked = e.target.checked;
      theSearchTerm = this.state.searchTerm;
    }else{
      showStocked = this.state.showOnlyStocked
      theSearchTerm = e.target.value;
    }


    let filteredProducts = this.state.allProducts.filter((eachP)=>{
      let result =  eachP.name.toUpperCase().includes(theSearchTerm.toUpperCase());
      let stocked = eachP.stocked;
      
      return showStocked? (result && stocked): result;
    })

    let filteredCategories = this.state.allTheCategories.filter((eachC)=>{
      let found = false;
      filteredProducts.forEach((eachP)=>{
        if(eachP.category === eachC)
        found = true;
      })
      return found;
    })

    this.setState({visibleProducts: filteredProducts,
       visibleCategories: filteredCategories,
       searchTerm: theSearchTerm,
       showOnlyStocked: showStocked
      });
  }


 

  
  render() {
    
    return (
      <div>

      <SearchBar 
      whatToDoWhenITypeALetter = {this.filterProducts} />

      <ProductList 
      allProducts = {this.state.visibleProducts }
      allTheCategories = {this.state.visibleCategories} />
     
        
      </div>
    );
  }
}

export default App;
