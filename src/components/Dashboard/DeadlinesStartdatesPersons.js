import { Box, Stack } from '@mui/material';
import React from 'react'

const style5 = {
    bgcolor: '#ffffff',
    borderRadius: '10px',
    width: 1000,
    height: 620,
    boxShadow: 3,
}

const DeadlinesStartdatesPersons = () => {
    return (
        <Stack direction="row" spacing={8} sx={{ mt: 4 }}>
            <Box sx={style5}>
                <Box sx={{ mt: 5, ml: 5, fontWeight: 500, fontSize: 24 }}>
                    Deadlines
                </Box>
            </Box>
            <Box sx={style5}>
                <Box sx={{ mt: 5, ml: 5, fontWeight: 500, fontSize: 24 }}>
                    Start dates
                </Box>
            </Box>
            <Box sx={style5}>
                <Box sx={{ mt: 5, ml: 5, fontWeight: 500, fontSize: 24 }}>
                    Available persons
                </Box>
            </Box>
        </Stack>
    );
}

export default DeadlinesStartdatesPersons;