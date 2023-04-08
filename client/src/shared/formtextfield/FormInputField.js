import React from 'react'
import { TextField } from '@mui/material';
import "./input.scss"
const style = {
    backgrounColor: "white",
    outline: "none",

}
const FormInputField = ({ type, label, name, handleChange }) => {
    return (<div className='inputfield'>
        <label>{name}</label>
        <input name={name} onChange={handleChange} />
    </div>);
}

export default FormInputField;