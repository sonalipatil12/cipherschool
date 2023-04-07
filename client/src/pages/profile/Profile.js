import React from 'react'
import Box from "@mui/material/Box"
import "./profile.scss"
import background from "../../assets/profile.png"
const Profile = () => {
    return (
        <Box sx={{ marginTop: "66px" }}>
            <div className='profile-div' style={{ backgroundImage: `url(${background})` }}>

                123

            </div>
        </Box>
    );

}

export default Profile;