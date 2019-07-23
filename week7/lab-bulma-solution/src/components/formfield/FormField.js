import React from 'react'
import './formfield.css';
function FormField(props){

return(
    <div className="form-field">

    <div className="field">
        <label className="label">{props.theLabel}</label>
        <div className="control">
            <input className="input"
             type={props.theType}
              placeholder={props.thePlaceHolder} />

            
        </div>
    </div>
</div>
  
)



}


export default FormField;