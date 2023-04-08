import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box"
import "./profile.scss"
import background from "../../assets/profile.png"
import ProfileForm from "./ProfileForm"
import About from "./About";
import Ontheweb from "./OntheWeb";
import Information from "./Information";
import { Container } from "@mui/material";
import Password from "./Passworld";
import Interests from "./Interests";
import Avatar from '@mui/material/Avatar';
import CreateIcon from '@mui/icons-material/Create';
import Grid from "@mui/material/Grid"
import { IconButton } from '@mui/material';
import { useSelector, useDispatch } from "react-redux"
import { selectUser, addUser } from "../../app/slices/AuthSlice"
import { endpoints } from '../../api'
import UserService from '../../services/UserServices'
import Button from "@mui/material/Button"

const Profile = () => {
    const dispatch = useDispatch()
    const loggedUser = useSelector(selectUser)
    const [openModal, setOpenModal] = useState(false)
    const [user, setUser] = useState({})
    const loadata = (id) => {
        UserService.fetchOneUser(id)
            .then((resp) => {
                dispatchEvent(addUser(resp?.data?.data))
            })
            .catch((err) => {
                console.log("err", err)
            })

    }
    useEffect(() => {
        setUser(loggedUser)
    }, [loggedUser])
    const getdata = (user) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (

        <Box sx={{ marginTop: "66px", marginLeft: "65px", height: "75vh" }}>
            <Grid container className='profile-div' style={{ backgroundImage: `url(${background})` }}>
                <Grid item className='img-div'>
                    <Avatar className='avatar' src={loggedUser?.avatar ? `${endpoints.serverBaseUrl}/${loggedUser?.avatar}` : "/broken-image.jpg"} sx={{ height: "80px", width: "100px" }} />
                    <IconButton className='icon' size='small' onClick={() => setOpenModal(true)} >


                        <CreateIcon size="medium" />


                    </IconButton>
                </Grid>

                <Grid item sx={{ ml: 2 }}>
                    <h3>Hello,</h3>
                    <h3>{`${loggedUser?.name?.first} ${loggedUser?.name?.last}`}</h3>
                    <h3>{loggedUser?.email}</h3>
                </Grid>

            </Grid>
            {
                openModal && <ProfileForm loadata={loadata} />
            }
            <div style={{ backgroundColor: "#f2f5fa" }}>
                <form onSubmit={handleSubmit}>
                    <About getdata={getdata} />
                    <Ontheweb getdata={getdata} />
                    <Information getdata={getdata} />
                    <Password getdata={getdata} />
                    <Interests getdata={getdata} />
                    <Button variant='contained' color="primary" type="submit" value="submit">Submit</Button>
                </form>
            </div>

        </Box>


    );

}

export default Profile;