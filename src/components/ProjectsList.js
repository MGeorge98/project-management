import { Box, Stack, Typography, IconButton } from '@mui/material'
import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedProject } from '../slices/projectsSlice';

const style2 = {
    bgcolor: '#ffffff',
    borderRadius: '10px',
    width: 334,
    height: 280,
    boxShadow: 3,
}

const ProjectsList = () => {
    const projectData = useSelector((state) => state.projects.value)

    return (
        <Stack
            sx={{ pt: 2 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            {projectData.map((project) => {
                return (
                    <Box sx={style2} >
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
                                {project.startDate}
                            </Box>
                            <Box sx={{ mt: 2, fontWeight: 'bold', fontFamily: 'Arial', color: 'error.main' }}>
                                {project.deadline}
                            </Box>
                        </Stack>
                    </Box>
                )
            })}
        </Stack>
    );
}

export default ProjectsList;