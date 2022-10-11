import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { useSelector } from 'react-redux';


const style4 = {
  bgcolor: '#ffffff',
  borderRadius: '20px',
  width: 300,
  height: 120,
  borderBottom: 5,
}

const ProjectStatistics = () => {
  
  const dashboardStatistics = useSelector((state) => state.dashboard.dashboard);
  return (
    <Stack direction='row' spacing={8}>
      <Box sx={style4} >
        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ mt: 3 }}>
          <Box>
            < AccountTreeIcon fontSize='large' />
          </Box>
          <Stack direction='row' spacing={1}>
            <Box sx={{ fontWeight: "bold" }}>
              {dashboardStatistics.projectsInProgress}
            </Box>
            <Box>
              projects in progress
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box sx={style4} >
        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ mt: 3 }}>
          <Box>
            < AccountTreeIcon fontSize='large' />
          </Box>
          <Stack direction='row' spacing={1}>
            <Box sx={{ fontWeight: "bold" }}>
            {dashboardStatistics.projectsPending}
            </Box>
            <Box>
              projects pending
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box sx={style4} >
        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ mt: 3 }}>
          <Box>
            < AccountTreeIcon fontSize='large' />
          </Box>
          <Stack direction='row' spacing={1}>
            <Box sx={{ fontWeight: "bold" }}>
            {dashboardStatistics.projectsDone}
            </Box>
            <Box>
              projects done
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box sx={style4} >
        <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ mt: 3 }}>
          <Box>
            < PeopleAltIcon fontSize='large' />
          </Box>
          <Stack direction='row' spacing={1}>
            <Box sx={{ fontWeight: "bold" }}>
            {dashboardStatistics.availablePersons.length}
            </Box>
            <Box>
              available persons
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>

  );
}

export default ProjectStatistics;