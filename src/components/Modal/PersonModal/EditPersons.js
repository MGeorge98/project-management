import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePerson, updatePerson } from "../../../slices/personsSlice";
import { setModalState } from "../../../slices/uiSlice";

const EditPersons = () => {
    const personSelected = useSelector((state) => state.persons.selectedPerson)
    const personData = useSelector((state) => state.persons.person)
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(personSelected.firstName);
    const [lastName, setLastName] = useState(personSelected.lastName);
    const [position, setPosition] = useState(personSelected.position);

    const handleEditPerson = () => {
        dispatch(updatePerson({id: personSelected.id, firstName: firstName, lastName: lastName, position: position}))
        dispatch(setModalState({ open: false }))
    }

    const handleDeletePerson = () => {
        dispatch(deletePerson({id: personSelected.id}))
        dispatch(setModalState({ open: false }))
    }


    return ( 
        <Stack spacing={6} justifyContent="center" alignItems='center'>
                <Typography variant="h6" fontWeight={600}>EDIT PERSON</Typography>
                <TextField label='First Name' variant="outlined" size="small" style={{ width: 400 }} defaultValue={personSelected.firstName} onChange={(e) => { setFirstName(e.target.value) }}></TextField>
                <TextField label='Last Name' variant="outlined" size="small" style={{ width: 400 }} defaultValue={personSelected.lastName} onChange={(e) => { setLastName(e.target.value) }}></TextField>
                <TextField label='Position' variant="outlined" size="small" style={{ width: 400 }} defaultValue={personSelected.position} onChange={(e) => { setPosition(e.target.value) }}></TextField>
                <Stack direction='row'>
                <Button variant="contained" onClick={handleEditPerson}>
                    EDIT
                </Button>
                <Button variant="contained" onClick={handleDeletePerson}>
                    DELETE
                </Button>
                </Stack>
            </Stack>
     );
}
 
export default EditPersons;