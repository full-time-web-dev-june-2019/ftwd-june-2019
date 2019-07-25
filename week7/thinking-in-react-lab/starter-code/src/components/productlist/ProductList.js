
import React from 'react'
import allTheProducts from '../../data.json';
import SingleProduct from '../singleproduct/SingleProduct.js';
import { get } from 'https';


class ProductList extends React.Component{


    showTheProducts = () =>{
        let clone = [...this.props.allProducts];
        
        this.props.allTheCategories.forEach((eachC)=>{
            clone.unshift({
                name: eachC,
                category: eachC,
                stocked: true,
                isHeading: true,
            })
        })


        return this.props.allTheCategories.map((eachCat)=>{

          return clone.filter((eachProd)=>{

            return eachProd.category === eachCat}).map((eachThing, i)=>{

            return (<SingleProduct key={i} theProduct = {eachThing} />)

          })


        })
        
      
    }



    render(){
        console.log(this.props)
        return(
            <div>

                <div className="single-product">
                    <b>Name</b>
                    <b>Price</b>
                </div>

            {this.showTheProducts()}


            </div>
        )



    }



}


export default ProductList;

