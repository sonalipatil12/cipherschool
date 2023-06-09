import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import LoginForm from './LoginForm';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};



const LoginModal = ({ openModal, loadOpenDialog }) => {

    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        if (openModal)
            setOpen(openModal)
    }, [openModal])

    const handleClose = () => {
        setOpen(false);
        loadOpenDialog(false)
    };


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 800, borderRadius: 10 }}>
                    <LoginForm />
                </Box>
            </Modal>
        </div>
    );
}
export default LoginModal;