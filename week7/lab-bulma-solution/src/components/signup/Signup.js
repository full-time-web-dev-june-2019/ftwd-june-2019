import React from 'react';

import Navbar from '../navbar/Navbar.js'
import FormField from '../formfield/FormField.js';
import CoolButton from '../coolbutton/CoolButton.js';


function Signup(props){

return(
    <div>

    <Navbar />

    <form>
    <FormField theLabel = "Name" theType="text" thePlaceHolder="e.g Alex Smith" />
    <FormField theLabel = "Email" theType = "email" thePlaceHolder = "e.g Coolboy55@hotmail.com" />
    <FormField theLabel = "Password" theType="password" thePlaceHolder="please enter a password" />

    <CoolButton isSmall isSuccess >Submit</CoolButton>


    </form>



    </div>
)

}

export default Signup;