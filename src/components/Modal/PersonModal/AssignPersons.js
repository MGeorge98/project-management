import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box, IconButton, Stack, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { selectedProject } from '../../../slices/projectsSlice';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import { assignOrUnassignPerson } from '../../../slices/personsSlice';

const AssignPersons = () => {
    const dashboardStatistics = useSelector((state) => state.dashboard.dashboard);
    const personsOnProject = useSelector((state) => state.persons.assignedPersons);
    const projectSelected = useSelector(selectedProject);
    const projectId = projectSelected.id;
    const dispatch = useDispatch();
    const handleAssignOrUnassignPerson = (personId, projectId) => {
        dispatch(assignOrUnassignPerson({personId, projectId}))
        dispatch(getAssignedPersons(projectId))
        dispatch(getStatistics())
        console.log(personId, projectId)
    }

    return (
        <Box sx={{mt: 2}}>
            <Stack>
                <Typography variant="h6" fontWeight={600}>ASSIGNED PERSONS</Typography>
                {
                    personsOnProject.map((person) => {
                        return (
                            <Stack direction='column' sx={{}}>
                                <Stack direction='row' sx={{ ml: 5, mb: 1, mr: 5, mt: 3 }}>
                                    <AccountCircleIcon fontSize='large' sx={{ mt: 0.5 }} />
                                    <Stack direction='column' sx={{ pl: 3, mb: 1, minWidth: 200 }}>
                                        <Box sx={{ fontSize: 18, fontWeight: 600 }}>{person.firstName + " " + person.lastName}</Box>
                                        <Box sx={{ color: 'text.disabled', fontSize: 14, pb: 1, color: 'error.main', fontWeight: 600 }}>{person.position}</Box>
                                    </Stack>
                                    <IconButton sx={{ ml: 15, mb: 2 }}>
                                        <PersonRemoveAlt1Icon fontSize='large' sx={{ color: 'black' }} onClick={()=> handleAssignOrUnassignPerson(person.id, projectSelected.id) } />
                                    </IconButton>
                                </Stack>
                            </Stack>

                        )
                    })

                }

                <Typography variant="h6" fontWeight={600}>AVAILABLE PERSONS</Typography>
                {
                    dashboardStatistics.availablePersons.map((person) => {
                        return (
                            <Stack direction='column' sx={{}}>
                                <Stack direction='row' sx={{ ml: 5, mb: 1, mr: 5, mt: 3 }}>
                                    <AccountCircleIcon fontSize='large' sx={{ mt: 0.5 }} />
                                    <Stack direction='column' sx={{ pl: 3, mb: 1, minWidth: 200 }}>
                                        <Box sx={{ fontSize: 18, fontWeight: 600 }}>{person.firstName + " " + person.lastName}</Box>
                                        <Box sx={{ color: 'text.disabled', fontSize: 14, pb: 1, color: 'error.main', fontWeight: 600 }}>{person.position}</Box>
                                    </Stack>
                                    <IconButton sx={{ ml: 15, mb: 2 }}>
                                        <PersonAddAlt1Icon fontSize='large' sx={{ color: 'black' }} onClick={()=> handleAssignOrUnassignPerson(person.id, projectId) }/>
                                    </IconButton>
                                </Stack>
                            </Stack>

                        )
                    })
                }
            </Stack>
        </Box>
    )
}

export default AssignPersons