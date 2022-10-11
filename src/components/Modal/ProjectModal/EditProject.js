import { Button, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { updateProject, deleteProject, selectedProject, getAllProjects } from "../../../slices/projectsSlice";
import { setModalState } from "../../../slices/uiSlice";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const names = [
    "PENDING",
    "IN_PROGRESS",
    "DONE",
]

const AddProjectForm = () => {
    const dispatch = useDispatch();
    const projectSelected = useSelector(selectedProject)
    const [title, setTitle] = useState(projectSelected.title)
    const [description, setDescription] = useState(projectSelected.description)
    const [selectedStartDate, setSelectedStartDate] = useState(projectSelected.startDate)
    const [selectedDeadline, setSelectedDeadline] = useState(projectSelected.deadline)
    const [selectedEndDate, setSelectedEndDate] = useState(projectSelected.endDate)
    const [status, setStatus] = useState(projectSelected.status)

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const handleEditProject = () => {
        dispatch(updateProject({ id: projectSelected.id, deadline: selectedDeadline, status: status, description: description, endDate: selectedEndDate, startDate: selectedStartDate, title: title }))
        dispatch(getAllProjects())
        dispatch(setModalState({ open: false }))
    }

    const handleDeleteProject = () => {
        dispatch(deleteProject(projectSelected.id))
        dispatch(setModalState({ open: false }))
        dispatch(getAllProjects())

    }
    return (
        <div>
            <Stack spacing={6} justifyContent="center" alignItems='center'>
                <Typography variant="h6" fontWeight={600}>EDIT PROJECT</Typography>
                <TextField label='Title' variant="outlined" size="small" style={{ width: 400 }} defaultValue={projectSelected.title} onChange={(e) => { setTitle(e.target.value) }}></TextField>
                <TextField label='Description' variant="outlined" size="small" style={{ width: 400 }} defaultValue={projectSelected.description} onChange={(e) => { setDescription(e.target.value) }}></TextField>
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
                <FormControl sx={{ minWidth: 400, minHeight: 50 }}>
                    <InputLabel>Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={"IN_PROGRESS"}>IN_PROGRESS</MenuItem>
                        <MenuItem value={"PENDING"}>PENDING</MenuItem>
                        <MenuItem value={"DONE"}>DONE</MenuItem>
                    </Select>
                </FormControl>
                <Stack direction='row'>
                    <Button variant="contained" onClick={handleEditProject}>
                        EDIT
                    </Button>
                    <Button variant="contained" onClick={handleDeleteProject}>
                        DELETE
                    </Button>
                </Stack>
            </Stack>
        </div>
    );
}

export default AddProjectForm;