import { Box, Stack } from '@mui/material';
import React from 'react'
import { ProjectsData } from './ProjectsData'

const style4 = {
  bgcolor: '#ffffff',
  borderRadius: '20px',
  width: 300,
  height: 120,
  borderBottom: 5,
}

const ProjectStatistics = () => {
  return (
    <Stack direction='row' spacing={8}>
      {ProjectsData.map((value, key) => {
        return (
          <Box sx={style4} >
            <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ mt: 3 }}>
              <Box>
                {value.icon}
              </Box>
              <Stack direction='row' spacing={1}>
                <Box sx={{ fontWeight: "bold" }}>
                  {value.number}
                </Box>
                <Box>
                  {value.title}
                </Box>
              </Stack>
            </Stack>
          </Box>


        )
      })}
    </Stack>
  );
}

export default ProjectStatistics;