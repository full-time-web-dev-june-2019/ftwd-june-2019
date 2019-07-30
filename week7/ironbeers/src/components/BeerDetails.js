import React from 'react';


function BeerDetails(props){

    if(props.ready){

        const theActualBeer = props.listOBeers.find((eachB)=>{
            return eachB._id === props.match.params.id
        })

        // let theActualBeer;

        // props.listOBeers.forEach((x)=>{
        //     if(x._id === props.match.params.id){
        //         theActualBeer = x;
        //     }
        // })
        // ^ this is the equivalent if oyu dont know the .find method

    return(

        <div>



            <h1>{theActualBeer.name}</h1>

            <h3>{theActualBeer.tagline}</h3>

            <h6>{theActualBeer.drescription}</h6>

            <p>Attentuation-level: {theActualBeer.attenuation_level}</p>

            <p>Brewer's tips: {theActualBeer.brewers_tips}</p>

            <p>Contributed By: {theActualBeer.contributed_by}</p>

        </div>



        )
    } else{
        return(<h1>Loading...</h1>)
    }






}

export default BeerDetails;