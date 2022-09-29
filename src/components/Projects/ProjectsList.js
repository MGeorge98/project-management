import { Box, Stack, Typography, IconButton } from '@mui/material'
import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedProject } from '../../slices/projectsSlice';
import ModalPopup from '../Modal/ModalPopup';
import { setModalState } from '../../slices/uiSlice';

const style2 = {
    bgcolor: '#ffffff',
    borderRadius: '10px',
    width: 334,
    height: 280,
    boxShadow: 3,
}

const ProjectsList = () => {
    
    const dispatch = useDispatch();
    
    const projectData = useSelector((state) => state.projects.project)
    const modalState = useSelector((state) => state.ui)
    const projectSelected = useSelector((state) => state.projects.selectedProject)

    const handleOpen = (mode) => {
        if (mode === "EDIT") {
            dispatch(setModalState({
                open: true,
                mode: "EDIT",
                type: "PROJECT"
            }))
        }
    };

    const handleSelectProject = (project) => {
        handleOpen("EDIT")
        dispatch(setSelectedProject(project))
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
                return (
                    <Box sx={style2}
                        onClick={() => handleSelectProject(project)}
                    >
                        <Stack sx={{ m: 2 }} spacing={2}>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant='h6' fontFamily="Arial">{project.title}</Typography>
                                <IconButton color='secondary'>
                                    <PeopleIcon fontSize='large' />
                                </IconButton>
                            </Stack>
                            <Box sx={{ fontWeight: 'medium', fontFamily: 'Arial', height: 100 }}>
                                {project.description}
                            </Box>
                            <Box sx={{ mt: 2, fontWeight: 'bold', fontFamily: 'Arial', color: 'text.disabled' }}>
                                {"Start: " +project.startDate}
                            </Box>
                            <Box sx={{ mt: 2, fontWeight: 'bold', fontFamily: 'Arial', color: 'error.main' }}>
                                {"Deadline: " + project.deadline}
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