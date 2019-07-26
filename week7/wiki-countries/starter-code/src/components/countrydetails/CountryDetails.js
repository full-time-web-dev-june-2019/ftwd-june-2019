import React, { Component } from 'react';

import '../../App.css';



import {Link} from 'react-router-dom';

class CountryDetails extends Component{
 

    fetchCountry = (theCode) =>{
        console.log(theCode)
        let theCountry = this.props.allCountries.find((eachC)=>{
            return eachC.cca3 === theCode
        });
         return theCountry;
    }


    render(){
       const theCountry = this.fetchCountry(this.props.match.params.code);
       const theCapital = theCountry.capital[0]
       console.log(theCountry)
       const showBorders = () =>{

        const transformedBorders = theCountry.borders.map(this.fetchCountry);
        console.log("=-=-=-==-=-=-=-=-==-=-=", transformedBorders);
           return theCountry.borders.map((eachBorder, i)=>{

            return (<li key={i}>
                        <Link to ={"/countryDetails/"+eachBorder}  >  {transformedBorders[i].flag} {transformedBorders[i].name.common}   </Link>
                    </li>
            )
            

           })
       }

       


        return(
            <div>

            <h1>{theCountry.name.official}</h1>
            <h4>Capital: {theCapital}</h4>
            <h6>Area: {theCountry.area} km<sup>2</sup></h6>

            <ul>
                {showBorders()}
            </ul>


            </div>
        )
    }



}


export default CountryDetails