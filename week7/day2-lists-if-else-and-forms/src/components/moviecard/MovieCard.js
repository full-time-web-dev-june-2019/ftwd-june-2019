import React from 'react';
import './moviecard.css';



function MovieCard(props){

    return(
        <div className={`
        card ${props.hasOscars && 'gold-card'}
        ${!props.hasOscars && 'reg-card'}
        `}>
            <h4> {props.theTitle} </h4>
            <h6>Directed By: {props.theDirector}</h6>

            <img src={props.theImage} />

            <button onClick = {props.deleteTheMovie}>
                Delete This Movie</button>
           
        </div>
    )



}


export default MovieCard;