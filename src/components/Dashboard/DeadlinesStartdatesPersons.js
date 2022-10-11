import { Box, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Moment from "moment";

const style5 = {
    bgcolor: '#ffffff',
    borderRadius: '10px',
    width: 1000,
    height: 620,
    boxShadow: 3,
}

const DeadlinesStartdatesPersons = () => {
    const dashboardStatistics = useSelector((state) => state.dashboard.dashboard);
    return (
        <Stack direction="row" spacing={8} sx={{ mt: 4 }}>
            <Box sx={style5}>
                <Box sx={{ mt: 5, ml: 5, pb: 5, fontWeight: 550, fontSize: 26 }}>
                    Deadlines
                </Box>
                {dashboardStatistics.upcomingDeadlines.map((project) => {
                    return (
                        <Stack direction='column'>
                            <Stack direction='column'>
                                <Stack direction='row' sx={{ ml: 5 }}>
                                    <WorkIcon fontSize='large' />
                                    <Stack direction='column' sx={{ pl: 3 }}>
                                        <Box sx={{ fontSize: 18, fontWeight: 600 }}>{project.title}</Box>
                                        <Box sx={{ color: 'text.disabled', pt: 1, fontSize: 14 }}>{project.description}</Box>
                                    </Stack>
                                </Stack>
                                <Box sx={{ pt: 2, pb: 1, ml: 5, mr: 4, mb: 2, borderBottom: 2, borderColor: "text.disabled", color: 'error.main', fontWeight: 'medium' }}>
                                    {Moment(project.startDeadline).format('LL')}
                                </Box>

                            </Stack>
                        </Stack>
                    )
                })}
            </Box>
            <Box sx={style5}>
                <Box sx={{ mt: 5, ml: 5, pb: 5, fontWeight: 550, fontSize: 26 }}>
                    Start dates
                </Box>
                {dashboardStatistics.upcomingStartDates.map((project) => {
                    return (
                        <Stack direction='column'>
                            <Stack direction='column'>
                                <Stack direction='row' sx={{ ml: 5 }}>
                                    <WorkIcon fontSize='large' sx={{ mt: 0.2 }} />
                                    <Stack direction='column' sx={{ pl: 3 }}>
                                        <Box sx={{ fontSize: 18, fontWeight: 600 }}>{project.title}</Box>
                                        <Box sx={{ color: 'text.disabled', pt: 1, fontSize: 14 }}>{project.description}</Box>
                                    </Stack>
                                </Stack>
                                <Box sx={{ pt: 2, pb: 1, ml: 5, mr: 5, mb: 2, borderBottom: 2, borderColor: "text.disabled", color: 'error.main', fontWeight: 600 }}>
                                    {Moment(project.startDate).format('LL')}
                                </Box>

                            </Stack>
                        </Stack>
                    )
                })}
            </Box>
            <Box sx={style5}>
                <Box sx={{ mt: 5, ml: 5, pb: 5, fontWeight: 550, fontSize: 26 }}>
                    Available persons
                </Box>
                {dashboardStatistics.availablePersons.map((person) => {
                    return (
                        <Stack direction='column'>
                            <Stack direction='row' sx={{ ml: 5, borderBottom: 2, borderColor: "text.disabled", mb: 3, mr: 5 }}>
                                <AccountCircleIcon fontSize='large' sx={{ mt: 0.5 }} />
                                <Stack direction='column' sx={{ pl: 3, mb: 1 }}>
                                    <Box sx={{ fontSize: 18, fontWeight: 600 }}>{person.firstName + " " + person.lastName}</Box>
                                    <Box sx={{ color: 'text.disabled', fontSize: 14, pb: 1, color: 'error.main', fontWeight: 600 }}>{person.position}</Box>
                                </Stack>
                            </Stack>
                        </Stack>

                    )
                })}
            </Box>
        </Stack>
    );
}

export default DeadlinesStartdatesPersons;