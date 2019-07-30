import React from 'react'
import SingleBeer from './SingleBeer';

function RandomBeer(props){

    // props.ready
    // props.listOBeers which is all the beers
    // were gonna pick a random one our of ^ there
    // and pass that info into a singleBeer component


    if(props.ready){

        const randomNum = Math.floor(Math.random()*props.listOBeers.length);
        const randoBeer = props.listOBeers[randomNum];

        return(
         <div>
           <SingleBeer beer={randoBeer} />
         </div>
    )
}
    else
    return(<h1>Loading ...</h1>)


}

export default RandomBeer;