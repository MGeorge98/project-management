import { Button, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { useState } from "react";
import { createProject } from "../../../slices/projectsSlice";
import { useDispatch, useSelector } from 'react-redux'
import { setModalState } from "../../../slices/uiSlice";
import Moment from "moment"

const AddProjectForm = () => {
    const dispatch = useDispatch();
    const projectData = useSelector((state) => state.projects.project)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [selectedStartDate, setSelectedStartDate] = useState("")
    const [selectedDeadline, setSelectedDeadline] = useState("")
    const [selectedEndDate, setSelectedEndDate] = useState("")

    const handleCreateProject = () => {
        // console.log("title", title)
        // console.log("description", description)
        // console.log("selectedStartDate", Moment(selectedStartDate).format('l'))
        // console.log("selectedDeadline", selectedDeadline)
        // console.log("selectedEndDate", selectedEndDate)
        if(projectData.length === 0) {
            dispatch(createProject({ id: 1, title: title, description: description, startDate: Moment(selectedStartDate).format('L'), deadline: Moment(selectedDeadline).format('L'), endDate: Moment(selectedEndDate).format('L')}
                ))
        } else {
            dispatch(createProject({ id: projectData[projectData.length - 1].id + 1, title: title, description: description, startDate: Moment(selectedStartDate).format('L'), deadline: Moment(selectedDeadline).format('L'), endDate: Moment(selectedEndDate).format('L') }
                ))
        }
        dispatch(setModalState({ open: false }))
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