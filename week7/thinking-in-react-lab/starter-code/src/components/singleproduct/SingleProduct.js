import React from 'react';
import './singleproduct.css';

function SingleProduct(props){

    const buildClasses = () =>{
        let theClass = "";
        if(!props.theProduct.stocked){
            theClass += " is-red";
        }
        if(props.theProduct.isHeading){
            theClass+=' heading'
        }

        return theClass;
    }

    return(


        <div className="single-product">

            <span className={buildClasses()}>
            
            {props.theProduct.name}</span>

            <span>{props.theProduct.price}</span>
        </div>
    )


}


export default SingleProduct;

