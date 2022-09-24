import { Button, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { useState } from "react";
import { createProject } from "../slices/projectsSlice";
import { useDispatch } from 'react-redux'

const AddProjectForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [selectedStartDate, setSelectedStartDate] = useState("")
    const [selectedDeadline, setSelectedDeadline] = useState("")
    const [selectedEndDate, setSelectedEndDate] = useState("")

    const handleCreateProject = () => {
        console.log("title", title)
        console.log("description", description)
        console.log("selectedStartDate", selectedStartDate)
        console.log("selectedDeadline", selectedDeadline)
        console.log("selectedEndDate", selectedEndDate)

        dispatch(createProject({ id: 0, title: title, description: description, startDate: selectedStartDate, deadline: selectedDeadline, endDate: selectedEndDate }
        ))
    }

    return (
        <div>
            <Stack spacing={6} justifyContent="center" alignItems='center'>
                <Typography variant="h6" fontWeight={600}>ADD PROJECT</Typography>
                <TextField label='Title' variant="outlined" size="small" style={{ width: 400 }} onChange={(e) => { setTitle(e.target.value) }}></TextField>
                <TextField label='Description' variant="outlined" size="small" style={{ width: 400 }} onChange={(e) => { setDescription(e.target.value) }}></TextField>
                <DatePicker
                    label='Start date'
                    renderInput={(params) => <TextField size="small" style={{ width: 400 }} {...params} />}
                    value={selectedStartDate}
                    onChange={(newValue) => {
                        setSelectedStartDate(newValue)
                    }}
                />
                <DatePicker
                    label='Deadline'
                    renderInput={(params) => <TextField size="small" style={{ width: 400 }} {...params} />}
                    value={selectedDeadline}
                    onChange={(newValue) => {
                        setSelectedDeadline(newValue)
                    }}
                />
                <DatePicker
                    label='End date'
                    renderInput={(params) => <TextField size="small" style={{ width: 400 }} {...params} />}
                    value={selectedEndDate}
                    onChange={(newValue) => {
                        setSelectedEndDate(newValue)
                    }}
                />
                <Button variant="contained"
                    onClick={handleCreateProject}
                >SAVE</Button>
            </Stack>
        </div>
    );
}

export default AddProjectForm;