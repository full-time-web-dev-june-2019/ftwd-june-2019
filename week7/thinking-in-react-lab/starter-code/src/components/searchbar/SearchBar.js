import React from 'react';
import './searchbar.css';



function SearchBar(props){

    return(

        <div>
        <input className="search"
        onChange={props.whatToDoWhenITypeALetter} />

        <div>
        <label>Show Only In Stock Products</label>
        <input className="stocked-check" type="checkbox" 
        onChange = {props.whatToDoWhenITypeALetter}  />
        </div>

        </div>
    )







}

export default SearchBar