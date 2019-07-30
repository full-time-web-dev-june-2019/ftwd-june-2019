import React from 'react';

import {Link} from 'react-router-dom';

function Navbar(props){

    return(
        <div>
            <Link to = "/all">All Beers</Link>
            <Link to="/rando" >Random Beer</Link>
            <Link to = "/add-new">Add a New Beer to the Database</Link>
        </div>
    )




}






export default Navbar;