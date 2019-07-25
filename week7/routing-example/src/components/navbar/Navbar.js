// components/Navbar.js

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><NavLink activeClassName="currentLocation" exact to='/'>Home</NavLink></li>
        <li><NavLink activeClassName="currentLocation" exact to='/about'>About</NavLink></li>
      </ul>
    </nav>
  )
}

export default navbar;