import { Box, Button, Stack, Modal } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setModalState } from '../../slices/uiSlice';
import ModalPopup from '../Modal/ModalPopup';


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
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.ui)
    const handleOpen = (mode) => {
        if (mode === "CREATE") {
            dispatch(setModalState({
                open: true,
                mode: "CREATE",
                type: "PROJECT"
            }))
        }
    }
    return (
        <Box component="span"
            display="flex"
            justifyContent="space-between">
            <Stack spacing={1} direction='row'>
                <Button
                    variant='contained'
                    size='medium'
                    sx={{ width: 140, height: 45 }}
                >
                    IN PROGRESS
                </Button>
                <Button
                    variant='contained'
                    size='medium'
                    sx={{ width: 140 }}
                >
                    PENDING
                </Button>
                <Button
                    variant='contained'
                    size='medium'
                    sx={{ width: 140 }}
                >
                    DONE
                </Button>
            </Stack>
            <Button
                variant='contained'
                size='medium'
                sx={{ width: 140, height: 45 }}
                onClick={() => handleOpen("CREATE")}
            >
                ADD ENTITY
            </Button>
            {modalState.modalProps.open === true && <ModalPopup />}
        </Box>
    );
}

export default ProjectsButtons;