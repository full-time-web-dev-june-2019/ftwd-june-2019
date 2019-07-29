import React from 'react';
import {Link, NavLink} from 'react-router-dom';



function Navbar(props){

    const doTheLogout = () =>{
        props.pleaseLogOut()
        .then(()=>{
            props.getUser();
        })

    }

    return(



        <nav>
            {props.theUser && 
        <Link to="/projects" style={{ textDecoration: 'none', margin: '10px' }}>Projects</Link>
            }


        {!props.theUser && 
        <span>
        <button onClick = {()=> props.toggleForm('login')} > Login </button>
        <button onClick = {()=> props.toggleForm('signup')}>Sign Up</button>
        </span>
        }

        {props.theUser && 
        <span>

        <button onClick = {doTheLogout} >Log Out </button>

            <span>Hello, {props.theUser.username}</span>
        </span>
        }

    



        </nav>
    )








}

export default Navbar;