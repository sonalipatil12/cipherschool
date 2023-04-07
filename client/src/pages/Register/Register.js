import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import RegisterModal from "./RegisterModal"
const Register = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setOpen(true)
    }, [])
    const loadOpenDialog = (openDialog) => {
        console.log("hello")
        if (!openDialog)
            navigate("/feedback")
    }
    return (<>
        <RegisterModal openModal={open} loadOpenDialog={loadOpenDialog} />
    </>);
}

export default Register;