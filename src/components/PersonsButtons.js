import React from 'react'
import { Box, Button, Stack } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { setModalState } from '../slices/uiSlice';
import PersonModal from './Modal/PersonModal/PersonModal';



const PersonsButtons = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.ui)
    const handleOpen = () => {
            dispatch(setModalState({open: true}))
    };
    
    return (
        <Box component="span"
            display="flex"
            justifyContent="space-between">
        
            <Stack
                spacing={1}
                direction='row'
            >
                <Button
                    variant='contained'
                    size='medium'
                    sx={{ width: 140, height: 45 }}
                >
                    AVAILABLE
                </Button>
                <Button
                    variant='contained'
                    size='medium'
                    sx={{ width: 140 }}
                >
                    ON PROJECT
                </Button>
            </Stack>
            <Button
                variant='contained'
                size='medium'
                sx={{ width: 140, height: 45 }}
                onClick={handleOpen()}
            >
                ADD ENTITY
            </Button>

            {modalState.modalProps.open === true && <PersonModal/>}
            
        </Box>
    );
}

export default PersonsButtons;