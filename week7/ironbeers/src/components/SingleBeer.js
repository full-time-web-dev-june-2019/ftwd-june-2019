import React from 'react';
import {Link} from 'react-router-dom';


function SingleBeer(props){
    return(
        <div style={{border: '1px solid black', height: '300px', borderRadius: '4px', width: '30%', float: 'left', margin: '10px', padding: '10px'}}>
            This is single beer component
            <h2>{props.beer.name}</h2>
            <h6>{props.beer.tagline}</h6>
            <p>{props.beer.description}</p>
            <Link to ={"/details/"+props.beer._id}> See Details </Link>
        </div>
    )
}



export default SingleBeer;