import React, { useState } from 'react'
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./ProfileForm.scss"
import Avatar from '@mui/material/Avatar';
import CreateIcon from '@mui/icons-material/Create';
import { useSelector } from "react-redux"
import { selectUser } from "../../app/slices/AuthSlice"
import UserService from '../../services/UserServices';
import { endpoints } from '../../api';
const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const ProfileForm = ({ openModal, loadOpenDialog, loadata }) => {
    const loggedUser = useSelector(selectUser)
    const [open, setOpen] = React.useState(true);
    const [user, setUser] = useState({
        name: {
            first: "",
            last: "",
        },
        email: "",
        mobile: "",
        avatar: ""

    })
    const [image, setImage] = useState({
        avatar: ""
    })
    const [strImage, setStrImage] = useState({ avatar: "" })
    React.useEffect(() => {
        setUser({ ...loggedUser })
    }, [loggedUser])
    React.useEffect(() => {
        if (openModal)
            setOpen(openModal)
    }, [openModal])

    const handleClose = () => {
        setOpen(false);
        loadOpenDialog(false)
    };
    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, name: { ...name, [name]: value } })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleImageChange = (e) => {
        console.log("file", e.target)
        const { name, files } = e.target;
        if (files && files[0]) setImage({ ...image, [name]: files[0] })
    }
    React.useEffect(() => {
        if (image?.avatar) {
            const fr = new FileReader();
            fr.addEventListener("load", () => {
                setStrImage({ ...strImage, avatar: fr.result })
            })
            if (image?.avatar)
                fr.readAsDataURL(image?.avatar)
        }
    }, [image])
    const handleSubmit = (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("name.first", user?.name?.first)
        fd.append("name.last", user?.name?.last)
        fd.append("email", user?.mobile)
        fd.append("mobile", user?.mobile)
        fd.append("avatar", image.avatar)
        UserService.updateUser(loggedUser._id, fd)
            .then((res) => {
                alert(res.data.message || "user updated")
                loadata(loggedUser?._id)
            })

            .catch((err) => {
                alert("user not updated")
            })

    }
    return (<>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box component="form" onSubmit={handleSubmit} sx={{ ...style, borderRadius: 10 }} className="profile-outer-div">
                <Grid container spacing={2} className="heading">
                    <Grid item>
                        <h1>Profile Update</h1>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <CloseIcon size="large" onClick={() => setOpen(false)} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "flex-end" }}>
                    <Grid item xs={12} sm={4} >
                        <div className='img-div'>
                            <Avatar className='avatar' src={strImage?.avatar ? strImage.avatar : "/broken-image.jpg" || loggedUser?.avatar ? `${endpoints.serverBaseUrl}/${loggedUser?.avatar}` : "/broken-image.jpg"} sx={{ height: "80px", width: "100px" }} />
                            <IconButton className='icon' >
                                <label htmlFor='avatar'>

                                    <CreateIcon size="medium" />
                                </label>
                                <input type="file" accept='.jpg,.png,.webp,.svg'
                                    name="avatar"
                                    id="avatar"
                                    onChange={handleImageChange}
                                    style={{ display: "none" }} />
                                {/* </CreateIcon> */}
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={2} className='inputfield'>
                            <Grid item xs={10}>
                                <label>First Name</label>
                                <br />
                                <input
                                    name="first"
                                    value={user?.name?.first}
                                    onChange={handleNameChange}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <label>Last Name</label>
                                <br />
                                <input name="last"
                                    value={user?.name?.last}
                                    onChange={handleNameChange}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <label>Email Address</label>
                                <br />
                                <input name="email"
                                    value={user?.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <label>Mobile Number</label>
                                <br />
                                <input name="mobile"
                                    value={user?.mobile}
                                    onChange={handleChange}
                                />
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item sx={{ margin: 5 }}>
                        <Button variant='contained' onClick={() => setOpen(false)} color="primary">Cancel</Button>
                        <Button variant='contained' type="submit" color="primary">Save</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>

    </>);
}

export default ProfileForm;