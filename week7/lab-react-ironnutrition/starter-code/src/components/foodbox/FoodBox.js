import React from 'react';


class FoodBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      quantity: 1,
    }
  }

  updateQty = (e) =>{
    this.setState({quantity: e.target.value})
  }
  
  render(){
    return(

<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.nameOfFood}</strong> <br />
          <small>{this.props.calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value= {this.state.quantity}
            onChange = {this.updateQty}
          />
        </div>
        <div className="control">
          <button className="button is-info"
           onClick={()=>{
              this.props.addToTheList(this.props.nameOfFood, this.props.calories, this.state.quantity)
             }}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>

    )

  }



}


export default FoodBox;