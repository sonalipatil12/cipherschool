import React, { useCallback, useEffect, useState } from 'react'
import LoginModal from './LoginModal';
import { useNavigate } from "react-router-dom"
const Login = () => {
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
    return (

        <LoginModal openModal={open} loadOpenDialog={loadOpenDialog} />
    );
}

export default Login;