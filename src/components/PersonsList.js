import React, { useState } from 'react'
import { Box, Stack, IconButton, Modal, Typography, Button, TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useSelector, useDispatch } from 'react-redux'


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

const style3 = {
    bgcolor: '#ffffff',
    borderRadius: '10px',
    width: 334,
    height: 100,
    boxShadow: 3,
}

const PersonsList = () => {
    const personsData = useSelector((state) => state.persons.person)
    // const dispatch = useDispatch();

    // const [modalState, setModalState] = React.useState({
    //     open: false,
    //     mode: "CREATE"
    // })

    // const handleOpen = (mode) => {
    //     if (mode === "CREATE") {
    //         setModalState({
    //             open: true,
    //             mode: "CREATE"
    //         })
    //     } else {
    //         setModalState({
    //             open: true,
    //             mode: "EDIT"
    //         })
    //     }
    // };

    // const handleClose = (mode) => {
    //     if (mode === "CREATE") {
    //         setModalState({
    //             open: false,
    //             mode: "CREATE"
    //         })
    //     } else {
    //         setModalState({
    //             open: false,
    //             mode: "EDIT"
    //         })
    //     }
    // };

    // const handleSelectPerson = (person) => {
    //     handleOpen("CREATE")
    //     dispatch(setSelectedPerson(person))
    // }

    return (
        <Stack
            sx={{ pt: 2 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            {personsData.map((person) => {
                return (
                    <Box sx={style3} 
                    // onClick={() => handleSelectPerson(person)}
                    >
                        <Stack
                            sx={{ mt: 3, ml: 1 }}
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={3}
                        >
                            <IconButton color='secondary' 
                            // onClick={() => handleOpen("CREATE")}
                            >
                                <AccountCircleIcon fontSize='large' />
                            </IconButton>

                            <Stack>
                                <Box>
                                    {person.firstName + " " + person.lastName}
                                </Box>
                                <Box sx={{ color: 'error.main' }}>
                                    {person.position} + {person.id}
                                </Box>
                            </Stack>
                        </Stack>

                    </Box>
                )
            })}
            {/* <Modal
                // open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack spacing={6} justifyContent="center" alignItems='center'>
                        <Typography variant="h6" fontWeight={600}>EDIT PERSON</Typography>
                        <TextField label='First Name' variant="outlined" size="small" style={{ width: 400 }}></TextField>
                        <TextField label='Last Name' variant="outlined" size="small" style={{ width: 400 }} ></TextField>
                        <TextField label='Position' variant="outlined" size="small" style={{ width: 400 }} ></TextField>
                        <Stack direction='row'>
                            <Button variant="contained">
                                EDIT
                            </Button>
                            <Button variant="contained">
                                DELETE
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Modal> */}
        </Stack>
    );
}

export default PersonsList;