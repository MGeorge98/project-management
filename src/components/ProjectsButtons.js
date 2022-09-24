import { Box, Button, Stack, Modal } from '@mui/material'
import React from 'react'
import AddProjectForm from '../components/AddProjectForm'
import { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#ffffff',
    borderRadius: '10px',
    p: 4,
};

const ProjectsButtons = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box component="span"
            display="flex"
            justifyContent="space-between">
            <Stack spacing={1} direction='row'>
                <Button variant='contained' size='medium' sx={{ width: 140, height: 45 }}>IN PROGRESS</Button>
                <Button variant='contained' size='medium' sx={{ width: 140 }}>PENDING</Button>
                <Button variant='contained' size='medium' sx={{ width: 140 }}>DONE</Button>
            </Stack>
            <Button variant='contained' size='medium' sx={{ width: 140, height: 45 }} onClick={handleOpen}>ADD ENTITY</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddProjectForm />
                </Box>
            </Modal>
        </Box>
    );
}

export default ProjectsButtons;