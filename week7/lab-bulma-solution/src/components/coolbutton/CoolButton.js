import React from 'react';



function CoolButton(props){

    return(
        <button 
        className = {
            `button ${props.isSmall && 'is-small'}
            ${props.isDanger && 'is-danger'}
            ${props.isSuccess && 'is-success'}`
        }
        >{props.children}
        </button>
    )


}

export default CoolButton;