import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { createNewPerson } from "../../../slices/personsSlice";
import { setModalState } from "../../../slices/uiSlice";

const AddPersons = () => {
    const dispatch = useDispatch();
    const personData = useSelector((state) => state.persons.person)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");

    const handleCreatePerson = () => {
        dispatch(createNewPerson({ firstName: firstName, lastName: lastName, position: position }))
        dispatch(setModalState({ open: false }))

        // console.log("First name", firstName)
        // console.log("Last name", lastName)
        // console.log("Position", position)
    }
    return (
        <div>
            <Stack spacing={6} justifyContent="center" alignItems='center'>
                <Typography variant="h6" fontWeight={600}>ADD PERSON</Typography>
                <TextField label='First Name' variant="outlined" size="small" style={{ width: 400 }} onChange={(e) => { setFirstName(e.target.value) }}></TextField>
                <TextField label='Last Name' variant="outlined" size="small" style={{ width: 400 }} onChange={(e) => { setLastName(e.target.value) }}></TextField>
                <TextField label='Position' variant="outlined" size="small" style={{ width: 400 }} onChange={(e) => { setPosition(e.target.value) }}></TextField>
                <Button variant="contained"
                    onClick={handleCreatePerson}
                >
                    SAVE
                </Button>
            </Stack>
        </div>
    );
}

export default AddPersons;