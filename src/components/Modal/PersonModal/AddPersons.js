import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { createPerson } from "../../../slices/personsSlice";

const AddPersons = () => {
    const dispatch = useDispatch();
    const personData = useSelector((state) => state.persons.value)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    return (
        <div>
            <Stack spacing={6} justifyContent="center" alignItems='center'>
                <Typography variant="h6" fontWeight={600}>ADD PERSON</Typography>
                <TextField label='First Name' variant="outlined" size="small" style={{ width: 400 }} onChange={(e) => { setFirstName(e.target.value) }}></TextField>
                <TextField label='Last Name' variant="outlined" size="small" style={{ width: 400 }} onChange={(e) => { setLastName(e.target.value) }}></TextField>
                <TextField label='Position' variant="outlined" size="small" style={{ width: 400 }} onChange={(e) => { setPosition(e.target.value) }}></TextField>
                <Button variant="contained" onClick={() => {
                    dispatch(createPerson({ id: personData[personData.length-1].id + 1, firstName: firstName, lastName: lastName, position: position}
                    ))
                }}
                >
                    SAVE
                </Button>
            </Stack>
        </div>
    );
}

export default AddPersons;