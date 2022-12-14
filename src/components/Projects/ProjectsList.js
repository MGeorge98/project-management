import { Box, Stack, Typography, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import PeopleIcon from '@mui/icons-material/People';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProjects, setSelectedProject } from '../../slices/projectsSlice';
import ModalPopup from '../Modal/ModalPopup';
import { setModalState } from '../../slices/uiSlice';
import Moment from "moment"
import { getAssignedPersons } from '../../slices/personsSlice';


const style2 = {
    bgcolor: '#ffffff',
    borderRadius: '10px',
    width: 334,
    height: 280,
    boxShadow: 3,
}



const ProjectsList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProjects())
    });

    const statusSelected = useSelector((state) => state.ui.selectedStatus)
    const projectData = useSelector((state) => state.projects.projects)
    const modalState = useSelector((state) => state.ui)

    const handleOpen = (mode) => {
        if (mode === "EDIT") {
            dispatch(setModalState({
                open: true,
                mode: "EDIT",
                type: "PROJECT"
            }))
        } else {
            dispatch(setModalState({
                open: true,
                mode: "CREATE",
                type: "PROJECT",
                
            }))
        }
    };

    const handleSelectProject = (project) => {
        handleOpen("EDIT")
        dispatch(setSelectedProject(project))
    }

    const handleAssignPerson = (project, e) => {
        e.stopPropagation()
        dispatch(setSelectedProject(project))
        dispatch(getAssignedPersons(project.id))
        dispatch(setModalState({
            open: true,
            mode: "ASSIGN_PERSON",
        }))
        
    }

    return (
        <Stack
            sx={{ pt: 2 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            {projectData.map((project, key) => {
                if (statusSelected === project.status)
                    return (
                        <Box sx={style2}
                            onClick={() => handleSelectProject(project)}
                        >
                            <Stack sx={{ m: 2 }} spacing={2}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant='h6' fontFamily="Arial">{project.title}</Typography>
                                    <IconButton color='secondary' >
                                        <PeopleIcon fontSize='large' sx={{ zIndex: 1200 }} onClick={(e) => handleAssignPerson(project, e)} />
                                    </IconButton>
                                </Stack>
                                <Box sx={{ fontWeight: 'medium', fontFamily: 'Arial', height: 100 }}>
                                    {project.description}
                                </Box>
                                <Box sx={{ mt: 2, fontWeight: 'bold', fontFamily: 'Arial', color: 'text.disabled' }}>
                                    {"Start: " + Moment(project.startDate).format('L')}
                                </Box>
                                <Box sx={{ mt: 2, fontWeight: 'bold', fontFamily: 'Arial', color: 'error.main' }}>
                                    {"Deadline: " + Moment(project.deadline).format('L')}
                                </Box>
                            </Stack>
                        </Box>
                    )
                if ((statusSelected === "ALL") && (project.status !== "DONE"))
                return (
                    <Box sx={style2}
                            onClick={() => handleSelectProject(project)}
                        >
                            <Stack sx={{ m: 2 }} spacing={2}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant='h6' fontFamily="Arial">{project.title}</Typography>
                                    <IconButton color='secondary' onClick={() => handleAssignPerson("ASSIGN_PERSON")}>
                                        <PeopleIcon fontSize='large' />
                                    </IconButton>
                                </Stack>
                                <Box sx={{ fontWeight: 'medium', fontFamily: 'Arial', height: 100 }}>
                                    {project.description}
                                </Box>
                                <Box sx={{ mt: 2, fontWeight: 'bold', fontFamily: 'Arial', color: 'text.disabled' }}>
                                    {"Start: " + Moment(project.startDate).format('L')}
                                </Box>
                                <Box sx={{ mt: 2, fontWeight: 'bold', fontFamily: 'Arial', color: 'error.main' }}>
                                    {"Deadline: " + Moment(project.deadline).format('L')}
                                </Box>
                            </Stack>
                        </Box>
                )
            })}
            {modalState.modalProps.open === true && <ModalPopup />}
        </Stack>
    );
}

export default ProjectsList;