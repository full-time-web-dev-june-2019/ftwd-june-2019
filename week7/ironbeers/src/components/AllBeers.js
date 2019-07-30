import React from 'react'
import SingleBeer from './SingleBeer';


export default function AllBeers(props){
    const list = props.listOBeers;

    const showBeers = () =>{
        return list.map((eachBeer, i)=>{
            return <SingleBeer key={i} beer = {eachBeer} />
        })
    }


    if(props.ready)
    return(
        <div>
        {showBeers()}
        </div>
    ) 
    else
    return(<h1>Loading ...</h1>)
}


