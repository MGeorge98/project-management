import { Button, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { updateProject, deleteProject } from "../../../slices/projectsSlice";
import Moment from "moment"
import { setModalState } from "../../../slices/uiSlice";

const AddProjectForm = () => {
    const dispatch = useDispatch();

    const projectSelected = useSelector((state) => state.projects.selectedProject)
    const projectData = useSelector((state) => state.projects.project)

    const [title, setTitle] = useState(projectSelected.title)
    const [description, setDescription] = useState(projectSelected.description)
    const [selectedStartDate, setSelectedStartDate] = useState(projectSelected.startDate)
    const [selectedDeadline, setSelectedDeadline] = useState(projectSelected.deadline)
    const [selectedEndDate, setSelectedEndDate] = useState(projectSelected.endDate)

    const handleEditProject = () => {
        dispatch(updateProject({id: projectSelected.id, title: title, description: description, startDate: Moment(selectedStartDate).format('L'), deadline: Moment(selectedDeadline).format('L'), endDate: Moment(selectedEndDate).format('L')}))
        dispatch(setModalState({ open: false }))
    }

    const handleDeleteProject = () => {
        dispatch(deleteProject({id: projectSelected.id}))
        dispatch(setModalState({ open: false }))
    }

    return (
        <div>
            <Stack spacing={6} justifyContent="center" alignItems='center'>
                <Typography variant="h6" fontWeight={600}>EDIT PROJECT</Typography>
                <TextField label='Title' variant="outlined" size="small" style={{ width: 400 }} defaultValue={projectSelected.title} onChange={(e) => { setTitle(e.target.value) }}></TextField>
                <TextField label='Description' variant="outlined" size="small" style={{ width: 400 }} defaultValue={projectSelected.description}  onChange={(e) => { setDescription(e.target.value) }}></TextField>
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