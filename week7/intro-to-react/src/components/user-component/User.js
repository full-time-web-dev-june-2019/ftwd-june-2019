import React from 'react';
import './user.css';

function User(props)  {

 
  return (
    <div className="user-comp">

        <h1> This Is User Component</h1>
        <h3> Hello {props.theUser.username}</h3>

   
    </div>
  );
  
}

export default User;
