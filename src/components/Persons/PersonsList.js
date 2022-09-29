import React, { useState } from 'react'
import { Box, Stack, IconButton } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useSelector, useDispatch } from 'react-redux'
import { setModalState } from '../../slices/uiSlice';
import { setSelectedPerson } from '../../slices/personsSlice';
import ModalPopup from '../Modal/ModalPopup';

const style3 = {
    bgcolor: '#ffffff',
    borderRadius: '10px',
    width: 334,
    height: 100,
    boxShadow: 3,
}

const PersonsList = () => {
    
    const dispatch = useDispatch();

    const personsData = useSelector((state) => state.persons.person)
    const modalState = useSelector((state) => state.ui)
    const personSelected = useSelector((state) => state.persons.selectedPerson)

    const handleOpen = (mode) => {
        if (mode === "EDIT") {
            dispatch(setModalState({
                open: true,
                mode: "EDIT",
                type: "PERSON"
            }))
        }
    }

    const handleSelectPerson = (person) => {
        handleOpen("EDIT")
        dispatch(setSelectedPerson(person))
    }

    return (
        <Stack
            sx={{ pt: 2 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            {personsData.map((person, key) => {
                return (
                    <Box sx={style3}
                        onClick={() => handleSelectPerson(person)}
                    >
                        <Stack
                            sx={{ mt: 3, ml: 1 }}
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={3}
                        >
                            <IconButton color='secondary'


                            >
                                <AccountCircleIcon fontSize='large' />
                            </IconButton>

                            <Stack>
                                <Box>
                                    {person.firstName + " " + person.lastName}
                                </Box>
                                <Box sx={{ color: 'error.main' }}>
                                    {person.position}
                                </Box>
                            </Stack>
                        </Stack>

                    </Box>
                )
            })}

            {modalState.modalProps.open === true && <ModalPopup />}
        </Stack>
    );
}

export default PersonsList;